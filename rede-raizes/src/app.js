import { PRODUCTS, UNITS, ORDER_STATUSES, STORAGE, FORBIDDEN_STORAGE_KEYS, addItem, changeQuantity, subtotal as coreSubtotal, serviceFee as coreServiceFee, total as coreTotal, sanitizeStorage as coreSanitizeStorage, dataExport, createOrderRecord } from './core.js';

const safeParse = (value, fallback) => {
  try { return value ? JSON.parse(value) : fallback; } catch { return fallback; }
};
const get = (key, fallback) => safeParse(localStorage.getItem(key), fallback);
const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
const formatCurrency = value => value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
const escapeHtml = value => String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[c]));

const state = {
  route: location.hash.replace('#/', '') || (get(STORAGE.profile, null) ? 'home' : 'login'),
  authTab: 'login',
  filter: 'Todos',
  search: '',
  channel: new URLSearchParams(location.search).get('channel') === 'totem' ? 'totem' : 'web',
  profile: get(STORAGE.profile, null),
  consent: get(STORAGE.consent, null),
  cart: get(STORAGE.cart, []),
  orders: get(STORAGE.orders, []),
  preferences: get(STORAGE.preferences, { marketing: false }),
  selectedUnit: get(STORAGE.unit, UNITS[0]),
  points: Number(get(STORAGE.points, 120)),
  paymentMethod: 'pix',
  checkoutConsent: false,
  trackingTimer: null,
};

function sanitizeStorage() {
  // Defesa adicional: credenciais e pagamento nunca devem persistir no navegador.
  coreSanitizeStorage(localStorage);
}
sanitizeStorage();

function persist() {
  if (state.profile) set(STORAGE.profile, state.profile); else localStorage.removeItem(STORAGE.profile);
  if (state.consent) set(STORAGE.consent, state.consent); else localStorage.removeItem(STORAGE.consent);
  set(STORAGE.cart, state.cart);
  set(STORAGE.orders, state.orders);
  set(STORAGE.preferences, state.preferences);
  set(STORAGE.unit, state.selectedUnit);
  set(STORAGE.points, state.points);
  sanitizeStorage();
}

function toast(message) {
  const region = document.querySelector('#toast-region');
  if (!region) return;
  const item = document.createElement('div');
  item.className = 'toast';
  item.textContent = message;
  region.appendChild(item);
  setTimeout(() => item.remove(), 3200);
}

function go(route) {
  state.route = route;
  location.hash = `#/${route}`;
  window.scrollTo({ top: 0, behavior: 'instant' });
  render();
}

window.addEventListener('hashchange', () => {
  const route = location.hash.replace('#/', '');
  if (route && route !== state.route) { state.route = route; render(); }
});

function cartCount() { return state.cart.reduce((sum, item) => sum + item.qty, 0); }
function cartSubtotal() { return coreSubtotal(state.cart); }
function serviceFee() { return coreServiceFee(state.channel); }
function cartTotal() { return coreTotal(state.cart, state.channel); }

function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  state.cart = addItem(state.cart, product);
  persist();
  toast(`${product.name} foi inserido no pedido.`);
  renderHeaderBadges();
}
function changeQty(id, delta) {
  if (!state.cart.some(i => i.id === id)) return;
  state.cart = changeQuantity(state.cart, id, delta);
  persist();
  render();
}
function clearCart() { state.cart = []; persist(); render(); }

function switchChannel(channel) {
  state.channel = channel;
  document.body.classList.toggle('totem-mode', channel === 'totem');
  const url = new URL(location.href);
  if (channel === 'totem') url.searchParams.set('channel', 'totem'); else url.searchParams.delete('channel');
  history.replaceState({}, '', url);
  if (channel === 'totem') {
    state.route = 'totem-start';
    location.hash = '#/totem-start';
  } else {
    state.route = state.profile ? 'home' : 'login';
    location.hash = `#/${state.route}`;
  }
  render();
}

function renderHeaderBadges() {
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = cartCount());
}

