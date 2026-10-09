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
  { id: 1, titulo: 'Sapiens', autor: 'Yuval Noah Harari', categoria: 'História', capa: 'https://books.google.com/books/content?id=uCt-BwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 2, titulo: 'O Príncipe', autor: 'Nicolau Maquiavel', categoria: 'Política', capa: 'https://books.google.com/books/content?id=UDrzAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 3, titulo: '1984', autor: 'George Orwell', categoria: 'Literatura', capa: 'https://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 4, titulo: 'A Arte da Guerra', autor: 'Sun Tzu', categoria: 'Estratégia', capa: 'https://books.google.com/books/content?id=Z9a2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 5, titulo: 'O Código Da Vinci', autor: 'Dan Brown', categoria: 'Literatura', capa: 'https://books.google.com/books/content?id=gV1nhvItuoAC&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 6, titulo: 'Crime e Castigo', autor: 'Fiódor Dostoiévski', categoria: 'Filosofia', capa: 'https://books.google.com/books/content?id=OxmmBAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 7, titulo: 'Uma Breve História do Tempo', autor: 'Stephen Hawking', categoria: 'Ciência', capa: 'https://books.google.com/books/content?id=FrcPBgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 8, titulo: 'Steve Jobs', autor: 'Walter Isaacson', categoria: 'Biografias', capa: 'https://books.google.com/books/content?id=LbuZEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 9, titulo: 'Hábitos Atômicos', autor: 'James Clear', categoria: 'Desenvolvimento Pessoal', capa: 'https://books.google.com/books/content?id=vGH7zwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 10, titulo: 'O Homem Mais Rico da Babilônia', autor: 'George S. Clason', categoria: 'Desenvolvimento Pessoal', capa: 'https://books.google.com/books/content?id=eUxWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
])

const categorias = ref([
  { id: 1, nome: 'Filosofia', imagem: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&q=85' },
  { id: 2, nome: 'História', imagem: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=500&q=85' },
  { id: 3, nome: 'Ciência', imagem: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=85' },
  { id: 4, nome: 'Literatura', imagem: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=85' },
  { id: 5, nome: 'Biografias', imagem: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85' },
  { id: 6, nome: 'Política', imagem: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=500&q=85' },
  { id: 7, nome: 'Estratégia', imagem: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=500&q=85' },
  { id: 8, nome: 'Desenvolvimento Pessoal', imagem: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=500&q=85' },
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
    <HeroBanner imagem="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=90" />

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
        :capa="livro.capa"
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
        :imagem="categoria.imagem"
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