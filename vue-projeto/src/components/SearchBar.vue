<script setup>
const busca = defineModel()
</script>

<template>
  <div class="mb-12">
    <label class="sr-only" for="busca">Buscar livros</label>
    <input
      id="busca"
      v-model="busca"
      type="text"
      placeholder="Buscar por título ou autor…"
      class="w-full max-w-md border-0 border-b border-fio bg-transparent px-0 py-3 text-2xl italic text-pergaminho outline-none transition-colors duration-300 placeholder:text-cinza-quente/70 focus:border-ouro"
    />
  </div>
</template>
