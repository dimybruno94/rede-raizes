import test from 'node:test';
import assert from 'node:assert/strict';
import { PRODUCTS, addItem, changeQuantity, subtotal, serviceFee, total, sanitizeStorage, dataExport, createOrderRecord, FORBIDDEN_STORAGE_KEYS } from '../src/core.js';

test('carrinho adiciona e incrementa o mesmo produto', () => {
  let cart = addItem([], PRODUCTS[0]);
  cart = addItem(cart, PRODUCTS[0]);
  assert.equal(cart.length, 1);
  assert.equal(cart[0].qty, 2);
  assert.equal(subtotal(cart), PRODUCTS[0].price * 2);
});

test('quantidade zero remove item do carrinho', () => {
  const cart = changeQuantity([{ id:'p1', name:'x', price:10, emoji:'x', qty:1 }], 'p1', -1);
  assert.deepEqual(cart, []);
});

test('totem não cobra taxa de serviço e web cobra', () => {
  const cart = [{ id:'p1', name:'x', price:10, emoji:'x', qty:2 }];
  assert.equal(serviceFee('totem'), 0);
  assert.equal(serviceFee('web'), 2.5);
  assert.equal(total(cart, 'totem'), 20);
  assert.equal(total(cart, 'web'), 22.5);
});

test('sanitização remove chaves de dados sensíveis', () => {
  const map = new Map(FORBIDDEN_STORAGE_KEYS.map(k => [k,'secret']));
  map.set('rr_cart_v2','[]');
  const storage = { removeItem: key => map.delete(key) };
  sanitizeStorage(storage);
  for (const key of FORBIDDEN_STORAGE_KEYS) assert.equal(map.has(key), false);
  assert.equal(map.has('rr_cart_v2'), true);
});

test('exportação LGPD não inclui senha nem cartão', () => {
  const exported = dataExport({
    profile: { name:'Maria', email:'maria@example.com', phone:'84999999999', password:'segredo', cardNumber:'4111' },
    consent: { essential:true }, preferences:{marketing:false}, selectedUnit:{id:'u1',name:'Natal'}, points:42, orders:[]
  });
  const json = JSON.stringify(exported);
  assert.equal(json.includes('segredo'), false);
  assert.equal(json.includes('4111'), false);
  assert.equal(exported.profile.email, 'maria@example.com');
});

test('pedido criado preserva itens e começa como Confirmado', () => {
  const cart = [addItem([], PRODUCTS[1])[0]];
  const order = createOrderRecord({cart, channel:'web', unit:{name:'Centro - Natal/RN'}, paymentMethod:'pix', customerName:'João'});
  assert.match(order.id, /^RR-/);
  assert.equal(order.statusIndex, 0);
  assert.equal(order.paymentMethod, 'pix');
  assert.equal(order.items.length, 1);
  assert.equal(order.total, PRODUCTS[1].price + 2.5);
});
