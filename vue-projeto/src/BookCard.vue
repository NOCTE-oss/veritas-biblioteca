<script setup>
defineProps({
  titulo: String,
  autor: String,
  categoria: String,
  capa: String,
})
</script>

<template>
  <article class="book-card">
    <img v-if="capa" :src="capa" :alt="titulo" class="capa" />
    <div v-else class="capa capa-vazia">{{ titulo }}</div>

    <h3 class="titulo">{{ titulo }}</h3>
    <p class="autor">{{ autor }}</p>
    <span class="categoria">{{ categoria }}</span>
  </article>
</template>

<style scoped>
.book-card {
  width: 150px;
}
.capa {
  width: 100%;
  height: 210px;
  object-fit: cover;
  border: 1px solid #5a4a3a;
  display: block;
}
.capa-vazia {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  background: #1f1a16;
  color: #c9a96e;
  font-size: 18px;
}
.titulo {
  margin: 12px 0 4px;
  font-size: 16px;
  color: #f0e6d6;
}
.autor {
  margin: 0 0 8px;
  font-size: 14px;
  color: #d9cfc0;
}
.categoria {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #c9a96e;
}
</style>