<script setup>
defineProps({
  titulo: { type: String, default: 'Leia o que atravessa os séculos' },
  subtitulo: {
    type: String,
    default: 'Uma coleção de clássicos de filosofia, história e estratégia.',
  },
  botao: { type: String, default: 'Explorar acervo' },
  imagem: String,
})

defineEmits(['click-botao'])
</script>

<template>
  <section
    class="relative flex min-h-[380px] items-center justify-center border-b border-[#5a4a3a] bg-[#14110f] bg-cover bg-center bg-no-repeat px-6 py-16 text-center md:px-10"
    :style="imagem ? { backgroundImage: `url(${imagem})` } : {}"
  >
    <!-- Camada escura por cima da imagem (era o linear-gradient) -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#14110f]/20 to-[#14110f]/80"></div>

    <div class="relative z-10 max-w-2xl">
      <span class="mx-auto mb-6 block h-px w-10 bg-[#c9a96e]"></span>

      <h1 class="mb-4 text-3xl font-normal leading-tight text-[#f0e6d6] md:text-5xl">
        {{ titulo }}
      </h1>

      <p class="mb-8 text-base italic text-[#d9cfc0] md:text-lg">
        {{ subtitulo }}
      </p>

      <button
        class="cursor-pointer border border-[#c9a96e] px-7 py-3 font-serif text-xs uppercase tracking-[3px] text-[#c9a96e] transition hover:bg-[#c9a96e] hover:text-[#14110f]"
        @click="$emit('click-botao')"
      >
        {{ botao }}
      </button>
    </div>
  </section>
</template>