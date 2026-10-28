<script setup>
import BookCard from './BookCard.vue'

const props = defineProps({
  livrosDestaque: Array,
  totalLivros: Number,
  totalCategorias: Number,
})
</script>

<template>
  <section class="relative overflow-hidden bg-[#14110f] px-6 py-24 text-center">
    <!-- Livros flutuando: só aparecem em telas médias pra cima -->
    <div class="pointer-events-none absolute inset-0 hidden md:block">
      <div class="absolute left-10 top-16 -rotate-6">
        <BookCard
          v-if="livrosDestaque[0]"
          :titulo="livrosDestaque[0].titulo"
          :autor="livrosDestaque[0].autor"
          :categoria="livrosDestaque[0].categoria"
        />
      </div>
      <div class="absolute right-10 top-24 rotate-6">
        <BookCard
          v-if="livrosDestaque[1]"
          :titulo="livrosDestaque[1].titulo"
          :autor="livrosDestaque[1].autor"
          :categoria="livrosDestaque[1].categoria"
        />
      </div>
    </div>

    <!-- Conteúdo central -->
    <div class="relative z-10 mx-auto max-w-2xl">
      <h2 class="font-serif text-4xl font-normal leading-tight text-[#f0e6d6] md:text-6xl">
        Qual Livro Você Quer
        <span class="text-[#c9a96e]">Descobrir Hoje?</span>
      </h2>

      <p class="mx-auto mt-6 max-w-md text-[#d9cfc0]">
        Explore nossa seleção cuidadosa de livros que moldam mentes e
        despertam ideias.
      </p>

      <button
        class="mt-8 border border-[#c9a96e] px-8 py-3 uppercase tracking-widest text-[#c9a96e] transition hover:bg-[#c9a96e] hover:text-[#14110f]"
      >
        Explorar Agora
      </button>

      <div class="mt-16 flex justify-center gap-16">
        <div>
          <p class="text-3xl font-bold text-[#c9a96e]">{{ totalLivros }}+</p>
          <p class="text-sm text-[#d9cfc0]">Livros Selecionados</p>
        </div>
        <div>
          <p class="text-3xl font-bold text-[#c9a96e]">{{ totalCategorias }}</p>
          <p class="text-sm text-[#d9cfc0]">Categorias</p>
        </div>
      </div>
    </div>
  </section>
</template>