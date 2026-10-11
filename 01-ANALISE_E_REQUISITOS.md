# ANÁLISE E REQUISITOS — REDE RAÍZES DO NORDESTE

## 1. INTRODUÇÃO E CONTEXTO

A Rede Raízes do Nordeste é uma rede de lanchonetes que busca modernizar seus canais de atendimento por meio de uma plataforma integrada. O sistema tem como objetivo facilitar a realização de pedidos, padronizar o atendimento e integrar as operações das diferentes unidades.

A solução considera os seguintes canais de interação:

- **Aplicativo mobile:** permite que os clientes consultem o cardápio e realizem pedidos remotamente.
- **Totem:** possibilita o autoatendimento nas unidades físicas.
- **Web:** permite o acesso pelo navegador, tanto para clientes quanto para usuários administrativos, conforme suas permissões.

O projeto considera um protótipo acadêmico, com dados simulados e integração de pagamento não financeira, destinado à demonstração e à validação das funcionalidades implementadas.

## 2. ANÁLISE DO PROBLEMA

### 2.1 Desafios identificados

- Falta de integração entre os diferentes canais de atendimento.
- Ausência de um programa de fidelização integrado.
- Necessidade de adequação ao tratamento de dados pessoais conforme a Lei Geral de Proteção de Dados Pessoais (LGPD).
- Dependência de processos manuais para o registro e o acompanhamento de pedidos.
- Necessidade de padronização das informações entre as unidades da rede.

### 2.2 Oportunidades identificadas

- Centralizar as informações e os processos em uma plataforma integrada.
- Implantar um programa de fidelização para os clientes.
- Simular a integração com meios eletrônicos de pagamento.
- Melhorar a experiência de atendimento nos canais digitais e físicos.
- Facilitar o acompanhamento dos pedidos e a gestão das unidades.

## 3. REQUISITOS FUNCIONAIS (RF)

Os requisitos funcionais descrevem as operações que o sistema deverá disponibilizar. A implementação de cada requisito deverá ser verificada conforme as funcionalidades efetivamente desenvolvidas no protótipo.

### RF01 — Autenticação e cadastro de usuários

- Permitir o cadastro de usuários com os dados necessários, como e-mail e telefone, quando aplicável.
- Permitir o acesso por e-mail e senha, caso a autenticação esteja implementada.
- Prever um fluxo de recuperação de senha, quando disponível.
- Apresentar informações sobre privacidade e obter consentimento quando necessário para a finalidade do tratamento de dados.
- Validar os campos obrigatórios e apresentar mensagens de orientação ao usuário.

### RF02 — Visualização de cardápio

- Exibir os produtos disponíveis para a unidade selecionada.
- Permitir a filtragem por categorias, como lanches, bebidas e sobremesas.
- Disponibilizar busca por nome do produto.
- Apresentar informações dos produtos, como nome, preço, descrição e imagem, quando cadastradas.
- Informar a indisponibilidade de produtos quando essa informação estiver disponível no sistema.

### RF03 — Realização de pedidos

- Permitir adicionar e remover itens do carrinho.
- Permitir alterar a quantidade dos produtos.
- Calcular o subtotal e o total do pedido.
- Aplicar cupons e promoções válidos, quando essa funcionalidade estiver implementada.
- Permitir selecionar a modalidade de atendimento disponível, como retirada ou entrega.
- Exibir o resumo do pedido antes da confirmação.
- Apresentar o resultado da tentativa de pagamento simulado.
- Exibir a confirmação do pedido conforme o comportamento implementado no protótipo.

### RF04 — Acompanhamento de pedidos

- Exibir o status do pedido de acordo com as etapas previstas: Confirmado, Preparando, Pronto e Retirado.
- Informar ao cliente as alterações de status, quando disponíveis.
- Permitir a consulta do histórico de pedidos, caso a funcionalidade esteja implementada.
- Diferenciar as etapas do pedido de acordo com as informações disponíveis no sistema.

### RF05 — Programa de fidelização

- Prever o acúmulo de pontos de acordo com as regras do programa.
- Utilizar como regra de negócio proposta a proporção de um ponto para cada R$ 0,10 gastos, sujeita à validação e à implementação.
- Prever o resgate de pontos para obtenção de descontos.
- Definir níveis de fidelidade conforme as regras comerciais estabelecidas.
- Prever campanhas de bonificação em datas especiais.

