<script setup>
const buscar = defineModel()
</script>
<template><div class="search-bar"><span class="icone" aria-hidden="true">⌕</span><input id="campo-busca" type="search" v-model="buscar" placeholder="Buscar por título ou autor..." class="campo" aria-label="Buscar livros por título ou autor" /><span class="atalho">ACERVO VERITAS</span></div></template>
<style scoped>
.search-bar{display:flex;align-items:center;gap:12px;width:100%;max-width:520px;margin-bottom:23px;padding:0 14px;border:1px solid rgba(201,169,110,.3);background:linear-gradient(120deg,#15110d,#0e0c0a);transition:border-color .25s,box-shadow .25s}.search-bar:focus-within{border-color:#c9a96e;box-shadow:0 0 0 3px rgba(201,169,110,.07)}.icone{color:#c9a96e;font-size:25px;line-height:1}.campo{min-width:0;width:100%;padding:14px 0;border:0;outline:0;background:transparent;color:#e9dfd0;font-size:13px}.campo::placeholder{color:#958675}.campo::-webkit-search-cancel-button{cursor:pointer}.atalho{color:#79684e;font-size:8px;letter-spacing:.12em;white-space:nowrap}@media(max-width:650px){.search-bar{max-width:none}.atalho{display:none}}
</style>