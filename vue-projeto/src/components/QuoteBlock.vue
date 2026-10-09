<script setup>
defineProps({
  frase: {
    type: String,
    default: 'Não é que tenhamos pouco tempo, mas que perdemos muito dele.',
  },
  autor: { type: String, default: 'Sêneca' },
})
</script>

<template>
  <blockquote class="citacao">
    <span class="aspas">“</span>
    <p class="frase">{{ frase }}</p>
    <footer class="rodape">
      <span class="linha"></span>
      <cite class="autor">{{ autor }}</cite>
    </footer>
  </blockquote>
</template>

<style scoped>
.citacao {
  max-width: 720px;
  margin: 60px auto;
  padding: 0 24px;
  text-align: center;
}
.aspas {
  display: block;
  font-size: 64px;
  line-height: 1;
  color: #c9a96e;
}
.frase {
  margin: 0 0 24px;
  font-size: 26px;
  font-style: italic;
  line-height: 1.5;
  color: #f0e6d6;
}
.rodape {
  margin: 0;
}
.linha {
  display: block;
  width: 24px;
  height: 1px;
  margin: 0 auto 12px;
  background: #c9a96e;
}
.autor {
  font-style: normal;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #c9a96e;
}
</style>
