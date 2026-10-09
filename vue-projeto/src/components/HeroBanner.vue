<script setup>
defineProps({
  titulo: { type: String, default: 'Ideias que moldam grandes mentes.' },
  subtitulo: {
    type: String,
    default: 'Uma biblioteca virtual cuidadosamente selecionada para aqueles que buscam conhecimento, clareza e propósito.',
  },
  botao: { type: String, default: 'Explorar biblioteca' },
  imagem: String,
})

defineEmits(['click-botao'])
</script>

<template>
  <section class="hero" :style="imagem ? { backgroundImage: 'linear-gradient(90deg, rgba(7,6,5,.94) 0%, rgba(7,6,5,.78) 35%, rgba(7,6,5,.18) 76%, rgba(7,6,5,.42) 100%), linear-gradient(0deg, rgba(7,6,5,.5), transparent 45%), url(' + imagem + ')' } : {}">
    <div class="conteudo">
      <span class="eyebrow">MAIS QUE LIVROS <i></i></span>
      <h1 class="titulo">{{ titulo }}</h1>
      <p class="subtitulo">{{ subtitulo }}</p>
      <button class="botao" @click="$emit('click-botao')">{{ botao }}</button>
    </div>
  </section>
</template>

<style scoped>
.hero{position:relative;display:flex;align-items:center;justify-content:flex-start;min-height:390px;padding:clamp(46px,6vw,88px) clamp(24px,10.5vw,170px);text-align:left;background-size:cover;background-position:center 53%;background-color:#14110f;background-repeat:no-repeat;border-bottom:1px solid rgba(201,169,110,.35)}
.conteudo{max-width:540px;position:relative;z-index:1}
.eyebrow{display:flex;align-items:center;gap:14px;margin-bottom:20px;color:#d2b781;font-size:9px;letter-spacing:.32em}
.eyebrow i{display:block;width:64px;height:1px;background:#b49660}
.titulo{max-width:550px;margin:0 0 18px;font-size:clamp(34px,4.3vw,59px);font-weight:400;line-height:1.07;letter-spacing:.035em;text-transform:uppercase;color:#f0e6d6}
.subtitulo{max-width:420px;margin:0 0 26px;font-size:15px;line-height:1.7;color:#d1c3b0}
.botao{display:inline-flex;align-items:center;gap:22px;padding:13px 20px;background:rgba(9,7,5,.35);border:1px solid #b99a63;color:#e0c48f;font-family:Georgia,serif;font-size:9px;letter-spacing:.2em;text-transform:uppercase;cursor:pointer;transition:background .25s,color .25s}
.botao:hover{background:#c9a96e;color:#100d09}
@media(max-width:650px){.hero{min-height:350px;padding:42px 23px;background-position:58% center}.titulo{font-size:clamp(31px,9vw,43px)}.subtitulo{font-size:13px;max-width:340px}}
</style>