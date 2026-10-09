<script setup>
defineProps({
  nome: { type: String, default: 'Biblioteca' },
  descricao: {
    type: String,
    default: 'Clássicos para quem gosta de pensar.',
  },
  links: {
    type: Array,
    default: () => [
      { id: 1, nome: 'Início', href: '#' },
      { id: 2, nome: 'Livros', href: '#livros' },
      { id: 3, nome: 'Categorias', href: '#categorias' },
      { id: 4, nome: 'Contato', href: '#contato' },
    ],
  },
})

const ano = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="topo">
      <div class="marca">
        <span class="nome">{{ nome }}</span>
        <p class="descricao">{{ descricao }}</p>
      </div>

      <nav class="menu">
        <a v-for="link in links" :key="link.id" :href="link.href" class="link">
          {{ link.nome }}
        </a>
      </nav>
    </div>

    <span class="linha"></span>
    <p class="copy">© {{ ano }} {{ nome }}. Todos os direitos reservados.</p>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 40px;
  border-top: 1px solid #5a4a3a;
  background: #14110f;
}
.topo {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 24px;
}
.nome {
  font-size: 18px;
  letter-spacing: 6px;
  text-transform: uppercase;
  color: #c9a96e;
}
.descricao {
  margin: 8px 0 0;
  font-size: 14px;
  font-style: italic;
  color: #d9cfc0;
}
.menu {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.link {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #e8dfd0;
  text-decoration: none;
}
.link:hover {
  color: #c9a96e;
}
.linha {
  display: block;
  width: 24px;
  height: 1px;
  margin: 32px auto 16px;
  background: #c9a96e;
}
.copy {
  margin: 0;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  color: #a39684;
}
</style>