### RF06 — Sistema de promoções

- Prever a utilização de cupons de desconto.
- Permitir a definição de promoções específicas por unidade.
- Prever ofertas baseadas no histórico de compras, respeitando as regras de privacidade e o tratamento adequado dos dados pessoais.
- Validar as condições de utilização de cada promoção antes de aplicá-la ao pedido.

### RF07 — Integração de pagamento

- Disponibilizar uma simulação do processo de pagamento, sem realizar transações financeiras reais.
- Exibir o resultado da tentativa de pagamento simulada.
- Utilizar uma referência ou identificador fictício da transação para fins de demonstração, quando necessário.
- Não armazenar senhas, números completos de cartão ou códigos de segurança (CVV) no navegador.
- Em uma futura versão de produção, utilizar um provedor de pagamento apropriado para processar os dados financeiros.
- Informar claramente quando o pagamento for apenas simulado.

### RF08 — Gestão administrativa

- Prever um painel de acompanhamento das vendas por unidade.
- Permitir a gestão do cardápio conforme as permissões do usuário.
- Prever a visualização dos pedidos pela equipe responsável pela preparação.
- Disponibilizar recursos para gerenciamento de promoções.
- Restringir as funcionalidades administrativas de acordo com os perfis de acesso definidos.

## 4. REQUISITOS NÃO FUNCIONAIS (RNF)

Os requisitos não funcionais definem características de qualidade que devem orientar o desenvolvimento e a avaliação do sistema.

### RNF01 — Mobile-first e responsividade

- Priorizar a experiência em dispositivos móveis.
- Considerar larguras de tela entre 375 e 768 pixels para os testes de responsividade.
- Prever suporte a telas de desktop a partir de 1024 pixels.
- Verificar a legibilidade, a navegação e a disposição dos componentes em diferentes tamanhos de tela.
- Evitar rolagem horizontal desnecessária em páginas adaptadas para dispositivos móveis.

### RNF02 — Desempenho

- Estabelecer como meta de qualidade o carregamento inicial das páginas em menos de três segundos, em condições de teste documentadas.
- Otimizar as imagens para reduzir o tempo de carregamento.
- Evitar operações desnecessárias que prejudiquem a resposta da interface.
- Avaliar a fluidez das interações por meio de testes adequados ao ambiente utilizado.

### RNF03 — Segurança e LGPD

- Informar ao usuário as finalidades do tratamento de seus dados pessoais.
- Solicitar consentimento quando essa for a base legal aplicável ao tratamento.
- Disponibilizar a política de privacidade de forma acessível.
- Prever mecanismos para atendimento dos direitos dos titulares, incluindo solicitações de exclusão, observadas as hipóteses legais de conservação.
- Não armazenar senhas, números completos de cartão ou códigos de segurança (CVV) no `localStorage`.
- Utilizar HTTPS na comunicação com a aplicação publicada.
- Adotar medidas técnicas e organizacionais adequadas à proteção dos dados pessoais.
- Limitar a coleta e o armazenamento de dados ao necessário para as finalidades informadas.
- Evitar a exposição de informações pessoais em mensagens de erro, registros e interfaces públicas.

### RNF04 — Acessibilidade

- Permitir a navegação por teclado nas funcionalidades compatíveis.
- Associar rótulos descritivos aos campos de entrada.
- Apresentar mensagens de erro compreensíveis.
- Manter contraste e legibilidade adequados nos componentes da interface.
- Utilizar textos claros nos botões e nas ações disponíveis.

### RNF05 — Escalabilidade e manutenibilidade

- Organizar o código de forma modular para facilitar manutenção e evolução.
- Separar, quando aplicável, as responsabilidades de apresentação, regras de negócio e acesso a dados.
- Prever a possibilidade de integração futura com APIs e serviços externos.
- Documentar as limitações decorrentes do uso de dados simulados e da ausência de banco de dados real.
- Não afirmar capacidade de escalabilidade em produção sem testes e infraestrutura que a comprovem.

### RNF06 — Compatibilidade

