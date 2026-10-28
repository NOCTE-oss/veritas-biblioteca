<script setup>
defineProps({
  titulo: String,
  autor: String,
  categoria: String,
  capa: String,
})
</script>

<template>
  <article
    class="w-36 cursor-pointer transition duration-300 hover:-translate-y-2 sm:w-40 lg:w-44"
  >
    <img
      v-if="capa"
      :src="capa"
      :alt="titulo"
      class="block h-52 w-full border border-[#5a4a3a] object-cover transition duration-300 hover:border-[#c9a96e] sm:h-56"
    />
    <div
      v-else
      class="box-border flex h-52 w-full items-center justify-center border border-[#5a4a3a] bg-[#1f1a16] p-3 text-center text-lg text-[#c9a96e] transition duration-300 hover:border-[#c9a96e] sm:h-56"
    >
      {{ titulo }}
    </div>

    <h3 class="mb-1 mt-3 text-base text-[#f0e6d6]">{{ titulo }}</h3>
    <p class="mb-2 text-sm text-[#d9cfc0]">{{ autor }}</p>
    <span class="text-xs uppercase tracking-[2px] text-[#c9a96e]">
      {{ categoria }}
    </span>
  </article>
</template>