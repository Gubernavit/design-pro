# Comandos de refinamento (base: impeccable, Paul Bakaus, Apache-2.0)

Resumo reescrito. Para o fluxo completo (contexto PRODUCT.md/DESIGN.md, detector, modo live), instale a skill original: `npx impeccable install`. Ver `CREDITS.md`.

Antes de editar UI: carregue o contexto do projeto (público, marca, voz, anti-referências, cores, tipos). Se não existir, crie `PRODUCT.md` (quem usa, para quê, tom) e depois `DESIGN.md` (tokens e componentes).

## Polir (`/dp-polir`)
Passe final: alinhamentos, espaçamento consistente, estados (hover, foco, ativo, desabilitado, carregando, vazio, erro), microcopy, detalhes de contraste, consistência de tokens, remoção de resíduos. Não muda identidade nem escopo.

## Tipografia (`/dp-tipografia`)
Escala modular, pareamento de fontes com papéis claros, entrelinha e medida (45–75 caracteres), pesos limitados, `font-display`, recursos OpenType úteis (números tabulares em dados), hierarquia nítida entre título, subtítulo, corpo e legenda.

## Layout (`/dp-layout`)
Ritmo vertical com escala de espaçamento (ex.: 4/8/12/16/24/32/48/64/96), agrupamento por proximidade, alinhamentos consistentes, hierarquia visual (tamanho, peso, contraste, posição), grid responsivo, evitar tudo-em-cards.

## Cores (`/dp-cores`)
Espaço perceptual (OKLCH) para gerar rampas; neutros levemente tingidos pela cor da marca; 60/30/10 de uso; semântica (sucesso/erro/aviso) separada da marca; contraste AA; dark mode com superfícies em camadas, não apenas inversão.

## Variações de intensidade
- **Mais ousado:** amplia designs seguros/sem graça (escala, contraste, composição).
- **Mais quieto:** reduz designs agressivos/estimulantes.
- **Destilar:** remove complexidade até a essência.

## Endurecer (harden)
Produção: tratamento de erros, textos longos, i18n, dados ausentes, estados de borda, falta de rede.

## Outros
Clarificar (microcopy/labels/erros), Adaptar (dispositivos/tamanhos), Otimizar (desempenho de UI), Onboarding (primeiro uso/estados vazios), Deleite (personalidade em momentos raros), Extrair (tokens/componentes para sistema de design), Críticar (revisão heurística com nota), Auditar (a11y, performance, responsivo).

## Regras de ouro
- O briefing vence. Refinamento preserva; redesenho substitui.
- Verifique o resultado renderizado, nos tamanhos reais, em lote.
- Sem símbolos de ódio ou militarismo como decoração.
