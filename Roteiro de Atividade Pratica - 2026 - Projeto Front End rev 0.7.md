



# **OBJETIVO** 

Olá a todos. 

Sejam todos muito bem-vindos! 

Esta trilha tem como objetivo avaliar a capacidade do aluno de projetar, justificar e representar interfaces e fluxos de interação para um sistema real de mercado, conforme o estudo de caso Rede Raízes do Nordeste. 

O foco do trabalho não é a estética, mas clareza de fluxo, coerência funcional, maturidade técnica e alinhamento com o negócio. 

Desejamos a você uma excelente atividade prática, em nome da equipe docente da disciplina 

de Projeto Multidisciplinar. _da disciplina de Projeto Multidisciplinar._ 

# **SUMÁRIO** 

|**_OBJETIVO___________________________________________________________________ 1_**|
|---|
|**_ORIENTAÇÕES GERAIS_________________________________________________________ 3_**|
|**INTRODUÇÃO E OBJETIVOS (OBRIGATÓRIO)____________________________________________ 3 **|
|**ANÁLISE E REQUISITOS (OBRIGATÓRIOS)_______________________________________________ 4**|
|**DIAGRAMAS (OBRIGATÓRIO)________________________________________________________ 4 **|
|**WIREFRAME (OBRIGATÓRIO)________________________________________________________ 5 **|
|**LGPD E PRIVACIDADE DA INTERFACE (OBRIGATÓRIO)_____________________________________ 5**|
|**ENTREGA TÉCNICA (OBRIGATÓRIA)___________________________________________________ 5 **|
|**PLANO DE TESTES (OBRIGATÓRIO)____________________________________________________ 6**|
|**CRITÉRIOS DE ENTREGA E NORMAS DA ABNT (OBRIGATÓRIO)_____________________________ 6 **|
|**CONCLUSÃO (OBRIGATÓRIO)________________________________________________________ 6 **|
|**ORIENTAÇÃO FINAL________________________________________________________________ 7**|
|**CRITÉRIOS DE AVALIAÇÃO___________________________________________________________ 7**|
|Tabela Consolidada (CRITÉRIOS DE AVALIAÇÃO)_______________________________________________ 10|
|**ANEXOS________________________________________________________________________ 11**|
|Diagrama de caso de uso (EXEMPLO)_______________________________________________________ 11|
|Descrição de Casos de Usos (MODELO)______________________________________________________12|
|Diagrama da Jornada do Usuário (EXEMPLO)_________________________________________________ 14|



# **ORIENTAÇÕES GERAIS** 

## **INTRODUÇÃO E OBJETIVOS (OBRIGATÓRIO)** 

Esta atividade simula um cenário real de mercado onde o aluno deve projetar uma solução robusta para uma rede de lanchonetes em expansão. O foco está na compreensão do negócio, na tomada de decisão técnica e na entrega de uma interface que suporte múltiplos canais de atendimento (App, Totem e Web). 

## **ANÁLISE E REQUISITOS (OBRIGATÓRIOS)** 

O aluno deve listar os requisitos focando na experiência do usuário e nas restrições do sistema. 

- **Requisitos Funcionais (RF):** Visualização de cardápio dinâmico por unidade, fluxo de pedido completo, programa de fidelidade e conformidade explícita com a LGPD. 

   - O projeto deve contemplar, todos os requisitos necessários ao completo funcionamento do sistema **incluindo,** ao menos, de forma conceitual, os **requisitos obrigatórios abaixo** : 

      - Cadastro e autenticação de usuários; 

      - Visualização de cardápio por unidade; 

      - Realização de pedidos; 

      - Acompanhamento do status do pedido; 

      - Programa de fidelização (pontos, descontos ou benefícios); 

      - Promoções e campanhas; 

      - Solicitação de pagamento por meio de serviço externo; 

      - Sistema de Fidelização (Recompensas); 

      - Sistema de Pagamento (Integração externa). Você não deve implementar pagamento real, mas deve representar o fluxo do envio do pagamento e o retorno visual ao usuário. 

- **Requisitos Não Funcionais (RNF):** É **obrigatório** adotar a abordagem **Mobile-first** e garantir a **Responsividade** . A interface deve ser otimizada para alta performance e escalabilidade. 

## **DIAGRAMAS (OBRIGATÓRIO)** 

Esta seção fundamenta a lógica da solução e é requisito essencial para a avaliação da visão sistêmica. 

##### **4.1. Diagrama de Casos de Uso** 

Elaboração de Diagrama de Casos de Uso com os atores: 

- Cliente; 

- Atendente; 

- Cozinha; 

- Gerente / Administrador; 

- Sistemas de Pagamento Externos. 



**Descrição de Feature:** Escolha uma funcionalidade (ex: **Realizar Pagamento** ) e detalhe o fluxo principal, pré-condições e como o sistema lida com o processamento externo. 

##### **4.2. Diagrama da Jornada do Usuário** 

Obrigatório mapear o percurso do cliente desde o primeiro contato com o cardápio até a confirmação do pagamento e retirada do pedido. 

