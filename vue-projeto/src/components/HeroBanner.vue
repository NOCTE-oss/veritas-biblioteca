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
  <section class="hero" :style="imagem ? { backgroundImage: `linear-gradient(180deg, rgba(20, 17, 15, 0.28), rgba(20, 17, 15, 0.82)), url(${imagem})` } : {}">
    <div class="conteudo">
      <span class="detalhe"></span>
      <h1 class="titulo">{{ titulo }}</h1>
      <p class="subtitulo">{{ subtitulo }}</p>
      <button class="botao" @click="$emit('click-botao')">{{ botao }}</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 380px;
  padding: 60px 40px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-color: #14110f;
  background-repeat: no-repeat;
  background-color: #14110f;
  background-image: linear-gradient(180deg, rgba(20, 17, 15, 0.22), rgba(20, 17, 15, 0.82));
  border-bottom: 1px solid #5a4a3a;
}
.conteudo {
  max-width: 640px;
}
.detalhe {
  display: block;
  width: 40px;
  height: 1px;
  margin: 0 auto 24px;
  background: #c9a96e;
}
.titulo {
  margin: 0 0 16px;
  font-size: 40px;
  font-weight: normal;
  line-height: 1.2;
  color: #f0e6d6;
}
.subtitulo {
  margin: 0 0 32px;
  font-size: 18px;
  font-style: italic;
  color: #d9cfc0;
}
.botao {
  padding: 12px 28px;
  background: transparent;
  border: 1px solid #c9a96e;
  color: #c9a96e;
  font-family: Georgia, serif;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
}
.botao:hover {
  background: #c9a96e;
  color: #14110f;
}
</style>