function shell(content, current = '') {
  const nav = state.channel === 'totem'
    ? `
      <button data-nav="menu" ${current==='menu'?'aria-current="page"':''}>Cardápio</button>
      <button data-nav="cart" ${current==='cart'?'aria-current="page"':''}>Carrinho <span class="cart-badge" data-cart-count>${cartCount()}</span></button>
      <button data-action="end-totem">Encerrar</button>`
    : `
      <button data-nav="home" ${current==='home'?'aria-current="page"':''}>Início</button>
      <button data-nav="menu" ${current==='menu'?'aria-current="page"':''}>Cardápio</button>
      <button data-nav="cart" ${current==='cart'?'aria-current="page"':''}>Carrinho <span class="cart-badge" data-cart-count>${cartCount()}</span></button>
      <button data-nav="profile" ${current==='profile'?'aria-current="page"':''}>Privacidade</button>`;
  return `
    ${state.channel==='totem' ? '<div class="totem-banner">MODO TOTEM — autoatendimento da unidade</div>' : ''}
    <header class="topbar">
      <div class="container topbar-inner">
        <div class="brand" aria-label="Rede Raízes do Nordeste"><span class="brand-mark">🌵</span><span>Rede Raízes do Nordeste</span></div>
        <nav class="nav" aria-label="Navegação principal">${nav}</nav>
      </div>
    </header>
    <main id="main">${content}</main>
    <footer class="footer"><div class="container row between"><span>Protótipo Acadêmico • Sistema Web</span><button class="btn btn-ghost" data-action="toggle-channel">${state.channel==='totem'?'Voltar ao Web':'Abrir modo Totem'}</button></div></footer>`;
}

function authView() {
  const isRegister = state.authTab === 'register';
  return `
  <main id="main" class="auth-shell">
    <section class="auth-brand">
      <div>
        <div class="eyebrow" style="color:#d8f5df">Projeto Multidisciplinar • MVP</div>
        <h1>Raízes do Nordeste</h1>
        <p>Uma experiência omnichannel para pedido, pagamento simulado, fidelização e privacidade.</p>
      </div>
      <div class="stack">
        <div class="notice success">✓ Este protótipo não armazena senha, número de cartão, CVV ou CPF.</div>
        <button class="btn btn-secondary btn-lg" data-action="open-totem">🖥️ Demonstrar modo Totem</button>
      </div>
    </section>
    <section class="auth-panel">
      <div class="auth-card">
        <div class="auth-tabs" role="tablist" aria-label="Acesso">
          <button class="${!isRegister?'active':''}" data-auth-tab="login" role="tab" aria-selected="${!isRegister}">Entrar</button>
          <button class="${isRegister?'active':''}" data-auth-tab="register" role="tab" aria-selected="${isRegister}">Criar conta</button>
        </div>
        ${isRegister ? registerForm() : loginForm()}
      </div>
    </section>
  </main>`;
}

function loginForm() {
  return `<form id="login-form" class="stack" novalidate>
    <div><div class="eyebrow">Acesso de demonstração</div><h2>Entrar</h2><p class="muted">Use qualquer e-mail válido. A senha é validada apenas em memória para a demonstração.</p></div>
    <div class="field"><label for="login-email">E-mail</label><input class="input" id="login-email" name="email" type="email" autocomplete="email" value="teste@email.com" required /></div>
    <div class="field"><label for="login-password">Senha</label><input class="input" id="login-password" name="password" type="password" autocomplete="current-password" value="senha123" required /></div>
    <label class="checkbox"><input id="login-lgpd" name="lgpd" type="checkbox" required /><span>Li e aceito a <button type="button" class="btn-ghost" style="border:0;padding:0;min-height:0" data-action="show-policy">Política de Privacidade</button> e o tratamento necessário para esta demonstração.</span></label>
    <div id="login-error" class="form-error" role="alert"></div>
    <button class="btn btn-primary btn-lg btn-block" type="submit">Entrar na plataforma</button>
  </form>`;
}

