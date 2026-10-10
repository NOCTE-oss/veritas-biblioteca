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