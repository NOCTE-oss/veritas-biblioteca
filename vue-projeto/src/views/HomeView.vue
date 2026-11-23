<script setup>
import { ref, computed, onMounted } from 'vue'
import BookCard from '../components/BookCard.vue'
import CategoryCard from '../components/CategoryCard.vue'
import SearchBar from '../components/SearchBar.vue'
import HeroBanner from '../components/HeroBanner.vue'
import AppFooter from '../components/AppFooter.vue'
import QuoteBlock from '../components/QuoteBlock.vue'
import DestaqueHero from '../components/DestaqueHero.vue'
import EstanteLivros from '../components/EstanteLivros.vue'

const busca = ref('')
const categoriaSelecionada = ref('')
const capaGoogleBooks = (id) => `https://books.google.com/books/content?id=${id}&printsec=frontcover&img=1&zoom=1&source=gbs_api`
const livros = ref([
  { id: 1, titulo: 'Sapiens', autor: 'Yuval Noah Harari', categoria: 'História', capa: capaGoogleBooks('uCt-BwAAQBAJ') },
  { id: 2, titulo: 'O Príncipe', autor: 'Nicolau Maquiavel', categoria: 'Política', capa: capaGoogleBooks('44ZXDwAAQBAJ') },
  { id: 3, titulo: '1984', autor: 'George Orwell', categoria: 'Literatura', capa: capaGoogleBooks('kotPYEqx7kMC') },
  { id: 4, titulo: 'A Arte da Guerra', autor: 'Sun Tzu', categoria: 'Estratégia', capa: capaGoogleBooks('ubfsEAAAQBAJ') },
  { id: 5, titulo: 'O Código Da Vinci', autor: 'Dan Brown', categoria: 'Literatura', capa: capaGoogleBooks('gV1nhvItuoAC') },
  { id: 6, titulo: 'Crime e Castigo', autor: 'Fiódor Dostoiévski', categoria: 'Filosofia', capa: capaGoogleBooks('OxmmBAAAQBAJ') },
  { id: 7, titulo: 'Uma Breve História do Tempo', autor: 'Stephen Hawking', categoria: 'Ciência', capa: capaGoogleBooks('FrcPBgAAQBAJ') },
  { id: 8, titulo: 'Steve Jobs', autor: 'Walter Isaacson', categoria: 'Biografias', capa: capaGoogleBooks('LbuZEAAAQBAJ') },
  { id: 9, titulo: 'Hábitos Atômicos', autor: 'James Clear', categoria: 'Desenvolvimento Pessoal', capa: capaGoogleBooks('qI6iDwAAQBAJ') },
  { id: 10, titulo: 'O Homem Mais Rico da Babilônia', autor: 'George S. Clason', categoria: 'Desenvolvimento Pessoal', capa: capaGoogleBooks('eUxWEAAAQBAJ') },
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
  return livros.value.filter(livro => (livro.titulo.toLowerCase().includes(termo) || livro.autor.toLowerCase().includes(termo)) && (categoriaSelecionada.value === '' || livro.categoria === categoriaSelecionada.value))
})
function selecionarCategoria(nome) { categoriaSelecionada.value = categoriaSelecionada.value === nome ? '' : nome }
function rolarParaEstante() { document.getElementById('estante')?.scrollIntoView({ behavior: 'smooth' }) }

