<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// atraso = quantos milissegundos esperar antes de animar (para fazer "escada")
defineProps({
  atraso: { type: Number, default: 0 },
})

const caixa = ref(null) // vai apontar para o <div> do template
const visivel = ref(false) // false = escondido, true = já apareceu
let vigia = null

onMounted(() => {
  // IntersectionObserver avisa quando o elemento entra na tela
  vigia = new IntersectionObserver(
    ([entrada]) => {
      if (entrada.isIntersecting) {
        visivel.value = true
        vigia.disconnect() // só anima uma vez
      }
    },
    { threshold: 0.1 },
  )
  vigia.observe(caixa.value)
})

onBeforeUnmount(() => vigia?.disconnect())
</script>

<template>
  <div
    ref="caixa"
    :style="{ transitionDelay: atraso + 'ms' }"
    :class="visivel ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'"
    class="motion-safe:transition-[opacity,transform] motion-safe:duration-700 motion-safe:ease-out"
  >
    <slot />
  </div>
</template>
