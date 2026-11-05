<script setup>
import { ref } from 'vue'
import TituloSecao from './TituloSecao.vue'

defineProps({
  livros: Array,
  numero: { type: String, default: 'I' },
})

const ativoId = ref(null)

// Listas de variação: cada lombada pega um item, na ordem.
// O "%" (resto da divisão) faz a lista recomeçar do zero quando acaba.
const couros = ['#2b1d16', '#1b2520', '#2c1a1f', '#1d2130', '#2a2616', '#26191a']
const alturas = ['h-64', 'h-60', 'h-[17rem]', 'h-[15.5rem]', 'h-[16.5rem]']
const larguras = ['w-12', 'w-10', 'w-14', 'w-11']

function alternar(id) {
  if (ativoId.value === id) {
    ativoId.value = null
  } else {
    ativoId.value = id
  }
}
</script>

<template>
  <section id="estante" class="py-16">
    <TituloSecao :numero="numero" titulo="Nossa estante" />

    <div class="overflow-x-auto pb-6">
      <div
        class="mx-auto flex w-max items-end gap-1 border-b-[10px] border-fio px-4 shadow-[0_16px_20px_-12px_rgb(0_0_0/0.9)]"
      >
        <button
          v-for="(livro, i) in livros"
          :key="livro.id"
          type="button"
          :aria-expanded="ativoId === livro.id"
          :aria-label="livro.titulo + ', ' + livro.autor"
          :class="
            ativoId === livro.id
              ? 'h-72 w-48'
              : [alturas[i % alturas.length], larguras[i % larguras.length], 'hover:-translate-y-2']
          "
          class="group shrink-0 cursor-pointer text-left transition-all duration-500 [perspective:1000px]"
          @click="alternar(livro.id)"
        >
          <!-- Caixa que gira -->
          <div
            :class="ativoId === livro.id ? '[transform:rotateY(180deg)]' : ''"
            class="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d]"
          >
            <!-- Frente: a lombada -->
            <div
              :style="{ backgroundColor: couros[i % couros.length] }"
              class="absolute inset-0 flex items-center justify-center overflow-hidden border border-fio py-8 transition-colors group-hover:border-ouro [backface-visibility:hidden]"
            >
              <!-- Filetes dourados, como nas lombadas encadernadas -->
              <span class="absolute inset-x-1 top-3 h-px bg-ouro/50"></span>
              <span class="absolute inset-x-1 top-4 h-px bg-ouro/30"></span>
              <span class="absolute inset-x-1 bottom-4 h-px bg-ouro/30"></span>
              <span class="absolute inset-x-1 bottom-3 h-px bg-ouro/50"></span>

              <span
                class="rotate-180 text-[0.95rem] font-medium tracking-wide text-ouro-claro [writing-mode:vertical-rl]"
              >
                {{ livro.titulo }}
              </span>
            </div>

            <!-- Verso: a capa -->
            <div
              class="absolute inset-0 overflow-hidden border border-ouro bg-couro [backface-visibility:hidden] [transform:rotateY(180deg)]"
            >
              <img
                v-if="livro.capa"
                :src="livro.capa"
                :alt="'Capa de ' + livro.titulo"
                class="h-full w-full object-cover"
              />

              <div v-else class="flex h-full flex-col justify-between p-5">
                <span class="pointer-events-none absolute inset-2 border border-ouro/30"></span>
                <span class="font-label text-[0.65rem] uppercase tracking-[0.3em] text-ouro">
                  {{ livro.categoria }}
                </span>
                <div>
                  <h3 class="text-2xl font-medium leading-tight text-pergaminho">
                    {{ livro.titulo }}
                  </h3>
                  <p class="mt-2 text-base italic text-cinza-quente">{{ livro.autor }}</p>
                </div>
              </div>
            </div>
          </div>
        </button>
      </div>
    </div>
  </section>
</template>
