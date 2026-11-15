<template><header class="topo"><router-link class="marca" to="/">VERITAS<span> Biblioteca Virtual</span></router-link><nav aria-label="Navegação principal"><router-link to="/">Início</router-link><router-link to="/sobre">Sobre</router-link><router-link to="/contato">Contato</router-link></nav></header><RouterView /></template>
<style>
body{margin:0;background:#14110f;color:#e9dfd0;font-family:Georgia,serif}
.topo{display:flex;align-items:center;justify-content:space-between;gap:20px;padding:18px 5%;background:#1b1713;border-bottom:1px solid #403323;flex-wrap:wrap}
.marca{color:#c9a96e;text-decoration:none;font-size:1.25rem;letter-spacing:2px}.marca span{display:block;font-size:.75rem;letter-spacing:1px;color:#d9cfc0}
.topo nav{display:flex;gap:24px;flex-wrap:wrap}.topo nav a{color:#e9dfd0;text-decoration:none;padding:8px 0}.topo nav a:hover,.topo nav a.router-link-active{color:#c9a96e;border-bottom:1px solid #c9a96e}
@media(max-width:520px){.topo{align-items:flex-start}.topo nav{gap:16px}}
</style>