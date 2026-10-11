# LGPD E PRIVACIDADE - IMPLEMENTAÇÃO NA INTERFACE

## 1. POLÍTICA DE PRIVACIDADE

### Resumo Executivo
A Rede Raízes do Nordeste está comprometida em proteger sua privacidade. Esta política descreve como coletamos, usamos, armazenamos e compartilhamos seus dados pessoais, em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).

---

## 2. DADOS COLETADOS E FINALIDADE

| Dados Coletados | Finalidade | Base Legal | Retenção |
|---|---|---|---|
| **Nome, Email, Telefone** | Identificação e contato | Consentimento + Necessidade contratual | Enquanto ativo ou 12 meses sem atividade |
| **Endereço de Entrega** | Logística e entrega | Consentimento + Necessidade contratual | Duração do contrato |
| **Dados de Pagamento** | Processamento de pedidos | Consentimento + Necessidade contratual | NUNCA armazenado (direto ao gateway) |
| **Histórico de Compras** | Analytics e recomendações | Consentimento + Interesse legítimo | Enquanto conta ativa |
| **Preferências e Alergias** | Personalização de cardápio | Consentimento | Enquanto conta ativa |
| **IP e Cookies** | Segurança e performance | Interesse legítimo | 30 dias |
| **Localização (GPS)** | Mostrar unidades próximas | Consentimento | Sessão atual |

---

## 3. CONSENTIMENTO EXPLÍCITO NA INTERFACE

### 3.1 Tela de Cadastro - Consentimento Obrigatório

