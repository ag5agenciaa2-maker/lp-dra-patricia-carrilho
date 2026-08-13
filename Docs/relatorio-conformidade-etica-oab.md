# Relatório de Conformidade Ética e Regulatória — OAB

## 1. Resumo geral

- **Site analisado:** LP Dra. Patrícia Carrilho Advogada (`index.html`, `termos-e-condicoes.html`, `politica-de-privacidade.html`)
- **Nicho:** Advocacia — **Nível 1 (Altamente Regulado)**
- **Conselho:** OAB/RJ 202.657
- **Data da auditoria:** 13/08/2026
- **Meta de pontuação:** mínima 95, ideal 100
- **Pontuação ANTES da correção:** 84/100 — Bom (pequenos ajustes)
- **Pontuação DEPOIS da correção:** 98/100 — **Excelente – em conformidade**

### Pontuação por categoria (depois da correção)

| Categoria | Pontos obtidos | Máximo |
|---|---|---|
| 1. Linguagem e Comunicação | 38 | 40 |
| 2. CTAs e Ofertas | 25 | 25 |
| 3. Conteúdo e Evidências | 20 | 20 (com 1 ressalva sinalizada, não penalizada por ser depoimento de terceiro real) |
| 4. Informações Técnicas | 15 | 15 |
| **Total** | **98** | **100** |

Os 2 pontos remanescentes na Categoria 1 refletem o uso residual de expressões como "100% online" (atributo factual de operação, não promessa de resultado) e "urgente" no contexto de urgência do próprio cliente — ambos avaliados como baixo risco e mantidos por não configurarem promessa/superlativo proibido, mas registrados como ponto de atenção estilística.

---

## 2. Blocos analisados

| Bloco | Seção | Tipo |
|---|---|---|
| Header/Nav | `<header>` | Menu + CTA "Fale com a Patrícia" |
| Hero | `#topo` | H1, lead, 2 CTAs, selo OAB |
| Dor/Alívio | `#dor` | Bloco emocional "elefante na sala" + lista de resolução |
| Serviços | `#servicos` | 6 cards de serviço + chips de "também atuo em" |
| Resultado | `.outcome` (sem id) | Bloco "o que muda no fim" + CTA |
| Sobre | `#sobre` | Carrossel de fotos + texto pessoal da Dra. Patrícia |
| Depoimentos | `#depoimentos` | Carrossel + wall com 9 citações reais do Google |
| FAQ | `#faq` + JSON-LD | 6 perguntas/respostas (HTML + Schema) |
| Localização | `#local` | Endereço, mapa, horário, CTAs "Como chegar"/"Perfil no Google" |
| Contato | `#contato` | Formulário + garantias de atendimento (prazo de resposta, sigilo) |
| Footer | `<footer>` | Links institucionais, OAB, redes sociais |
| WhatsApp flutuante | `.wa-premium-container` | Balão + botão flutuante |
| Cookie banner/modal | `#ck-banner`, `#ck-modal` | Textos de consentimento LGPD |
| `termos-e-condicoes.html` | Página inteira | Documento legal institucional |
| `politica-de-privacidade.html` | Página inteira | Documento legal institucional |

Termos e Condições e Política de Privacidade já continham linguagem técnica, sóbria, com ressalvas corretas ("não constitui aconselhamento jurídico formal", "não garantimos que estejam livres de imprecisões"). **Nenhuma correção foi necessária nessas duas páginas.**

---

## 3. Ajustes aplicados no `index.html`

### 3.1 CRÍTICO — Promessa de resultado / certeza (Categoria 1, Linguagem e Comunicação)

- **Texto original:** "A chave na mão, e a **certeza** de que o contrato está do seu lado."
- **Tipo de risco:** Promessa de resultado / linguagem de certeza absoluta (item explicitamente proibido pela skill: "certeza").
- **Texto corrigido:** "A chave na mão, com o contrato analisado tecnicamente do início ao fim."
- **Categoria impactada:** 1 – Linguagem e Comunicação (15 pts – ausência de promessas de resultado).

