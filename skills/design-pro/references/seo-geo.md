# SEO (buscadores) e GEO (buscas em IA)

## SEO técnico — obrigatório em todo site público
- `<title>` único (≤ 60 car.) e `meta description` (≤ 155) por página; `<link rel="canonical">`.
- URLs limpas e em português; um `<h1>`; hierarquia de títulos; texto âncora descritivo.
- `robots.txt` + `sitemap.xml` (enviar ao Google Search Console e Bing Webmaster Tools).
- `lang="pt-BR"`, `hreflang` se houver outro idioma; HTTPS; redirecionar www/não-www; 404 útil.
- Open Graph + Twitter Card (imagem 1200×630 WebP/JPG < 300 KB).
- Dados estruturados JSON-LD: `Organization`/`LocalBusiness` (ou `InsuranceAgency`/`FinancialService` quando se aplicar), `WebSite`, `BreadcrumbList`, `FAQPage` (só com FAQ real e visível), `Product`/`Service`, `Article`. Dados do JSON-LD devem bater com o que está na página; nunca marcar avaliações que não existem.
- Core Web Vitals: LCP < 2,5 s, INP < 200 ms, CLS < 0,1. Ver `software.md`.
- Imagens com `width`/`height`, `loading="lazy"` (exceto a do topo), `fetchpriority="high"` na imagem principal, nomes de arquivo descritivos.
- SEO local (se houver endereço): Google Business Profile, NAP consistente (nome, endereço, telefone), página por cidade/serviço com conteúdo próprio.
- Conteúdo: responde à intenção de busca; sem texto duplicado ou gerado em massa; títulos com termos que o público realmente usa.

## GEO — ser citado por ChatGPT, Gemini, Perplexity, Claude, AI Overviews
- Permitir rastreadores de IA em `robots.txt` (ex.: `GPTBot`, `OAI-SearchBot`, `ClaudeBot`, `Claude-SearchBot`, `PerplexityBot`, `Google-Extended`, `Applebot-Extended`) se o dono quiser aparecer; decisão do usuário, perguntar uma vez.
- `llms.txt` na raiz: resumo da empresa, links para páginas-chave, em Markdown (padrão proposto, adoção variável; barato de manter).
- Respostas diretas no começo de cada seção (1–2 frases autocontidas), seguidas de detalhe. Perguntas como títulos (H2/H3) e FAQ real.
- Fatos verificáveis e atômicos: nome, o que faz, onde atua, preços/condições, diferenciais, datas, fonte. Evitar adjetivos vagos.
- Consistência de entidade: mesmo nome/descrição em site, Google Business, LinkedIn, redes, diretórios do setor.
- Autoria e confiança (E-E-A-T): página Sobre, responsáveis, registros profissionais, contato, data de atualização (`dateModified`).
- Conteúdo em HTML renderizado no servidor (SSR/estático), não só via JavaScript; tabelas e listas para comparações.
- Menções e links de fontes confiáveis (imprensa, associações do setor) ajudam mais que volume de texto.
- Medir: perguntar periodicamente às IAs sobre a marca/serviços e registrar se é citada; ajustar conteúdo.

Aviso: nenhuma técnica garante posição ou citação; relatar como "boas práticas aplicadas".
