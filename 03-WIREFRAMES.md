# WIREFRAMES - REDE RAÍZES DO NORDESTE

## VERSÃO MOBILE (375px - 768px)

### WF-M01: Tela de Login

```
┌─────────────────────────────┐
│         REDE RAÍZES         │ (Header com Logo)
├─────────────────────────────┤
│                             │
│        [Rede Raízes]        │ (Logo 80x80px)
│        🏪 LOGO              │
│                             │
├─────────────────────────────┤
│  Email:                     │
│  ┌───────────────────────┐  │
│  │ seu@email.com         │  │ (Input - Mobile friendly)
│  └───────────────────────┘  │
│                             │
│  Senha:                     │
│  ┌───────────────────────┐  │
│  │ ••••••••••            │  │ (Input - Masked)
│  └───────────────────────┘  │
│                             │
│  ☐ Lembrar-me              │ (Checkbox)
│                             │
│  ┌───────────────────────┐  │
│  │   ENTRAR              │  │ (Button - Full width)
│  └───────────────────────┘  │
│                             │
│  Esqueceu a senha?          │ (Link)
│  Criar nova conta →         │ (Link)
│                             │
├─────────────────────────────┤
│                             │
│  🔒 Seus dados são protegidos│ (LGPD - Small text)
│  conforme a LGPD            │
│                             │
└─────────────────────────────┘
```

**Notas:**
- Fundo: Cores da marca (verde + branco)
- Botão: Verde primário #2E7D32
- Inputs: Altura 48px (acessibilidade mobile)
- Espaçamento: 16px padrão
- Fonte: Roboto, 16px

---

### WF-M02: Tela Inicial (Autenticado)

```
┌─────────────────────────────┐
│ ☰  REDE RAÍZES       👤      │ (Header com Menu + Perfil)
├─────────────────────────────┤
│  📍 Selecione a Unidade     │
│  ┌───────────────────────┐  │
│  │ Centro - Natal        │  │ (Dropdown/Select)
│  │ 2.5km de você         │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│  🎁 PROMOÇÕES DA SEMANA    │ (Section Header)
│  ┌─────────────────────┐   │
│  │ [IMAGEM PROMO]      │   │ (Carousel)
│  │ Combo + Bebida      │   │
│  │ R$39,90 | -20%      │   │
│  └─────────────────────┘   │
│                             │
├─────────────────────────────┤
│  🔥 MAIS PEDIDOS           │ (Section Header)
│  ┌──────────┐ ┌──────────┐ │
│  │ IMAGEM   │ │ IMAGEM   │ │ (2 Colunas)
│  │ X Burger │ │ Caldo    │ │
│  │ R$28,90  │ │ R$12,50  │ │
│  │ ⭐⭐⭐⭐⭐│ │ ⭐⭐⭐⭐⭐│ │
│  └──────────┘ └──────────┘ │
│                             │
│  ┌──────────┐ ┌──────────┐ │
│  │ IMAGEM   │ │ IMAGEM   │ │
│  │ Refri    │ │ Açai     │ │
│  │ R$7,90   │ │ R$16,50  │ │
│  └──────────┘ └──────────┘ │
│                             │
├─────────────────────────────┤
│  🛒 VER CARDÁPIO COMPLETO → │ (CTA)
│                             │
├─────────────────────────────┤
│ 🏠 Home | 🔍 Busca | 🛒 Cart │ (Bottom Nav - 48px height)
│         | 👤 Perfil|         │
└─────────────────────────────┘
```

**Notas:**
- Scroll vertical infinito
- Imagens com aspect ratio 1:1
- Bottom navigation fixo
- Cards com elevação (shadow)

---

### WF-M03: Tela de Cardápio

