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
