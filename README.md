# Experiência Prática IV: Desenvolvimento Front-end

Projeto web para uma ONG, desenvolvido com foco em versionamento, acessibilidade (WCAG 2.1 AA) e deploy.

## Como executar

1. Clone o repositório: `git clone https://github.com/GomdimApps/cruzeiro-front-exp-4.git`
2. Abra o arquivo `index.html` no navegador. Não há dependências a instalar.

## Build de produção

1. Instale as dependências: `npm install`
2. Gere a versão otimizada: `npm run build` (saída na pasta `dist`)
3. Visualize localmente: `npm run preview`

O Vite minifica HTML, CSS e JavaScript. Redução medida: HTML 1512 para 1368 bytes, CSS 1916 para 1660 e JS 345 para 256.

## Deploy

O deploy é automático no GitHub Pages: a cada push na main, o workflow `.github/workflows/deploy.yml` instala as dependências, gera o build e publica a pasta `dist`.

Site publicado: https://gomdimapps.github.io/cruzeiro-front-exp-4/

## Estrutura

- `index.html`: página inicial com estrutura semântica e formulário de voluntariado
- `style.css`: estilos com contraste adequado e foco visível

## Fluxo de branches (GitFlow)

- main: versões estáveis de lançamento
- develop: integração do desenvolvimento contínuo
- feature/*: novas funcionalidades
- hotfix/*: correções urgentes em produção

## Commits e versões

Os commits seguem Conventional Commits (feat, fix, docs, style). As versões seguem versionamento semântico MAJOR.MINOR.PATCH, marcadas com tags: v0.1.0, v0.2.0 e v0.2.1.

## Manutenção

Novas funcionalidades saem de uma branch feature/ criada a partir da develop e entram por pull request. Correções urgentes saem de uma branch hotfix/ criada a partir da main.
