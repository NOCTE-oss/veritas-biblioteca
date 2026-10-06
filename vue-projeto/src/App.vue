<script setup>
import {ref, computed} from 'vue'
import BookCard from './BookCard.vue'
import CategoryCard from './CategoryCard.vue'
import SearchBar from './SearchBar.vue'

const livros = ref([
  { id: 1, titulo: 'Sapiens', autor: 'Yuval Noah Harari', categoria: 'História' },
  { id: 2, titulo: 'O Príncipe', autor: 'Nicolau Maquiavel', categoria: 'Política' },
  { id: 3, titulo: '1984', autor: 'George Orwell', categoria: 'Distopia' },
  { id: 4, titulo: 'A Arte da Guerra', autor: 'Sun Tzu', categoria: 'Estratégia' },
  { id: 5, titulo: 'O Código Da Vinci', autor: 'Dan Brown', categoria: 'Suspense' },
  { id: 6, titulo: 'Crime e Castigo', autor: 'Fiódor Dostoiévski', categoria: 'Filosofia' },
])

const categorias = ref([
  { id: 1, nome: 'Filosofia' },
  { id: 2, nome: 'História' },
  { id: 3, nome: 'Ciência' },
  { id: 4, nome: 'Literatura' },
  { id: 5, nome: 'Biografias' },
  { id: 6, nome: 'Política' },
  { id: 7, nome: 'Estratégia' },
  { id: 8, nome: 'Desenvolvimento Pessoal' },
])

const busca = ref('')
const livrosFiltrados = computed(() => {
  const termo = busca.value.toLowerCase()
  return livros.value.filter(
    (livro) =>
      livro.titulo.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo)
  )
})


</script>

<template>
  <main class="app">
    <h2 class="secao-titulo">Livros em destaque</h2>

    <SearchBar v-model="buscar"/>

    <div class="lista-livros">
      <BookCard
        v-for="livro in livrosFiltrados"
        :key="livro.id"
        :titulo="livro.titulo"
        :autor="livro.autor"
        :categoria="livro.categoria"
        />
    </div>

    <p v-if="livrosFiltrados.length === 0" class="aviso">Nenhum livro encontrado.</p>

    <h2 class="secao-titulo">categorias</h2>

    <div class="lista-categorias">
      <CategoryCard
        v-for="categoria in categorias"
        :key="categoria.id"
        :nome="categoria.nome"
        />
    </div>
  </main>
</template>

<style>
body {
  margin: 0;
  background: #14110f;
  color: #e9dfd0;
  font-family: georgia, serif;
}
.app {
  padding: 40px;
}
.secao-titulo {
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: normal;
  color: #c9a96e;
}
.lista-livros {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}

.lista-categorias {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.aviso {
  color: #d9cfc0;
  font-style: italic;
  ;
}
</style>