```
┌─────────────────────────────┐
│ ← CARDÁPIO       🔍          │ (Header com Busca)
├─────────────────────────────┤
│  Buscar produto...          │ (Search Input - Sticky)
├─────────────────────────────┤
│  Filtros:                   │
│  [Tudo] [Lanches] [Bebidas] │ (Horizontal Scroll)
│  [Doces] [Promoções]        │
├─────────────────────────────┤
│                             │
│  LANCHES                    │ (Category Header)
│  ┌───────────────────────┐  │
│  │ [IMAGEM]              │  │ (Item Card)
│  │ X Burger Especial     │  │
│  │ com cheddar e bacon   │  │
│  │ R$28,90 | ⭐⭐⭐⭐⭐  │
│  │ ┌─────────────────┐   │  │
│  │ │   ADICIONAR     │   │  │
│  │ └─────────────────┘   │  │
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ [IMAGEM]              │  │
│  │ Caldo de Carne        │  │
│  │ Servido quentinho     │  │
│  │ R$12,50 | ⭐⭐⭐⭐⭐  │
│  │ ┌─────────────────┐   │  │
│  │ │   ADICIONAR     │   │  │
│  │ └─────────────────┘   │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│ 🏠 Home | 🔍 Busca | 🛒 0   │ (Bottom Nav)
└─────────────────────────────┘
```

**Notas:**
- Carregamento lazy das imagens
- Descrição truncada com "..."
- Badge com estrelas e avaliações
- Botão de adicionar sempre visível

---

### WF-M04: Tela de Carrinho

```
┌─────────────────────────────┐
│ ← CARRINHO                  │
├─────────────────────────────┤
│  Unidade: Centro - Natal    │
│  [TROCAR UNIDADE]           │
├─────────────────────────────┤
│  ┌───────────────────────┐  │
│  │ [THUMB] X Burger      │  │ (Item Removível)
│  │ R$28,90 x 2 = R$57,80 │  │
│  │ Complementos: +Queijo  │  │
│  │  [−] 2 [+]    [X]     │  │ (Qty + Delete)
│  └───────────────────────┘  │
│                             │
│  ┌───────────────────────┐  │
│  │ [THUMB] Refri 2L      │  │
│  │ R$14,90 x 1 = R$14,90 │  │
│  │ Complementos: nenhum  │  │
│  │  [−] 1 [+]    [X]     │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│  Cupom de Desconto:         │
│  ┌───────────────────────┐  │
│  │ Código...             │  │ (Input)
│  └───────────────────────┘  │
│  [APLICAR CUPOM]            │
│                             │
├─────────────────────────────┤
│  Subtotal:      R$72,70    │
│  Desconto:      -R$ 0,00   │
│  ─────────────────────────  │
│  TOTAL:         R$72,70    │
│                             │
│  Retirada em: Centro (5 min)│
│                             │
├─────────────────────────────┤
│  ┌───────────────────────┐  │
│  │  CONTINUAR PAGAMENTO  │  │ (Button - CTA)
│  └───────────────────────┘  │
│                             │
│  [CONTINUAR COMPRANDO]      │
│                             │
└─────────────────────────────┘
```

**Notas:**
- Items organizados por seção
- Fácil edição de quantidade
- Total sempre visível no topo ao scroll
- Cupom com feedback visual ao aplicar

---

### WF-M05: Tela de Pagamento

```
┌─────────────────────────────┐
│ ← PAGAMENTO          ✓       │
├─────────────────────────────┤
│  RESUMO DO PEDIDO           │
│  ┌───────────────────────┐  │
│  │ Itens: 3              │  │ (Collapse/Expand)
│  │ Subtotal: R$72,70     │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│  Método de Pagamento:       │
│  ◉ Crédito    ○ Débito     │ (Radio buttons)
│  ○ PIX        ○ Dinheiro    │
│                             │
│  ┌───────────────────────┐  │
│  │ 4532 •••• •••• 1234   │  │ (Card masked)
│  │ Válido: 12/26 | 3D    │  │
│  │                       │  │
│  │ Titular: JOÃO DA S.   │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│  🔒 Dados protegidos por    │ (Security Notice)
│     encriptação TLS 1.2+    │
│                             │
│  ☐ Li e Concordo com a      │ (LGPD Consent)
│    Política de Privacidade  │
│                             │
├─────────────────────────────┤
│  TOTAL: R$ 72,70            │
│                             │
│  ┌───────────────────────┐  │
│  │  CONFIRMAR PAGAMENTO  │  │
│  └───────────────────────┘  │
│                             │
└─────────────────────────────┘
```

