export const PRODUCTS = [
  { id: 'p1', name: 'X-Burger Sertanejo', category: 'Lanches', price: 28.9, emoji: '🍔', desc: 'Carne, queijo coalho, cebola caramelizada e molho da casa.', allergen: 'Contém glúten e lactose' },
  { id: 'p2', name: 'Baião Bowl', category: 'Lanches', price: 24.5, emoji: '🥘', desc: 'Baião de dois, carne de sol desfiada e vinagrete.', allergen: 'Pode conter lactose' },
  { id: 'p3', name: 'Tapioca de Carne de Sol', category: 'Lanches', price: 21.9, emoji: '🌮', desc: 'Tapioca crocante, carne de sol e queijo coalho.', allergen: 'Contém lactose' },
  { id: 'p4', name: 'Cuscuz Especial', category: 'Lanches', price: 18.9, emoji: '🍲', desc: 'Cuscuz, ovos mexidos, queijo coalho e manteiga da terra.', allergen: 'Contém ovos e lactose' },
  { id: 'p5', name: 'Suco de Cajá', category: 'Bebidas', price: 8.9, emoji: '🥭', desc: 'Suco natural de cajá, 400 ml.', allergen: '' },
  { id: 'p6', name: 'Cajuína', category: 'Bebidas', price: 7.5, emoji: '🧃', desc: 'Cajuína gelada, 350 ml.', allergen: '' },
  { id: 'p7', name: 'Água de Coco', category: 'Bebidas', price: 7.9, emoji: '🥥', desc: 'Água de coco integral, 400 ml.', allergen: '' },
  { id: 'p8', name: 'Cartola', category: 'Sobremesas', price: 15.9, emoji: '🍌', desc: 'Banana, queijo, açúcar e canela.', allergen: 'Contém lactose' },
  { id: 'p9', name: 'Bolo de Rolo', category: 'Sobremesas', price: 12.9, emoji: '🍰', desc: 'Fatia de bolo de rolo com goiabada.', allergen: 'Contém glúten, ovos e lactose' },
];

export const UNITS = [
  { id: 'natal-centro', name: 'Centro - Natal/RN', eta: '18–25 min' },
  { id: 'recife-boa-viagem', name: 'Boa Viagem - Recife/PE', eta: '20–30 min' },
  { id: 'fortaleza-aldeota', name: 'Aldeota - Fortaleza/CE', eta: '15–25 min' },
];

export const ORDER_STATUSES = ['Confirmado', 'Preparando', 'Pronto para retirada', 'Finalizado'];
export const FORBIDDEN_STORAGE_KEYS = ['password', 'senha', 'cardNumber', 'card_number', 'cvv', 'cpf'];

export const STORAGE = {
  profile: 'rr_profile_v2',
  consent: 'rr_consent_v2',
  cart: 'rr_cart_v2',
  orders: 'rr_orders_v2',
  preferences: 'rr_preferences_v2',
  unit: 'rr_unit_v2',
  points: 'rr_points_v2',
};

export function addItem(cart, product) {
  const next = cart.map(item => ({ ...item }));
  const found = next.find(item => item.id === product.id);
  if (found) found.qty += 1;
  else next.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
  return next;
}

export function changeQuantity(cart, id, delta) {
  return cart
    .map(item => item.id === id ? { ...item, qty: item.qty + delta } : { ...item })
    .filter(item => item.qty > 0);
}

export function subtotal(cart) {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

export function serviceFee(channel) {
  return channel === 'totem' ? 0 : 2.5;
}

export function total(cart, channel) {
  return subtotal(cart) + serviceFee(channel);
}

export function sanitizeStorage(storage) {
  FORBIDDEN_STORAGE_KEYS.forEach(key => storage.removeItem(key));
}

export function dataExport({ profile, consent, preferences, selectedUnit, points, orders }) {
  return {
    exportedAt: new Date().toISOString(),
    profile: profile ? { name: profile.name, email: profile.email, phone: profile.phone || '' } : null,
    consent: consent || null,
    preferences: preferences || { marketing: false },
    selectedUnit: selectedUnit || null,
    points: Number(points || 0),
    orders: (orders || []).map(o => ({ id:o.id, createdAt:o.createdAt, total:o.total, channel:o.channel, status:ORDER_STATUSES[o.statusIndex] || ORDER_STATUSES[0] })),
  };
}

export function createOrderRecord({ cart, channel, unit, paymentMethod, customerName }) {
  const id = `RR-${Date.now().toString().slice(-6)}`;
  return {
    id,
    createdAt: new Date().toISOString(),
    customerName,
    unit: unit.name,
    items: cart.map(i => ({ ...i })),
    total: total(cart, channel),
    paymentMethod,
    statusIndex: 0,
    channel,
  };
}
