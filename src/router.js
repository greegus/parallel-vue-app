import Vue from 'vue'
import VueRouter from 'vue-router'

import config from './config'

import HomeView from './views/HomeView'
import ArtistView from './views/ArtistView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: config.artist ? ArtistView : HomeView,
    meta: { artist: config.artist }
  },

  {
    path: '*',
    redirect: { name: 'home' }
  }
]

const artistRoute = {
  path: '/artist/:artist',
  name: 'artist',
  component: ArtistView,
}

if (!config.artist) {
  routes.unshift(artistRoute)
}

const router = new VueRouter({
  routes
})

export default router