```
┌─────────────────────────────────────────────────┐
│  CRIAR NOVA CONTA                               │
├─────────────────────────────────────────────────┤
│                                                 │
│  Nome Completo:                                 │
│  ┌───────────────────────────────────────────┐  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  Email:                                         │
│  ┌───────────────────────────────────────────┐  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  Telefone:                                      │
│  ┌───────────────────────────────────────────┐  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  Senha:                                         │
│  ┌───────────────────────────────────────────┐  │
│  │                                           │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  ┌─────────────────────────────────────────── ┐ │
│  │ ☐ Concordo em receber ofertas e promoções   │ │ (Opt-in)
│  └─────────────────────────────────────────── ┘ │
│                                                 │
│  ┌─────────────────────────────────────────── ┐ │
│  │ ☑ Declaro que li e aceito os Termos de      │ │ (Mandatory)
│  │   Uso, Política de Privacidade e LGPD.      │ │
│  │                                             │ │
│  │   Clique aqui para ler:                     │ │
│  │   📄 Termos de Uso                          │ │
│  │   📄 Política de Privacidade                │ │
│  │   📄 Aviso de Coleta de Dados (LGPD)       │ │
│  └─────────────────────────────────────────── ┘ │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │         CRIAR CONTA                       │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  Já tem conta? ENTRAR →                         │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Elementos de LGPD:**
- ☑ Consentimento explícito e específico (CHECKED por padrão)
- Descrição clara do que será coletado
- Links diretos para políticas
- Sem consentimento pré-checado para marketing
- Opção de revogar consentimento a qualquer hora

---

### 3.2 Modal de Avisos de Coleta de Dados

**Ao clicar em "Termos de Uso / Política de Privacidade":**

```
┌─────────────────────────────────────────────────────┐
│  🔒 AVISO DE COLETA DE DADOS                       │
├─────────────────────────────────────────────────────┤
│                                                     │
│  SEUS DADOS PESSOAIS                               │
│                                                     │
│  Vamos coletar e processar os seguintes dados:      │
│                                                     │
│  ✓ Nome e Email (para identificação)               │
│  ✓ Telefone (contato)                              │
│  ✓ Endereço (entrega)                              │
│  ✓ Histórico de Compras (personalização)           │
│  ✓ Preferências de Cardápio (recomendações)       │
│  ✓ Dados de Localização (unidades próximas)       │
│                                                     │
│  O QUE NÃO FAZEMOS:                                │
│                                                     │
│  ✗ Nunca armazenamos dados de cartão/pagamento     │
│  ✗ Nunca vendemos seus dados a terceiros           │
│  ✗ Nunca usamos seus dados para crédito/score      │
│  ✗ Nunca compartilhamos sem seu consentimento      │
│                                                     │
│  SEUS DIREITOS (LGPD):                             │
│                                                     │
│  📋 Direito de Acesso                              │
│     Solicitar cópia de todos seus dados            │
│                                                     │
│  ✏️  Direito de Correção                            │
│     Atualizar informações incorretas               │
│                                                     │
│  🗑️  Direito ao Esquecimento                        │
│     Deletar sua conta e todos os dados             │
│                                                     │
│  ⚖️  Direito de Revogar Consentimento               │
│     Parar de receber mensagens e publicidade       │
│                                                     │
│  COMO EXERCER SEUS DIREITOS:                       │
│                                                     │
│  Abra a configuração "Privacidade" no seu perfil   │
│  ou envie email para privacidade@rederaizes.com.br│
│                                                     │
│  Garantimos resposta em até 15 dias úteis.         │
│                                                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │  ENTENDI E CONCORDO                         │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  [Voltar]                                           │
│                                                     │
└─────────────────────────────────────────────────────┘
```

---

## 4. IMPLEMENTAÇÃO NA INTERFACE DO USUÁRIO

### 4.1 Página de Perfil - Seção Privacidade

```
CONFIGURAÇÕES → PRIVACIDADE E DADOS
┌─────────────────────────────────────────────┐
│  PRIVACIDADE E DADOS PESSOAIS                │
├─────────────────────────────────────────────┤
│                                             │
│  📊 DADOS COLETADOS                         │
│                                             │
│  ✓ Seu Perfil está associado a:             │
│    - Identificação pessoal (nome, email)    │
│    - 45 pedidos registrados                 │
│    - 2 endereços salvos                     │
│    - 350 pontos de fidelização              │
│                                             │
│  [VISUALIZAR DADOS DETALHADOS]              │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  📧 PREFERÊNCIAS DE COMUNICAÇÃO              │
│                                             │
│  ◉ Receber promoções por email              │
│  ○ Não receber mais promoções               │
│                                             │
│  ◉ Receber notificações push                │
│  ○ Desativar notificações                   │
│                                             │
│  [GERENCIAR COMUNICAÇÕES]                   │
│                                             │
├─────────────────────────────────────────────┤
│                                             │
│  🔄 SEUS DIREITOS (LGPD)                    │
│                                             │
│  [BAIXAR CÓPIA DE MEUS DADOS]                │
│   Receba um arquivo com todos os dados      │
│   em 15 dias úteis                          │
│                                             │
│  [EDITAR INFORMAÇÕES]                       │
│   Corrija ou atualize seus dados            │
│                                             │
│  [REVOGAR CONSENTIMENTO]                    │
│   Pare de receber publicidade direcionada   │
│                                             │
│  [DELETAR MINHA CONTA]                      │
│   Remover permanentemente (após 30 dias)    │
│   ⚠️  Esta ação é irreversível                │
│                                             │
└─────────────────────────────────────────────┘
```

---

### 4.2 Avisos in-line na Interface

**Ao visualizar cardápio com alergênios:**

```
┌─────────────────────────────────────┐
│  X Burger Especial                  │
│  Com cheddar, bacon e maionese       │
│  R$28,90                             │
│                                     │
│  ⚠️  CONTÉM ALÉRGENOS:               │
│  🥛 Lactose | 🌾 Glúten | 🥜 Amendoim │
│                                     │
│  Seus dados de preferência são usados│
│  para alertas de saúde (LGPD)       │
│                                     │
│  [ADICIONAR] [+INFORMAÇÕES]         │
└─────────────────────────────────────┘
```

**Ao realizar um pedido:**

```
┌─────────────────────────────────────┐
│  🔒 SEGURANÇA DO PAGAMENTO           │
│                                     │
│  Seus dados de pagamento são        │
│  processados por gateway seguro     │
│  (Stripe/PayPal)                    │
│                                     │
│  ❌ Nunca armazenamos cartão/CPF    │
│  ✓ Encriptados com TLS 1.2+        │
│  ✓ Conformidade PCI-DSS            │
│  ✓ Compliance LGPD + ABNT NBR 14609│
│                                     │
│  Leia nossa Política de Privacidade │
│  📄 [CLIQUE AQUI]                   │
└─────────────────────────────────────┘
```

---

## 5. RODAPÉ DO SITE - LINKS IMPORTANTES

```
┌─────────────────────────────────────────────────┐
│  © 2026 Rede Raízes do Nordeste                │
│                                                 │
│  📞 Contato: contato@rederaizes.com.br          │
│  🏢 Endereço: Rua das Flores, 123 - Natal/RN  │
│  📱 WhatsApp: (11) 98765-4321                  │
│                                                 │
│  ─────────────────────────────────────────────  │
│                                                 │
│  📄 Documentação Legal:                         │
│  • Termos de Uso                                │
│  • Política de Privacidade                      │
│  • Aviso de LGPD                                │
│  • Política de Cookies                          │
│  • Mapa de Privacidade                          │
│                                                 │
│  🔒 Privacidade:                                │
│  • Gerenciar Dados                              │
│  • Preferências de Comunicação                  │
│  • Solicitar Exclusão de Conta                  │
│  • Contato do DPO (Data Protection Officer)    │
│                                                 │
│  [CANAL DE DENÚNCIA PARA PRIVACIDADE]           │
│  privacidade@rederaizes.com.br                 │
│                                                 │
└─────────────────────────────────────────────────┘
```

---

## 6. FLUXO DE CONSENTIMENTO - DECISÃO ÁRVORE

```
USUÁRIO ACESSA O APP
    ↓
    └─→ AUTENTICADO? 
            ├─ SIM → Prosseguir para Home
            └─ NÃO → Mostrar Login/Cadastro
                    ↓
                    PRIMEIRO ACESSO?
                    ├─ SIM → Modal de Boas-vindas + Avisos LGPD
                    │        ↓
                    │        ACEITAR POLÍTICA?
                    │        ├─ SIM → Consentimento salvo | Prosseguir
                    │        └─ NÃO → Não pode usar app
                    │
                    └─ NÃO → Pedir consentimento para nova funcionalidade
                            (ex: acesso a localização)
                            ↓
                            ACEITAR?
                            ├─ SIM → Permissão concedida
                            └─ NÃO → Funcionalidade limitada