- Prever compatibilidade com versões atuais dos principais navegadores, como Chrome, Firefox, Safari e Edge.
- Verificar a apresentação e as funcionalidades em navegadores distintos.
- Avaliar o comportamento da interface em condições de conexão limitada.
- Tratar o suporte offline como requisito futuro ou funcionalidade implementada somente quando houver mecanismos de cache e testes que comprovem esse comportamento.

## 5. ATORES DO SISTEMA

| Ator | Descrição | Canais |
|---|---|---|
| Cliente | Consulta o cardápio e realiza pedidos. | Aplicativo, Web e Totem |
| Atendente | Auxilia no atendimento e na operação da unidade. | Web ou interface operacional, conforme implementação |
| Cozinha | Consulta os pedidos e acompanha sua preparação. | Painel interno, quando implementado |
| Gerente/Administrador | Gerencia informações da unidade, cardápio e promoções, conforme suas permissões. | Web |
| Sistema de pagamento | Serviço externo previsto para processar pagamentos em uma futura integração real. | Integração por API |

Os atores representam os perfis e serviços previstos para a solução. A existência de um ator na modelagem não significa, por si só, que todas as suas funcionalidades estejam implementadas no protótipo.

## 6. FLUXO PRINCIPAL — JORNADA DO CLIENTE

O fluxo proposto para a realização de um pedido é composto pelas seguintes etapas:

1. Acesso ao sistema ou cadastro, quando aplicável.
2. Seleção da unidade de atendimento.
3. Consulta ao cardápio disponível.
4. Adição e alteração de itens no carrinho.
5. Revisão do pedido e aplicação de promoções disponíveis.
6. Seleção da modalidade de atendimento.
7. Seleção do meio de pagamento disponibilizado pelo protótipo.
8. Execução da simulação de pagamento, sem transação financeira real.
9. Apresentação do resultado e da confirmação do pedido, conforme a implementação.
10. Acompanhamento do status do pedido, quando disponível.
11. Retirada ou entrega, conforme a modalidade prevista.
12. Consulta de pontos ou avaliação do pedido, caso essas funcionalidades estejam implementadas.

## 7. REQUISITOS DE NEGÓCIO

| Requisito | Descrição | Prioridade |
|---|---|---|
| Fidelização | Prever um programa de pontos integrado entre as unidades. | Alta |
| Multicanal | Buscar consistência de informações entre aplicativo, totem e Web. | Alta |
| Pagamento externo | Prever integração com um provedor de pagamento apropriado. | Alta |
| LGPD | Tratar os dados pessoais de acordo com a legislação aplicável. | Alta |
| Escalabilidade | Permitir evolução da solução conforme o crescimento da rede. | Média |
| Análise de dados | Prever indicadores de negócio, respeitando a finalidade e a proteção dos dados pessoais. | Média |

As prioridades indicam a importância relativa dos requisitos para o negócio e não constituem comprovação de que as funcionalidades estejam concluídas.

## 8. RESTRIÇÕES TÉCNICAS

- Utilização de tecnologias Web compatíveis com o escopo acadêmico.
- Utilização de dados simulados, sem banco de dados real no protótipo, conforme a implementação atual.
- Simulação do processo de pagamento, sem processamento financeiro real.
- Publicação da aplicação em serviço de hospedagem compatível, como GitHub Pages, Vercel ou Netlify.
- Dependência dos recursos implementados no protótipo para a demonstração das funcionalidades.
- Necessidade de desenvolvimento adicional para disponibilizar autenticação segura, persistência real de pedidos, integrações externas e operação em produção, quando esses recursos não estiverem implementados.

## 9. CONCLUSÃO

A análise de requisitos da Rede Raízes do Nordeste organiza as principais necessidades de negócio e as características de qualidade previstas para uma plataforma integrada de atendimento. A especificação contempla os canais de interação, a realização de pedidos, a fidelização, as promoções, o pagamento simulado, a segurança e a privacidade dos dados pessoais.

A separação entre requisitos funcionais, requisitos não funcionais, regras de negócio e restrições técnicas facilita o planejamento dos testes e a avaliação do protótipo. A validação de cada requisito deverá ser acompanhada de critérios de aceitação e evidências correspondentes, distinguindo claramente as funcionalidades implementadas daquelas que permanecem como propostas para versões futuras.
