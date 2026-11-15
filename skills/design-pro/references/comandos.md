# Comandos / Commands

Use `/dp-<comando>` ou peça em linguagem natural. O idioma dos nomes é o escolhido na instalação (`.design-pro.json` → `lang`). Para ver a lista no seu idioma: `/dp-ajuda` ou `/dp-help`. A fonte da lista é `commands.json` (mesmo conteúdo da tabela do SKILL.md).

Comportamento geral:
- Sem argumento: aplica ao projeto atual.
- `[alvo]`: arquivo, pasta ou rota (ex.: `/dp-polir index.html`).
- Comandos de edição alteram **somente** o que foi pedido.
- `/dp-auditar` roda: legal → acessibilidade → performance → SEO/GEO → design anti-genérico, e gera `AUDITORIA.md` + `RISCOS-JURIDICOS.md`.
- `/dp-criar "descrição do site"` faz tudo sozinho (plano, construção, textos legais, SEO/GEO, testes, relatório).
- `/dp-atualizar`: verifica no GitHub se há versão nova; se houver, pergunta antes de aplicar.
