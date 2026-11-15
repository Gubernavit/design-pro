# design-pro

Skill de design para IA (Claude Code e compatíveis): você descreve o site/app/slide/PDF e ela planeja, constrói, testa e entrega — com conformidade legal brasileira (LGPD/CDC), acessibilidade, SEO, GEO, performance e design não genérico.

*English: a design skill for AI agents. Describe the site; it plans, builds, tests and ships with Brazilian legal compliance (LGPD/CDC), accessibility, SEO, GEO, performance and non-generic design.*

## Instalação / Install

```bash
npx github:Gubernavit/design-pro
# ou
git clone https://github.com/Gubernavit/design-pro && node design-pro/install.mjs
```

O instalador pergunta: idioma dos comandos (PT/EN), onde instalar, e então, **uma por uma**, se quer instalar as skills originais (frontend-design, emilkowalski, impeccable, taste) e os conectores (Playwright, Figma). Quem recusar tudo fica só com a skill padrão, que já traz o resumo dessas fontes.

## Uso

Basta descrever: "crie o site de uma corretora de seguros com cotação online". Comandos específicos: `/dp-ajuda` (PT) ou `/dp-help` (EN) lista todos. Exemplos: `/dp-criar`, `/dp-legal`, `/dp-auditar`, `/dp-seo`, `/dp-geo`, `/dp-polir`, `/dp-atualizar`.

## Atualização

`/dp-atualizar` (`/dp-update`) compara `version.json` local com o do seu GitHub. Ao publicar mudanças: aumente `version` e descreva em `changelog`. A IA avisa que há versão nova e **pergunta** antes de aplicar (o idioma escolhido é preservado).

## Estrutura

```
install.mjs  skills.json  CREDITS.md  LICENSE  package.json
skills/design-pro/
  SKILL.md  commands.json  version.json
  references/  (legal, acessibilidade, seo-geo, software, design, motion, ...)
  templates/   (privacidade, termos, cookies, reembolso, formulário LGPD, banner)
  scripts/     (check-assets.mjs, update.mjs)
```

## Importante

- Modelos legais não substituem advogado.
- Confira e complete `CREDITS.md` (licenças das fontes) antes de publicar.
- Comandos `/dp-*` são criados para Claude Code; em outros agentes, peça em linguagem natural.
