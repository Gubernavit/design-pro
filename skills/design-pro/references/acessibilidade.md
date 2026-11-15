# Acessibilidade (alvo: WCAG 2.2 nível AA; Lei 13.146/2015)

## Imagens (alt)
- Imagem informativa: `alt` descreve o conteúdo/função em 1 frase, sem "imagem de".
- Decorativa: `alt=""` (e `aria-hidden` em SVG decorativo).
- Imagem que é link/botão: alt descreve o destino/ação.
- Gráficos/infográficos: alt curto + texto/tabela equivalente próximo.
- Vídeo: legendas, transcrição; sem autoplay com som; controle de pausa.

## Contraste
- Texto normal ≥ 4.5:1; texto grande (≥24px ou ≥19px negrito) ≥ 3:1; componentes de UI e ícones informativos ≥ 3:1.
- Verificar estados hover/focus/disabled e texto sobre imagem (usar overlay/scrim).
- Nunca usar só cor para transmitir informação.
- Paleta da marca Abrasil (quando o projeto for dela): #2D2A6B sobre branco passa; #00A1A2 e #F6A113 como fundo exigem texto escuro (testar com ferramenta); #F6A113 em texto sobre branco NÃO passa.

## Teclado
- Tudo operável só com teclado; ordem de tabulação lógica = ordem visual.
- Foco sempre visível (outline ≥ 2px, contraste ≥ 3:1), nunca `outline: none` sem substituto.
- Link "Pular para o conteúdo" no início.
- Sem armadilhas de foco; modais prendem foco e devolvem ao fechar; `Esc` fecha.
- Menus/accordions/tabs seguem padrões WAI-ARIA APG; preferir elementos nativos (`button`, `details`, `dialog`).
- Alvos de toque ≥ 24×24 CSS px (ideal 44×44).

## Estrutura e semântica
- `lang="pt-BR"` no `<html>`; um `<h1>`; hierarquia de títulos sem pular; landmarks (`header`, `nav`, `main`, `footer`).
- Formulários: `<label for>` em todo campo, erros textuais associados via `aria-describedby`, `autocomplete` correto, não depender de placeholder.
- Tabelas com `th scope`; listas reais; botões são `<button>`, links são `<a href>`.
- Respeitar `prefers-reduced-motion` e `prefers-color-scheme`; nada pisca > 3 vezes/s.
- Zoom até 200% e reflow em 320px sem rolagem horizontal; texto em `rem`.
- Título de página único e descritivo; mensagens de status com `role="status"`.

## Testes (rodar antes de entregar)
1. Playwright + axe-core (`@axe-core/playwright`) nas páginas em 390 e 1440 px.
2. Navegar só com Tab/Shift+Tab/Enter/Esc e registrar problemas.
3. Checar contraste dos tokens da paleta.
4. Lighthouse acessibilidade ≥ 95 (não substitui teste manual).
Incluir página "Declaração de acessibilidade" com canal para reportar barreiras.
