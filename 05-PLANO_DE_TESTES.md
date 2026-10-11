# PLANO DE TESTES - REDE RAÍZES DO NORDESTE

## 1. INTRODUÇÃO

Este documento descreve os testes funcionais e não-funcionais para a aplicação mobile e web da Rede Raízes do Nordeste. O plano inclui mínimo 10 cenários de teste com casos positivos e negativos.

---

## 2. ESCOPO DOS TESTES

- **Testes Funcionais:** Verificar se todas as funcionalidades funcionam conforme especificado
- **Testes de Aceitação do Usuário:** Validar fluxos críticos end-to-end
- **Testes de Segurança/LGPD:** Conformidade com privacidade
- **Testes de Responsividade:** Mobile, Tablet, Desktop

---

## 3. CASOS DE TESTE

### TC-001: Autenticação - Login Válido ✅ POSITIVO

**Objetivo:** Validar que um usuário pode realizar login com credenciais válidas

**Pré-condições:**
- Usuário tem conta cadastrada
- Aplicação carregada na página de login

**Passos:**
1. Acessar página de login
2. Preencher campo "Email" com `teste@email.com`
3. Preencher campo "Senha" com `senha123`
4. Clicar no botão "ENTRAR"

**Resultado Esperado:**
- Login realizado com sucesso
- Redirecionado para página inicial
- Nome do usuário exibido na tela
- Dados do usuário salvos em localStorage

**Evidência:**
- ✅ Página home carregada
- ✅ Saudação personalizada: "Olá, João!"
- ✅ Saldo de pontos exibido

---

### TC-002: Autenticação - Login Inválido ❌ NEGATIVO

**Objetivo:** Validar tratamento de falha de autenticação

**Pré-condições:**
- Aplicação carregada na página de login

**Passos:**
1. Acessar página de login
2. Preencher "Email" com `invalido@email.com`
3. Preencher "Senha" com `senha_errada`
4. Clicar "ENTRAR"

**Resultado Esperado:**
- Usuário permanece na página de login
- Mensagem de erro exibida: "Credenciais inválidas"
- Campo de senha limpo
- Acesso negado ao conteúdo protegido

**Evidência:**
- ✅ Permanece em login
- ✅ Mensagem de erro visível
- ✅ localStorage vazio

---

### TC-003: Cadastro com Consentimento LGPD ✅ POSITIVO

**Objetivo:** Validar cadastro de novo usuário com aceite obrigatório da LGPD

**Pré-condições:**
- Aplicação na página de login
- Checkbox "Aceitar LGPD" não marcado

**Passos:**
1. Clicar em "CADASTRE-SE"
2. Preencher "Nome": `Maria Silva`
3. Preencher "Email": `maria@email.com`
4. Preencher "Senha": `senha123`
5. ❌ Tentar clicar "CRIAR CONTA" sem aceitar LGPD
6. ✅ Marcar checkbox "Declaro que li e aceito...LGPD"
7. Clicar "CRIAR CONTA"

**Resultado Esperado:**
- ❌ Passo 5: Botão desabilitado ou erro exibido
- ✅ Passo 7: Conta criada com sucesso
- Consentimento LGPD registrado com timestamp
- Redirecionado para home
- Preferência de marketing respeitada

**Evidência:**
- ✅ Log de consentimento: `{ timestamp: "2026-08-06T17:45:00Z", email: "maria@email.com", lgpd: true }`
- ✅ Usuário autenticado

---

### TC-004: Seleção de Unidade ✅ POSITIVO

**Objetivo:** Validar seleção de unidade e persistência

**Pré-condições:**
- Usuário autenticado
- Nenhuma unidade selecionada

**Passos:**
1. Acessar aplicação (home)
2. Modal de seleção de unidade exibida
3. Clicar em "Centro - Natal"
4. Botão "Selecionar"

**Resultado Esperado:**
- Unidade "Centro - Natal" selecionada
- Modal fecha
- Localização exibida no header
- localStorage contém `selectedUnit`
- Cardápio filtrado por unidade

**Evidência:**
- ✅ Header mostra "📍 Centro - Natal"
- ✅ localStorage: `{ id: "unit-01", name: "Centro - Natal" }`

---

### TC-005: Visualização de Cardápio com Filtros ✅ POSITIVO

**Objetivo:** Validar navegação no cardápio e filtros de categoria

**Pré-condições:**
- Usuário autenticado
- Unidade selecionada

**Passos:**
1. Clicar em "Menu" ou "Cardápio Completo"
2. Página de menu carregada
3. Clicar no filtro "Lanches"
4. Verificar apenas lanches exibidos
5. Buscar "Burger"
6. Verificar resultados da busca

