---
name: design-pro
description: Skill geral de design e construção de sites, softwares, slides e PDFs com conformidade legal brasileira (LGPD, CDC, acessibilidade), SEO/GEO, performance e design não genérico. Use quando o usuário pedir para criar, redesenhar, auditar ou publicar um site/app/landing page/slide/PDF, ou usar qualquer comando /dp-*.
---

# design-pro

Skill unificada. O usuário só descreve o que quer; você decide, constrói, testa e entrega.
Idioma das respostas e dos comandos: leia `.design-pro.json` (campo `lang`: `pt` ou `en`) na pasta desta skill. Sem arquivo, use o idioma do usuário.

## Fluxo padrão (comando `criar` / `build`)

1. **Briefing mínimo.** Se faltar, infira: assunto, público, objetivo principal da página, dados reais da empresa (razão social, CNPJ, endereço, e-mail do encarregado/DPO). Nunca invente CNPJ, endereço, depoimentos, números ou certificações: peça ou deixe marcado `[[PREENCHER]]`.
2. **Plano de design** (antes de código): paleta de 4–6 hex nomeados, tipografia e papéis, conceito de layout, princípios. Revise contra o briefing e troque tudo que for o "padrão de qualquer site". Ver `references/design-frontend.md` e `references/anti-generico.md`.
3. **MVP ou não?** Pergunte uma vez se é MVP/protótipo. Se **não for MVP**, aplique TODA a conformidade (`references/legal.md`, `references/acessibilidade.md`, `references/seo-geo.md`). Se for MVP, aplique só o essencial (responsivo, acessível, sem promessas falsas) e liste o que falta.
4. **Construir** seguindo `references/software.md` (responsivo, leve, WebP < 300 KB, vídeo WebM, imagens reais).
5. **Movimento** só com propósito (`references/motion.md`).
6. **Testar sozinho**: Playwright (screenshots 390/768/1024/1440, foco por teclado, contraste) e, se houver conector, Figma para ler/desenhar. Ver `references/figma-playwright.md`. Rode `node scripts/check-assets.mjs <pasta>` e corrija.
7. **Entregar** com resumo curto: o que foi feito, o que o usuário precisa preencher (`[[PREENCHER]]`), riscos jurídicos restantes (`references/legal.md` seção Riscos) e aviso de que textos legais são modelos e devem ser revisados por advogado.

## Regras duras (sempre)

- Sem avaliações, depoimentos, selos, números de clientes ou "garantias" inventados. Prova social só com fonte real e autorização.
- Sem promessas falsas ou enganosas (CDC art. 37). Sem "100% garantido", "sem risco", "o melhor do Brasil" sem comprovação.
- Imagens: reais fornecidas pelo usuário, ou licenciadas (Wikimedia Commons, Unsplash etc.) com crédito. Nunca copiar imagem de terceiros sem licença.
- Coletar só dados necessários (minimização, LGPD art. 6º III). Cada campo de formulário precisa de finalidade.
- Scripts de tracking (Analytics, Pixel etc.) só após consentimento, nunca antes.
- Nada de design genérico (ver lista em `references/anti-generico.md`). O pedido explícito do usuário sempre vence.
- Ao editar arquivo existente, altere somente o que foi pedido.
- Textos jurídicos são modelos, não aconselhamento jurídico.

## Comandos

Quando o usuário digitar `/dp-<comando>` (ou pedir em linguagem natural), carregue o arquivo indicado e execute. Lista completa e descrições: `commands.json` e `references/comandos.md`. Comando `ajuda`/`help` imprime a lista no idioma configurado.

| PT | EN | Faz | Referência |
|---|---|---|---|
| ajuda | help | lista comandos | commands.json |
| criar | build | fluxo completo a partir da descrição | este arquivo |
| legal | legal | páginas legais (privacidade, termos, cookies, reembolso) | legal.md + templates/ |
| lgpd | lgpd | formulários de titular + auditoria LGPD | legal.md |
| riscos | risks | relatório de riscos jurídicos | legal.md |
| acessibilidade | a11y | WCAG 2.2 AA, alt, contraste, teclado | acessibilidade.md |
| seo | seo | SEO técnico e de conteúdo | seo-geo.md |
| geo | geo | otimização para buscas em IA | seo-geo.md |
| performance | perf | peso, imagens, vídeo, Core Web Vitals | software.md |
| imagens | assets | confere imagens/vídeos/alt | scripts/check-assets.mjs |
| auditar | audit | auditoria completa (legal+a11y+perf+SEO+design) | todos |
| polir | polish | passe final antes de publicar | impeccable.md |
| animar | animate | movimento com propósito | motion.md |
| tipografia | type | tipografia e hierarquia | impeccable.md |
| layout | layout | espaçamento e ritmo | impeccable.md |
| cores | color | paleta, contraste, dark mode | impeccable.md |
| degenericar | de-generic | remove cara de "feito por IA" | anti-generico.md |
| testar | test | testes com Playwright | figma-playwright.md |
| figma | figma | desenhar/ler no Figma | figma-playwright.md |
| atualizar | update | verifica e aplica atualização da skill | scripts/update.mjs |
| creditos | credits | mostra CREDITS.md | CREDITS.md |
| idioma | language | troca PT/EN | .design-pro.json |

## Atualização

Comando `atualizar`/`update`: rode `node <pasta-da-skill>/scripts/update.mjs --check`. Se houver versão nova, **pergunte ao usuário** se quer atualizar; só então rode `--apply`. Se a rede estiver bloqueada, diga ao usuário para rodar `node scripts/update.mjs --apply` no terminal dele.

## Extras opcionais (se instaladas pelo usuário)

Se existirem as skills `frontend-design`, `animate`/`emilkowalski`, `impeccable` ou `design-taste-frontend`, use-as em conjunto: esta skill traz o resumo e a camada legal/técnica; as originais trazem a profundidade. Créditos em `CREDITS.md`.
