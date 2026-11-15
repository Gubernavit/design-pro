# Anti-genérico — o que evitar e o que fazer no lugar

Fontes: `frontend-design` (Anthropic, Apache-2.0), `design-taste-frontend` (Leonxlnx, MIT), `impeccable` (Paul Bakaus). Reescrito; ver `CREDITS.md`.

## "Tells" de design gerado por IA (padrões, não escolhas)
1. Fundo creme (~#F4F1EA) + serifa de alto contraste + acento terracota (~#D97757).
2. Quase preto com um único acento verde-ácido ou vermelhão.
3. Layout "jornal": filetes finos, raio zero, colunas densas.
4. Kit SaaS: tudo em cards idênticos arredondados, mesmo raio em tudo, mesma sombra cinza suave, gradientes como decoração.
5. Cromo de template: eyebrow em CAIXA ALTA espaçada sobre todo título; textos "A · B · C" com pontos; rótulos "PALAVRA — fragmento"; preto "tingido" (#0B0B0B); fonte mono em rótulos; "→" em todo botão/link.
6. Tipografia: destacar uma única palavra do título (itálico/cor), caixa alta em rótulos, rótulos desnecessários acima do conteúdo.
7. Numeração 01/02/03 sem sequência real.
8. Entradas fade-and-slide-up em toda seção e hover em todo card.
9. Fonte Inter/Roboto/system por reflexo; gradiente roxo→azul; emojis como ícones; ícones genéricos de biblioteca sem marca.
10. Texto-padrão: "Soluções inovadoras", "Leve seu negócio ao próximo nível", "Transforme...", Lorem ipsum, "John Doe".
11. Estatísticas e depoimentos inventados; logos de "clientes" fictícios.

Todos são legítimos *se o briefing pedir*. O briefing sempre vence; onde há liberdade, não gaste com o padrão.

## Fazer no lugar (taste-skill, resumo)
- Classificar o negócio (software, jogos, tech, produto, serviço, local) e planejar **tela por tela**.
- Um único sistema de design: tokens de cor/tipo/espaço; uma seção por tela no desktop; bordas esquerda/direita iguais; navegação fixa; rodapé de fechamento.
- Texto simples e específico; sem frases de efeito.
- **Fotos reais** (do cliente; ou licenciadas, creditadas em uma linha expansível no rodapé, sem legendas sobre as imagens); ícones de marca reais; UI de produto real em vez de mockups genéricos.
- Efeitos pesados (shaders, 3D, scroll scenes) só em software/tech/jogos; locais, lojas, serviços ficam calmos: foto, tipografia nítida, cor chapada.
- Entrada do hero + 1–2 momentos distintos por página; microinterações discretas.
- **Verificar em navegador real** em 1440/1024/768/390: vazios, contraste, desalinhamento, texto placeholder, números de rua inventados, imagens que demoram em rede lenta. Repetir até não restar FAIL corrigível (máx. 3 rodadas).

## Autoteste rápido antes de entregar
- Troque o nome da marca por outro: o site ainda funciona igual? Então está genérico.
- Dá para identificar o ramo só olhando a primeira dobra, sem ler o texto?
- Existe UM elemento memorável?
- Cada elemento decorativo tem função?