**Resultado Esperado:**
- ✅ Todos os 9 produtos carregados inicialmente
- ✅ Filtro "Lanches": apenas 3 lanches exibidos
- ✅ Busca "Burger": 1 resultado (X Burger Especial)
- Produtos com alergênios mostram ⚠️ Contém: Lactose, Glúten
- Pontuação e número de reviews visíveis

**Evidência:**
- ✅ Grid mostra produtos corretos
- ✅ Filtros funcionam isoladamente e em conjunto

---

### TC-006: Adição ao Carrinho e Atualização de Quantidade ✅ POSITIVO

**Objetivo:** Validar adição de itens e gerenciamento de quantidade

**Pré-condições:**
- Usuário no menu
- Carrinho vazio

**Passos:**
1. Clicar "ADICIONAR" em "X Burger Especial"
2. Badge do carrinho mostra "1"
3. Clicar "ADICIONAR" novamente (mesmo item)
4. Badge atualiza para "2"
5. Ir para carrinho
6. Verificar quantidade (deve ser 2)
7. Clicar "+" para aumentar para 3
8. Clicar "−" para diminuir para 2

**Resultado Esperado:**
- ✅ Item adicionado ao carrinho
- ✅ localStorage persistente
- ✅ Quantidade correta exibida
- ✅ Preço atualizado: R$57,80 (28,90 x 2)
- ✅ Total do carrinho recalculado

**Evidência:**
- ✅ localStorage: `[{ id: "prod-01", quantity: 2, price: 28.90 }]`
- ✅ Subtotal correto

---

### TC-007: Checkout com Aceite de Privacidade ✅ POSITIVO

**Objetivo:** Validar fluxo de checkout com consentimento LGPD obrigatório

**Pré-condições:**
- Usuário com 2 itens no carrinho
- Página de checkout

**Passos:**
1. Revisar resumo do pedido
2. ❌ Tentar clicar "CONFIRMAR" sem marcar LGPD
3. ✅ Marcar checkbox "Aceito LGPD"
4. Selecionar método de pagamento: PIX
5. Clicar "CONFIRMAR PAGAMENTO"

**Resultado Esperado:**
- ❌ Passo 2: Alerta exibido, confirmação bloqueada
- ✅ Passo 5: Processamento iniciado (ícone ⏳)
- Após 1.5s: Redirecionado para "Acompanhamento do Pedido"
- Pedido criado com status "Confirmado"
- Pontos de fidelização adicionados (+50)

**Evidência:**
- ✅ Order criado com timestamp
- ✅ localStorage currentOrderId definido
- ✅ Consentimento LGPD registrado

---

### TC-008: Acompanhamento de Pedido em Tempo Real ✅ POSITIVO

**Objetivo:** Validar visualização do status do pedido em tempo real

**Pré-condições:**
- Pedido confirmado na TC-007
- Página de acompanhamento carregada

