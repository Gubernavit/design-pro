# Conformidade legal (Brasil) — checklist para projetos que não são MVP

> Modelos e checklists, não aconselhamento jurídico. Sempre recomende revisão por advogado antes de publicar. Leis citadas: LGPD (Lei 13.709/2018), CDC (Lei 8.078/1990), Decreto 7.962/2013 (e-commerce), Marco Civil (Lei 12.965/2014), Lei Brasileira de Inclusão (Lei 13.146/2015), Lei de Direitos Autorais (Lei 9.610/1998). Verifique se houve alteração recente.

## 1–5. Páginas e formulários obrigatórios

Gere a partir de `templates/` preenchendo com dados reais (nunca invente; use `[[PREENCHER]]`).

| Item | Quando | Pontos-chave |
|---|---|---|
| Política de Privacidade | sempre que houver qualquer dado pessoal (inclusive IP/cookies) | controlador, dados coletados, finalidade, base legal (art. 7), compartilhamento, retenção, direitos do titular (art. 18), encarregado/DPO (art. 41), transferência internacional, canal de contato |
| Termos de Serviço | sites/apps com conta, contratação ou conteúdo de usuário | partes, serviço, obrigações, limites de responsabilidade (sem cláusulas abusivas, CDC art. 51), propriedade intelectual, foro, alteração dos termos |
| Aviso/banner de cookies | se usar cookies não essenciais | consentimento prévio, granular, tão fácil recusar quanto aceitar, sem pré-marcado, link para política, registro do consentimento; essenciais não precisam de consentimento |
| Política de reembolso/troca | venda online | direito de arrependimento 7 dias (CDC art. 49) para compras à distância, prazos, forma de devolução, canal; produtos digitais: explicar condições sem contrariar o CDC |
| Formulário do titular LGPD | sempre | pedidos de acesso, correção, anonimização, portabilidade, eliminação, revogação do consentimento (art. 18); prazo de resposta e canal do encarregado |

## 6. Coletar só o necessário (art. 6º, III)

Para cada campo de formulário: qual finalidade? Se não houver, remova. Evite CPF, data de nascimento, endereço completo "por garantia". Dados sensíveis (saúde, biometria etc., art. 11) exigem base legal específica e cuidado redobrado. Menores de 18: consentimento de responsável (art. 14). Corretoras de seguros/planos de saúde tratam dados de saúde: tratar como sensível e consultar a regulação setorial (SUSEP/ANS/ CNSP) com um advogado.

## 7. Scripts de tracking

- Nenhum script de Analytics, Meta Pixel, Google Ads, Hotjar, chat com cookies etc. carrega antes do consentimento. Use carregamento condicional após aceite.
- Prefira analytics sem cookie/anonimizado quando possível.
- Liste cada script em `tracking-inventory.md` do projeto: nome, finalidade, dados, terceiros, base legal.
- Google Fonts/CDNs enviam IP a terceiros: preferir hospedar fontes localmente.
- Incluir link "Preferências de cookies" permanente no rodapé.

## 12–13. Sem avaliações falsas, sem promessas falsas

- Nunca gerar depoimentos, notas, contagem de clientes, selos, "como visto em" inventados. Só conteúdo real com autorização por escrito e fonte.
- Preços, prazos, "garantia", "grátis", "sem taxa": só se verdadeiros e com condições claras e visíveis (CDC arts. 30, 31, 37).
- Evitar superlativos comparativos sem prova. Em saúde/seguros, não prometer cobertura, aprovação ou economia sem condições.

## 14. Direitos autorais das imagens

- Use imagens do cliente, próprias, ou com licença que permita uso comercial (Unsplash License, Pexels, Wikimedia Commons CC0/CC-BY/CC-BY-SA com atribuição).
- Mantenha `CREDITS-IMAGENS.md` do projeto: arquivo, autor, fonte (URL), licença, data.
- Não use imagens do Google Imagens, de concorrentes, marcas de terceiros, rostos de pessoas reais sem autorização (direito de imagem, CC art. 20; Constituição art. 5º X).
- Fontes e ícones também têm licença (OFL, MIT etc.): registre.

## 15. Dados da empresa (Decreto 7.962/2013 art. 2º)

Visíveis no rodapé/página "Sobre" ou "Contato": razão social, nome fantasia, CNPJ, endereço físico e eletrônico, e-mail e telefone de atendimento (SAC), horário. Corretoras: número de registro SUSEP do corretor/ da corretora quando aplicável, `[[PREENCHER]]`. Também: canal do encarregado de dados.

## 16. Conformidade LGPD (checklist)

- [ ] Mapeamento de dados (o que, por quê, onde, quanto tempo, com quem)
- [ ] Base legal definida para cada tratamento (art. 7)
- [ ] Política de privacidade clara e acessível
- [ ] Encarregado indicado e divulgado (art. 41)
- [ ] Canal e fluxo para direitos do titular (prazo interno ≤ 15 dias para resposta completa, art. 19)
- [ ] Consentimento específico, destacado, revogável; não agrupado
- [ ] Contratos com operadores/fornecedores (hospedagem, e-mail, CRM)
- [ ] Medidas de segurança: HTTPS, senhas com hash, controle de acesso, backups, logs
- [ ] Plano de resposta a incidentes e comunicação à ANPD/titulares (art. 48)
- [ ] Registro das operações (art. 37) e, quando cabível, RIPD (relatório de impacto)
- [ ] Prazo de retenção e rotina de eliminação

## 17. Riscos jurídicos — relatório final

Ao entregar, gere `RISCOS-JURIDICOS.md` listando: dados de empresa faltando, textos legais ainda com `[[PREENCHER]]`, scripts de terceiros, imagens sem licença comprovada, afirmações comerciais que precisam de prova, uso de dados sensíveis, ausência de contrato com operadores, regulação setorial aplicável (SUSEP, ANS, CFM, OAB, Banco Central etc., conforme o ramo), e recomendação de revisão jurídica. Classifique cada risco: alto / médio / baixo.

## Segurança mínima (apoia a LGPD)

HTTPS obrigatório (HSTS), cabeçalhos de segurança (CSP, X-Content-Type-Options, Referrer-Policy), validação no servidor, sanitização de entrada, proteção anti-spam sem coletar dados em excesso, sem segredos no front-end.