Apresentação do Diagrama da Jornada do Usuário, evidenciando etapas, decisões, estados do sistema e integrações. 

## **WIREFRAME (OBRIGATÓRIO)** 

Apresentação de wireframes de baixa fidelidade para validar a arquitetura de informação e a disposição dos elementos em telas mobile e desktop, contemplando telas principais e seus fluxos. 

## **LGPD E PRIVACIDADE DA INTERFACE (OBRIGATÓRIO)** 

A LGPD deve ser demonstrada explicitamente na interface e nos fluxos, por meio de avisos, consentimento e clareza no uso dos dados. 

## **ENTREGA TÉCNICA (OBRIGATÓRIA)** 

Nesta seção, o aluno deve optar por **UMA** das duas formas de demonstração da solução: 

- **Opção A: Protótipo de Alta Interatividade,** 

   - **Protótipo Navegável;** 

   - **Ferramenta:** Figma, Adobe XD ou similares. 

   - **Requisito:** O protótipo deve ser fiel ao design final e possuir interatividade total (transições, cliques e fluxos completos). 

   - **Link:** Disponibilizar a **URL pública** para teste do avaliador. 

- **Opção B: Codificação (Desenvolvimento)** 

   - **Tecnologias:** HTML, CSS e JavaScript puros ou frameworks (React, Angular, Vue). 

   - **Dados: Utilizar dados mockados (Mock Data) para simular o cardápio e interações.** 

   - **Links:** É obrigatório fornecer o link do **Repositório (Git)** e a **URL de publicação** (GitHub Pages, Vercel ou Netlify). 



#### AVISO CRITICO (NOTA ZERO) 

Independentemente da op¢ao escolhida, o aluno deve garantir que os links estejam PUBLICOS é funcionais. Se o avaliador nao conseguir acessar o protdtipo ou o site no momento da correcao.3notacde e jem ole 24a 



## **ORIENTAÇÃO FINAL** 

Antes de finalizar e realizar a entrega do trabalho, reflita: **“Se este projeto fosse** 

##### **apresentado em uma entrevista técnica ou empresa, ele se sustentaria?"** 

## **CRITÉRIOS DE AVALIAÇÃO** 

A nota será distribuída da seguinte forma: 

- **20 PONTOS:** Análise do Problema e Requisitos (20 pontos): Avalia o entendimento do estudo de caso e a capacidade de identificar corretamente os requisitos do sistema. 

   - **Serão considerados:** 

      - compreensão do contexto da lanchonete/franquia; 

consideração explícita da multicanalidade (APP/TOTEM/WEB) no levantamento de requisitos e fluxos. 

      - identificação de requisitos funcionais e não funcionais; 

      - consideração explícita de fidelização, pagamento externo e LGPD; 

      - coerência entre o problema apresentado e a solução proposta. 

   - **Critérios de avaliação:** 

      - Insuficiente (0–8): entendimento superficial ou desconectado do estudo de caso 

      - Básico (9–12): requisitos corretos, mas pouco aprofundados 

      - Bom (13–16): requisitos bem definidos e coerentes 

      - Excelente (17–20): visão sistêmica clara, com justificativas técnicas 

- **20 PONTOS: Modelagem e Arquitetura da Interface (20 pontos):** Avalia a capacidade de representar o sistema por meio de modelos e fluxos. 

   - **Serão considerados:** 

      - Diagrama de Casos de Uso; 

      - Jornada do Usuário; 

      - coerência entre atores, fluxos e telas; 

      - alinhamento com o estudo de caso. 

   - **Critérios de avaliação:** 

      - Insuficiente (0-3): diagramas incompletos ou incoerentes 

      - Básico (4-8): diagramas corretos, porém rasos 

      - Bom (9-14): modelagem consistente e bem conectada 

      - Excelente (15-20): modelagem madura, clara e bem justificada 



- **25 PONTOS** : **Wireframes / Protótipos / Interface:** Avalia a representação visual e funcional da solução proposta. 

   - Serão considerados: 

      - wireframes ou protótipos navegáveis; 

      - clareza da navegação; 

      - representação de múltiplos canais (web, app, totem); 

      - aderência aos requisitos funcionais. 

   - **Critérios de avaliação:** 

      - Insuficiente (0-5): telas desconexas ou incompletas 

      - Básico (6-10): telas funcionais, mas com falhas de fluxo 

      - Bom (11-17): telas claras e fluxos bem definidos 

      - Excelente (18-25): experiência coerente, consistente e bem estruturada 

- **15 PONTOS: LGPD, Qualidade e Plano de Testes (15 pontos):** Avalia a preocupação com qualidade, privacidade e validação da interface. 

   - Serão considerados: 

      - presença de elementos visuais relacionados à LGPD (avisos, consentimento); 

      - coerência no tratamento de dados do usuário; 

      - plano de testes da interface; 

      - cenários de validação bem descritos. 