**Notas:**
- Mask para dados de cartão (nunca salvar)
- Aviso de segurança LGPD obrigatório
- Processamento com loading spinner

---

### WF-M06: Tela de Confirmação (Pagamento Realizado)

```
┌─────────────────────────────┐
│                             │
│           ✅                │ (Big success icon)
│                             │
│  PEDIDO CONFIRMADO!         │ (Title)
│                             │
├─────────────────────────────┤
│  Número do Pedido:          │
│  #123456789                 │
│                             │
│  Data/Hora:                 │
│  06/08/2026 às 17:45        │
│                             │
│  Tempo Estimado:            │
│  25 minutos                 │ (Count down)
│                             │
├─────────────────────────────┤
│  Resumo do Pedido:          │
│  ┌───────────────────────┐  │
│  │ 2x X Burger Especial  │  │
│  │ 1x Refri 2L           │  │
│  │ ─────────────────────  │  │
│  │ Total: R$72,70        │  │
│  └───────────────────────┘  │
│                             │
├─────────────────────────────┤
│  🎁 +50 Pontos de Fideliz.  │ (Reward Badge)
│     Saldo: 350 pts          │
│                             │
├─────────────────────────────┤
│  ┌───────────────────────┐  │
│  │  ACOMPANHAR PEDIDO    │  │
│  └───────────────────────┘  │
│                             │
│  [Voltar ao Cardápio]       │
│                             │
└─────────────────────────────┘
```

---

### WF-M07: Tela de Acompanhamento em Tempo Real

```
┌─────────────────────────────┐
│ ← PEDIDO #123456789         │
├─────────────────────────────┤
│  Status Atual:              │
│  👨‍🍳 PREPARANDO              │
│  ████████░░ 80%             │ (Progress Bar)
│                             │
│  Tempo Restante:            │
│  ⏱️  5 minutos               │
│                             │
├─────────────────────────────┤
│  Cronograma:                │
│                             │
│  ✅ Confirmado              │
│     17:45 - Seu pedido      │
│     foi confirmado          │
│                             │
│  👨‍🍳 Preparando              │
│     17:47 - Em preparação   │
│     Iniciado agora!         │
│                             │
│  🔔 (Próximo - Pronto)      │
│     Aguardando...           │
│                             │
│  🏃 (Próximo - Retirada)    │
│     Aguardando...           │
│                             │
├─────────────────────────────┤
│  📞 CONTATO UNIDADE         │
│  (11) 98765-4321            │
│                             │
│  📍 Centro - Natal          │
│  Rua das Flores, 123        │
│                             │
├─────────────────────────────┤
│  🔔 Receber Notificações    │ (Toggle)
│     ◉ ON  ○ OFF             │
│                             │
└─────────────────────────────┘
```

---

## VERSÃO DESKTOP (1024px+)

