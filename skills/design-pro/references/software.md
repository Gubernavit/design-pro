# Regras para todo tipo de software (sites, apps, dashboards)

1. **Responsivo e acessível em qualquer dispositivo.** Mobile-first; testar 360, 390, 768, 1024, 1440, 1920 px; sem rolagem horizontal; toque ≥ 44px; `meta viewport`; `clamp()` para tipografia; grid/flex com `min()`/`minmax()`; `dvh` em vez de `vh` em mobile.
2. **Leve em qualquer dispositivo.** Orçamento: HTML+CSS+JS críticos < 170 KB comprimidos na primeira carga; JS mínimo; sem frameworks pesados para páginas estáticas; dividir código; `defer`; fontes `font-display: swap` com subset latin e no máx. 2 famílias/3 pesos (preferir `woff2` hospedado); evitar bibliotecas inteiras por uma função. Testar com CPU 4× mais lenta e rede 4G lenta.
3. **Imagens: todas < 300 KB, em WebP** (AVIF opcional com fallback). Redimensionar para o tamanho exibido (srcset/sizes, 1x/2x), qualidade 70–82. Comando: `cwebp -q 78 -resize W 0 in.jpg -o out.webp` ou `ffmpeg -i in.jpg -vf scale=1600:-2 -quality 78 out.webp` ou `sharp`. Logos/ícones em SVG otimizado (svgo). Conferir com `node scripts/check-assets.mjs <pasta>`.
4. **Vídeos otimizados em WebM** (VP9/AV1) com MP4 H.264 como fallback somente se necessário para Safari antigo: `ffmpeg -i in.mp4 -c:v libvpx-vp9 -crf 33 -b:v 0 -vf scale=-2:720 -an out.webm`. Hero em loop: ≤ 3 MB, `muted playsinline autoplay loop`, `poster` em WebP, sem autoplay se `prefers-reduced-motion` ou economia de dados (`navigator.connection.saveData`). Preload `none` nos demais.
5. **Imagens reais.** Fotos do cliente, produtos, equipe, fachada. Se não houver: bancos licenciados (crédito + registro) e marcar como "provisória" no relatório. Nada de gerar "pessoas" falsas como se fossem clientes/equipe. Ilustrações próprias ou SVG ok.
6. **Sem design genérico**: aplicar `anti-generico.md` e `design-frontend.md`.

## Boas práticas adicionais
- Estados completos: carregando, vazio, erro, sucesso; formulários com validação clara e proteção anti-spam.
- Cache longo com hash em assets; compressão Brotli; CDN quando houver.
- Sem layout shift: reservar espaço (`aspect-ratio`, `width/height`).
- Dark mode somente se o design pedir; sempre respeitar contraste.
- Impressão: CSS `@media print` para páginas de conteúdo/legais.
- Observabilidade mínima: logs de erro sem dados pessoais.
- Entrega: `README` de deploy, variáveis de ambiente documentadas, lista de pendências `[[PREENCHER]]`.

## Slides e PDF
- Slides: um argumento por slide, texto mínimo, contraste e tamanho de fonte ≥ 24 pt, imagens reais e leves, créditos de imagens no último slide, paleta/tipografia do plano de design. PDF: tags de acessibilidade (títulos, alt, idioma), tamanho < 5 MB quando possível. Aplicar as mesmas regras de conteúdo (sem promessas falsas, sem depoimentos inventados, imagens licenciadas).
