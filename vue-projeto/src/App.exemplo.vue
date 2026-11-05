<script setup>
import { ref, computed } from 'vue'
import HeroBanner from './components/HeroBanner.vue'
import DestaqueHero from './components/DestaqueHero.vue'
import EstanteLivros from './components/EstanteLivros.vue'
import Revelar from './components/Revelar.vue'
import TituloSecao from './components/TituloSecao.vue'
import SearchBar from './components/SearchBar.vue'
import BookCard from './components/BookCard.vue'
import CategoryCard from './components/CategoryCard.vue'
import capaTeste from './assets/capa-teste.svg'

const busca = ref('')
const categoriaSelecionada = ref('')

const livros = ref([
  { id: 1, titulo: 'Sapiens', autor: 'Yuval Noah Harari', categoria: 'História', capa: capaTeste },
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
      livro.titulo.toLowerCase().includes(termo) || livro.autor.toLowerCase().includes(termo)
    const bateCategoria =
      categoriaSelecionada.value === '' || livro.categoria === categoriaSelecionada.value
    return bateBusca && bateCategoria
  })
})

function selecionarCategoria(nome) {
  categoriaSelecionada.value = categoriaSelecionada.value === nome ? '' : nome
}
</script>

<template>
  <HeroBanner />
  <DestaqueHero
    :livrosDestaque="[livros[0], livros[2]]"
    :totalLivros="livros.length"
    :totalCategorias="categorias.length"
  />

  <main class="mx-auto max-w-6xl px-6 py-8 md:px-10">
    <Revelar><EstanteLivros :livros="livros" numero="I" /></Revelar>

    <section class="py-16">
      <Revelar><TituloSecao numero="II" titulo="Livros em destaque" /></Revelar>
      <SearchBar v-model="busca" />

      <button
        v-if="categoriaSelecionada !== ''"
        type="button"
        class="mb-8 cursor-pointer border border-ouro px-4 py-2 transition active:scale-[0.97] font-label text-[0.7rem] uppercase tracking-[0.25em] text-ouro transition-colors hover:bg-ouro hover:text-noite"
        @click="categoriaSelecionada = ''"
      >
        Categoria: {{ categoriaSelecionada }} ✕
      </button>

      <TransitionGroup tag="div" name="livro" class="relative flex flex-wrap gap-x-8 gap-y-12">
        <BookCard
          v-for="livro in livrosFiltrados"
          :key="livro.id"
          :titulo="livro.titulo"
          :autor="livro.autor"
          :categoria="livro.categoria"
          :capa="livro.capa"
        />
      </TransitionGroup>

      <p v-if="livrosFiltrados.length === 0" class="italic text-cinza-quente">
        Nenhum livro encontrado.
      </p>
    </section>

    <section class="py-16">
      <Revelar><TituloSecao numero="III" titulo="Categorias" /></Revelar>
      <div class="flex flex-wrap gap-4">
        <Revelar v-for="(categoria, i) in categorias" :key="categoria.id" :atraso="i * 70">
          <CategoryCard
            :nome="categoria.nome"
            :ativa="categoria.nome === categoriaSelecionada"
            @click="selecionarCategoria(categoria.nome)"
          />
        </Revelar>
      </div>
    </section>
  </main>
</template>
