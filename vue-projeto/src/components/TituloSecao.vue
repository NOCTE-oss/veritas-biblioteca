<script setup>
defineProps({
  numero: String,
  titulo: String,
})
</script>

<template>
  <div class="mb-10 flex items-baseline gap-5">
    <span class="font-display text-3xl italic text-ouro" aria-hidden="true">
      {{ numero }}
    </span>
    <h2
      class="font-label text-xs font-medium uppercase tracking-[0.35em] text-pergaminho"
    >
      {{ titulo }}
    </h2>
    <span class="h-px flex-1 bg-linear-to-r from-fio to-transparent"></span>
  </div>
</template>