const consultaApi = ref('literatura brasileira')
const resultadosApi = ref([])
const carregandoApi = ref(false)
const erroApi = ref('')
const livroDetalheApi = ref(null)
async function buscarLivrosApi() {
  const termo = consultaApi.value.trim()
  if (!termo) { erroApi.value = 'Digite um título, autor ou assunto para pesquisar.'; return }
  carregandoApi.value = true
  erroApi.value = ''
  livroDetalheApi.value = null
  try {
    const url = 'https://www.googleapis.com/books/v1/volumes?q=' + encodeURIComponent(termo) + '&maxResults=12&langRestrict=pt'
    const resposta = await fetch(url)
    if (!resposta.ok) throw new Error('A API respondeu com status ' + resposta.status)
    const dados = await resposta.json()
    resultadosApi.value = (dados.items || []).map(item => {
      const info = item.volumeInfo || {}
      return {
        id: item.id,
        titulo: info.title || 'Título não informado',
        autores: (info.authors || ['Autor não informado']).join(', '),
        descricao: info.description || 'Descrição não disponível para este título.',
        capa: info.imageLinks?.thumbnail?.replace('http://', 'https://') || '',
        categorias: (info.categories || ['Sem categoria']).join(' · '),
        link: info.infoLink || '',
        paginas: info.pageCount || null,
        publicado: info.publishedDate || ''
      }
    })
    if (!resultadosApi.value.length) erroApi.value = 'Nenhum livro encontrado. Tente outra busca.'
  } catch (e) {
    erroApi.value = 'Não foi possível consultar a API agora. Verifique a conexão e tente novamente.'
    resultadosApi.value = []
  } finally {
    carregandoApi.value = false
  }
}
onMounted(buscarLivrosApi)
</script>
<template>
  <DestaqueHero :livrosDestaque="[livros[0], livros[2]]" :totalLivros="livros.length" :totalCategorias="categorias.length" @explorar="rolarParaEstante" />
  <EstanteLivros :livros="livros" />
  <main class="app">
    <HeroBanner imagem="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=2000&q=90" @click-botao="rolarParaEstante" />
    <h2 class="secao-titulo">Livros em destaque</h2>
    <SearchBar v-model="busca" />
    <button v-if="categoriaSelecionada !== ''" class="limpar" @click="categoriaSelecionada = ''">Categoria: {{ categoriaSelecionada }} ✕</button>
    <div class="lista-livros"><BookCard v-for="livro in livrosFiltrados" :key="livro.id" :titulo="livro.titulo" :autor="livro.autor" :categoria="livro.categoria" :capa="livro.capa" /></div>
    <p v-if="livrosFiltrados.length === 0" class="aviso">Nenhum livro encontrado.</p>
    <section class="api-livros">
      <div class="api-intro">
        <p class="api-etiqueta">CATÁLOGO EXTERNO • GOOGLE BOOKS API</p>
        <h2 class="secao-titulo">Descubra novas leituras</h2>
        <p>Pesquise títulos e autores no catálogo online e explore informações retornadas em tempo real.</p>
      </div>
      <form class="api-busca" @submit.prevent="buscarLivrosApi">
        <input v-model="consultaApi" type="search" aria-label="Pesquisar na API de livros" placeholder="Pesquisar livros ou autores..." />
        <button type="submit" :disabled="carregandoApi">{{ carregandoApi ? 'Buscando…' : 'Buscar na API' }}</button>
      </form>
      <p v-if="carregandoApi" class="api-status">Consultando livros…</p>
      <p v-else-if="erroApi" class="api-status api-erro">{{ erroApi }}</p>
      <div class="api-grid" v-if="resultadosApi.length">
        <article v-for="livro in resultadosApi" :key="livro.id" class="api-card">
          <img v-if="livro.capa" :src="livro.capa" :alt="'Capa de ' + livro.titulo" loading="lazy" />
          <div v-else class="api-capa-vazia">VERITAS</div>
          <div class="api-card-conteudo">
            <h3>{{ livro.titulo }}</h3>
            <p class="api-autor">{{ livro.autores }}</p>
            <button type="button" class="api-detalhes" @click="livroDetalheApi = livro">Ver detalhes</button>
          </div>
        </article>
      </div>
      <div v-if="livroDetalheApi" class="api-modal-fundo" @click.self="livroDetalheApi = null">
        <section class="api-modal" role="dialog" aria-modal="true" :aria-label="'Detalhes de ' + livroDetalheApi.titulo">
          <button type="button" class="api-fechar" aria-label="Fechar detalhes" @click="livroDetalheApi = null">×</button>
          <img v-if="livroDetalheApi.capa" :src="livroDetalheApi.capa" :alt="'Capa de ' + livroDetalheApi.titulo" />
          <div><p class="api-etiqueta">DETALHES DO LIVRO</p><h2>{{ livroDetalheApi.titulo }}</h2><p><strong>Autor:</strong> {{ livroDetalheApi.autores }}</p><p><strong>Categoria:</strong> {{ livroDetalheApi.categorias }}</p><p v-if="livroDetalheApi.publicado"><strong>Publicado:</strong> {{ livroDetalheApi.publicado }}</p><p v-if="livroDetalheApi.paginas"><strong>Páginas:</strong> {{ livroDetalheApi.paginas }}</p><p class="api-descricao">{{ livroDetalheApi.descricao }}</p><a v-if="livroDetalheApi.link" :href="livroDetalheApi.link" target="_blank" rel="noopener noreferrer">Mais informações no Google Books ↗</a></div>
        </section>
      </div>
    </section>
    <h2 class="secao-titulo">Categorias</h2>
    <div class="lista-categorias"><CategoryCard v-for="categoria in categorias" :key="categoria.id" :nome="categoria.nome" :imagem="categoria.imagem" :ativa="categoria.nome === categoriaSelecionada" @click="selecionarCategoria(categoria.nome)" /></div>
    <QuoteBlock /><AppFooter />
  </main>
