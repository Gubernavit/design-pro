# Movimento com propósito

Resumo reescrito do skill `animate` de Emil Kowalski (emilkowalski/skills, MIT) com acréscimos. Ver `CREDITS.md`. Para as tabelas oficiais de curvas, durações e receitas, instale a skill original; **não invente valores "parecidos"** — use as tabelas dela quando disponíveis, ou os padrões abaixo.

## Sequência de decisão (nesta ordem)
1. **Deve animar?** Ações por teclado e ações usadas dezenas/centenas de vezes por dia → nenhuma animação (ou quase imperceptível). Pode encerrar aqui.
2. **Propósito em uma palavra** (orientar, confirmar, relacionar, chamar atenção, deleite raro). Sem propósito, sem animação. "Fica bonito" não é propósito.
3. **Ferramenta mais barata que resolva:** CSS transition → `@starting-style` → CSS animation → WAAPI → biblioteca (Motion).
4. **Propriedades:** preferir `transform` e `opacity` (e `clip-path`); evitar animar layout (exceção: altura de accordion).
5. **Curva e duração:** entrar/sair = ease-out; mover na tela = ease-in-out; hover/cor = ease; movimento constante = linear. Nunca `ease-in` em UI (atrasa justo o momento observado). Padrão de projeto: ease-out forte (ex.: `cubic-bezier(0.23, 1, 0.32, 1)`), 150–250 ms para microinterações, até ~400 ms para painéis; saída um pouco mais rápida que a entrada.
6. **Interrupção:** coisas retocadas rápido usam transitions (interrompíveis); gestos usam springs.
7. **Saída** espelha a entrada.

## Regras duras
- Nunca `scale(0)`: entradas partem de `scale(0.9–0.97)` + `opacity: 0`.
- Reutilize tokens de movimento existentes (`--ease-out`, escala de durações); não crie sistema paralelo.
- Entregue `prefers-reduced-motion` e gating de hover (`@media (hover: hover)`) junto com a animação, não depois.
- Tome a decisão e implemente; não ofereça "menu de opções" de animação (diga o raciocínio em uma linha).
- Deleite só em momentos raros (onboarding, sucesso, celebração).
- Evite fade-and-slide-up em toda seção e hover em todo card (ver `anti-generico.md`).
- Desempenho: `will-change` só durante a animação; nada de animar sombras/filtros pesados em muitos elementos; vídeos de fundo conforme `software.md`.

## Auditar movimento existente
Liste cada animação, sua frequência, propósito, propriedades e curva; marque as que violam as regras; proponha correções priorizadas. (Skills originais: `review-animations`, `improve-animations`.)