mínimo de 10 cenários de teste (positivos e negativos), com entradas e saídas esperadas, incluindo validações e mensagens de erro. 

   - **Critérios de avaliação:** 

      - Insuficiente (0-3): ausência de testes ou LGPD apenas citada 

      - Básico (4-7): testes simples e LGPD superficial 

      - Bom (8–11): testes e LGPD bem aplicados 

      - Excelente (12-15): abordagem madura e integrada à interface 

- **10 PONTOS: Entrega Técnica (Deploy ou Protótipo Funcional):** Avalia a capacidade de apresentar a solução de forma funcional. 

   - Serão considerados: 

      - link público e acessível do protótipo ou aplicação; 



      - funcionamento básico no momento da correção; 

      - aderência ao que foi documentado. 

   - **Observação** : O foco está na funcionalidade demonstrável, não na complexidade do deploy. 

   - **Critérios de avaliação:** 

      - Insuficiente (0): Links sem acesso, links Indisponíveis ou ausentes; 

      - Básico (1-3): Links com acesso parcial ou inconsistentes; 

      - Bom (4-7): Links acessíveis e com fluxo principal demonstrável; 

      - Excelente (8-10): Acesso pleno + fluxo completo e consistente. 

- **10 PONTOS: Documentação e Postura Profissional:** Avalia a qualidade do material entregue como documento técnico. 

   - Serão considerados: 

      - organização e estrutura do documento; 

      - clareza textual; 

      - uso adequado de linguagem técnica; 

      - organização e padronização do documento conforme o roteiro (seções, referências quando utilizadas e formatação consistente); 

      - referências utilizadas. 

   - **Critérios de avaliação:** 

      - Insuficiente (0-2) 

      - Básico (3-5) 

      - Bom (6-8) 

      - Excelente (9-10) 

o t e i r o d e A t i v i d a d e P r á t i c a d e P r o j e t o M u l t i d i s c i p l i n a r – T r i l h a F r o 

n t - E n d 



### **Tabela Consolidada (CRITÉRIOS DE AVALIAÇÃO)** 

Esta tabela consolida os critérios oficiais de avaliação descritos neste roteiro. Em caso de divergência de formatação entre tabela e texto, prevalece a descrição dos critérios oficiais apresentada neste documento. 

|**Critério(pontos)**|**Evidências essenciais**|**Insuficiente**|**Básico**|
|---|---|---|---|
|Análise do Problema e<br>Requisitos (20)|Requisitos RF/RNF orientados à<br>experiência; multicanal<br>(App/Totem/Web); fidelidade; pagamento<br>externo (fluxo); LGPD.|0 – 8: Superficial/desconectado do<br>caso.|9 – 12: Requisito<br>corretos, pouco<br>aprofundados.|
|Modelagem e Arquitetura da<br>Interface (20)|Casos de uso + Jornada do Usuário;<br>coerência entre atores, fluxos e telas;<br>alinhamento ao caso.|0 – 3: Diagramas<br>incompletos/incoerentes.|4 – 8: Corretos,<br>porém rasos.|
|Wireframes/Protótipos/Interface<br>(25)|Wireframes/protótipo navegável; fluxo<br>completo; múltiplos canais; aderência a<br>RF; clareza de navegação.|0 – 5: Telas<br>desconexas/incompletas.|6. – 10:<br>Funcionais, com<br>falhas de fluxo.|
|LGPD, Qualidade e Plano de<br>Testes (15)|Elementos de consentimento/avisos;<br>tratamento de dados; plano de testes de<br>interface; cenários bem descritos.|0 – 3: Sem testes ou LGPD apenas<br>citada.|4 – 7: Testes<br>simples e LGPD<br>superficial.|
|Entrega Técnica (10)|Link público funcional (protótipo ou<br>deploy); funcionamento básico na<br>correção; aderência ao documentado.|0: Sem acesso/links indisponíveis.|1 – 3: Acesso<br>parcial ou<br>inconsistências.|
|Documentação e Postura<br>Profissional (10)|Documento organizado; linguagem<br>técnica; referências; padronização<br>(ABNT como referência); coerência do<br>relato.|0 – 2: Desorganizado/insuficiente.|3 – 5: Organizad<br>mas incompleto.|





eee 



<!-- Start of picture text -->
eee<br><!-- End of picture text -->



<!-- Start of picture text -->
()<br>cudario<br>; ait<br><<EXTEND>> : = Validar Cliente (UC)<br>y<br>< 3<br><!-- End of picture text -->

eee 



<!-- Start of picture text -->
eee<br><!-- End of picture text -->











1. Base de dados do sistema (exemplo); 2. Usuarios do sistema web; 3. Usuarios do sistema mobile; 

##### Usuarios responsaveis 



<!-- Start of picture text -->
-<br><!-- End of picture text -->

NIC 







##### **Fluxo alternativo** 



N/C 

##### **Regras de negócio** 



RN 1. O cliente possui um identificador interno (ID) gerado pelo sistema. O telefone é um dado cadastral, não um identificador único. 





<!-- Start of picture text -->
O<br>© oa<br><!-- End of picture text -->

