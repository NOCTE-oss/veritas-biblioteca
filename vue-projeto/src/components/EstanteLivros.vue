<script setup>
import { ref } from 'vue'

defineProps({
  livros: Array,
})

const ativoId = ref(null)

function alternar(id) {
  if (ativoId.value === id) {
    ativoId.value = null
  } else {
    ativoId.value = id
  }
}
</script>

<template>
  <section class="bg-[#14110f] px-6 py-16">
    <h2
      class="mb-10 text-center font-serif text-2xl font-normal uppercase tracking-[4px] text-[#c9a96e]"
    >
      Nossa Estante
    </h2>

    <div class="overflow-x-auto pb-6">
      <div class="mx-auto flex w-max items-end gap-1 border-b-8 border-[#3a2d22] px-4">
        <button
          v-for="livro in livros"
          :key="livro.id"
          type="button"
          :aria-expanded="ativoId === livro.id"
          :aria-label="livro.titulo + ', ' + livro.autor"
          :class="
            ativoId === livro.id ? 'h-72 w-48' : 'h-64 w-12 hover:-translate-y-2'
          "
          class="group shrink-0 cursor-pointer text-left transition-all duration-500 motion-reduce:transition-none [perspective:1000px]"
          @click="alternar(livro.id)"
        >
          <!-- Caixa que gira -->
          <div
            :class="ativoId === livro.id ? '[transform:rotateY(180deg)]' : ''"
            class="relative h-full w-full transition-transform duration-700 motion-reduce:transition-none [transform-style:preserve-3d]"
          >
            <!-- Frente: a lombada -->
            <div
              class="absolute inset-0 flex items-center justify-center overflow-hidden border border-[#5a4a3a] bg-[#1f1a16] py-4 transition-colors group-hover:border-[#c9a96e] [backface-visibility:hidden]"
            >
              <span
                class="rotate-180 font-serif text-xs tracking-wide text-[#d9cfc0] [writing-mode:vertical-rl]"
              >
                {{ livro.titulo }}
              </span>
            </div>

            <!-- Verso: a capa -->
            <div
              class="absolute inset-0 overflow-hidden border border-[#c9a96e] bg-[#2a221b] [backface-visibility:hidden] [transform:rotateY(180deg)]"
            >
              <img
                :src="livro.capa"
                :alt="'Capa de ' + livro.titulo"
                class="h-full w-full object-cover"
              />
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
