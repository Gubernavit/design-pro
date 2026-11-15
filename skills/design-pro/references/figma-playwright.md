# Figma + Playwright — desenhar, construir e testar sozinho

## Conectar (uma vez; o instalador oferece)
- **Playwright MCP:** `claude mcp add playwright -- npx @playwright/mcp@latest` (Codex/Cursor: adicionar o mesmo servidor na configuração de MCP do agente).
- **Figma MCP:** `claude mcp add --transport http figma https://mcp.figma.com/mcp` e autorizar a conta quando solicitado. Confirme o endereço atual na documentação do Figma, pode mudar.
Se o conector não estiver disponível, siga sem ele e avise o usuário em uma linha.

## Fluxo com Figma
1. Se o usuário forneceu link do Figma: ler frames, tokens (cores, tipografia, espaçamento) e componentes; construir fiel ao arquivo.
2. Se não: criar o plano de design (ver `design-frontend.md`) e, se a ferramenta permitir, desenhar no Figma as telas principais (desktop 1440 e mobile 390) antes do código.
3. Extrair tokens para `:root` CSS; um único sistema.

## Fluxo com Playwright (teste obrigatório antes de entregar)
1. Subir o site local (`npx serve` ou servidor do projeto) e abrir via HTTP, não `file://`.
2. Screenshots de página inteira e por seção em 390, 768, 1024, 1440; olhar as imagens e corrigir.
3. Verificar: sem rolagem horizontal, sem elementos cortados, imagens carregadas, nenhum texto placeholder.
4. Teclado: Tab por toda a página; foco visível; ordem lógica; modais/menus com Esc.
5. Acessibilidade: `@axe-core/playwright` (se disponível) e contraste.
6. Desempenho: tamanho de cada recurso (`check-assets.mjs`), tempo de carga em rede lenta emulada, CLS.
7. Console limpo (sem erros 404/JS); links internos funcionam; formulários validam; banner de cookies: nenhum script de tracking carrega antes do aceite (verificar a aba de rede).
8. Corrigir e repetir; no máximo 3 rodadas, depois relatar pendências.