### WF-D01: Dashboard Principal (Desktop)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ REDE RAÍZES              🔍 Buscar      🛒 Carrinho (2)      👤 João Silva  │
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│  Unidade: [Centro - Natal ▼]                                               │
│                                                                              │
│  ┌──────────────────────────────────┬──────────────────────────────────┐   │
│  │                                  │                                  │   │
│  │         PROMOÇÕES                │        MAIS PEDIDOS              │   │
│  │  [Carousel de Imagens]           │   ┌─────┐   ┌─────┐             │   │
│  │  Combo + Bebida -20%             │   │Item │   │Item │             │   │
│  │                                  │   └─────┘   └─────┘             │   │
│  │  ◀  ●  ○  ▶                      │   ┌─────┐   ┌─────┐             │   │
│  └──────────────────────────────────┴──────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────┬──────────────────────────────────┐   │
│  │ LANCHES                          │ BEBIDAS                          │   │
│  │ ┌─────────┐  ┌─────────┐        │ ┌─────────┐  ┌─────────┐        │   │
│  │ │ Item    │  │ Item    │        │ │ Item    │  │ Item    │        │   │
│  │ │ R$28,90 │  │ R$28,90 │        │ │ R$7,90  │  │ R$12,50 │        │   │
│  │ └─────────┘  └─────────┘        │ └─────────┘  └─────────┘        │   │
│  │ ┌─────────┐  ┌─────────┐        │ ┌─────────┐  ┌─────────┐        │   │
│  │ │ Item    │  │ Item    │        │ │ Item    │  │ Item    │        │   │
│  │ │ R$28,90 │  │ R$28,90 │        │ │ R$5,90  │  │ R$9,90  │        │   │
│  │ └─────────┘  └─────────┘        │ └─────────┘  └─────────┘        │   │
│  └──────────────────────────────────┴──────────────────────────────────┘   │
│                                                                              │
│  ┌──────────────────────────────────┬──────────────────────────────────┐   │
│  │ DOCES E SOBREMESAS               │ PROMOÇÕES ESPECIAIS              │   │
│  │ ┌─────────┐  ┌─────────┐        │ ┌─────────────────────────────┐  │   │
│  │ │ Item    │  │ Item    │        │ │ Açai Especial              │  │   │
│  │ │ R$16,50 │  │ R$14,90 │        │ │ R$21,90 (era R$28,90)     │  │   │
│  │ └─────────┘  └─────────┘        │ │ -25% OFF                   │  │   │
│  │                                  │ └─────────────────────────────┘  │   │
│  └──────────────────────────────────┴──────────────────────────────────┘   │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Notas Desktop:**
- Grid layout 2-4 colunas conforme tela
- Sidebar de filtros opcional
- Carrinho como modal ou painel lateral
- Menu horizontal principal

---

### WF-D02: Carrinho + Checkout (Side-by-Side)

```
┌─────────────────────────────────────────────────────────────────┐
│  CARDÁPIO                          │  CARRINHO & PAGAMENTO      │
│                                    │                            │
│  [Produtos...]                     │  ┌──────────────────────┐ │
│  [Produtos...]                     │  │ Itens no Carrinho:3  │ │
│  [Produtos...]                     │  │ ┌────────────────┐   │ │
│                                    │  │ │Item 1 x2       │   │ │
│                                    │  │ │R$57,80 [X]     │   │ │
│                                    │  │ └────────────────┘   │ │
│                                    │  │                      │ │
│                                    │  │ ┌────────────────┐   │ │
│                                    │  │ │Item 2 x1       │   │ │
│                                    │  │ │R$14,90 [X]     │   │ │
│                                    │  │ └────────────────┘   │ │
│                                    │  │                      │ │
│                                    │  │ Subtotal: R$72,70   │ │
│                                    │  │ Desconto: R$ 0,00   │ │
│                                    │  │ ─────────────────   │ │
│                                    │  │ TOTAL: R$ 72,70    │ │
│                                    │  │                      │ │
│                                    │  │ [CONTINUAR]         │ │
│                                    │  └──────────────────────┘ │
│                                    │                            │
└─────────────────────────────────────────────────────────────────┘
```

---

## GUIA DE ESTILOS

### Cores
- **Primária:** #2E7D32 (Verde - Natureza/Frescor)
- **Secundária:** #FFA000 (Laranja - Apetite)
- **Sucesso:** #4CAF50 (Verde claro)
- **Alerta:** #FF9800 (Laranja)
- **Erro:** #F44336 (Vermelho)
- **Texto:** #212121 (Quase preto)
- **Background:** #FAFAFA (Cinza muito claro)

### Tipografia
- **Headings:** Roboto Bold, 24px (H1), 20px (H2), 16px (H3)
- **Body:** Roboto Regular, 14px
- **Buttons:** Roboto Medium, 16px

### Espaçamento
- Base: 8px
- Small: 8px | Medium: 16px | Large: 24px | XL: 32px

### Componentes
- **Buttons:** Altura mínima 48px (mobile), padding 16px 24px
- **Inputs:** Altura 48px, border-radius 4px
- **Cards:** border-radius 8px, box-shadow 0 2px 4px rgba(0,0,0,0.1)
- **Icons:** 24px (standard), 32px (large), 16px (small)

### Estados
- **Hover:** Elevação +2px, opacity 90%
- **Active:** Cor primária, opacity 100%
- **Disabled:** Opacity 50%, cursor not-allowed
- **Loading:** Spinner animation 1s linear infinite

