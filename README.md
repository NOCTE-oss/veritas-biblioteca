## Evolução do projeto: Tailwind CSS (2ª avaliação)

Nesta etapa, o projeto da 1ª avaliação foi evoluído com o framework CSS
**Tailwind CSS**, mantendo a proposta, a componentização e a reatividade em Vue.js.

### Como o Tailwind foi integrado

- Instalação: `npm install -D tailwindcss @tailwindcss/vite`
- Plugin `tailwindcss()` adicionado à lista de `plugins` no `vite.config.js`
- Arquivo `src/style.css` com `@import "tailwindcss";`, importado no `main.js`

### Elementos visuais melhorados

1. **DestaqueHero (novo):** seção hero nova, com título grande, botão, estatísticas
   e dois livros "flutuando" nas laterais (reaproveitando o componente BookCard).
2. **HeroBanner:** CSS próprio convertido para classes do Tailwind, com título
   que se ajusta ao tamanho da tela.
3. **BookCard:** efeito de elevação ao passar o mouse e tamanho responsivo.

### Classes e recursos do Tailwind utilizados

| Classe                                         | O que faz                                            |
| ---------------------------------------------- | ---------------------------------------------------- |
| `flex items-center justify-center`             | Centraliza o conteúdo nos dois eixos                 |
| `px-6 py-24`                                   | Espaçamento interno horizontal e vertical            |
| `text-3xl md:text-5xl`                         | Tamanho do texto que cresce em telas maiores         |
| `hidden md:block`                              | Esconde no celular e mostra a partir de telas médias |
| `bg-[#14110f]`                                 | Cor de fundo exata (valor personalizado)             |
| `hover:-translate-y-2 transition duration-300` | Card sobe suavemente ao passar o mouse               |
| `-rotate-6` / `rotate-6`                       | Inclina os livros da hero                            |
| `absolute inset-0`                             | Posiciona um elemento cobrindo toda a seção          |
| `tracking-widest`                              | Aumenta o espaço entre as letras                     |
| `w-36 sm:w-40 lg:w-44`                         | Largura que muda conforme o tamanho da tela          |

### Responsividade

O Tailwind usa a abordagem _mobile first_: classes sem prefixo valem para todas as
telas, e prefixos como `sm:`, `md:` e `lg:` aplicam estilos a partir de determinados
tamanhos. Assim, os livros laterais da hero somem no celular e os textos se ajustam.

### Prompts utilizados nesta etapa

**Etapa: criação da nova hero section**
"Crie uma seção hero em Vue com Tailwind CSS, com título grande, texto curto, botão,
estatísticas e livros flutuando nas laterais, no estilo escuro (preto e dourado) do
projeto. Reaproveite o componente BookCard e explique cada classe."

**Etapa: migração do HeroBanner para Tailwind**
"Converta este componente Vue com CSS próprio para classes do Tailwind CSS, mantendo
props e eventos, e explique cada classe."

**Etapa: melhoria do BookCard**
"Converta o BookCard para Tailwind, adicionando efeito hover de elevação e tamanho
responsivo com sm: e lg:."

**Etapa: correção de problemas na integração**
"O Tailwind não está aplicando estilos nos componentes. Revise meu vite.config.js
e main.js."


---

## Navegação com Vue Router (3ª etapa)

Nesta etapa, o Veritas passou a utilizar **Vue Router 4** para organizar a aplicação em páginas e permitir navegação no formato de **Single Page Application (SPA)**, sem recarregamento completo a cada troca de rota.

### Rotas disponíveis

| Caminho | Página | Descrição |
| --- | --- | --- |
| `/` | Início | Biblioteca virtual, destaques, busca e categorias. |
| `/sobre` | Sobre | Apresentação e objetivo do projeto Veritas. |
| `/contato` | Contato | Formulário demonstrativo de contato. |

### Implementação

- Vue Router 4 instalado como dependência do projeto.
- Configuração das rotas em `src/router/index.js`.
- Páginas organizadas em componentes na pasta `src/views/`:
  - `HomeView.vue`
  - `SobreView.vue`
  - `ContatoView.vue`
- Menu de navegação com `RouterLink` para acessar as páginas.
- `RouterView` para renderizar o conteúdo da rota atual.
- `createWebHashHistory()` utilizado para compatibilidade com o GitHub Pages.
- Formulário de contato ilustrativo: não envia mensagens para um servidor ou e-mail.

### Como executar localmente

Entre na pasta do projeto Vue e instale as dependências:

```bash
cd vue-projeto
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

### Publicação

O projeto é publicado pelo **GitHub Actions** no GitHub Pages:

- Repositório: https://github.com/NOCTE-oss/veritas-biblioteca
- Site: https://nocte-oss.github.io/veritas-biblioteca/
- Workflow: `.github/workflows/deploy.yml`
