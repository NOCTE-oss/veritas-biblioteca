<script setup>
import { ref, computed } from 'vue'
import BookCard from './components/BookCard.vue'
import CategoryCard from './components/CategoryCard.vue'
import SearchBar from './components/SearchBar.vue'
import HeroBanner from './components/HeroBanner.vue'
import AppFooter from './components/AppFooter.vue'
import QuoteBlock from './components/QuoteBlock.vue'

const busca = ref('')
const categoriaSelecionada = ref('')

const livros = ref([
  { id: 1, titulo: 'Sapiens', autor: 'Yuval Noah Harari', categoria: 'História' },
  { id: 2, titulo: 'O Príncipe', autor: 'Nicolau Maquiavel', categoria: 'Política' },
  { id: 3, titulo: '1984', autor: 'George Orwell', categoria: 'Literatura' },
  { id: 4, titulo: 'A Arte da Guerra', autor: 'Sun Tzu', categoria: 'Estratégia' },
  { id: 5, titulo: 'O Código Da Vinci', autor: 'Dan Brown', categoria: 'Literatura' },
  { id: 6, titulo: 'Crime e Castigo', autor: 'Fiódor Dostoiévski', categoria: 'Filosofia' },
  { id: 7, titulo: 'Uma Breve História do Tempo', autor: 'Stephen Hawking', categoria: 'Ciência' },
  { id: 8, titulo: 'Steve Jobs', autor: 'Walter Isaacson', categoria: 'Biografias' },
  { id: 9, titulo: 'Hábitos Atômicos', autor: 'James Clear', categoria: 'Desenvolvimento Pessoal' },
  { id: 10, titulo: 'O Homem Mais Rico da Babilônia', autor: 'George S. Clason', categoria: 'Desenvolvimento Pessoal' },
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

const livrosFiltrados = computed(() => {
  const termo = busca.value.toLowerCase()
  return livros.value.filter((livro) => {
    const bateBusca =
      livro.titulo.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo)
    const bateCategoria =
      categoriaSelecionada.value === '' ||
      livro.categoria === categoriaSelecionada.value
    return bateBusca && bateCategoria
  })
})

function selecionarCategoria(nome) {
  if (categoriaSelecionada.value === nome) {
    categoriaSelecionada.value = ''
  } else {
    categoriaSelecionada.value = nome
  }
}
</script>

```html
<template>
  <main class="app">
    <HeroBanner />

    <h2 class="secao-titulo">Livros em destaque</h2>

    <SearchBar v-model="busca" />

    <button
      v-if="categoriaSelecionada !== ''"
      class="limpar"
      @click="categoriaSelecionada = ''"
    >
      Categoria: {{ categoriaSelecionada }} ✕
    </button>

    <div class="lista-livros">
      <BookCard
        v-for="livro in livrosFiltrados"
        :key="livro.id"
        :titulo="livro.titulo"
        :autor="livro.autor"
        :categoria="livro.categoria"
      />
    </div>

    <p v-if="livrosFiltrados.length === 0" class="aviso">
      Nenhum livro encontrado.
    </p>

    <h2 class="secao-titulo">Categorias</h2>

    <div class="lista-categorias">
      <CategoryCard
        v-for="categoria in categorias"
        :key="categoria.id"
        :nome="categoria.nome"
        :ativa="categoria.nome === categoriaSelecionada"
        @click="selecionarCategoria(categoria.nome)"
      />
    </div>

    <QuoteBlock />

    <AppFooter />
  </main>
</template>
```


<style>
body {
  margin: 0;
  background: #14110f;
  color: #e9dfd0;
  font-family: Georgia, serif;
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
}
.limpar {
  margin-bottom: 20px;
  padding: 8px 14px;
  background: transparent;
  border: 1px solid #c9a96e;
  color: #c9a96e;
  font-family: Georgia, serif;
  cursor: pointer;
}
.limpar:hover {
  background: #c9a96e;
  color: #14110f;
}
</style>