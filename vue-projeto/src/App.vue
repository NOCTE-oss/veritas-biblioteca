<script setup>
import { ref, computed } from 'vue'
import BookCard from './components/BookCard.vue'
import CategoryCard from './components/CategoryCard.vue'
import SearchBar from './components/SearchBar.vue'
import HeroBanner from './components/HeroBanner.vue'
import AppFooter from './components/AppFooter.vue'
import QuoteBlock from './components/QuoteBlock.vue'

const busca = ref('')
const categoriaSelecionada = ref('')

const livros = ref([
  { id: 1, titulo: 'Sapiens', autor: 'Yuval Noah Harari', categoria: 'História', capa: 'https://books.google.com/books/content?id=uCt-BwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 2, titulo: 'O Príncipe', autor: 'Nicolau Maquiavel', categoria: 'Política', capa: 'https://books.google.com/books/content?id=UDrzAAAAMAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 3, titulo: '1984', autor: 'George Orwell', categoria: 'Literatura', capa: 'https://books.google.com/books/content?id=kotPYEqx7kMC&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 4, titulo: 'A Arte da Guerra', autor: 'Sun Tzu', categoria: 'Estratégia', capa: 'https://books.google.com/books/content?id=Z9a2DwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 5, titulo: 'O Código Da Vinci', autor: 'Dan Brown', categoria: 'Literatura', capa: 'https://books.google.com/books/content?id=gV1nhvItuoAC&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 6, titulo: 'Crime e Castigo', autor: 'Fiódor Dostoiévski', categoria: 'Filosofia', capa: 'https://books.google.com/books/content?id=OxmmBAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 7, titulo: 'Uma Breve História do Tempo', autor: 'Stephen Hawking', categoria: 'Ciência', capa: 'https://books.google.com/books/content?id=FrcPBgAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 8, titulo: 'Steve Jobs', autor: 'Walter Isaacson', categoria: 'Biografias', capa: 'https://books.google.com/books/content?id=LbuZEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 9, titulo: 'Hábitos Atômicos', autor: 'James Clear', categoria: 'Desenvolvimento Pessoal', capa: 'https://books.google.com/books/content?id=vGH7zwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
  { id: 10, titulo: 'O Homem Mais Rico da Babilônia', autor: 'George S. Clason', categoria: 'Desenvolvimento Pessoal', capa: 'https://books.google.com/books/content?id=eUxWEAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api' },
])

const categorias = ref([
  { id: 1, nome: 'Filosofia', imagem: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=500&q=85' },
  { id: 2, nome: 'História', imagem: 'https://images.unsplash.com/photo-1461360228754-6e81c478b882?auto=format&fit=crop&w=500&q=85' },
  { id: 3, nome: 'Ciência', imagem: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=500&q=85' },
  { id: 4, nome: 'Literatura', imagem: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=500&q=85' },
  { id: 5, nome: 'Biografias', imagem: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=85' },
  { id: 6, nome: 'Política', imagem: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=500&q=85' },
  { id: 7, nome: 'Estratégia', imagem: 'https://images.unsplash.com/photo-1586165368502-1bad197a6461?auto=format&fit=crop&w=500&q=85' },
  { id: 8, nome: 'Desenvolvimento Pessoal', imagem: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=500&q=85' },
])

const livrosFiltrados = computed(() => {
  const termo = busca.value.toLowerCase()
  return livros.value.filter((livro) => {
    const bateBusca =
      livro.titulo.toLowerCase().includes(termo) ||
      livro.autor.toLowerCase().includes(termo)
    const bateCategoria =
      categoriaSelecionada.value === '' ||
      livro.categoria === categoriaSelecionada.value
    return bateBusca && bateCategoria
  })
})

function irParaLivros() {
  document.getElementById('livros')?.scrollIntoView({ behavior: 'smooth' })
}

function selecionarCategoria(nome) {
  if (categoriaSelecionada.value === nome) {
    categoriaSelecionada.value = ''
  } else {
    categoriaSelecionada.value = nome
  }
}
</script>

<template>
  <main class="app" id="inicio">
    <header class="site-header">
      <a class="marca" href="#inicio"><span class="marca-icone">♧</span><span class="marca-nome">VERITAS</span><span class="marca-divisor"></span><span class="marca-sub">BIBLIOTECA VIRTUAL</span></a>
      <nav class="navegacao"><a class="nav-link ativo" href="#inicio">Início</a><a class="nav-link" href="#livros">Biblioteca</a><a class="nav-link" href="#categorias">Categorias</a><a class="nav-link" href="#sobre">Sobre</a></nav>
      <a class="atalho-busca" href="#busca" aria-label="Buscar livros">⌕</a>
    </header>
    <HeroBanner imagem="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=90" titulo="Ideias que moldam grandes mentes." subtitulo="Uma biblioteca virtual cuidadosamente selecionada para aqueles que buscam conhecimento, clareza e propósito." botao="Explorar biblioteca" @click-botao="irParaLivros" />
    <section class="secao" id="livros">
      <div class="cabecalho-secao"><div class="titulo-com-linha"><span class="ornamento">✳</span><h2 class="secao-titulo">Livros em destaque</h2><span class="linha-longa"></span></div><a class="ver-todos" href="#busca">Ver acervo →</a></div>
      <div id="busca" class="busca-area"><SearchBar v-model="busca" /><button v-if="categoriaSelecionada !== ''" class="limpar" @click="categoriaSelecionada = ''">{{ categoriaSelecionada }} ×</button></div>
      <div class="lista-livros"><BookCard v-for="livro in livrosFiltrados" :key="livro.id" :titulo="livro.titulo" :autor="livro.autor" :categoria="livro.categoria" :capa="livro.capa" /></div>
      <p v-if="livrosFiltrados.length === 0" class="aviso">Nenhum livro encontrado. Tente outro título ou autor.</p>
    </section>
    <section class="secao" id="categorias">
      <div class="cabecalho-secao"><div class="titulo-com-linha"><span class="ornamento">✳</span><h2 class="secao-titulo">Explore por categoria</h2><span class="linha-longa"></span></div><button class="ver-todos" @click="categoriaSelecionada = ''">Ver todas →</button></div>
      <div class="lista-categorias"><CategoryCard v-for="categoria in categorias" :key="categoria.id" :nome="categoria.nome" :imagem="categoria.imagem" :ativa="categoria.nome === categoriaSelecionada" @click="selecionarCategoria(categoria.nome)" /></div>
    </section>
    <section id="sobre" class="secao-citacao"><QuoteBlock /><div class="convite"><span class="convite-kicker">Uma jornada pelo conhecimento</span><h2>Grandes livros.<br />Novas perspectivas.</h2><a href="#livros" class="convite-link">Descobrir o acervo →</a></div></section>
    <AppFooter />
  </main>
</template>
<style>
:root{font-family:Georgia,'Times New Roman',serif;color:#e9dfd0;background:#090807;--gold:#c9a96e;--border:rgba(201,169,110,.28)}*{box-sizing:border-box}html{scroll-behavior:smooth;scroll-padding-top:85px}body{margin:0;min-width:320px;background:#090807;color:#e9dfd0}.app{overflow:hidden;background:radial-gradient(ellipse at 50% 15%,rgba(73,48,25,.12),transparent 45%),#090807}.site-header{min-height:76px;padding:0 clamp(20px,5vw,80px);display:flex;align-items:center;justify-content:space-between;gap:25px;border-bottom:1px solid var(--border);background:rgba(7,6,5,.96);position:sticky;top:0;z-index:20;backdrop-filter:blur(14px)}.marca{display:flex;align-items:center;gap:12px;text-decoration:none;white-space:nowrap}.marca-icone{color:var(--gold);font-size:30px}.marca-nome{font-size:23px;letter-spacing:.22em}.marca-divisor{height:28px;width:1px;background:#92754a;margin:0 4px}.marca-sub{color:var(--gold);font-size:9px;letter-spacing:.22em}.navegacao{display:flex;align-items:center;gap:clamp(15px,3vw,42px)}.nav-link{padding:29px 0 25px;color:#c7bba9;text-decoration:none;font-size:10px;text-transform:uppercase;letter-spacing:.16em;border-bottom:1px solid transparent}.nav-link:hover,.nav-link.ativo{color:var(--gold);border-color:var(--gold)}.atalho-busca{color:var(--gold);text-decoration:none;font-size:27px}.secao{padding:34px clamp(20px,5vw,80px) 40px;border-bottom:1px solid var(--border);background:linear-gradient(90deg,rgba(255,255,255,.012),transparent 40%,rgba(255,255,255,.008))}.cabecalho-secao{display:flex;align-items:center;justify-content:space-between;gap:22px;margin-bottom:25px}.titulo-com-linha{display:flex;align-items:center;gap:13px;min-width:0;flex:1}.ornamento{color:var(--gold);font-size:19px}.secao-titulo{margin:0;color:#e8d8bd;font-size:clamp(14px,1.3vw,18px);font-weight:400;letter-spacing:.2em;text-transform:uppercase;white-space:nowrap}.linha-longa{height:1px;flex:1;background:linear-gradient(90deg,#92754a,transparent)}.ver-todos{border:0;background:none;color:var(--gold);text-decoration:none;text-transform:uppercase;font-size:9px;letter-spacing:.16em;white-space:nowrap;cursor:pointer}.busca-area{display:flex;align-items:flex-start;gap:12px}.lista-livros{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:30px 22px;align-items:start}.lista-categorias{display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:14px}.aviso{padding:26px 0;color:#a99b88;font-style:italic}.limpar{padding:10px 13px;background:transparent;border:1px solid #92754a;color:var(--gold);cursor:pointer}.secao-citacao{display:grid;grid-template-columns:1.15fr .85fr;align-items:stretch;border-bottom:1px solid var(--border);background:#0c0a08}.convite{padding:42px clamp(24px,5vw,80px);border-left:1px solid var(--border);display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.convite-kicker{color:var(--gold);font-size:9px;letter-spacing:.2em;text-transform:uppercase}.convite h2{margin:15px 0 22px;font-size:clamp(22px,2.3vw,32px);font-weight:400;line-height:1.35}.convite-link{padding:11px 16px;border:1px solid #92754a;color:var(--gold);text-decoration:none;text-transform:uppercase;font-size:9px;letter-spacing:.15em}.convite-link:hover{background:var(--gold);color:#100d09}@media(min-width:1450px){.lista-livros{grid-template-columns:repeat(6,minmax(0,1fr))}}@media(max-width:1050px){.site-header{flex-wrap:wrap;padding-top:12px;padding-bottom:0;gap:8px 20px}.marca{margin-right:auto}.navegacao{order:3;width:100%;justify-content:space-between}.nav-link{padding:14px 0 12px}.lista-livros{grid-template-columns:repeat(4,minmax(0,1fr));gap:24px 18px}.lista-categorias{grid-template-columns:repeat(4,minmax(0,1fr))}}@media(max-width:650px){.site-header{padding:12px 16px 0}.marca{gap:7px}.marca-icone{font-size:23px}.marca-nome{font-size:17px;letter-spacing:.14em}.marca-divisor{height:22px}.marca-sub{font-size:7px;letter-spacing:.1em}.navegacao{overflow-x:auto;justify-content:flex-start;gap:20px}.nav-link{font-size:9px;flex-shrink:0}.secao{padding:26px 16px 30px}.cabecalho-secao{gap:10px;margin-bottom:20px}.titulo-com-linha{gap:8px}.secao-titulo{font-size:11px;letter-spacing:.1em;white-space:normal}.lista-livros{grid-template-columns:repeat(2,minmax(0,1fr));gap:24px 14px}.lista-categorias{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.busca-area{flex-direction:column}.secao-citacao{grid-template-columns:1fr}.convite{border-left:0;border-top:1px solid var(--border);padding:30px 24px}}
</style>


<style>
body {
  margin: 0;
  background: #14110f;
  color: #e9dfd0;
  font-family: Georgia, serif;
}
.app {
  padding: 40px;
}
.secao-titulo {
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: normal;
  color: #c9a96e;
}
.lista-livros {
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
}
.lista-categorias {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}
.aviso {
  color: #d9cfc0;
  font-style: italic;
}
.limpar {
  margin-bottom: 20px;
  padding: 8px 14px;
  background: transparent;
  border: 1px solid #c9a96e;
  color: #c9a96e;
  font-family: Georgia, serif;
  cursor: pointer;
}
.limpar:hover {
  background: #c9a96e;
  color: #14110f;
}
</style>