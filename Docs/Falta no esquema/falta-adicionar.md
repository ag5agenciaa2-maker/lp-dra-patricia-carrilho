# 📋 Falta Adicionar no Schema
**Empresa:** Advogado Guaratiba RJ - Patrícia Carrilho Advogada | Direito Imobiliário | Direito Civil
**Data de geração:** 13/08/2026

---

## 🔴 CRÍTICOS — Impactam SEO diretamente

- [ ] `url` / `og:url` / `canonical` / `identifier`, `hasMap`, `sameAs[0]` (domínio) — O domínio real do site não está confirmado em nenhum Docs/ nem no HTML (dossiê registra explicitamente "Site próprio: Não possui"). Todo o schema usa o placeholder `https://www.patriciacarrilhoadvogada.com.br/`, marcado com comentário HTML no `<head>` do `index.html`. **Ação necessária:** confirmar o domínio real com o cliente/agência e substituir em: `@id`, `url`, `logo`, `image`, `hasOfferCatalog.provider.@id`, canonical, og:url, og:image, twitter:image.
- [ ] `email` — Não encontrado em nenhuma fonte (Docs/Informações-da-Empresa-Raiz.md confirma "❌ Não informado"). Omitido do JSON-LD.

## 🟡 IMPORTANTES

- [ ] `sameAs` Facebook — Link da página não encontrado em nenhuma fonte.
- [ ] `sameAs` LinkedIn — Link não encontrado; verificar se aplicável ao perfil de advogada pessoa física.
- [ ] `contactPoint` — Não aplicável: cliente possui apenas 1 número de telefone (WhatsApp/fixo único: (21) 99251-3639), já usado em `telephone`. ETAPA 4.5 da skill não se aplica.

## 🔵 COMPLEMENTARES

- [ ] `legalName` (razão social formal) — Usado o mesmo valor de `name` ("Patrícia Carrilho Advogada") por ausência de razão social distinta declarada. CNPJ não informado (dossiê indica possível atuação como pessoa física/autônoma — confirmar com cliente).
- [ ] `paymentAccepted` — Formas de pagamento não listadas no site nem nos Docs/.
- [ ] `datePublished` / `dateModified` (WebPage) — Datas de publicação/última modificação da LP não disponíveis; omitidas do bloco WebPage.
- [ ] `openingHoursSpecification` (sábado) — Dossiê confirma "Sáb. e Dom.: Fechado", portanto não há bloco de sábado a adicionar (já refletido corretamente: apenas Seg–Sex 09:00–18:00).
- [ ] `geo.latitude` / `geo.longitude` — Coordenadas já presentes no schema (-22.934668, -43.565769), confirmadas como reais no Docs/Informações-da-Empresa-Raiz.md (extensão PlePer/Google: "Coordinates -22.93466800, -43.56576920"). Não são estimativa — fonte confiável validada, nenhuma ação necessária.

## 🟢 FAQ

- [x] Seção FAQ com 6 perguntas reais já existente na LP — reaproveitada integralmente no bloco `FAQPage` do `@graph`.

---

## ✅ Resolvidos Automaticamente

- [x] `identifier.Google CID` — 396074658401324804 (fonte: Docs/Informações-da-Empresa-Raiz.md, extensão PlePer Local)
- [x] `identifier.Google Place ID` — ChIJzcmlUKjlmwARBI-Lps0jfwU (fonte: Docs/Informações-da-Empresa-Raiz.md)
- [x] `hasMap` + `sameAs[0]` — URL canônica `https://maps.google.com/?cid=396074658401324804` aplicada (substituiu o link opaco `share.google/...` usado no schema anterior)
- [x] `geo.latitude` / `geo.longitude` — Confirmadas via Pleper/Google Business: -22.934668 / -43.565769
- [x] `name` — Oficial: Patrícia Carrilho Advogada (grafia do logotipo/Instagram, conforme Dossiê-Site.md)
- [x] `alternateName` — Fórmula AG5 aplicada: `Advogado Guaratiba RJ - Patrícia Carrilho Advogada | Direito Imobiliário | Direito Civil` (2 categorias-pai reais: Direito Imobiliário é o core do negócio; Direito Civil cobre inventário, divórcio, ações possessórias/indenizatórias — reforçado pela categoria GBP "Advogado(a) civil"). Mesmo valor replicado em `WebSite.name`.
- [x] `areaServed` — Bairro base (Guaratiba) + bairros reais declarados pelo cliente no dossiê (Campo Grande, Santa Cruz, Bangu, Barra da Tijuca, Recreio dos Bandeirantes), usados em vez de bairros genéricos inventados por adjacência.
- [x] `founder` — Patrícia Carrilho, OAB/RJ 202.657, com bio real extraída do dossiê (motivação pessoal, ano de fundação 2016).
- [x] `aggregateRating` — 4.9 / 16 avaliações (dado real do Google Business Profile, incluído no schema mesmo estando abaixo da régua visual de 30 avaliações, conforme regra AG5).
- [x] `hasOfferCatalog` — 11 serviços reais extraídos da lista completa do dossiê (Docs/Dossiê-Site.md).
- [x] `foundingDate` — 2016-01 (Janeiro de 2016, conforme Docs/Informações-da-Empresa-Raiz.md).
- [x] `sameAs` Instagram — https://www.instagram.com/patriciacarrilho.adv/ (fonte: dossiê).

---

📌 **Após preencher cada item:** remover o `[ ]`, substituir o placeholder no Schema e revalidar em https://validator.schema.org/
📌 **NAP** deve ser idêntico ao Google Business Profile após edição
