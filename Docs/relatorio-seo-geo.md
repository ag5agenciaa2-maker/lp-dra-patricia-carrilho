# Relatório de Auditoria SEO e GEO — LP Dra. Patrícia Carrilho

Data: 13/08/2026

## 1. O que foi auditado

- `index.html` (arquivo principal), `politica-de-privacidade.html`, `termos-e-condicoes.html`
- `style.css`, `script.js`, `cookie-banner.css`, `cookie-banner.js`
- `robots.txt`
- Ausência de `sitemap.xml` e `llms.txt`
- Todas as tags `<img>` do `index.html` (formato, `loading`, `fetchpriority`, `alt`, `width`/`height`)
- Carregamento de scripts (`defer`/`async`)
- Meta tags, Open Graph, Twitter Cards, Schema.org (JSON-LD)
- NAP (Nome, Endereço, Telefone), FAQs, credenciais (OAB), timestamps
- Régua AG5 de destaque de avaliações Google
- Presença do robô de analytics AG5
- Dados de negócio em `Docs/Informações-da-Empresa-Raiz.md` e `Docs/Dossiê-Site.md` (fonte da verdade usada para tudo abaixo)

## 2. O que foi corrigido/implementado

### Meta tags, Open Graph, Twitter Cards
- Title otimizado com estratégia front-loading: `Advogada Imobiliária em Guaratiba, RJ | Patrícia Carrilho` (antes era um title sem localização no início).
- Meta description reescrita com a cidade/bairro correto (Guaratiba, RJ).
- Adicionado bloco completo de Open Graph (`og:type`, `og:site_name`, `og:title`, `og:description`, `og:url`, `og:image`, `og:locale`).
- Adicionado bloco de Twitter Cards (`twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`).
- Adicionado `<link rel="canonical">`.
- Adicionadas geo tags (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) com as coordenadas reais do escritório (documentadas no dossiê: -22.93466800, -43.56576920).

**Atenção:** essas tags usam um domínio placeholder `https://www.patriciacarrilhoadvogada.com.br/`, sinalizado com comentário HTML no `<head>`, porque **não há domínio final confirmado no projeto** (nenhum arquivo em `Docs/` ou no HTML menciona domínio próprio; o dossiê registra "Site próprio: Não possui"). É preciso substituir esse placeholder pelo domínio real assim que definido, em: canonical, og:url, og:image, twitter:image, JSON-LD (`url`, `image`) e `llms.txt`.

### Schema.org (JSON-LD)
- Implementado `LegalService` com nome, endereço, telefone, geo, horário de funcionamento, `areaServed` (bairros reais do dossiê), `founder` (Patrícia Carrilho, OAB/RJ 202.657), `sameAs` (perfil Google e Instagram) e `aggregateRating` (4.9 / 16 avaliações, dado real do Google Business Profile).
- Implementado `FAQPage` reaproveitando as 6 perguntas/respostas já existentes na seção FAQ do site (dado real, sem invenção).

### H1 e hierarquia de conteúdo
- O H1 original era só um slogan emocional ("Comprar o primeiro apê não precisa ser um risco"), sem keyword + localização — reprovava a regra de H1 otimizado da skill.
- H1 corrigido para: "Advogada de Direito Imobiliário em Guaratiba, Rio de Janeiro. Comprar o primeiro apê não precisa ser um risco." (mantém o slogan como parte emocional, mas agora com keyword principal + localização no início).

### Performance / imagens
- Imagem do hero (`patricia-carrilho-advogada-serio-mesa-escritorio.webp`, LCP element) recebeu `fetchpriority="high"` e `width`/`height` para evitar CLS (antes não tinha nenhum dos dois).
- `script.js` estava sendo carregado sem `defer` (bloqueava parsing); corrigido para `<script src="script.js" defer>`. Validado que o script não depende de execução síncrona antes do parse (não usa `document.write`, seleciona elementos que já existem no DOM acima dele).
- Demais imagens já estavam majoritariamente com `loading="lazy"` e `alt` descritivo; mantidas como estavam.

### GEO / E-E-A-T
- NAP já estava visível em texto (não só em imagem) na seção "Onde estamos" e no rodapé — confirmado, nenhuma ação necessária.
- FAQ já existia com 6 perguntas reais — agora também estruturado em JSON-LD (`FAQPage`) para reforçar GEO.
- Credencial (OAB/RJ 202.657) já visível em múltiplos pontos do site (hero, seção sobre, rodapé) — confirmado, nenhuma ação necessária.
- Adicionado `founder`/credencial no schema para reforçar Expertise/Authoritativeness perante IA.

