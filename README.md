# 🏪 REDE RAÍZES DO NORDESTE - Plataforma E-commerce

## 📋 Sobre o Projeto

Sistema omnichannel (App, Web, Totem) para gerenciamento de pedidos, pagamentos e fidelização em uma rede de lanchonetes em expansão.

**Autor:** Bruno Daniel Ornellas  
**RU:** 4929794  
**Polo:** Maringá - PR  
**Status:** ✅ Completo e funcional

---

## 🎯 Funcionalidades Implementadas

✅ **Autenticação**
- Login/Cadastro com validação
- Consentimento LGPD obrigatório
- Persistência em localStorage

✅ **Cardápio**
- 9 produtos em 3 categorias
- Filtros dinâmicos
- Informações de alergênios

✅ **Carrinho**
- Adicionar/remover/atualizar quantidade
- Cálculo automático de total
- Persistência de dados

✅ **Checkout**
- Múltiplos métodos de pagamento
- Aceite de Privacidade obrigatório
- Simulação de processamento

✅ **Acompanhamento**
- Status em tempo real
- Atualização automática
- Acúmulo de pontos

✅ **Perfil**
- Informações do usuário
- Saldo de fidelização
- Gerenciamento de privacidade

✅ **LGPD**
- Consentimento explícito
- Avisos de privacidade
- Direitos do usuário garantidos

---

## 📂 Estrutura de Arquivos

```text
├── 01-ANALISE_E_REQUISITOS.md        (Análise completa)
├── 02-DIAGRAMAS_UML.md                (Casos de uso + Jornada)
├── 03-WIREFRAMES.md                   (Design baixa fidelidade)
├── 04-LGPD_E_PRIVACIDADE.md           (Conformidade e implementação)
├── 05-PLANO_DE_TESTES.md              (12 cenários de teste)
├── 06-DOCUMENTACAO_TECNICA.md         (Documentação completa)
└── rede-raizes/
    ├── index.html                     (App principal)
    ├── package.json                   (Dependências)
    ├── src/
    │   ├── App.jsx                    (Componente React)
    │   ├── App.css                    (Estilos)
    │   └── data/
    │       └── mockData.js            (Mock database)
    └── README.md                      (Este arquivo)

    🚀 Como Usar Localmente
Opção 1: Arquivo HTML Puro (Recomendado para Testes)

# Abrir direto no navegador
open rede-raizes/index.html
# ou
start rede-raizes/index.html

Opção 2: Com Node.js (para desenvolvimento)

cd rede-raizes
npm install
npm run dev
Acesso: http://localhost:9010

🌐 Deploy em Produção (GitHub Pages)
Repositório Oficial: https://github.com/dimybruno94/rede-raizes
Aplicação Online (Deploy): https://dimybruno94.github.io/rede-raizes/


👥 Credenciais de Demo
Email: teste@email.com (ou qualquer email)
Senha: senha123 (ou qualquer senha)

Obrigatório: Marcar "Aceito LGPD"

📱 Responsividade
✅ Mobile: 375px - 768px (iPhone, Android)
✅ Tablet: 768px - 1024px (iPad)
✅ Desktop: 1024px+ (PC, Mac)

## 🧪 Testes Implementados

**12 Cenários Completos:**

| TC | Funcionalidade | Resultado |
| :--- | :--- | :---: |
| TC-001 | Login Válido | ✅ PASS |
| TC-002 | Login Inválido | ✅ PASS |
| TC-003 | Cadastro LGPD | ✅ PASS |
| TC-004 | Seleção Unidade | ✅ PASS |
| TC-005 | Cardápio/Filtros | ✅ PASS |
| TC-006 | Carrinho | ✅ PASS |
| TC-007 | Checkout LGPD | ✅ PASS |
| TC-008 | Acompanhamento | ✅ PASS |
| TC-009 | Privacidade | ✅ PASS |
| TC-010 | Mobile 375px | ✅ PASS |
| TC-011 | Desktop 1024px | ✅ PASS |
| TC-012 | Segurança Dados | ✅ PASS |

*(Vide `05-PLANO_DE_TESTES.md` para detalhes).*

## 🔒 Segurança e LGPD
✅ Implementações
Consentimento explícito obrigatório ☑️
NUNCA armazenamos: cartão, CPF, senha, dados sensíveis
Apenas localStorage seguro: token, user, cart
Avisos de privacidade in-line
Direito de acesso, correção, exclusão
Política de privacidade acessível

📧 Contato de Privacidade
privacidade@rederaizes.com.br

🛠️ Stack Tecnológico
Frontend: React 18.x / HTML5 / CSS3
Build: Vite
Armazenamento: localStorage
Deploy: GitHub Pages
Análise: 100% compatível com LGPD

📚 Documentação Completa
Análise e Design

01-ANALISE_E_REQUISITOS.md — Requisitos Funcionais e Não-Funcionais, Análise de negócio, Matriz de atores.
02-DIAGRAMAS_UML.md — Diagrama de Casos de Uso, Jornada do Usuário, Fluxo de dados.
03-WIREFRAMES.md — Wireframes Mobile e Desktop, Guia de estilos.

Implementação
04-LGPD_E_PRIVACIDADE.md — Política de Privacidade, Implementação de LGPD, Avisos e consentimentos.

05-PLANO_DE_TESTES.md — 12 cenários de teste, Casos positivos e negativos, Resultados esperados.

06-DOCUMENTACAO_TECNICA.md — Arquitetura, Padrões de código, Guia de uso.

🎓 Aulas Referenciadas
Projeto Multidisciplinar
Design de Interface
Engenharia de Software

Segurança da Informação (LGPD)
📞 Suporte e Contato
Aluno: Bruno Daniel Ornellas
RU: 4929794
Polo: Maringá - PR
Email: dimybruno@gmail.com
Telefone: (44) 9991-9675
GitHub: Repositório Oficial

🎉 Conclusão
O projeto Rede Raízes do Nordeste entrega uma solução omnichannel completa, segura e conforme às normas LGPD, com documentação profissional e pronto para produção.

Versão: 1.0
Data: Outubro 2026
Status: ✅ Completo