function registerForm() {
  return `<form id="register-form" class="stack" novalidate>
    <div><div class="eyebrow">Cadastro demonstrativo</div><h2>Criar conta</h2></div>
    <div class="field"><label for="reg-name">Nome completo</label><input class="input" id="reg-name" name="name" autocomplete="name" required /></div>
    <div class="field"><label for="reg-email">E-mail</label><input class="input" id="reg-email" name="email" type="email" autocomplete="email" required /></div>
    <div class="field"><label for="reg-phone">Telefone</label><input class="input" id="reg-phone" name="phone" inputmode="tel" autocomplete="tel" placeholder="(84) 99999-9999" /></div>
    <div class="field"><label for="reg-password">Senha</label><input class="input" id="reg-password" name="password" type="password" minlength="6" autocomplete="new-password" required /></div>
    <label class="checkbox"><input id="reg-lgpd" name="lgpd" type="checkbox" required /><span>Li e aceito os Termos e a Política de Privacidade. <strong>Obrigatório.</strong></span></label>
    <label class="checkbox"><input id="reg-marketing" name="marketing" type="checkbox" /><span>Quero receber promoções e campanhas. <strong>Opcional e desmarcado por padrão.</strong></span></label>
    <div id="register-error" class="form-error" role="alert"></div>
    <button class="btn btn-primary btn-lg btn-block" type="submit">Criar conta</button>
  </form>`;
}

function homeView() {
  const name = state.profile?.name || 'Cliente';
  return shell(`
    <section class="hero"><div class="container hero-grid">
      <div><div class="eyebrow">Olá, ${escapeHtml(name)}</div><h1>Seu pedido nordestino, do seu jeito.</h1><p>Escolha a unidade, explore o cardápio e acompanhe o pedido em uma jornada consistente entre web, mobile e totem.</p><div class="row"><button class="btn btn-primary btn-lg" data-nav="menu">Ver cardápio</button><button class="btn btn-secondary btn-lg" data-action="toggle-channel">Testar modo Totem</button></div></div>
      <aside class="hero-card"><div class="eyebrow" style="color:#d8f5df">Fidelização</div><h2 style="margin:6px 0">${state.points} pontos</h2><p>Ganhe 1 ponto a cada R$ 1,00 em pedidos concluídos neste MVP.</p><div class="metric"><div><span>Unidade</span><strong>${escapeHtml(state.selectedUnit.name.split(' - ')[0])}</strong></div><div><span>Preparo</span><strong>${state.selectedUnit.eta}</strong></div></div></aside>
    </div></section>
    <section class="section"><div class="container"><div class="section-head"><div class="eyebrow">Unidade</div><h2>Onde você quer pedir?</h2></div><div class="grid grid-3">${UNITS.map(u => `<button class="card card-pad btn-secondary" style="text-align:left" data-unit="${u.id}"><strong>${escapeHtml(u.name)}</strong><br><span class="muted">Estimativa ${u.eta}</span>${state.selectedUnit.id===u.id?'<div class="small" style="color:var(--success);margin-top:8px">✓ Selecionada</div>':''}</button>`).join('')}</div></div></section>
    <section class="section"><div class="container"><div class="section-head"><div class="eyebrow">Destaques</div><h2>Mais pedidos</h2></div><div class="grid grid-3">${PRODUCTS.slice(0,3).map(productCard).join('')}</div></div></section>
  `, 'home');
}

function productCard(p) {
  return `<article class="card product-card" data-product="${p.id}">
    <div class="product-visual" aria-hidden="true">${p.emoji}</div>
    <div class="product-body"><div><div class="small muted">${p.category}</div><h3>${escapeHtml(p.name)}</h3></div><p class="small muted" style="margin:0">${escapeHtml(p.desc)}</p>${p.allergen?`<span class="allergen">⚠ ${escapeHtml(p.allergen)}</span>`:''}<div class="row between"><span class="price">${formatCurrency(p.price)}</span><button class="btn btn-primary" data-add="${p.id}">Adicionar</button></div></div>
  </article>`;
}