### Régua AG5 de avaliações Google
- Dado real confirmado em `Docs/Informações-da-Empresa-Raiz.md`: **nota 4,9 com 16 avaliações** no Google Business Profile.
- 16 avaliações está **abaixo da régua de 30** exigida para destacar nota + contagem publicamente.
- Auditoria confirmou que o `index.html` **já não exibe** nenhum destaque numérico de nota/contagem (grep por "5,0", "4,9", "avalia" não retornou destaque visual na página, só o link "Avaliar no Google" e os depoimentos individuais). Ou seja, o site já respeita a régua — nenhuma correção de texto foi necessária.
- O `aggregateRating` (4.9/16) foi incluído no JSON-LD porque a regra permite isso mesmo abaixo da régua visual, já que os depoimentos com estrelas/avaliações reais estão visíveis na página (seção Depoimentos).

### `llms.txt`
- Criado na raiz do projeto (`llms.txt`), seguindo a spec da skill: H1 com nome oficial, blockquote-resumo, bloco de NAP, `## Serviços`, `## Diferenciais`, `## Equipe`, `## Regiões atendidas`, `## Dúvidas frequentes` (reaproveitando o FAQ real) e `## Contato`.
- Todos os dados vêm de `Docs/Informações-da-Empresa-Raiz.md` e `Docs/Dossiê-Site.md`. Nenhuma seção foi inventada; seções sem dado confiável (e-mail, Facebook, LinkedIn) foram omitidas.
- Os links de serviço usam o domínio placeholder mencionado acima — precisa atualização quando o domínio real for definido.

### `robots.txt`
- Adicionado comentário `# LLMs: https://.../llms.txt` referenciando o arquivo criado.
- Liberado explicitamente `Allow: /` para os crawlers de IA: GPTBot, ChatGPT-User, Claude-Web, PerplexityBot e Google-Extended (antes só havia a regra genérica `User-agent: *`, que já cobria isso, mas a liberação explícita deixa claro o intuito de GEO).

## 3. Checklist de itens externos/off-page (o usuário precisa fazer manualmente)

- [ ] **Google My Business (GMB)**: verificar e completar o perfil local, garantir que o NAP do perfil bate exatamente com o do site.
- [ ] **Google Search Console**: submeter o `sitemap.xml` (ver pendência abaixo) e solicitar indexação assim que o site estiver no ar com domínio definitivo.
- [ ] **Google Analytics / Tag Manager**: configurar códigos de rastreamento, se desejado além do robô AG5.
- [ ] **Backlink Building**: buscar backlinks de qualidade em diretórios locais e parceiros do setor jurídico/imobiliário.
- [ ] **Redes sociais**: linkar de volta para o site a partir do Instagram (@patriciacarrilho.adv) e outras redes que vierem a existir.
- [ ] **PageSpeed Insights**: rodar teste ao vivo assim que o site estiver publicado no domínio final, para capturar gargalos de servidor/CDN.
- [ ] **Hosting Security**: garantir HTTPS/SSL forçado no domínio final.

## 4. Itens não resolvidos por falta de dado confiável

1. **Domínio final do site.** Não há nenhum registro de domínio próprio nos `Docs/` nem no HTML (o dossiê explicitamente diz "Site próprio: Não possui"). Isso bloqueou:
   - `sitemap.xml` (não foi criado, pois exigiria `<loc>` com URL real — criar com domínio errado seria pior do que não ter o arquivo).
   - Valores definitivos de canonical, `og:url`, `og:image`, `twitter:image` e URLs do `llms.txt`, que hoje usam o placeholder `https://www.patriciacarrilhoadvogada.com.br/` marcado com comentário `<!-- ... -->` no `<head>` do `index.html`. **Ação necessária:** confirmar o domínio real com o cliente/agência e substituir o placeholder em todos esses pontos (busca por `patriciacarrilhoadvogada.com.br` no projeto localiza todas as ocorrências).

2. **Slug do cliente no AG5 Content Control.** O robô de analytics AG5 (`<script src="https://control-blog.ag5agencia.site/r.js" data-c="SLUG-DO-CLIENTE" defer></script>`) não foi inserido porque o slug não pode ser adivinhado (slug errado = eventos descartados silenciosamente). Deixado um comentário no `index.html` antes do `</body>` indicando a pendência. **Ação necessária:** confirmar o slug cadastrado no painel AG5 Content Control e inserir a linha em todas as páginas `.html` (`index.html`, `politica-de-privacidade.html`, `termos-e-condicoes.html`).

3. **CNPJ.** O dossiê marca como "não informado, atuação possivelmente como pessoa física/autônoma, confirmar com cliente". Não foi incluído em nenhum lugar (schema, llms.txt) por não haver confirmação.

4. **E-mail, Facebook e LinkedIn.** Não informados em nenhum documento do projeto; omitidos do `llms.txt` e não usados em nenhuma tag.

5. **URL limpa (regra AG5 "zero .html").** O projeto ainda não tem confirmação de que será hospedado em Cloudflare Pages com roteamento de URL limpa. Como não há `sitemap.xml` nem domínio definitivo, essa regra não pôde ser aplicada agora. Quando o domínio e o host forem confirmados, revisar `href` de navegação, canonical, `og:url`, JSON-LD e criar o `sitemap.xml` já em formato de URL limpa (sem `.html`).