</template>
<style>
.app { padding: 40px; }
.secao-titulo { letter-spacing: 4px; text-transform: uppercase; font-weight: normal; color: #c9a96e; }
.lista-livros { display: flex; gap: 24px; flex-wrap: wrap; }
.lista-categorias { display: flex; gap: 16px; flex-wrap: wrap; }
.aviso { color: #d9cfc0; font-style: italic; }
.limpar { margin-bottom: 20px; padding: 8px 14px; background: transparent; border: 1px solid #c9a96e; color: #c9a96e; font-family: Georgia, serif; cursor: pointer; }
.limpar:hover { background: #c9a96e; color: #14110f; }

.api-livros{margin:70px 0;padding:32px 0;border-top:1px solid #4a3b2c}
.api-intro p:not(.api-etiqueta){color:#b8ab96;max-width:650px}
.api-etiqueta{font-family:"Jost",sans-serif;font-size:.7rem;letter-spacing:.22em;color:#c9a96e}
.api-busca{display:flex;gap:12px;max-width:680px;margin:24px 0 32px;flex-wrap:wrap}
.api-busca input{flex:1;min-width:220px;padding:12px 14px;border:1px solid #4a3b2c;background:#1b1713;color:#efe4d0;font:inherit}
.api-busca button,.api-detalhes{padding:11px 18px;border:1px solid #c9a96e;background:#c9a96e;color:#14110f;cursor:pointer;font-family:"Jost",sans-serif}
.api-busca button:disabled{opacity:.65;cursor:wait}
.api-status{color:#c9a96e;margin:16px 0}
.api-erro{color:#d9cfc0}
.api-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:22px}
.api-card{background:#1b1713;border:1px solid #4a3b2c;overflow:hidden;display:flex;flex-direction:column}
.api-card img{width:100%;height:240px;object-fit:contain;background:#241b15}
.api-capa-vazia{height:240px;display:grid;place-items:center;color:#c9a96e;background:#241b15;letter-spacing:.2em}
.api-card-conteudo{padding:16px;display:flex;flex-direction:column;flex:1}
.api-card h3{font-size:1.15rem;color:#efe4d0;margin:0 0 8px;line-height:1.25}
.api-autor{font-size:.95rem;color:#b8ab96;margin:0 0 16px}
.api-detalhes{align-self:flex-start;margin-top:auto;padding:8px 12px;background:transparent;color:#c9a96e}
.api-modal-fundo{position:fixed;inset:0;background:rgba(0,0,0,.78);z-index:100;display:grid;place-items:center;padding:20px}
.api-modal{position:relative;background:#1b1713;border:1px solid #c9a96e;max-width:820px;max-height:90vh;overflow:auto;padding:28px;display:grid;grid-template-columns:minmax(130px,220px) 1fr;gap:24px;color:#efe4d0}
.api-modal img{width:100%;height:auto;max-height:340px;object-fit:contain}
.api-modal h2{color:#c9a96e;margin-top:4px}
.api-modal a{color:#c9a96e}
.api-descricao{line-height:1.65}
.api-fechar{position:absolute;top:8px;right:8px;border:0;background:transparent;color:#c9a96e;font-size:2rem;cursor:pointer}
@media(max-width:600px){.api-livros{margin:48px 0;padding:20px 0}.api-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.api-card img,.api-capa-vazia{height:180px}.api-modal{grid-template-columns:1fr;padding:22px}.api-modal img{max-height:240px;justify-self:center;max-width:180px}}
</style>