function menuView() {
  const categories = ['Todos','Lanches','Bebidas','Sobremesas'];
  const normalized = state.search.trim().toLowerCase();
  const filtered = PRODUCTS.filter(p => (state.filter==='Todos'||p.category===state.filter) && (!normalized || `${p.name} ${p.desc}`.toLowerCase().includes(normalized)));
  return shell(`
    <section class="section"><div class="container stack">
      <div class="section-head"><div class="eyebrow">${state.channel==='totem'?'Autoatendimento':'Cardápio da unidade'}</div><h2>${escapeHtml(state.selectedUnit.name)}</h2><p class="muted">Preços e disponibilidade simulados para fins acadêmicos.</p></div>
      <div class="card card-pad row"><div class="field grow"><label for="menu-search">Buscar produto</label><input class="input" id="menu-search" type="search" value="${escapeHtml(state.search)}" placeholder="Ex.: tapioca, cajá..." /></div></div>
      <div class="filters" aria-label="Categorias">${categories.map(c=>`<button class="filter-chip ${state.filter===c?'active':''}" data-filter="${c}">${c}</button>`).join('')}</div>
      <div class="grid grid-3" id="product-grid">${filtered.map(productCard).join('') || '<div class="card empty"><span class="emoji">🔎</span><h3>Nenhum produto encontrado</h3></div>'}</div>
    </div></section>
  `, 'menu');
}

function cartView() {
  if (!state.cart.length) return shell(`<section class="section"><div class="container"><div class="card empty"><span class="emoji">🛒</span><h2>Seu carrinho está vazio</h2><p class="muted">Escolha um item do cardápio para continuar.</p><button class="btn btn-primary" data-nav="menu">Ir ao cardápio</button></div></div></section>`, 'cart');
  return shell(`<section class="section"><div class="container"><div class="section-head"><div class="eyebrow">Pedido</div><h2>Revise seu carrinho</h2></div><div class="grid" style="grid-template-columns:minmax(0,1.5fr) minmax(280px,.7fr)"><div class="cart-list">${state.cart.map(i=>`<article class="card cart-item"><div class="cart-emoji">${i.emoji}</div><div><strong>${escapeHtml(i.name)}</strong><div class="small muted">${formatCurrency(i.price)} cada</div></div><div class="stack" style="justify-items:end"><div class="qty" aria-label="Quantidade de ${escapeHtml(i.name)}"><button aria-label="Diminuir" data-qty="${i.id}" data-delta="-1">−</button><span>${i.qty}</span><button aria-label="Aumentar" data-qty="${i.id}" data-delta="1">+</button></div><strong>${formatCurrency(i.price*i.qty)}</strong></div></article>`).join('')}<button class="btn btn-secondary" data-action="clear-cart">Esvaziar carrinho</button></div><aside class="card card-pad summary"><h3>Resumo</h3><div class="summary-line"><span>Subtotal</span><strong>${formatCurrency(cartSubtotal())}</strong></div><div class="summary-line"><span>Taxa de serviço</span><strong>${formatCurrency(serviceFee())}</strong></div><div class="summary-line summary-total"><span>Total</span><span>${formatCurrency(cartTotal())}</span></div><button class="btn btn-primary btn-lg btn-block" data-nav="checkout">Ir para checkout</button></aside></div></div></section>`, 'cart');
}

