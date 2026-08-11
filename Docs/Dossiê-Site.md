Quero que você crie o Site institucional Editorial Segurança em 3 arquivos (index.html, style.css e script.js), usando APENAS HTML5 semântico, CSS3 (Flexbox, Grid, variáveis CSS) e JavaScript Vanilla ES6, sem qualquer framework ou biblioteca externa.
REGRA: Use imagens genéricas premium (Unsplash) relacionadas ao nicho caso não haja imagens reais. Inclua URLs diretas das imagens.

IDENTIDADE VISUAL BASE:
Paleta: 
--color-navy: #1C2751 (primária — fundos institucionais, header, textos de destaque)
--color-sage: #8A9585 (secundária — ícones, hovers, linha "AG5" do rodapé, detalhes)
--color-white: #FFFFFF (texto sobre navy, fundos claros)
--color-neutral: #F0F0F0 (fundo alternativo neutro entre seções)

Tipografia: Fraunces (títulos, editorial/serifado com personalidade — evita o clichê "Playfair Display" repetido no nicho jurídico) + Inter (corpo de texto, legibilidade)
Estilo: Editorial elegante e humanizado — não corporativo frio nem "luxury law firm" distante
Sensação: Segurança jurídica, acolhimento, proximidade pessoal, confiança de quem já viveu o problema do cliente

LAYOUT ESCOLHIDO:
Hero: Opção A — Split assimétrico 55/45, texto à esquerda (headline + subtítulo + CTA duplo), retrato profissional de Patrícia à direita com clip-path diagonal recortando a borda entre as duas metades. Referência de breakdown: LegalFlow X (Home V1) usa estrutura similar de "headline pessoal + retrato à direita + CTA duplo"; adaptar clip-path diagonal (inspirado no recurso de camadas de profundidade da Justicia) para diferenciar do template original.
Serviços: Opção F — Numeração grande (01, 02, 03...) como elemento visual dominante, cada serviço com número em Fraunces grande (60-80px) semi-transparente ao fundo do card, título + descrição curta em Inter. Adaptação da lista textual de "Practice Areas" do LegalFlow X, substituindo o formato lista simples por cards numerados com mais impacto visual.
Depoimentos: Opção E — Carrossel fade com nota Google visível (4.9 estrelas / 16 avaliações), logo oficial do Google, cards com nome, tempo da avaliação e texto verbatim. Inspirado no carrossel de testemunhos do LegalFlow X, porém substituindo textos fictícios por avaliações reais do Google Business.
Sobre/Credenciais: Opção A — Counters animados (ex: ano de fundação 2016, nota Google 4.9, número de avaliações 16) + texto curto sobre a história pessoal de Patrícia e o motivo que a levou à advocacia imobiliária. Inspirado na seção "Why Justicia Law?" (citação + assinatura), adaptado para depoimento em primeira pessoa da própria advogada.

ANIMAÇÕES DO PROJETO (do breakdown Webflow):
- Hero (texto) → opacity 0→1 e translateY(30px→0) em 700ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: load, stagger: sim (headline, subtítulo, CTA a cada 100ms)
- Hero (imagem) → clip-path diagonal reveal + scale(1.08→1) em 900ms, easing: cubic-bezier(0.16,1,0.3,1), trigger: load, stagger: não
- Navbar → background transparente→navy sólido + altura 72px→56px em 300ms, easing: ease, trigger: scroll (>80px)
- Cards de Serviço (numeração) → opacity 0→1 e translateX(-20px→0) em 500ms, easing: ease-out, trigger: scroll (IntersectionObserver, threshold 0.2), stagger: sim (120ms entre cards)
- Counters (Sobre) → contagem numérica de 0 até valor final em 1800ms, easing: ease-out, trigger: scroll (dispara uma única vez)
- Depoimentos (carrossel) → cross-fade opacity 0→1 em 600ms, easing: ease-in-out, trigger: autoplay (intervalo 6000ms) + clique manual, pausa on hover
- FAQ (acordeão) → max-height 0→auto + opacity 0→1 em 350ms, easing: ease, trigger: click; ícone chevron rotate 0deg→180deg em 250ms
- CTA + Formulário → opacity 0→1 e translateY(24px→0) em 600ms, easing: ease-out, trigger: scroll

SEÇÕES OBRIGATÓRIAS (intercalar adicionado todas sempre que possivel e adicionar novas conforme o nicho):

