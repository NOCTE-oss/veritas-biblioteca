import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SobreView from '../views/SobreView.vue'
import ContatoView from '../views/ContatoView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'inicio', component: HomeView },
    { path: '/sobre', name: 'sobre', component: SobreView },
    { path: '/contato', name: 'contato', component: ContatoView },
  ],
  scrollBehavior: () => ({ top: 0 }),
})
export default router