function checkoutView() {
  if (!state.cart.length) { go('cart'); return ''; }
  return shell(`<section class="section"><div class="container"><div class="section-head"><div class="eyebrow">Checkout</div><h2>Pagamento simulado</h2><p class="muted">Nenhum dado bancário é transmitido ou armazenado.</p></div><div class="grid grid-2"><form id="checkout-form" class="card card-pad stack" novalidate><div class="field"><label for="checkout-name">Nome para o pedido</label><input class="input" id="checkout-name" name="name" value="${escapeHtml(state.profile?.name || (state.channel==='totem'?'Cliente Totem':''))}" required /></div>${state.channel==='totem'?'<div class="notice">No totem, identificação pessoal é opcional. O pedido pode ser realizado como visitante.</div>':''}<fieldset style="border:0;padding:0;margin:0" class="stack"><legend style="font-weight:800;margin-bottom:8px">Forma de pagamento</legend><div class="payment-methods">${[['pix','PIX','⚡'],['card','Cartão','💳'],['cash','No balcão','💵']].map(([id,label,icon])=>`<label class="payment-option ${state.paymentMethod===id?'selected':''}"><span style="font-size:1.6rem">${icon}</span><span>${label}</span><input type="radio" name="payment" value="${id}" ${state.paymentMethod===id?'checked':''}/></label>`).join('')}</div></fieldset><div id="card-fields" class="stack" ${state.paymentMethod==='card'?'':'hidden'}><div class="notice warning">Dados de cartão existem somente nos campos em memória e são descartados após a simulação.</div><div class="field"><label for="card-number">Número do cartão fictício</label><input class="input" id="card-number" inputmode="numeric" autocomplete="off" placeholder="4111 1111 1111 1111" /></div><div class="grid grid-2"><div class="field"><label for="card-exp">Validade</label><input class="input" id="card-exp" autocomplete="off" placeholder="12/30" /></div><div class="field"><label for="card-cvv">CVV</label><input class="input" id="card-cvv" inputmode="numeric" autocomplete="off" placeholder="123" /></div></div></div><label class="checkbox"><input id="checkout-lgpd" type="checkbox" required ${state.checkoutConsent?'checked':''}/><span>Confirmo o uso dos dados estritamente necessário para registrar e acompanhar este pedido.</span></label><div id="checkout-error" class="form-error" role="alert"></div><button class="btn btn-primary btn-lg" type="submit">Confirmar pedido • ${formatCurrency(cartTotal())}</button></form><aside class="card card-pad"><h3>Itens</h3>${state.cart.map(i=>`<div class="summary-line"><span>${i.qty}× ${escapeHtml(i.name)}</span><strong>${formatCurrency(i.qty*i.price)}</strong></div>`).join('')}<div class="summary-line summary-total"><span>Total</span><span>${formatCurrency(cartTotal())}</span></div><div class="notice success" style="margin-top:18px">🔒 Não persistimos senha, cartão, CVV ou CPF no localStorage.</div></aside></div></div></section>`, 'cart');
}

function createOrder(customerName) {
  const order = createOrderRecord({ cart: state.cart, channel: state.channel, unit: state.selectedUnit, paymentMethod: state.paymentMethod, customerName });
  state.orders.unshift(order);
  const earned = Math.floor(cartSubtotal());
  if (state.channel === 'web') state.points += earned;
  state.cart = [];
  state.checkoutConsent = false;
  persist();
  return order;
}

function orderView() {
  const order = state.orders[0];
  if (!order) { go('home'); return ''; }
  const steps = ORDER_STATUSES.map((s, idx) => `<div class="step ${idx<order.statusIndex?'done':idx===order.statusIndex?'current':''}"><div class="step-dot">${idx<order.statusIndex?'✓':idx+1}</div><div><strong>${s}</strong><div class="small muted">${idx===0?'Pedido recebido':idx===1?'Cozinha preparando':idx===2?'Aguardando retirada':idx===3?'Pedido concluído':''}</div></div></div>`).join('');
  return shell(`<section class="section"><div class="container"><div class="section-head"><div class="eyebrow">Pedido ${escapeHtml(order.id)}</div><h2>${order.statusIndex===3?'Pedido finalizado!':'Acompanhe seu pedido'}</h2><p class="muted">Unidade: ${escapeHtml(order.unit)} • ${formatCurrency(order.total)}</p></div><div class="grid grid-2"><section class="card card-pad"><div class="steps">${steps}</div></section><aside class="card card-pad stack"><div class="notice success">Pagamento ${order.paymentMethod==='cash'?'será realizado no balcão':'simulado com sucesso'}.</div><div><strong>Canal</strong><p class="muted">${order.channel==='totem'?'Totem de autoatendimento':'Web/Mobile'}</p></div><div><strong>Tempo estimado</strong><p class="muted">${state.selectedUnit.eta}</p></div>${order.statusIndex<3?'<button class="btn btn-primary" data-action="advance-order">Simular próximo status</button>':'<button class="btn btn-primary" data-action="new-order">Fazer novo pedido</button>'}</aside></div></div></section>`, '');
}

