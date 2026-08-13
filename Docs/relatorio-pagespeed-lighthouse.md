# Relatório de Auditoria PageSpeed / Lighthouse — LP Dra. Patrícia Carrilho

Data: 13/08/2026
Escopo: `index.html`, `politica-de-privacidade.html`, `termos-e-condicoes.html`, `style.css`, `script.js`, `cookie-banner.js`, `cookie-banner.css`, `Assets/`
Metodologia: Skill AG5 PageSpeed/Lighthouse — checklist completo aplicado às 3 páginas, priorizando mobile, sem alterar o layout visual percebido.

---

## 1. Performance

### Corrigido automaticamente

- **Imagens PNG → WebP (redução de ~90–96%)**: as 7 imagens de fundo dos cards de serviço (`servico-*.png`, ~5MB no total) foram convertidas para `.webp` qualidade 82, resultando em **~516KB no total** (economia de ~4,5MB). Todas as referências em `index.html` foram atualizadas e os `.png` originais removidos.
- **Redimensionamento de imagens sobre-dimensionadas**: 7 fotos do carrossel "Sobre" estavam em resolução de câmera bruta (4016×6016 / 6016×4016, até 1,1MB cada) sendo exibidas em apenas ~320×430px. Foram redimensionadas para ~900px no lado maior (cobre até 2× DPR no tamanho exibido), reduzindo de **5,7MB para 238KB** (economia de ~5,5MB), sem qualquer alteração perceptível de nitidez no tamanho exibido.
- **Imagem do hero** (`patricia-carrilho-advogada-serio-mesa-escritorio.webp`) redimensionada de 6016×4016 (625KB) para 1800×1202 (91KB) — dimensão adequada para exibição em `width=900` com retina.
- **Imagem "elefantes na mesa"** (`ds__weight-img`, 700px de exibição) redimensionada de 4016×6016 (875KB) para 935×1400 (75KB).
- **Avatar do balão de WhatsApp** (exibido em 48×48px) redimensionado de 6016×4016 (769KB) para 200×134 (4KB) — redução de 99,5%.
- **`width`/`height` adicionados em todas as `<img>`** que ainda não tinham (logo do nav, footer, drawer; imagens de serviço; imagens do carrossel "Sobre") — previne CLS.
- **`loading="lazy"` adicionado** nas imagens abaixo do fold que ainda não tinham (imagem "resultado" da seção outcome, 7 imagens do carrossel "Sobre").
- **Preload da imagem LCP com `fetchpriority="high"`**: já existia no `<img>` do hero; adicionado também `<link rel="preload" as="image" fetchpriority="high">` no `<head>` do `index.html` apontando para a mesma imagem, garantindo descoberta antecipada pelo parser.
- **Elemento LCP sem animação de entrada (correção crítica)**: o eyebrow, `<h1>`, `<p class="lead">` e `.btn-row` do hero tinham a classe `.rv`, que aplica `opacity:0` até o JS (via `IntersectionObserver`) adicionar `.is-in` — com um "safety net" de até 2500ms. Isso atrasava artificialmente o LCP. A classe `.rv` foi removida desses elementos (ficam visíveis imediatamente); o restante do site continua usando o sistema de reveal-on-scroll normalmente.
- **Google Fonts convertido para carregamento assíncrono** (preload + onload trick + `<noscript>` fallback) nas 3 páginas — elimina o bloqueio de renderização que a tag `<link rel="stylesheet">` síncrona causava.
- **CSS não crítico (`cookie-banner.css`) convertido para carregamento assíncrono** (mesmo padrão) nas 3 páginas.
- **CSS crítico inline no `<head>`**: adicionado bloco `<style>` com fallback de fonte (`Georgia, 'Times New Roman', serif`) para o `<h1>`, garantindo que o texto renderize antes da fonte externa (Fraunces) chegar.
- **Scroll listener com rAF batching**: o listener de scroll do header (`onScroll`) já usava `{ passive: true }`, mas fazia leitura+escrita de DOM diretamente a cada evento de scroll. Agora está empacotado em `requestAnimationFrame` (throttling via `rafPending`), evitando forced reflow.
- **`document.body.style.overflow` inline removido** do `cookie-banner.js` (usado ao abrir/fechar o modal de preferências) e substituído por `classList.add/remove('no-scroll')`, reutilizando o padrão já existente no CSS (`body.drawer-open{overflow:hidden}`, agora `body.drawer-open,body.no-scroll{overflow:hidden}`).
- **Bug crítico corrigido — carrossel sem guarda `if (carousel)`**: o bloco do carrossel de depoimentos em `script.js` acessava `document.getElementById('carousel')` sem verificar se o elemento existia. Como `#carousel` só existe em `index.html`, isso lançava `TypeError` nas páginas `politica-de-privacidade.html` e `termos-e-condicoes.html`, interrompendo a execução do restante do `script.js` — quebrando também o menu hambúrguer, o drawer mobile e o scroll do header nessas páginas. Agora todo o bloco do carrossel está dentro de `if (carousel) { ... }`.
- **Sem `setInterval` duplicado**: verificado — existe apenas um timer por carrossel (depoimentos usa `setInterval`; carrossel "Sobre" é 100% por clique, sem timer).
- **Animações de stagger via `classList`**: já estava correto no projeto (`.rv` + `classList.add('is-in')`, sem `style.opacity`/`style.transform` inline via JS).
- **Nenhum Font Awesome ou ícone de CDN externo encontrado**: confirmado que o projeto já usa 100% SVG inline.
- **Scripts com `defer` confirmado** em todas as 3 páginas (`cookie-banner.js` e `script.js`), nenhum script bloqueante no `<head>`.

