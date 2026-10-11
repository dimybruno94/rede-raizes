"""Testes E2E opcionais para gerar evidências visuais.
Pré-requisitos:
  python -m pip install playwright
  python -m playwright install chromium
Executar com a aplicação em http://localhost:5173:
  python tests/e2e_playwright.py
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://127.0.0.1:5173"
EVID = Path(__file__).resolve().parents[2] / "evidencias"
EVID.mkdir(exist_ok=True)

results = []
def check(name, fn):
    try:
        fn(); results.append((name, "PASS", ""))
    except Exception as exc:
        results.append((name, "FAIL", str(exc)))
        raise

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True, executable_path="/usr/bin/chromium", args=["--no-sandbox"])
    page = browser.new_page(viewport={"width": 390, "height": 844})
    page.goto(BASE)
    page.evaluate("localStorage.clear()")
    page.reload()

    def login_flow():
        page.check('#login-lgpd')
        page.click('button[type="submit"]')
        page.wait_for_selector('text=Seu pedido nordestino')
        assert page.evaluate("localStorage.getItem('password')") is None
        page.screenshot(path=str(EVID / '01-login-home-mobile.png'), full_page=True)
    check('TC-001 Login + minimização de senha', login_flow)

    def order_flow():
        page.click('button[data-nav="menu"]')
        page.wait_for_selector('[data-product="p1"]')
        page.click('[data-add="p1"]')
        page.click('button[data-nav="cart"]')
        page.wait_for_selector('text=Revise seu carrinho')
        page.click('button[data-nav="checkout"]')
        page.check('#checkout-lgpd')
        page.click('button[type="submit"]')
        page.wait_for_selector('text=Acompanhe seu pedido')
        page.screenshot(path=str(EVID / '02-pedido-confirmado-mobile.png'), full_page=True)
    check('TC-006/007 Carrinho e checkout', order_flow)

    def privacy_flow():
        page.click('button[data-nav="profile"]')
        page.wait_for_selector('text=Central de privacidade')
        data = page.locator('#data-preview').inner_text()
        assert 'password' not in data.lower()
        page.screenshot(path=str(EVID / '03-privacidade-lgpd.png'), full_page=True)
    check('TC-009 Privacidade e acesso aos dados', privacy_flow)

    # Desktop responsivo
    page.set_viewport_size({"width": 1366, "height": 900})
    page.click('button[data-nav="menu"]')
    page.screenshot(path=str(EVID / '04-cardapio-desktop.png'), full_page=True)
    results.append(('TC-011 Desktop 1366px', 'PASS', 'Screenshot gerada'))

    # Totem em contexto limpo
    page.goto(BASE + '/?channel=totem#/totem-start')
    page.set_viewport_size({"width": 1280, "height": 800})
    page.wait_for_selector('text=MODO TOTEM')
    page.click('[data-action="start-totem"]')
    page.wait_for_selector('text=Autoatendimento')
    page.screenshot(path=str(EVID / '05-modo-totem.png'), full_page=True)
    results.append(('Canal Totem', 'PASS', 'Fluxo e screenshot gerados'))

    # Segurança de storage
    keys = page.evaluate("Object.keys(localStorage)")
    forbidden = {'password','senha','cardNumber','card_number','cvv','cpf'}
    assert not forbidden.intersection(keys)
    results.append(('TC-012 Segurança de storage', 'PASS', f'Chaves: {keys}'))
    browser.close()

report = ['# Evidências automatizadas de teste', '', 'Execução local com Chromium headless e Playwright.', '', '| Cenário | Resultado | Evidência |','|---|---|---|']
for name,status,detail in results:
    report.append(f'| {name} | {status} | {detail or "Executado sem falhas"} |')
(EVID / 'RELATORIO_E2E.md').write_text('\n'.join(report), encoding='utf-8')
print('\n'.join(f'{s}: {n} {d}' for n,s,d in results))
