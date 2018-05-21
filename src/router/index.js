import Vue from 'vue'
import Router from 'vue-router'
import KnowledgeGrid from '@/components/KnowledgeGrid'
import Card from '@/components/Card/'
import Projects from '@/components/Projects/'
import Menu from '@/components/Menu/'
import VueTyperPlugin from 'vue-typer'

Vue.use(Router)
Vue.use(VueTyperPlugin)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'KnowledgeGrid',
      component: KnowledgeGrid
    }
  ]
})