### Pendente de aprovação visual

Nenhum item de Performance exigiu alteração visual perceptível além da remoção do fade-in do hero (já aplicada, pois é uma correção mandatória de LCP prevista explicitamente na skill, com impacto visual mínimo: o texto do hero aparece imediatamente em vez de com fade-in de ~0,7s).

---

## 2. Acessibilidade

### Corrigido automaticamente

- **Contraste WCAG 4.5:1** — opacidades de texto branco sobre fundo escuro elevadas para o mínimo seguro (0,78+):
  - `.ck-btn--outline` (banner de cookies): 0,38 → 0,78 (hover 0,65 → 0,95)
  - `.ck-btn--ghost` (banner de cookies): 0,30 → 0,78
  - `.ck-modal__close` (botão fechar modal, fundo navy): 0,55 → 0,82
  - `.footer__icon`: 0,55 → 0,78
  - `.footer-legal-links` / `.footer-legal-links a`: 0,40 → 0,78
  - `.footer-cookie-link`: 0,60 → 0,82
  - `.location__row dt` (labels do card de endereço, navy sobre branco): 0,50 → 0,72 (ratio 3,05:1 → 5,88:1)
  - `.muted` (navy sobre branco): 0,60 → 0,68 (ratio 4,05:1 → 5,17:1)
- **Touch targets ≥ 44×44px** via padding, sem alterar o visual:
  - Dots do carrossel de depoimentos (`.dots button`): visual mantido em 38×3px, área de toque expandida para 38×44px via `padding` + `background-clip: content-box`.
  - Botão fechar do modal de cookies (`.ck-modal__close`): visual mantido em 26×26px, área de toque expandida para 44×44px via pseudo-elemento `::before`.
  - Links do rodapé legal (`.footer-legal-links a`) e link "Cookies" (`.footer-cookie-link`): `padding: 8px 0` adicionado.
- **ARIA do carrossel de depoimentos**: os dots (`role="tablist"` no container já existia) agora recebem `role="tab"` + `aria-selected="true/false"` atualizado dinamicamente a cada troca de slide (antes só tinham `role="tab"` estático sem `aria-selected`).
- **`<nav>` com `aria-label` único**: confirmado — "Navegação principal" (header) e "Navegação mobile" (drawer) já estavam corretos nas 3 páginas.
- **`<iframe>` do mapa com `title`**: confirmado, já presente ("Mapa do escritório").
- **`lang="pt-BR"`** no `<html>` das 3 páginas: confirmado.
- **`<title>` descritivo** nas 3 páginas: confirmado.
- **`alt` em todas as imagens**: confirmado, todas as `<img>` têm `alt` descritivo (ou decorativo quando aplicável).
- **Ícones decorativos com `aria-hidden="true"`**: confirmado em todos os SVGs inline dentro de links/botões.
- **Checkboxes do modal de cookies**: usam `aria-label` no `<label class="ck-toggle">` que envolve o `<input>` — padrão válido (o input já está associado ao label por aninhamento, sem necessidade de `id`/`for` explícitos). Os campos do formulário de contato seguem o mesmo padrão (`<label><span>Nome</span><input .../></label>`), também válido.
- **Múltiplos links com o mesmo destino**: os `aria-label` no `nav__cta`, `wa-main-btn`, ícones de redes sociais e botões do carrossel já eram distintos/descritivos nas auditorias anteriores — confirmado sem regressão.
- **Hierarquia de headings H1→H2→H3**: verificada em todo o `index.html` — sem pulos de nível.

### Pendente de aprovação visual

- **Cor `--color-sage` (`#8A9585`) usada em `.eyebrow`** (rótulos como "Direito Imobiliário · Rio de Janeiro") sobre fundo branco/claro tem contraste de **3,13:1**, abaixo do mínimo de 4,5:1 para texto pequeno (12,5px uppercase). Essa é a cor de destaque da marca, usada em vários pontos do site (botões, links, título). Escurecer essa cor especificamente no contexto `.eyebrow` sobre fundo claro é uma mudança visual (o tom fica um verde-oliva mais escuro) e não foi aplicada sem aprovação.
  - **Métrica que melhora**: auditoria de contraste de cores (Acessibilidade).
  - **Impacto visual**: o texto do "eyebrow" (rótulos pequenos acima dos títulos de seção) ficaria ligeiramente mais escuro/saturado quando sobre fundo branco. Em fundos escuros (`.eyebrow--sage` sobre navy) o contraste já é adequado e não seria alterado.
  - **Se aprovado**: pode-se usar uma variante `.eyebrow` mais escura especificamente para fundos claros (ex.: `color: #6b7566` em vez de `#8A9585`), sem alterar o `--color-sage` global usado em botões/links.

