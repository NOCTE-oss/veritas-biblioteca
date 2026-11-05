<script setup>
defineProps({
  nome: String,
  imagem: String,
  ativa: Boolean,
})
</script>

<template>
  <article
    :class="
      ativa
        ? 'border-ouro shadow-[0_0_24px_rgb(201_169_110/0.35)]'
        : 'border-fio hover:border-ouro/70'
    "
    class="group relative h-60 w-32 cursor-pointer overflow-hidden border transition duration-500 sm:w-36"
  >
    <img
      v-if="imagem"
      :src="imagem"
      :alt="nome"
      class="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
    />
    <div v-else class="h-full w-full bg-linear-to-b from-couro to-noite"></div>

    <div
      class="absolute inset-x-0 bottom-0 bg-linear-to-t from-noite/90 to-transparent px-1 pb-4 pt-10 text-center"
    >
      <span
        class="block font-label text-[0.62rem] uppercase tracking-[0.12em] text-pergaminho"
      >
        {{ nome }}
      </span>
      <span
        :class="ativa ? 'w-12' : 'w-6 group-hover:w-12'"
        class="mx-auto mt-3 block h-px bg-ouro transition-all duration-500"
      ></span>
    </div>
  </article>
</template>
