# Veritas - Biblioteca Virtual

Aplicação One Page desenvolvida em Vue.js como trabalho da disciplina de Front-End.
O projeto apresenta uma biblioteca virtual com livros em destaque, categorias e uma
busca que filtra os livros em tempo real, incluindo filtro por categoria.

## Tecnologias

- Vue.js (Composition API com `<script setup>`)
- Vite
- CSS próprio (sem frameworks externos)

## Conceitos de Vue aplicados

- Componentização em arquivos `.vue` (BookCard, CategoryCard, SearchBar, HeroBanner, AppFooter, QuoteBlock)
- Reúso de componentes com `v-for` (BookCard usado para vários livros, CategoryCard para várias categorias)
- Props para passagem de dados aos componentes
- Reatividade com `ref()` e `computed()`
- Diretivas `v-if`, `v-else`, `v-for` e `v-model`
- Eventos (`@click`) para busca e filtro por categoria

## Estrutura de pastas

## Uso de Inteligência Artificial

A equipe utilizou IA (Claude e ChatGPT) como ferramenta de apoio durante o desenvolvimento,
sempre revisando e testando o código gerado antes de utilizá-lo. Abaixo estão os principais
prompts utilizados, organizados por etapa:

### Etapa: planejamento e divisão de componentes
"Tenho uma aplicação Vue sobre uma biblioteca virtual. Sugira uma divisão em componentes
simples e reutilizáveis. Utilize apenas Vue com `<script setup>`, sem bibliotecas externas
e sem Vue Router."

### Etapa: criação do componente BookCard
"Crie um componente Vue simples (BookCard) que receba título, autor, categoria e capa
através de props. Utilize `<script setup>` e CSS próprio, sem bibliotecas externas."

### Etapa: criação do componente CategoryCard e reúso
"Como posso reutilizar este componente para apresentar diferentes categorias usando props
e v-for?"

### Etapa: busca com v-model
"Como utilizar v-model em um campo de busca no Vue para filtrar uma lista de livros com
v-for? Utilize apenas `<script setup>`, sem bibliotecas externas."

### Etapa: filtro por categoria (interatividade entre componentes)
"Como filtrar uma lista de livros ao clicar em um componente de categoria em Vue, usando
ref, @click e v-for, combinando esse filtro com uma busca já existente? Utilize apenas
`<script setup>`, sem bibliotecas externas e sem conceitos avançados de Vue."

### Etapa: revisão do código
"Revise este código utilizando somente os conceitos básicos de Vue: componentes, props,
ref, eventos, v-if, v-for e v-model. Não utilize bibliotecas externas nem conceitos
avançados."

### Etapa: criação do Header
"Crie um componente Header para uma biblioteca virtual em Vue, com navegação simples e visual consistente com o restante do site. Utilize `<script setup>` e CSS próprio, sem bibliotecas externas."

### Etapa: criação do Hero
"Crie um componente HeroBanner para a página inicial de uma biblioteca virtual, com título, texto de apresentação e imagem de destaque. Utilize Vue com `<script setup>`, props quando necessário e CSS próprio."

### Etapa: criação da citação
"Crie um componente QuoteBlock para exibir uma citação literária em destaque na página da biblioteca virtual. Utilize `<script setup>` e CSS próprio, sem bibliotecas externas."

### Etapa: criação do Footer
"Crie um componente AppFooter para o rodapé da biblioteca virtual, com informações finais e estilo consistente com a página. Utilize Vue com `<script setup>` e CSS próprio, sem bibliotecas externas."

## Equipe

- Enzo do espírito santo ferreira - 04206344
- João Gabriel da Silva Fagundes - 04213412
- David Ribeiro Machado - 04209505
- Danniel Yan - 04214061