function profileView() {
  const exportData = buildDataExport();
  return shell(`<section class="section"><div class="container"><div class="section-head"><div class="eyebrow">LGPD e transparência</div><h2>Central de privacidade</h2><p class="muted">Controles demonstráveis para acesso, portabilidade, preferências, revogação e exclusão.</p></div><div class="grid grid-2"><section class="card card-pad stack"><h3>Seus dados neste MVP</h3><pre class="data-preview" id="data-preview">${escapeHtml(JSON.stringify(exportData,null,2))}</pre><div class="privacy-actions"><button class="btn btn-primary" data-action="download-data">Baixar meus dados (JSON)</button><button class="btn btn-secondary" data-action="toggle-marketing">${state.preferences.marketing?'Revogar comunicações de marketing':'Ativar comunicações de marketing'}</button><button class="btn btn-secondary" data-action="clear-history">Limpar histórico de pedidos</button><button class="btn btn-danger" data-action="delete-account">Excluir conta e dados locais</button></div></section><aside class="card card-pad stack"><h3>Princípios aplicados</h3><div class="notice success">✓ Consentimento de marketing separado e opcional</div><div class="notice success">✓ Minimização: senha e dados de pagamento não são persistidos</div><div class="notice success">✓ Acesso e portabilidade por exportação JSON</div><div class="notice success">✓ Revogação de preferências a qualquer momento</div><div class="notice success">✓ Exclusão dos dados locais em um clique</div><button class="btn btn-ghost" data-action="show-policy">Ler Política de Privacidade resumida</button></aside></div></div></section>`, 'profile');
}

function buildDataExport() {
  return dataExport({ profile: state.profile, consent: state.consent, preferences: state.preferences, selectedUnit: state.selectedUnit, points: state.points, orders: state.orders });
}

function totemStartView() {
  return shell(`<section class="hero"><div class="container hero-grid"><div><div class="eyebrow">Autoatendimento</div><h1>Olá! Vamos fazer seu pedido?</h1><p>Fluxo de totem com alvos de toque ampliados, sem login obrigatório e com dados pessoais minimizados.</p><div class="stack" style="max-width:520px"><button class="btn btn-primary btn-lg" data-action="start-totem">Iniciar pedido</button><button class="btn btn-secondary btn-lg" data-action="toggle-channel">Sair do modo Totem</button></div></div><aside class="hero-card"><h2>Unidade atual</h2><p>${escapeHtml(state.selectedUnit.name)}</p><div class="metric"><div><span>Tempo</span><strong>${state.selectedUnit.eta}</strong></div><div><span>Canal</span><strong>Totem</strong></div></div></aside></div></section>`, '');
}

