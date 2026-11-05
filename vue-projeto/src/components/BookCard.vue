<script setup>
defineProps({
  titulo: String,
  autor: String,
  categoria: String,
  capa: String,
})
</script>

<template>
  <article class="group w-36 cursor-pointer sm:w-40 lg:w-44">
    <div
      class="relative aspect-[2/3] w-full overflow-hidden bg-couro shadow-[0_18px_30px_-18px_rgb(0_0_0/0.9)] ring-1 ring-fio transition duration-500 group-hover:-translate-y-2 group-hover:ring-ouro"
    >
      <img
        v-if="capa"
        :src="capa"
        :alt="'Capa de ' + titulo"
        class="h-full w-full object-cover"
      />

      <!-- Sem foto: capa tipográfica com moldura dourada -->
      <div
        v-else
        class="flex h-full items-center justify-center p-5 text-center text-xl leading-tight text-ouro-claro"
      >
        <span class="pointer-events-none absolute inset-2 border border-ouro/30"></span>
        {{ titulo }}
      </div>
    </div>

    <h3 class="mt-4 text-lg font-medium leading-snug text-pergaminho">{{ titulo }}</h3>
    <p class="text-base italic text-cinza-quente">{{ autor }}</p>
    <span
      class="mt-2 block font-label text-[0.65rem] uppercase tracking-[0.3em] text-ouro"
    >
      {{ categoria }}
    </span>
  </article>
</template>