Navbar
Hero Editorial Segurança
Seção de alto impacto: dor e solução do público-alvo (medo de comprar imóvel na planta e não ter segurança jurídica)
Serviços — numeração grande (01, 02, 03...)
Seção de encantamento com imagens de resultado/segurança/pessoas
Sobre/Credenciais — counters animados + história pessoal
Depoimentos — carrossel fade + nota Google
FAQ
Localização: endereço + mapa + botão "Como Chegar" + contatos e redes sociais
CTA com formulário ao lado
Rodapé + Créditos

RODAPÉ — coluna de contato (com ícones, todos clicáveis):
Nome → link Google Business: https://share.google/VdkKJ027XYUEv48NA
Endereço → link Google Maps rota (ver link completo na seção 2)
Telefone/WhatsApp → (21) 99251-3639

CRÉDITOS:
Esquerda: © Patrícia Carrilho Advogada 2026
Direita: Desenvolvido por AG5 Agência (AG5 em destaque na cor #8A9585, link para www.ag5agencia.com.br)

DIRETRIZES ANTI-GENÉRICO:
Sem hero centralizado com fundo escuro e texto branco genérico
Sem fade-up igual em todas as seções
Sem paleta azul + branco + cinza (usar navy + sage/verde-oliva como contraponto ao azul saturado padrão do nicho)
Sem 3 colunas de ícone + título + texto

QUALIDADE DE CÓDIGO:
HTML semântico + IDs de ancoragem em todas as seções
Variáveis CSS no :root para cores, fontes e espaçamentos
Mobile-first com media queries (480/768/1024/1280px)
IntersectionObserver para animações de scroll (nunca scroll event direto)
will-change: transform, @media (prefers-reduced-motion), lazy loading
Formulário com validação real

OPCIONAL:
Seção de avaliações Google com logo oficial e cards animados (recomendado — dados reais disponíveis)
1 — MÍDIAS PRINCIPAIS
Tipo	Status	Arquivo
Foto da fachada	❌ Ausente	—
Fotos internas (escritório)	✅ 1 recebida	PATRIC_1.JPE — placa "PATRÍCIA CARRILHO ADVOGADA" na parede, mesa de trabalho
Fotos dos proprietários/advogada	✅ 4 recebidas	PAE1AC_1.JPG, PA4F69_1.JPG, PADA4D_1.JPG, PATRIC_1.PNG — retratos profissionais de Patrícia Carrilho
Fotos da equipe	❌ Ausente (atuação solo — advogada individual, sem equipe declarada)	
Logotipo	✅ Recebido	Logotipo.png — fundo navy, brasão geométrico + tipografia serifada
Print de Instagram	✅ Recebido (referência de estilo, não é foto de estoque utilizável)	Print-Instagram.png
Vídeos	❌ 0 declarados, 0 recebidos (não é pendência — cliente confirmou não possuir)	

Quantidade declarada pelo cliente: 32 fotos (contando com a logo) / 0 vídeos.
Quantidade efetivamente recebida: 6 arquivos (1 logo + 5 fotos reais).
Gap de mídia: 26 fotos declaradas não entregues. Seções que exigiriam fotos adicionais (fachada, ambiente interno detalhado, atendimento ao cliente, bairros de atuação) deverão usar imagens Unsplash premium do nicho imobiliário/jurídico como preenchimento, conforme regra do comando.

2 — INFORMAÇÕES DA EMPRESA

Nome: Patrícia Carrillho Advogada (grafia do formulário) / Patrícia Carrilho Advogada (grafia do logotipo e Instagram — usar esta como oficial, conforme identidade visual)
Nicho: Direito Imobiliário
Descrição institucional: Escritório de advocacia localizado em Campo Grande, Rio de Janeiro, atuante em Direito Imobiliário, Cível e Extrajudicial. Atendimento a pessoas físicas compradoras de imóvel na planta que buscam regularizar sua situação, com foco estratégico na defesa de consumidores em ações contra construtoras. Atuação técnica em vícios construtivos, descumprimento contratual e práticas abusivas.
Proposta de valor: Ajudar quem vai comprar o primeiro apartamento a não cair em furada — da análise do contrato às chaves ("Método Primeiro Apê").
Público-alvo: Pessoas físicas compradoras de imóvel na planta, especialmente de primeira compra, enfrentando atraso na entrega, defeitos de obra ou insegurança contratual.

Principais serviços (top 5):

Ações de atraso na entrega de imóvel na planta
Ações de defeito de obra
Distrato imobiliário
Due diligence (diligência prévia) imobiliária
Assessoria em compra e venda de imóvel

Lista completa de serviços: Ações de atraso entrega de imóvel na planta | Ações defeito de obra | Distrato imobiliário | Due diligence imobiliária | Assessoria compra e venda de imóvel | Inventário | Divórcio | Notificações | Ações possessórias | Ações indenizatórias | Adjudicação compulsória

Diferenciais: Atendimento humanizado e orientação clara; segurança jurídica personalizada; especialização em consumidores lesados por construtoras; atendimento online no Rio de Janeiro.

História: Negócio fundado em janeiro de 2016 por Patrícia Carrilho. Ela começou a atuar com direito imobiliário após trabalhar em escritório especializado em ações contra construtoras; em 2013, viveu pessoalmente o atraso na entrega de um imóvel na planta que havia adquirido, e essa dor pessoal a motivou a atuar na área para ajudar pessoas no mesmo problema. O escritório atende com ética, comprometimento e conhecimento da legislação imobiliária, com foco em orientação clara e segurança jurídica.

Registro profissional: OAB/RJ 202.657

Contato:

Telefone/WhatsApp: (21) 99251-3639
E-mail: ❌ Não informado
Endereço: R. Haroldo de Freitas Camacho, 21 - Guaratiba, Rio de Janeiro - RJ, 23047-530
Bairros de atendimento: Campo Grande, Guaratiba, Santa Cruz, Bangu, Barra da Tijuca, Recreio
Horário: Seg. a Sex. 9h–18h | Sáb./Dom. fechado | Feriados fechado

Links:

Site próprio: Não possui
Instagram: @patriciacarrilho.adv — https://www.instagram.com/patriciacarrilho.adv/ (1.068 posts, 1.093 seguidores)
Facebook: ❌ Não informado
LinkedIn: ❌ Não informado
Google Business: https://share.google/VdkKJ027XYUEv48NA
Link de avaliação: https://search.google.com/local/writereview?placeid=ChIJzcmlUKjlmwARBI-Lps0jfwU
Rota Google Maps: fornecida no arquivo original (endereço completo acima)
Iframe de mapa e tour virtual: fornecidos (ver arquivo fonte)

Documentação:

CNPJ: ❌ Não informado (atuação possivelmente como pessoa física/autônoma — confirmar com cliente antes de decidir se aplica ao rodapé)
Registro profissional: OAB/RJ 202.657 ✅

Dados extras (extensão PlePer Local / Google Business):

Categorias: Advogado imobiliário, Advogado contencioso, Advogado(a) civil, Consultoria, Advogado de Direito de Família
Avaliações Google: 16 | Nota: 4,9
Fotos no perfil Google: 14
Verificado ✅
3 — AVALIAÇÕES

Plataforma: Google Business
Total de avaliações: 16
Nota média: 4,9

Listagem (ordem decrescente de relevância, conforme fornecida — não há indicação de nota individual por avaliação, apenas nota geral do perfil):

Mauricio Viana — 7 meses atrás — "Excelente profissional, dedicada, pode confiar. Eu recomendo!"

Aline Suhett (Local Guide) — 11 meses atrás — "Excelente profissional. Recomendo demais!"

Claudia Kabral — 1 ano atrás — "Foi ótima, encontrei exatamente o que procurava. Dedicação, segurança, experiência, responsabilidade, credibilidade e com resultado final positivo!"

Thaiane Santos — 1 ano atrás — "Profissional muito atenciosa. Esclareceu minhas dúvidas e forneceu o suporte necessário."

Leandro Gomes (Local Guide) — 7 meses atrás — "Excelente profissional!"

Selma Barbosa — 10 meses atrás — "Excelente! Me auxiliou com clareza."

Denise Montmorency (Local Guide) — 11 meses atrás — "Excelente profissional!!"

Shirley Ana Souza — 7 meses atrás — "Atendimento excepcional."

Tarcila Vieira — 3 meses atrás — "A doutora Patrícia foi muito atenciosa, responsável e paciente. Sempre pronta a responder todas as dúvidas durante o processo."

Análise de padrões: Temas recorrentes — dedicação, clareza na comunicação, segurança/confiança, paciência e excelência no atendimento. Palavras-chave para copywriting: "atenciosa", "excelente profissional", "segurança", "clareza", "dedicação". Nenhum funcionário além da própria Patrícia é mencionado nas avaliações, reforçando o posicionamento de marca pessoal.

4 — ANÁLISE DE BRANDING

Nicho: Direito Imobiliário (marca pessoal de advogada)
Posicionamento: Médio — acessível e humanizado, não "luxury corporate law". A proposta de valor mira o comprador de primeiro imóvel, não grandes corporações.

Estilo visual predominante: Editorial elegante e humanizado, com influência de "personal brand" digital (consistente com sua presença ativa no Instagram, onde usa peças gráficas em navy + branco com forte apelo educativo/didático).

Paleta de cores extraída do logotipo (Python/Pillow, dois passes):

Navy institucional: 
#1C2751 (cor dominante do logo, ~71% da composição)
Sage/verde-oliva: 
#8A9585 (cor secundária do brasão, elemento diferenciador)
Branco: 
#FFFFFF (tipografia sobre fundo navy)

Direção estética: A combinação navy + sage foge do azul saturado genérico tão comum no nicho jurídico (visto também nos templates Justicia e LegalFlow X, que usam paletas azul-corporativas convencionais). O verde-oliva/sage como contraponto ao navy cria uma identidade mais quente e pessoal, coerente com o posicionamento humanizado da marca.

Sensação de marca: Segurança jurídica, acolhimento, proteção patrimonial, proximidade — uma advogada que "já passou pelo mesmo problema" do cliente, não uma instituição distante.

Observação sobre fotografia da marca: As fotos existentes mostram Patrícia em ambiente de escritório clean, com elementos pessoais (elefantes decorativos, bonecos colecionáveis na estante) que humanizam o espaço — bom material para uma seção "Sobre" com tom pessoal, mesmo sendo poucas fotos.

Referências de personal brands premium no nicho jurídico/consultivo: não solicitado pesquisa externa nesta etapa; recomenda-se buscar caso o cliente deseje benchmarking direto.

5 — CHECKLIST DE PENDÊNCIAS
🔴 Bloqueantes
E-mail institucional — não informado (necessário para formulário de contato e rodapé)
Foto da fachada do escritório — ausente
Confirmação sobre CNPJ (aplicável ou não, já que a atuação pode ser pessoa física) — para uso correto nos créditos/rodapé se exigido legalmente
BASE_CONHECIMENTO_AG5.md — ausente; impede checagem de diferenciação de paleta/layout frente a outros sites jurídicos já construídos pela AG5
🟡 Não bloqueantes
26 fotos declaradas (32 total menos 6 recebidas) não entregues — usar Unsplash premium do nicho imobiliário/jurídico como preenchimento
Facebook e LinkedIn — não informados (footer pode omitir esses ícones)
Fotos de equipe — não aplicável (atuação solo confirmada pelo contexto, mas vale confirmar com cliente)
Vídeos — 0 declarados, não é pendência
6 — ANÁLISE DE REFERÊNCIAS WEBFLOW
TEMPLATE 1 — Justicia (BRIX Templates) — https://justiciatemplate.webflow.io/home

HERO: Fullscreen com vídeo de fundo em loop, overlay escuro, título institucional ("We are Justicia, a Law Firm in San Francisco, CA") alinhado à esquerda ocupando ~50% da largura, CTA duplo ("Contact Us" / "Practice Areas"), seta de scroll animada apontando para seção de prêmios/selos.
NAV: Sticky, provavelmente transparente sobre o hero e sólida ao rolar (padrão comum Webflow); CTA "Contact Us" duplicado no header.
TIPOGRAFIA: Não determinável com precisão via extração de markdown (fontes não expostas no fetch); visualmente sugere títulos em peso bold grande e corpo mais leve — recomenda-se inspeção visual complementar se necessário fidelidade tipográfica exata.
CORES: Regra do projeto — usar apenas as cores da nossa análise de branding (
#1C2751, 
#8A9585, 
#FFFFFF), aplicando-as sobre a estrutura do template, nunca a paleta azul-corporativa original.
SERVIÇOS/CARDS: Seção "Practice Areas" — grid de 6 itens com ícone SVG customizado, título e texto curto, navegação por setas laterais (carrossel), cada card com "Learn More".
ANIMAÇÕES (técnico): selos de prêmios → fade-in sequencial em linha, trigger scroll, stagger sim; imagens de "Case Results" → reveal com overlay numérico grande sobreposto ("$46,000,000"), sugerindo uso de contadores/números grandes como elemento de prova social visual.
MICRO-INTERAÇÕES: setas de carrossel com hover state; padrão de "Learn More" com sublinhado ao passar o mouse (convenção Webflow).
ELEMENTOS DECORATIVOS: padrões de pontos (dot pattern SVG) posicionados atrás das seções "Sobre", "Depoimentos" e "Contato"; assinatura manuscrita SVG na seção "Why Justicia Law?".
RESUMO CONSTRUTIVO: Para recriar o estilo Justicia adaptado ao nosso branding, use um hero fullscreen com imagem estática de alta qualidade (substituindo o vídeo, já que não há vídeo do cliente) em navy com overlay, texto institucional alinhado à esquerda, e replique o recurso de "número grande sobreposto à imagem" na seção de credenciais/resultados usando os dados reais (nota 4,9, ano de fundação 2016, 16 avaliações) em vez de valores financeiros fictícios.

TEMPLATE 2 — LegalFlow X, Home V1 (BRIX Templates) — https://legalflowtemplate.webflow.io/home-pages/home-v1

HERO: Split assimétrico — headline pessoal em primeira pessoa ("I'm John Carter, Corporate Lawyer") à esquerda, retrato de corpo/busto do advogado à direita, CTA duplo ("Contact me" / "About me"). Estrutura de marca pessoal, altamente aplicável ao caso de Patrícia Carrilho.
NAV: Header em duas camadas — barra utilitária superior fina (e-mail, telefone, redes sociais) + barra de navegação principal sticky abaixo.
TIPOGRAFIA: Não determinável com precisão via markdown; estrutura sugere hierarquia editorial (headline grande, corpo regular).
CORES: Aplicar exclusivamente 
#1C2751, 
#8A9585, 
#FFFFFF, 
#F0F0F0 sobre a estrutura, substituindo a paleta azul-corporativa original do template.
SERVIÇOS/CARDS: "A broad offer of practice areas" — lista de 6 itens em formato texto (título + descrição curta), sem ícones gráficos, mais editorial que a Justicia; cada item é um link individual.
ANIMAÇÕES (técnico): não expostas explicitamente via markdown; assumir padrão Webflow default de fade-in ao carregar seções, trigger scroll.
MICRO-INTERAÇÕES: header em duas camadas com hover sublinhado nos links de navegação; cards de depoimento com foto + nome + cargo, estrutura em carrossel horizontal repetido.
ELEMENTOS DECORATIVOS: mínimos — foco em espaço em branco generoso, menos elementos gráficos de fundo que a Justicia, reforçando um tom mais "portfólio pessoal" que "instituição corporativa".
RESUMO CONSTRUTIVO: Para recriar o estilo LegalFlow X adaptado, use a estrutura de hero pessoal (nome + especialidade + CTA duplo) com o retrato real de Patrícia à direita, header em duas camadas para reforçar contato direto (telefone/WhatsApp sempre visível), e substitua a seção "practice areas" em lista simples pelo formato numerado (01, 02, 03) escolhido no sistema de variação, para dar mais peso visual à extensa lista de serviços jurídicos da cliente.

7 — SISTEMA DE VARIAÇÃO DE LAYOUT

HERO: [X] A) Split assimétrico 55/45 — texto esquerda, imagem com clip-path diagonal direita
Justificativa: Aproveita o único retrato de alta qualidade disponível (PAE1AC_1.JPG ou PATRIC_1.PNG) e reforça a marca pessoal, diferenciando-se do hero de vídeo/fullscreen genérico visto na Justicia.

SERVIÇOS: [X] F) Numeração grande (01, 02, 03) como elemento visual
Justificativa: A cliente possui lista extensa de serviços (11 itens no total); a numeração grande dá hierarquia visual sem depender de fotos ou ícones customizados, mitigando o gap de mídia.

DEPOIMENTOS: [X] E) Carrossel fade + nota Google visível
Justificativa: Dados reais e verificados (4,9 estrelas / 16 avaliações) disponíveis — não é necessário fabricar prova social, apenas estruturar o que já existe.

SOBRE/CREDENCIAIS: [X] A) Counters animados + texto curto
Justificativa: Substitui a necessidade de múltiplas fotos de equipe/escritório (inexistentes) por dados numéricos reais e a história pessoal já fornecida pela cliente (fundação 2016, motivação pessoal, OAB/RJ 202.657).

⚠️ Combinação registrada: HERO-A + SERV-F + DEPO-E + SOBRE-A.