---

## 3. Práticas recomendadas

### Corrigido automaticamente

- **`target="_blank"` sem `rel="noopener noreferrer"` completo**: encontrados **21 links** nas 3 páginas usando apenas `rel="noopener"` (WhatsApp, Google Maps, Instagram, avaliação Google, site da AG5). Todos foram corrigidos para `rel="noopener noreferrer"`.
- **Nenhum recurso HTTP (não-HTTPS)** encontrado em nenhuma das 3 páginas — confirmado via busca por `src="http://` / `href="http://"`.
- **Nenhuma API obsoleta ou padrão inseguro** identificado no JS.

### Pendente de aprovação visual

Nenhum item.

---

## 4. SEO

### Corrigido automaticamente

Nenhuma correção adicional foi necessária — checklist de SEO já estava conforme de auditorias anteriores:

- `<meta name="description">` presente e única em cada uma das 3 páginas.
- `<link rel="canonical">` presente em `index.html` (domínio placeholder documentado, conforme decisão de auditoria anterior — aguardando domínio final).
- `robots.txt` sem `Disallow: /` global — apenas `/Docs/` e `/docs/` (pasta interna de documentação, não indexável, comportamento correto).
- Hierarquia de headings H1→H2→H3 sem pulos (verificado nesta auditoria).
- JSON-LD (`@graph` com `LegalService`, `WebSite`, `WebPage`, `FAQPage`) validado com `JSON.parse()` via Node — **sintaxe válida, sem erros**, antes e depois das alterações desta auditoria.

### Observação

- `politica-de-privacidade.html` e `termos-e-condicoes.html` usam `<meta name="robots" content="noindex, follow">` e não têm `<link rel="canonical">` — este é um padrão intencional de auditoria anterior (páginas legais não devem ser indexadas), não foi alterado.

---

## Checklist para o usuário

### Ações de infraestrutura (fora do escopo de código)
- [ ] Configurar **compressão Gzip/Brotli** no servidor de hospedagem para HTML/CSS/JS.
- [ ] Configurar **cache HTTP de longo prazo** (`Cache-Control`) para `Assets/*.webp`, `style.css`, `script.js`, `cookie-banner.*` (ex.: 1 ano com cache-busting por nome de arquivo, se houver deploy futuro).
- [ ] Confirmar que o servidor/CDN entrega o site via **HTTP/2 ou HTTP/3**.
- [ ] Confirmar e substituir o **domínio placeholder** (`https://www.patriciacarrilhoadvogada.com.br`) no canonical, Open Graph, Twitter Cards e JSON-LD assim que o domínio real for definido/comprado (já documentado no HTML com comentários de aviso).

### Otimização de imagens restantes
- [ ] A pasta `Assets/` ainda totaliza **~16MB** mesmo após as otimizações desta auditoria (que já removeram ~11MB de PNGs e fotos sobre-dimensionadas). Recomenda-se uma nova varredura das demais imagens `.webp` do projeto (logos, favicon, outras fotos não cobertas nesta rodada) para confirmar se alguma ainda está em resolução desnecessariamente alta para o tamanho de exibição.
- [ ] Considerar gerar variantes `srcset` (ex.: 600w/1024w) para as imagens de serviço e do carrossel "Sobre" caso o tráfego mobile seja predominante, para servir arquivos ainda menores em telas pequenas.

### Decisões visuais pendentes
- [ ] Aprovar (ou não) o ajuste de contraste da cor `--color-sage` no contexto `.eyebrow` sobre fundo claro (ver seção "Acessibilidade → Pendente de aprovação visual" acima).

### Recomendação final
- [ ] Rodar o **PageSpeed Insights** (mobile e desktop) no `index.html`, `politica-de-privacidade.html` e `termos-e-condicoes.html` após o deploy em produção, para validar as métricas reais de campo (CrUX) e confirmar que as correções aplicadas nesta auditoria refletem a pontuação esperada.

---

## Resumo de impacto (Performance)

| Item | Antes | Depois | Economia |
|---|---|---|---|
| 7 imagens de serviço (PNG→WebP) | ~5,0 MB | ~0,5 MB | ~4,5 MB |
| 7 fotos do carrossel "Sobre" (resize) | ~5,7 MB | ~0,24 MB | ~5,5 MB |
| Imagem do hero (resize) | 625 KB | 91 KB | 534 KB |
| Imagem "elefantes na mesa" (resize) | 875 KB | 75 KB | 800 KB |
| Avatar balão WhatsApp (resize) | 769 KB | 4 KB | 765 KB |
| **Total aproximado** | **~13 MB** | **~0,9 MB** | **~12 MB (~92%)** |

Além do ganho de payload, o LCP do hero deixou de depender da animação de entrada `.rv`/`IntersectionObserver`, e o bug do carrossel que quebrava o JS inteiro nas páginas de termos/política foi eliminado — ambos com impacto direto em Performance e Best Practices nas 3 páginas.
