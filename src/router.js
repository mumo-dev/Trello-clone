import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Board from './components/Board.vue'

const routes =[
   { path: '/', component: Home, name:'home'},
   { path: '/boards/:id', component: Board},
  //  {path: '*',component:}
];

export const router = new VueRouter({
  routes
})