EM QUALQUER MOMENTO DO USO:
    ├─ Acesso a dados pessoais → Avisos in-line
    ├─ Compartilhamento com terceiros → Confirmação explícita
    ├─ Processamento de pagamento → Aviso de segurança
    └─ Coleta de localização → Permissão solicitada
```

---

## 7. ARMAZENAMENTO SEGURO DE DADOS

### Dados NUNCA Armazenados Localmente:
```javascript
// ❌ NEVER DO THIS:
localStorage.setItem('cardNumber', '4532123456789012');
localStorage.setItem('cvv', '123');
localStorage.setItem('password', 'minha_senha_aqui');
```

### O Que SIM Pode Ser Armazenado:
```javascript
// ✓ OK - Token seguro com expiração
localStorage.setItem('authToken', 'eyJhbGc...'); // JWT com TTL
localStorage.setItem('tokenExpiry', '2026-08-07T17:45:00Z');

// ✓ OK - ID da transação (não dados sensíveis)
localStorage.setItem('lastTransactionId', 'txn_123456');

// ✓ OK - Preferências
localStorage.setItem('preferences', JSON.stringify({
  language: 'pt-BR',
  theme: 'light',
  notifications: true
}));

// ✓ OK - Dados públicos de usuário (sem PII sensível)
localStorage.setItem('user', JSON.stringify({
  id: 'user_123',
  name: 'João Silva',
  email: 'joao@email.com'  // Apenas para display
}));
```

---

## 8. CHECKLIST DE CONFORMIDADE LGPD

- [ ] Política de Privacidade publicada e acessível
- [ ] Avisos de coleta de dados visíveis e claros
- [ ] Consentimento explícito para marketing
- [ ] Formulário de dados não pré-preenche dados sensíveis
- [ ] Dados de pagamento NUNCA armazenados
- [ ] Opção de visualizar dados pessoais
- [ ] Opção de corrigir informações
- [ ] Opção de revogar consentimento de marketing
- [ ] Opção de deletar conta
- [ ] Direito ao esquecimento implementado
- [ ] DPO (Data Protection Officer) designado
- [ ] Canal de denúncia para privacidade
- [ ] Registro de consentimento com data/hora
- [ ] Retenção de dados definida e respeitada
- [ ] Criptografia de dados sensíveis
- [ ] Acesso apenas autorizado aos dados
- [ ] Notificação de incidente de segurança planejada

---

## 9. EXEMPLO DE PÁGINA: "AVISO DE PRIVACIDADE" (Modal)

```
╔═════════════════════════════════════════════════╗
║  🔒 AVISO IMPORTANTE SOBRE PRIVACIDADE E LGPD   ║
╠═════════════════════════════════════════════════╣
║                                                 ║
║  Olá! Queremos deixar claro como protegemos     ║
║  seus dados.                                    ║
║                                                 ║
║  SEUS DADOS SÃO IMPORTANTES PARA NÓS:           ║
║                                                 ║
║  ✓ Usamos seus dados para melhorar o serviço   ║
║  ✓ Nunca vendemos seus dados a terceiros       ║
║  ✓ Todos os dados são encriptados              ║
║  ✓ Você tem direito de saber o que coletamos   ║
║                                                 ║
║  SEUS DIREITOS:                                 ║
║                                                 ║
║  1️⃣  Direito de Acesso                          ║
║     Saiba quais dados temos sobre você         ║
║                                                 ║
║  2️⃣  Direito de Correção                        ║
║     Atualize informações incorretas            ║
║                                                 ║
║  3️⃣  Direito de Exclusão                        ║
║     Solicite a remoção dos seus dados          ║
║                                                 ║
║  4️⃣  Direito de Revogar Consentimento            ║
║     Pare de receber publicidade                ║
║                                                 ║
║  COMO EXERCER SEUS DIREITOS:                    ║
║                                                 ║
║  📧 Email: privacidade@rederaizes.com.br       ║
║  ⏱️  Prazo: Responderemos em 15 dias úteis      ║
║  📋 Ir para: Perfil > Privacidade > Direitos    ║
║                                                 ║
║  Encontrou problemas com seus dados?            ║
║  📞 Fale conosco: contato@rederaizes.com.br    ║
║                                                 ║
╠═════════════════════════════════════════════════╣
║                                                 ║
║  ☑ Entendi meus direitos de privacidade (LGPD)║
║                                                 ║
║  ┌──────────────────────────────────────────┐  ║
║  │         PROSSEGUIR                       │  ║
║  └──────────────────────────────────────────┘  ║
║                                                 ║
║  [Ler Política de Privacidade Completa]         ║
║                                                 ║
╚═════════════════════════════════════════════════╝
```

