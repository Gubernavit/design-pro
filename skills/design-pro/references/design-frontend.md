# Design de front-end — princípios consolidados

Resumo reescrito a partir de `frontend-design` (Anthropic, Apache-2.0), `impeccable` (Paul Bakaus) e `design-taste-frontend` (Leonxlnx, MIT). Fontes e licenças em `CREDITS.md`. Para profundidade, instale as skills originais.

## Postura
Aja como diretor de design de um estúdio conhecido por identidades distintas. Escolhas deliberadas de paleta, tipografia e layout **específicas deste briefing**; assuma risco estético quando justificado. O briefing do usuário sempre vence, inclusive quando pede algo "comum".

## Ancore no assunto
Se o briefing não diz o que é o produto, proponha: assunto concreto, público e função principal da página, e confirme. O vocabulário, materiais e universo do assunto geram escolhas visuais distintas (um brinquedo infantil ≠ um painel financeiro). Use conteúdo real do briefing.

## Modos (impeccable)
- **Persuadir** (landing, campanha, preços): atenção e ação; design é o produto.
- **Operar** (apps, dashboards, admin): clareza, consistência, padrões conhecidos; a marca vive nos detalhes.
- **Ler** (docs, artigos, ajuda): estrutura para compreensão.
- **Experiência** (portfólio, galeria): a obra lidera, a interface recua.
Escolha o modo pela superfície pedida, não pelo produto.

## Processo: plano → revisão → construção → crítica
1. Plano compacto: cores (4–6 hex nomeados), tipografia e papéis, conceito de layout (prosa + wireframe ASCII, alinhamento), princípios.
2. Revise contra o briefing: o que parece "o que eu faria para qualquer site parecido"? Troque e diga o que mudou.
3. Construa seguindo o plano. Cuidado com especificidade de CSS (seletores que se anulam, sobretudo padding/margin entre seções).
4. Critique com screenshots (Playwright) em 390/768/1440; corrija tudo que uma olhada mostrar antes de olhar de novo.

## Hero
Abra com a coisa mais característica do mundo do assunto: título, imagem real, demonstração, momento interativo. Evitar o padrão "número grande + legenda + estatísticas + gradiente" salvo se for realmente o melhor.

## Tipografia
Carrega a personalidade. Uma ou duas famílias (se duas, bem distintas). Escolha por intenção, não a família de sempre. Escala tipográfica clara, pesos/larguras/espaçamentos intencionais. Linhas < 80 caracteres; serifadas com entrelinha um pouco maior. Tratar o título como elemento de design.

## Estrutura visual é informação
Bordas, números, eyebrows, divisores, rótulos devem codificar algo. Numeração (01/02/03) só se o conteúdo for sequência real.

## Movimento
Pouco e com propósito: um momento orquestrado (carregamento ou revelação) vale mais que efeitos espalhados. Movimento em resposta à ação do usuário é bem-vindo. Detalhes em `motion.md`.

## Restraint
Gaste a ousadia em um lugar: um elemento memorável, o resto quieto. Corte decoração que não serve ao briefing ("tire um acessório antes de sair"). Piso de qualidade sem alarde: responsivo, foco visível, reduced-motion, contraste, paleta harmônica.

## Texto na interface
Palavras existem para facilitar o uso. Linguagem do usuário, não do sistema. Voz ativa; CTA diz o que acontece ("Salvar alterações", não "Enviar"); mesma ação mantém o mesmo nome em todo o fluxo; erros explicam o que houve e como corrigir, sem pedir desculpas vagas; vazio é convite à ação; sentence case, sem enchimento.

## Operação do impeccable (resumo dos comandos)
Construir: shape, init (contexto do produto), document, extract. Avaliar: critique, audit. Refinar: polish, bolder, quieter, distill, harden, onboard. Melhorar: animate, colorize, typeset, layout, delight, overdrive. Corrigir: clarify, adapt, optimize. Iterar: live, generate. Na design-pro estes viram `/dp-polir`, `/dp-tipografia` etc. (ver `comandos.md`).

## Regras do impeccable que valem sempre
Terminar o trabalho sem rodeios; verificar o resultado renderizado nos tamanhos reais; refinamento preserva (identidade, texto, escopo), redesign substitui (não "meio termo" sobre o visual descartado); não usar símbolos de ódio/militarismo como decoração.