function policyDialog() {
  const existing = document.querySelector('#policy-dialog');
  if (existing) existing.remove();
  const dialog = document.createElement('dialog');
  dialog.id = 'policy-dialog';
  dialog.style.cssText = 'width:min(680px,calc(100% - 32px));border:0;border-radius:16px;padding:0;box-shadow:0 20px 70px rgba(0,0,0,.25)';
  dialog.innerHTML = `<div class="card-pad stack"><div class="row between"><h2 style="margin:0">Política de Privacidade — resumo</h2><button class="btn btn-secondary" data-close-dialog>Fechar</button></div><p>Este MVP coleta apenas dados necessários para demonstrar autenticação simulada, pedido, fidelização e preferências. Senhas e dados de cartão não são armazenados. Dados de pagamento são simulados e descartados.</p><ul><li><strong>Finalidade:</strong> demonstração acadêmica da jornada omnichannel.</li><li><strong>Base:</strong> consentimento quando aplicável e execução do fluxo solicitado.</li><li><strong>Direitos:</strong> acesso, portabilidade, correção, revogação e exclusão.</li><li><strong>Retenção:</strong> dados permanecem somente no armazenamento local do navegador até exclusão.</li></ul><div class="notice warning">Em uma implementação de produção seriam necessários backend, controle de acesso, política de retenção, auditoria, DPO/canal real e medidas de segurança adicionais.</div></div>`;
  document.body.appendChild(dialog);
  dialog.querySelector('[data-close-dialog]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => dialog.remove());
  dialog.showModal();
}

function render() {
  document.body.classList.toggle('totem-mode', state.channel === 'totem');
  const app = document.querySelector('#app');
  let html = '';
  if (state.channel === 'totem' && state.route === 'totem-start') html = totemStartView();
  else if (!state.profile && state.channel === 'web' && !['login'].includes(state.route)) { state.route = 'login'; html = authView(); }
  else {
    switch (state.route) {
      case 'login': html = authView(); break;
      case 'home': html = homeView(); break;
      case 'menu': html = menuView(); break;
      case 'cart': html = cartView(); break;
      case 'checkout': html = checkoutView(); break;
      case 'order': html = orderView(); break;
      case 'profile': html = profileView(); break;
      case 'totem-start': html = totemStartView(); break;
      default: html = state.channel==='totem' ? totemStartView() : (state.profile ? homeView() : authView());
    }
  }
  app.innerHTML = html;
  bindEvents();
  renderHeaderBadges();
}

function bindEvents() {
  document.querySelectorAll('[data-nav]').forEach(el => el.addEventListener('click', () => go(el.dataset.nav)));
  document.querySelectorAll('[data-add]').forEach(el => el.addEventListener('click', () => addToCart(el.dataset.add)));
  document.querySelectorAll('[data-qty]').forEach(el => el.addEventListener('click', () => changeQty(el.dataset.qty, Number(el.dataset.delta))));
  document.querySelectorAll('[data-filter]').forEach(el => el.addEventListener('click', () => { state.filter = el.dataset.filter; render(); }));
  document.querySelectorAll('[data-unit]').forEach(el => el.addEventListener('click', () => { state.selectedUnit = UNITS.find(u=>u.id===el.dataset.unit); persist(); toast('Unidade atualizada.'); render(); }));
  document.querySelectorAll('[data-auth-tab]').forEach(el => el.addEventListener('click', () => { state.authTab = el.dataset.authTab; render(); }));
  const search = document.querySelector('#menu-search');
  if (search) search.addEventListener('input', e => { state.search = e.target.value; const pos = e.target.selectionStart; render(); const next = document.querySelector('#menu-search'); next?.focus(); next?.setSelectionRange(pos,pos); });

  const login = document.querySelector('#login-form');
  if (login) login.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(login); const error = document.querySelector('#login-error');
    if (!data.get('email') || !String(data.get('email')).includes('@')) { error.textContent = 'Informe um e-mail válido.'; return; }
    if (!data.get('password')) { error.textContent = 'Informe a senha.'; return; }
    if (!data.get('lgpd')) { error.textContent = 'É necessário aceitar a Política de Privacidade para a demonstração.'; return; }
    state.profile = { name: 'Cliente Demonstração', email: String(data.get('email')), phone: '' };
    state.consent = { essential: true, acceptedAt: new Date().toISOString(), policyVersion: '2.0' };
    persist();
    // A senha jamais é persistida.
    e.target.reset(); go('home');
  });

  const register = document.querySelector('#register-form');
  if (register) register.addEventListener('submit', e => {
    e.preventDefault(); const data = new FormData(register); const error = document.querySelector('#register-error');
    if (!data.get('name') || !data.get('email') || !String(data.get('email')).includes('@')) { error.textContent='Preencha nome e e-mail válidos.'; return; }
    if (String(data.get('password') || '').length < 6) { error.textContent='A senha deve ter ao menos 6 caracteres.'; return; }
    if (!data.get('lgpd')) { error.textContent='O aceite da Política de Privacidade é obrigatório.'; return; }
    state.profile = { name: String(data.get('name')), email: String(data.get('email')), phone: String(data.get('phone') || '') };
    state.preferences.marketing = Boolean(data.get('marketing'));
    state.consent = { essential: true, marketing: state.preferences.marketing, acceptedAt: new Date().toISOString(), policyVersion: '2.0' };
    persist(); e.target.reset(); go('home');
  });

  const checkout = document.querySelector('#checkout-form');
  if (checkout) checkout.addEventListener('submit', e => {
    e.preventDefault(); const name = document.querySelector('#checkout-name')?.value.trim(); const consent = document.querySelector('#checkout-lgpd')?.checked; const error = document.querySelector('#checkout-error');
    if (!name) { error.textContent='Informe um nome para identificação do pedido.'; return; }
    if (!consent) { error.textContent='Confirme o tratamento necessário para registrar o pedido.'; return; }
    if (state.paymentMethod === 'card') {
      const card = document.querySelector('#card-number')?.value.replace(/\s/g,''); const cvv = document.querySelector('#card-cvv')?.value;
      if ((card && card.length < 12) || (cvv && cvv.length < 3)) { error.textContent='Use dados fictícios de cartão com formato válido para a simulação.'; return; }
    }
    createOrder(name); go('order');
  });
  document.querySelectorAll('input[name="payment"]').forEach(el => el.addEventListener('change', e => { state.paymentMethod=e.target.value; render(); }));

  document.querySelectorAll('[data-action]').forEach(el => {
    const action = el.dataset.action;
    if (['toggle-channel','open-totem'].includes(action)) el.addEventListener('click', () => switchChannel(state.channel==='totem'?'web':'totem'));
    if (action==='start-totem') el.addEventListener('click', () => { state.cart=[]; persist(); go('menu'); });
    if (action==='end-totem') el.addEventListener('click', () => { state.cart=[]; persist(); switchChannel('web'); });
    if (action==='clear-cart') el.addEventListener('click', clearCart);
    if (action==='show-policy') el.addEventListener('click', policyDialog);
    if (action==='advance-order') el.addEventListener('click', () => { const o=state.orders[0]; if(o && o.statusIndex<3){o.statusIndex++;persist();render();} });
    if (action==='new-order') el.addEventListener('click', () => go('menu'));
    if (action==='download-data') el.addEventListener('click', downloadData);
    if (action==='toggle-marketing') el.addEventListener('click', () => { state.preferences.marketing=!state.preferences.marketing; if(state.consent) state.consent.marketing=state.preferences.marketing; persist(); toast('Preferência de marketing atualizada.'); render(); });
    if (action==='clear-history') el.addEventListener('click', () => { state.orders=[]; persist(); toast('Histórico local removido.'); render(); });
    if (action==='delete-account') el.addEventListener('click', deleteAccount);
  });
}

function downloadData() {
  const blob = new Blob([JSON.stringify(buildDataExport(), null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href=url; a.download='rede-raizes-meus-dados.json'; a.click(); URL.revokeObjectURL(url); toast('Arquivo de dados gerado.');
}
function deleteAccount() {
  const ok = confirm('Excluir conta, consentimentos, carrinho, histórico e preferências deste navegador?');
  if (!ok) return;
  Object.values(STORAGE).forEach(k => localStorage.removeItem(k));
  state.profile=null; state.consent=null; state.cart=[]; state.orders=[]; state.preferences={marketing:false}; state.points=120; state.channel='web'; state.route='login';
  history.replaceState({},'',location.pathname+'#/login'); render(); toast('Dados locais excluídos.');
}

render();