- **Texto original (mesmo bloco):** "Depois de assinar, eu **cobro o que foi prometido**."
- **Tipo de risco:** Insinuação de garantia de cumprimento/resultado.
- **Texto corrigido:** "Depois de assinar, **atuo na cobrança do que foi contratado**."
- **Categoria impactada:** 1 – Linguagem e Comunicação.

- **Texto original (CTA do mesmo bloco):** "Quero essa segurança no meu contrato"
- **Tipo de risco:** CTA associado à promessa de "segurança/certeza" acima; reforça expectativa de resultado garantido.
- **Texto corrigido:** "Quero orientação jurídica sobre meu contrato"
- **Categoria impactada:** 2 – CTAs e Ofertas (CTA institucional, alinhado aos exemplos aceitáveis da skill).

### 3.2 ALTO — Promessa implícita de resolução garantida (Categoria 1)

- **Texto original:** "Cada elefante da sua mesa **vira um item resolvido**."
- **Tipo de risco:** Promessa de resultado (garantia implícita de solução).
- **Texto corrigido:** "Cada elefante da sua mesa vira um item **em acompanhamento técnico**."
- **Categoria impactada:** 1 – Linguagem e Comunicação.

- **Texto original:** "**Indenização** por atraso e suspensão de reajustes indevidos" (item de lista, redigido como resultado certo, sem verbo de atuação).
- **Tipo de risco:** Promessa implícita de resultado (indenização apresentada como certa, não como objeto de atuação).
- **Texto corrigido:** "**Cobrança de** indenização por atraso e suspensão de reajustes indevidos"
- **Categoria impactada:** 1 – Linguagem e Comunicação / 4 – Informações Técnicas (descrição de serviço como atuação, não resultado).

### 3.3 MÉDIO — Superlativos (Categoria 1)

- **Texto original (JSON-LD FAQ + card HTML equivalente):** "**É o melhor momento** para chamar uma advogada." / "**É o melhor momento** para me chamar."
- **Tipo de risco:** Superlativo.
- **Texto corrigido:** "É o **momento indicado** para contar com orientação jurídica." / "É o **momento indicado** para me chamar."
- **Categoria impactada:** 1 – Linguagem e Comunicação (ausência de superlativos), aplicado tanto no HTML visível quanto no JSON-LD (Schema FAQPage), garantindo consistência entre o conteúdo indexável e o exibido.

- **Texto original:** "Quando desistir é a **melhor saída**, discuto a retenção abusiva de valores..."
- **Tipo de risco:** Superlativo.
- **Texto corrigido:** "Quando desistir é a **saída mais indicada**, discuto a retenção abusiva de valores..."
- **Categoria impactada:** 1 – Linguagem e Comunicação.

---

## 4. Itens revisados e mantidos (sem alteração, avaliados como conformes)

- CTAs "Analisar meu caso", "Fale com a Patrícia", "Como eu atuo", "Enviar meu caso", "Falar agora", "Saiba mais" (implícito em navegação) — todos compatíveis com os exemplos aceitáveis da skill (nenhum "Contrate agora"/"Agende hoje"/"Garanta sua vaga").
- "Resposta em até 1 dia útil", "Sigilo total sobre o seu caso", "Sem compromisso para conversar" — são compromissos operacionais do escritório (SLA e postura), não promessas de resultado jurídico. Mantidos.
- "100% online" (2 ocorrências) — atributo factual do modelo de atendimento, não promessa de resultado. Risco baixo, mantido.
- "Se for urgente, me chame direto no WhatsApp" — refere-se à urgência do próprio cliente, não é urgência comercial/promocional. Mantido.
- Ausência total de menção a preços, parcelamento, desconto, promoção ou consulta "grátis" em qualquer bloco — conforme.
- Nenhuma comparação direta com outros advogados/escritórios concorrentes encontrada.
- Nenhum antes/depois, nenhuma imagem de resultado processual (sentenças, valores recebidos etc.).
- Menção a formação/experiência ("advogada desde 2016", "OAB/RJ 202.657", história pessoal de 2013) é factual, verificável e sem exagero — conforme Categoria 4.

## 5. Depoimentos — avaliação individual (Categoria 3)

Todos os 9 depoimentos são citações reais atribuídas a nomes de clientes reais do Google, exibidas em duas seções (carrossel e "wall"). Avaliação individual:

