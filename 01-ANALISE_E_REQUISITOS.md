# ANÁLISE E REQUISITOS - REDE RAÍZES DO NORDESTE

## 1. INTRODUÇÃO E CONTEXTO

A Rede Raízes do Nordeste é uma rede de lanchonetes que busca modernizar seus canais de atendimento através de uma plataforma integrada. O sistema deve suportar múltiplos pontos de interação:
- **APP Mobile** - Clientes fazem pedidos remotamente
- **TOTEM** - Autoatendimento físico nas unidades
- **WEB** - Acesso via navegador para clientes e gerentes

## 2. ANÁLISE DO PROBLEMA

### 2.1 Desafios Identificados
- Múltiplos canais de atendimento sem integração
- Sem Programa de fidelidade
- Ausência de conformidade com LGPD
- Processamento manual de pedidos e pagamentos

### 2.2 Oportunidades
- Unir as operações em  plataforma única
- implantar um programa de fidelização
- Integrar pagamentos eletrônicos
---

## 3. REQUISITOS FUNCIONAIS (RF)

### RF01 - Autenticação e Cadastro de Usuários
- Cadastro com email, telefone, senha
- Login com email/senha
- Recuperação de senha
- LGPD obrigatória no cadastro

### RF02 - Visualização de Cardápio
- Listagem por unidade selecionada
- Filtros por categoria (lanches, bebidas, sobremesas)
- Busca por nome do produto
- Exibição de preço, descrição e imagem

### RF03 - Realização de Pedidos
- Adicionar itens ao carrinho
- Cálculo automático de total
- Aplicação de cupons/promoções
- Seleção de forma de retirada (presencial/entrega)

### RF04 - Acompanhamento de Pedidos
- Status em tempo real (Confirmado → Preparando → Pronto → Retirado)
- Notificações do progresso
- Histórico de pedidos

### RF05 - Programa de Fidelização
- Acúmulo de pontos por pedido (1 ponto = R$0,10 gasto)
- Resgate de pontos para desconto
- Programa de níveis
- Bônus de pontos em datas especiais

### RF06 - Sistema de Promoções
- Cupons de desconto
- Promoções por unidade
- Ofertas baseadas em histórico de compra

### RF07 - Integração de Pagamento

- Exibição de retorno do pagamento
- Armazenamento seguro de referência (senha/cartão)

### RF08 - Gestão Administrativa
- Dashboard de vendas por unidade
- Controle de cardápio
- Visualização de pedidos em tempo real (para cozinha)
- Gestão de promoções

---

## 4. REQUISITOS NÃO-FUNCIONAIS (RNF)

### RNF01 - Mobile-First e Responsividade
- Prioridade para dispositivos móveis (375px - 768px)
- Suporte desktop completo (1024px+)
- Testes em múltiplos tamanhos de tela

### RNF02 - Performance
- Carregamento inicial < 3s
- Transições suaves (60fps)
- Otimização de imagens

### RNF03 - Segurança e LGPD
- Consentimento explícito para coleta de dados
- Política de privacidade acessível
- Direito ao esquecimento (deletar conta)
- Dados sensíveis criptografados no localStorage

### RNF04 - Acessibilidade

- Navegação por teclado
- Labels em inputs

### RNF05 - Escalabilidade
- Arquitetura preparada para crescimento de usuários
- Banco de dados normalizado
- APIs RESTful bem estruturadas

### RNF06 - Compatibilidade
- Navegadores modernos (Chrome, Firefox, Safari, Edge)
- Suporte a offline básico (cache)

---

## 5. ATORES DO SISTEMA

| Ator | Descrição | Canais |
|------|-----------|--------|
| **Cliente** | Usuário final que realiza pedidos | App, Web, Totem |
| **Atendente** | Opera o sistema na lanchonete | Totem, Web |
| **Cozinha** | Recebe e prepara pedidos | Sistema interno (painel) |
| **Gerente/Admin** | Administra lanchonete e sistema | Web |
| **Sistema Pagamento** | Gateway externo (Stripe, PayPal) | Integração API |

---

## 6. FLUXO PRINCIPAL - JORNADA DO CLIENTE

```
1. Login/Cadastro (com consentimento LGPD)
2. Seleção de Unidade
3. Navegação no Cardápio
4. Adição de Itens ao Carrinho
5. Revisão de Pedido + Aplicar Promoção
6. Seleção de Pagamento
7. Integração com Gateway Externo
8. Confirmação do Pedido
9. Acompanhamento em Tempo Real
10. Retirada/Entrega
11. Avaliação e Ganho de Pontos
```

---

## 7. REQUISITOS DE NEGÓCIO

| Requisito | Descrição | Prioridade |
|-----------|-----------|-----------|
| Fidelização | Programa de pontos integrado | ALTA |
| Multicanal | Consistência entre App/Totem/Web | ALTA |
| Pagamento Externo | Integração com gateway | ALTA |
| LGPD | Consentimento e privacidade | ALTA |
| Escalabilidade | Suportar crescimento | MÉDIA |
| Analytics | Rastrear comportamento de clientes | MÉDIA |

---

## 8. RESTRIÇÕES TÉCNICAS

- Desenvolvimento com tecnologias web modernas
- Mock data (sem banco de dados real)
- Simular integração de pagamento (não processar real)
- Hospedagem pública (GitHub Pages, Vercel, Netlify)

---

## 9. CONCLUSÃO

O sistema proposto é uma solução omnichannel robusta que atende aos requisitos de uma rede de franquias em expansão, priorizando experiência do usuário, conformidade regulatória (LGPD) e escalabilidade técnica.
