# Estrutura do projeto — LP Dra. Patrícia Carrilho

> Leia este arquivo ANTES de criar ou editar qualquer página do projeto.
> O template pronto para copiar está em `Docs/_nav-footer-template.html`.
> Este README explica as regras; o template é o código que você cola.

---

## 1. Mapa de páginas

| Arquivo                         | Pasta | Profundidade | `{{BASE}}` |
|----------------------------------|-------|---------------|------------|
| `index.html`                     | raiz  | 0             | `` (vazio) |
| `termos-e-condicoes.html`        | raiz  | 0             | `` (vazio) |
| `politica-de-privacidade.html`   | raiz  | 0             | `` (vazio) |

Todas as páginas do projeto estão hoje na raiz. Não há subpastas (ex.: `blog/`) ainda.

---

## 2. Template canônico

Ponto de partida obrigatório para qualquer página nova: `Docs/_nav-footer-template.html`.

Ele contém, nesta ordem, com placeholder `{{BASE}}` em todo caminho relativo:
1. `<!-- NAV -->`
2. `<!-- FOOTER -->`
3. `<!-- MOBILE DRAWER -->`
4. `<!-- COOKIE LGPD -->` (banner + modal + botão flutuante WhatsApp)
5. `<!-- SCRIPTS -->`

Nunca copie nav/footer de uma página secundária aleatória — elas podem estar desatualizadas.
A fonte de verdade é sempre `index.html`; se ele mudar, regenere o template e replique nas
páginas existentes.

---

## 3. Regra de profundidade de caminhos

| Localização da página     | `{{BASE}}` | Exemplo de link            | Exemplo de asset                          |
|----------------------------|------------|------------------------------|--------------------------------------------|
| Raiz (`*.html`)            | `` (vazio) | `href="index.html"`          | `src="Assets/logo-....webp"`               |
| Subpasta (ex.: `blog/*.html`) | `../`   | `href="../index.html"`       | `src="../Assets/logo-....webp"`            |

- CSS principal: `{{BASE}}style.css`
- CSS do cookie banner: `{{BASE}}cookie-banner.css`
- Script principal: `{{BASE}}script.js`
- Script do cookie banner: `{{BASE}}cookie-banner.js`
- Favicon: `{{BASE}}Assets/favicon-patricia-carrilho-advogada.webp`

Links de âncora da home a partir de uma página secundária usam `{{BASE}}index.html#secao`
(ex.: `index.html#servicos`). Dentro do próprio `index.html`, usa-se apenas `#servicos`.

---

## 4. Itens obrigatórios em toda página

- [ ] Nav idêntico ao `index.html` (logo, 5 links, CTA WhatsApp, botão hamburger `#burger`)
- [ ] Footer idêntico ao `index.html` (colunas Navegue/Serviços/Contato + créditos AG5)
- [ ] Drawer mobile (`#drawerOverlay` + `<aside id="drawer">`) — sem ele o menu mobile não abre
- [ ] Banner de cookie LGPD (`#ck-banner`) + modal de preferências (`#ck-modal`) + botão
      flutuante `#ck-prefs-btn`
- [ ] `cookie-banner.css` e `cookie-banner.js` linkados
- [ ] Botão flutuante do WhatsApp (`.wa-premium-container`) — presente no index e replicado
      nas páginas legais nesta sincronização
- [ ] `script.js` linkado no final do `<body>`, DEPOIS de `cookie-banner.js`
- [ ] Favicon `<link rel="icon" href="{{BASE}}Assets/favicon-patricia-carrilho-advogada.webp" type="image/webp" />`
- [ ] `<meta charset="UTF-8" />` e `<meta name="viewport" content="width=device-width, initial-scale=1" />`
- [ ] `<link rel="stylesheet" href="{{BASE}}style.css" />`
- [ ] `<link rel="canonical" ...>` apontando para a URL real da página (domínio final ainda não
      confirmado — ver aviso no `<head>` do `index.html`)

---

## 5. Armadilhas conhecidas do projeto

1. **`script.js` quebra em páginas sem `#carousel` de depoimentos (bug real, não corrigido nesta
   sincronização por estar fora do escopo de nav/footer).**
   Em `script.js`, o bloco do carrossel de depoimentos faz:
   ```js
   const carousel = document.getElementById('carousel');
   const items = [...carousel.querySelectorAll('.carousel__item')];
   ```
   sem guarda de `if (carousel)` — diferente do carrossel "sobre" (`aboutCarousel`), que tem a
   guarda correta (`if (aboutCarousel) { ... }`). Como `#carousel` só existe no `index.html`
   (seção Depoimentos), em `termos-e-condicoes.html` e `politica-de-privacidade.html` essa linha
   lança `TypeError: Cannot read properties of null` e **interrompe todo o restante da IIFE**,
   incluindo o efeito de scroll do header, o hamburger/drawer mobile e o widget do WhatsApp.
   **Correção recomendada (não aplicada aqui por estar fora do escopo desta skill):** envolver o
   bloco do carrossel de depoimentos com `if (carousel) { ... }`, no mesmo padrão já usado no
   carrossel "sobre".

2. **Cuidado ao remover/inserir blocos por edição manual do footer/drawer**: o footer usa
   `.footer__grid` com 4 colunas — se algum `</div>` for perdido no meio da edição, o grid
   "engole" as colunas seguintes e o rodapé quebra visualmente. Sempre conferir o balanceamento
   de tags depois de editar.

3. **Página legal usa CSS inline `<style>` no `<head>`** só para a classe `.legal` (tipografia
   do conteúdo jurídico). Isso é esperado e não deve ser removido — não faz parte do
   nav/footer/cookie, é conteúdo específico da página.

4. **Domínio do site ainda não confirmado**: `index.html` usa
   `https://www.patriciacarrilhoadvogada.com.br` como placeholder em canonical, OG, Twitter e
   JSON-LD. Substituir em todas as páginas assim que o domínio real for definido.

---

## 6. Como verificar (checklist pós-sincronização)

- [ ] Header aparece igual no desktop e mobile em todas as páginas
- [ ] Footer aparece igual (4 colunas + créditos) no desktop e mobile em todas as páginas
- [ ] Menu hamburger abre/fecha com animação em todas as páginas (depende do `script.js` não
      quebrar antes — ver Armadilha 1)
- [ ] Links do nav/drawer/footer resolvem para a profundidade certa (`{{BASE}}`)
- [ ] `script.js` está linkado no final do `<body>`, após `cookie-banner.js`, sem duplicar
- [ ] Cookie banner aparece na primeira visita e o link "Cookies" no rodapé reabre o modal
- [ ] Favicon idêntico em todas as abas do navegador
- [ ] Sem erros 404 de CSS/JS/imagem no console

---

Este README descreve a ESTRUTURA; o template (`Docs/_nav-footer-template.html`) é o código para
colar. Nenhum dos dois vai para produção (pasta `Docs/` bloqueada em `robots.txt`).
