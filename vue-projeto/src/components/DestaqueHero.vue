<script setup>
import BookCard from './BookCard.vue'

defineProps({
  livrosDestaque: Array,
  totalLivros: Number,
  totalCategorias: Number,
})

const emit = defineEmits(['explorar'])

function rolarParaEstante(evento) {
  evento.preventDefault()
  emit('explorar')
  const elemento = document.getElementById('estante')
  if (elemento) {
    elemento.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="relative overflow-hidden border-b border-fio px-6 py-28 text-center">
    <!-- Livros flutuando: só aparecem em telas médias pra cima -->
    <div class="pointer-events-none absolute inset-0 hidden md:block">
      <div class="absolute left-10 top-20 -rotate-6 lg:left-24">
        <BookCard
          v-if="livrosDestaque[0]"
          :titulo="livrosDestaque[0].titulo"
          :autor="livrosDestaque[0].autor"
          :categoria="livrosDestaque[0].categoria"
          :capa="livrosDestaque[0].capa"
        />
      </div>
      <div class="absolute right-10 top-28 rotate-6 lg:right-24">
        <BookCard
          v-if="livrosDestaque[1]"
          :titulo="livrosDestaque[1].titulo"
          :autor="livrosDestaque[1].autor"
          :categoria="livrosDestaque[1].categoria"
          :capa="livrosDestaque[1].capa"
        />
      </div>
    </div>

    <!-- Conteúdo central -->
    <div class="relative z-10 mx-auto max-w-2xl">
      <p class="mb-6 font-label text-[0.7rem] uppercase tracking-[0.4em] text-ouro">
        Acervo
      </p>

      <h2 class="text-5xl font-medium leading-[1.05] text-pergaminho md:text-7xl">
        Qual livro você quer
        <em class="text-ouro">descobrir hoje?</em>
      </h2>

      <p class="mx-auto mt-8 max-w-md text-xl italic text-cinza-quente">
        Explore nossa seleção cuidadosa de livros que moldam mentes e despertam ideias.
      </p>

      <a
        href="#estante"
        class="group relative mt-10 active:scale-[0.97] inline-flex items-center gap-4 overflow-hidden border border-ouro px-8 py-4 font-label text-[0.7rem] font-medium uppercase tracking-[0.3em] text-ouro transition-colors duration-500 hover:text-noite focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ouro-claro"
        @click="rolarParaEstante"
      >
        <span
          class="absolute inset-0 origin-left scale-x-0 bg-ouro transition-transform duration-500 ease-out group-hover:scale-x-100"
        ></span>
        <span class="relative">Explorar agora</span>
        <span
          class="relative transition-transform duration-500 group-hover:translate-x-1"
          aria-hidden="true"
        >
          →
        </span>
      </a>

      <div class="mt-20 flex items-center justify-center gap-12">
        <div>
          <p class="text-5xl font-medium text-ouro">{{ totalLivros }}+</p>
          <p class="mt-1 font-label text-[0.65rem] uppercase tracking-[0.3em] text-cinza-quente">
            Livros selecionados
          </p>
        </div>
        <span class="h-12 w-px bg-fio"></span>
        <div>
          <p class="text-5xl font-medium text-ouro">{{ totalCategorias }}</p>
          <p class="mt-1 font-label text-[0.65rem] uppercase tracking-[0.3em] text-cinza-quente">
            Categorias
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