**Passos:**
1. Visualizar página de acompanhamento
2. ✅ Ícone de sucesso exibido (✅)
3. ✅ Número do pedido exibido (#ORD-xxx)
4. Verificar status atual (ex: "Confirmado")
5. Aguardar 15 segundos
6. Status muda para próxima etapa (ex: "Fila")

**Resultado Esperado:**
- ✅ Mensagem "PEDIDO CONFIRMADO!" exibida
- ✅ Barra de progresso animada
- ✅ Status atualiza a cada 15s: Confirmado → Fila → Preparando → Pronto → Retirado
- ✅ +50 Pontos de Fidelização exibidos
- ✅ Tempo estimado: ~25 minutos

**Evidência:**
- ✅ Transição visual de status
- ✅ Animação da barra de progresso

---

### TC-009: LGPD - Remoção de Dados Pessoais ✅ POSITIVO

**Objetivo:** Validar direito ao esquecimento e acesso aos dados

**Pré-condições:**
- Usuário autenticado
- Na página de Perfil

**Passos:**
1. Clicar em "Perfil"
2. Ir para seção "🔒 Privacidade"
3. Clicar em "📋 Baixar Meus Dados"
4. Arquivo gerado com dados (simulado)
5. Clicar em "🚫 Revogar Consentimento"
6. Confirmar
7. Marcar "Não receber mais promoções"

**Resultado Esperado:**
- ✅ Dados exibidos: nome, email, histórico de pedidos
- ✅ Preferências atualizadas no localStorage
- ✅ Consentimento revogado registrado
- ✅ Usuário não recebe mais marketing emails
- ✅ Mensagem de confirmação exibida

**Evidência:**
- ✅ localStorage: `{ preferences: { marketing: false, terms: true } }`
- ✅ Log de revogação: timestamp + email

---

### TC-010: Responsividade - Mobile (375px) ✅ POSITIVO

**Objetivo:** Validar layout móvel em dispositivo pequeno

**Pré-condições:**
- Viewport: 375 x 667px (iPhone SE)
- Navegador com DevTools

**Passos:**
1. Abrir app em viewport 375x667
2. Verificar layout de login
3. Verificar inputs com altura ≥ 48px
4. Navegar para menu
5. Produtos em grid 2 colunas
6. Bottom navigation visível e funcional
7. Scroll não quebrado
8. Imagens carregam rápido

**Resultado Esperado:**
- ✅ Layout reflow sem quebras
- ✅ Botões e inputs com min-height: 48px
- ✅ Tipografia legível (14px min)
- ✅ Espaçamento adequado
- ✅ Sem scroll horizontal
- ✅ Bottom nav fixa com 60px height
- ✅ Cores WCAG AA (contraste)

**Evidência:**
- ✅ Captura de tela 375px mostra layout correto
- ✅ Ausência de quebras de layout
- ✅ Acessibilidade: contraste > 4.5:1

---

### TC-011: Responsividade - Desktop (1024px) ✅ POSITIVO

**Objetivo:** Validar layout desktop

**Pré-condições:**
- Viewport: 1024 x 768px (Desktop)

**Passos:**
1. Abrir app em 1024x768
2. Verificar header horizontal
3. Menu: grid 4 colunas
4. Carrinho em sidebar (ou modal)
5. Bottom nav **NÃO** exibida
6. Container max-width: 1024px
7. Espaçamento adequado

**Resultado Esperado:**
- ✅ Grid produtos: 4 colunas
- ✅ Bottom nav desaparece (display: none)
- ✅ Melhor aproveitamento de espaço
- ✅ Back button visível
- ✅ Sem scroll horizontal

**Evidência:**
- ✅ Captura 1024px layout correto
- ✅ Componentes proporcionais

---

### TC-012: Segurança - Dados Sensíveis Nunca Armazenados ❌ NEGATIVO

**Objetivo:** Validar que dados de cartão/CPF NUNCA são salvos

**Pré-condições:**
- Página de checkout
- DevTools console aberto

**Passos:**
1. Ir para checkout
2. Abrir DevTools → Storage → LocalStorage
3. Procurar por: cardNumber, cvv, cpf, password
4. Procurar por dados sensíveis
5. Confirmar pagamento
6. Verificar localStorage novamente

**Resultado Esperado:**
- ❌ Nenhum dado de cartão em localStorage
- ❌ Nenhum CPF armazenado
- ❌ Nenhuma senha em localStorage
- ✅ Apenas token de sessão (JWT com TTL) armazenado
- ✅ Dados sensíveis processados direto pelo gateway (simulado)
- ✅ Aviso "🔒 Dados processados com encriptação TLS 1.2+" visível

**Evidência:**
- ✅ localStorage vazio ou apenas com: `{ authToken: "...", cart: [...], preferences: {...} }`
- ❌ Ausência de `cardNumber`, `cvv`, `password`, `cpf`

---

## 4. MATRIZ DE TESTES

| TC | Descrição | Tipo | Status | Evidência |
|---|---|---|---|---|
| TC-001 | Login Válido | Funcional | ✅ PASS | Usuário autenticado |
| TC-002 | Login Inválido | Funcional | ✅ PASS | Erro exibido |
| TC-003 | Cadastro LGPD | Funcional | ✅ PASS | Consentimento registrado |
| TC-004 | Seleção Unidade | Funcional | ✅ PASS | localStorage persistido |
| TC-005 | Cardápio/Filtros | Funcional | ✅ PASS | Resultados corretos |
| TC-006 | Carrinho | Funcional | ✅ PASS | Quantidade e total OK |
| TC-007 | Checkout LGPD | Funcional | ✅ PASS | Pedido criado |
| TC-008 | Acompanhamento | Funcional | ✅ PASS | Status em tempo real |
| TC-009 | Privacidade | Funcional | ✅ PASS | Direitos LGPD OK |
| TC-010 | Mobile 375px | Responsividade | ✅ PASS | Layout OK |
| TC-011 | Desktop 1024px | Responsividade | ✅ PASS | Layout OK |
| TC-012 | Segurança Dados | Segurança | ✅ PASS | Dados sensíveis protegidos |

---

## 5. CRITÉRIOS DE COBERTURA

- **Cobertura Funcional:** 100% das funcionalidades críticas testadas
- **Fluxos Críticos:** Login → Cardápio → Carrinho → Checkout → Acompanhamento
- **Testes Negativos:** Mínimo 3 (TC-002, TC-008 passo 2, TC-012)
- **Testes LGPD:** 3 testes específicos (TC-003, TC-007, TC-009)
- **Responsividade:** Mobile + Desktop

---

## 6. RECOMENDAÇÕES

- ✅ Todos os 12 cenários passando
- ✅ Nenhum bloqueador encontrado
- ✅ Aplicação pronta para produção
- ⚠️ Recomendar testes de carga em produção
- ⚠️ Recomendar monitoramento de segurança

