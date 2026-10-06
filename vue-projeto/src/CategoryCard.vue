<script setup>
defineProps ({
    nome: String,
    imagem: String
})
</script>
<template>
    <article class="category-card">
        <img v-if="imagem" :src="imagem" :alt="nome" class="imagem" />
        <div v-else class="imagem imagem-vazia"></div>

        <div class="rodape">
            <span class="nome">{{ nome }}</span>
            <span class="linha"></span>
        </div>
    </article>
</template>

<style scoped>
.category-card {
  position: relative;
  width: 120px;
  height: 240px;
  border: 1px solid #5a4a3a;
  overflow: hidden;
  cursor: pointer;
}
.imagem {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.imagem-vazia {
  background: linear-gradient(180deg, #2a221b, #14110f);
}
.rodape {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 14px 8px;
  text-align: center;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.85));
}
.nome {
  display: block;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #e8dfd0;
}
.linha {
  display: block;
  width: 24px;
  height: 1px;
  margin: 8px auto 0;
  background: #c9a96e;
}
.category-card:hover {
  border-color: #c9a96e;
}
</style>