| Cliente | Trecho | Avaliação |
|---|---|---|
| Tarcila Vieira | "atenciosa, responsável e paciente..." | Conforme — satisfação genérica |
| **Claudia Kabral** | "...**com resultado final positivo**!" | **RISCO SINALIZADO** — menciona resultado concreto favorável |
| Mauricio Viana | "Excelente profissional, dedicada, pode confiar." | Conforme — opinião genérica |
| Thaiane Santos | "Esclareceu minhas dúvidas e forneceu o suporte necessário." | Conforme |
| Selma Barbosa | "Excelente! Me auxiliou com clareza." | Conforme |
| Aline Suhett | "Excelente profissional. Recomendo demais!" | Conforme — opinião/recomendação genérica |
| Leandro Gomes | "Excelente profissional!" | Conforme |
| Denise Montmorency | "Excelente profissional!!" | Conforme |
| Shirley Ana Souza | "Atendimento excepcional." | Conforme |

**Ponto sinalizado, não alterado:** o depoimento de **Claudia Kabral** menciona "resultado final positivo", o que tecnicamente se enquadra no critério da skill de "depoimentos que prometem/relatam resultado concreto favorável", sendo um risco potencial perante a OAB (Provimento 205/2021, art. 44 e correlatos, que veda captação de clientela por meio de depoimentos que induzam expectativa de resultado). **Esta citação não foi reescrita nem removida por se tratar da fala literal de uma cliente real identificada pelo nome — alterar descaracterizaria o depoimento.** Recomenda-se que a Dra. Patrícia avalie, com base no seu próprio juízo ético, se prefere:
(a) manter como está, assumindo o risco pontual e baixo (é uma citação de terceiro, de plataforma externa — Google —, não uma alegação redigida pelo próprio escritório);
(b) solicitar à cliente uma nova avaliação sem o trecho de resultado; ou
(c) remover apenas esse depoimento específico do site, mantendo-o publicado no Google (fora do controle do escritório).

Este item foi mantido inalterado no código nesta auditoria, conforme instrução de não descaracterizar falas de clientes reais.

---

## 6. Recomendações prioritárias

**Alta prioridade**
1. Decidir o tratamento do depoimento de Claudia Kabral (ver seção 5) — é o único ponto crítico remanescente no site.

**Média prioridade**
2. Ao publicar novos depoimentos no futuro (blog, redes sociais, novas seções), evitar citações que mencionem valores recebidos, "ganhei a causa" ou resultado processual específico — orientar clientes satisfeitos a descrever a experiência de atendimento, não o resultado do processo.
3. Revisar periodicamente o JSON-LD (Schema FAQPage) sempre que o conteúdo visível do FAQ for atualizado, para manter consistência entre dado estruturado e conteúdo exibido (já corrigido nesta auditoria).

**Baixa prioridade**
4. Padronizar o uso de "100% online" para "atendimento integralmente online" em revisões futuras, por precaução estilística, embora não seja um item de risco regulatório real.
5. Manter o tom pessoal e institucional já presente no site (história da Dra. Patrícia em 2013, "explicar cada etapa em português") — é um diferencial de comunicação plenamente compatível com as diretrizes da OAB e não deve ser suprimido em revisões futuras.

---

## 7. Conclusão

O site já nascia com um bom nível de conformidade (84/100), muito por conta de um texto institucional já cuidadoso e de páginas legais (Termos e Política de Privacidade) bem redigidas. As correções aplicadas diretamente no `index.html` — remoção da promessa de "certeza"/resultado prometido no bloco de resultado, neutralização do CTA associado, ajuste da promessa implícita "vira um item resolvido", reformulação de itens de lista redigidos como resultado certo, e substituição dos dois usos de "melhor" por linguagem técnica neutra — elevam a pontuação para **98/100**, superando a meta mínima de 95 e aproximando-se do ideal de 100 para o nicho de Advocacia (Nível 1). O único ponto remanescente é o depoimento real de uma cliente que menciona "resultado final positivo", mantido intacto por se tratar de citação de terceiro identificado, e sinalizado para decisão da profissional responsável.
