<script setup>
defineProps({
  chamada: { type: String, default: 'Mais que livros' },
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
    class="relative isolate flex min-h-[78vh] items-center overflow-hidden border-b border-fio bg-cover bg-center px-6 py-24 md:px-16"
    :style="imagem ? { backgroundImage: `url(${imagem})` } : {}"
  >
    <!-- Véu escuro por cima da foto (some o fundo atrás do texto) -->
    <div class="absolute inset-0 -z-10 bg-linear-to-r from-noite via-noite/80 to-noite/30"></div>

    <!-- Brilho de vela -->
    <div
      class="pointer-events-none absolute -right-24 top-1/4 -z-10 size-[34rem] rounded-full bg-[radial-gradient(circle,rgb(201_169_110/0.22),transparent_65%)] blur-2xl"
    ></div>

    <div class="mx-auto flex w-full max-w-6xl items-end justify-between gap-12">
      <div class="max-w-2xl">
        <p
          class="mb-8 flex items-center gap-4 font-label text-[0.7rem] uppercase tracking-[0.4em] text-ouro motion-safe:animate-subir"
        >
          <span class="h-px w-12 bg-ouro"></span>
          {{ chamada }}
        </p>

        <h1
          class="font-display text-5xl font-medium leading-[1.02] text-pergaminho md:text-7xl motion-safe:animate-subir [animation-delay:120ms]"
        >
          {{ titulo }}
        </h1>

        <p
          class="mt-8 max-w-md text-xl italic text-cinza-quente motion-safe:animate-subir [animation-delay:240ms]"
        >
          {{ subtitulo }}
        </p>

        <button
          type="button"
          class="group relative mt-10 active:scale-[0.97] inline-flex cursor-pointer items-center gap-4 overflow-hidden border border-ouro px-8 py-4 font-label text-[0.7rem] font-medium uppercase tracking-[0.3em] text-ouro transition-colors duration-500 hover:text-noite focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ouro-claro motion-safe:animate-subir [animation-delay:360ms]"
          @click="$emit('click-botao')"
        >
          <!-- Camada dourada que "varre" o botão da esquerda pra direita no hover -->
          <span
            class="absolute inset-0 origin-left scale-x-0 bg-ouro transition-transform duration-500 ease-out group-hover:scale-x-100"
          ></span>
          <span class="relative">{{ botao }}</span>
          <span
            class="relative transition-transform duration-500 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        </button>
      </div>

      <p
        class="hidden border-l border-fio pl-6 font-label text-[0.65rem] uppercase leading-loose tracking-[0.3em] text-cinza-quente lg:block"
      >
        Ler<br />é também<br />uma forma<br />de viver<br />mais.
      </p>
    </div>
  </section>
</template>
