<script setup>
const buscar = defineModel()
</script>

<template>
    <div class="search-bar">
        <input type="text" v-model="buscar" placeholder="Buscar nome do titulo ou autor do livro" class="campo" />
    </div>
</template>

<style scoped>
.search-bar {
    margin-bottom: 32px;
}

.campo {
    width: 100%;
  max-width: 420px;
  padding: 12px 16px;
  background: #1f1a16;
  border: 1px solid #5a4a3a;
  color: #e8dfd0;
  font-size: 16px;
  font-family: Georgia, serif;
}

.campo::placeholder {
    color: #a39684;
}
.campo:focus {
    outline:none;
    border-color: #c9a96e;
}
</style>