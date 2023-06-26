import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'TenQDemo',
    path: '/tenqdemo',
    beforeEnter () {
      window.open('http://wrds-10q-item.wrdscloud.com:8000/itemizing_the_sec_10q/', '_blank')
    }
  },
  {
    name: 'NoveltyInFinance',
    path: '/novelty-in-finance',
    beforeEnter () {
      window.open('http://wrds-10q-item.wrdscloud.com:8000/novelty_in_financial_research/', '_blank')
    }
  },
  {
    name: 'ResearchTrend',
    path: '/research-trend',
    beforeEnter () {
      window.open('http://wrds-10q-item.wrdscloud.com:8000/research_trends/', '_blank')
    }
  },
  {
    name: '10KSearch',
    path: '/10k-search',
    beforeEnter () {
      window.open('http://wrds-10q-item.wrdscloud.com:8000/itemization_demo/', '_blank')
    }
  },
  {
    name: '10KSearchPg',
    path: '/10k-search-pg',
    beforeEnter () {
      window.open('http://wrds-10q-item.wrdscloud.com:8000/itemization_pgdemo/', '_blank')
    }
  },
  {
    name: '10KItemization',
    path: '/10k-itemization',
    beforeEnter () {
      window.open('http://34.222.11.153:8888/', '_blank')
    }
  },
  {
    name: 'CompanyGraph',
    path: '/company-graph',
    beforeEnter () {
      window.open('http://34.222.11.153:8080/', '_blank')
    }
  },
  {
    name: 'Footnote',
    path: '/footnote',
    beforeEnter () {
      window.open('http://wrds-10q-item.wrdscloud.com:8000/footnotes_demo/', '_blank')
    }
  },
  {
    name: 'ResearchDemo',
    path: '/research-demo',
    beforeEnter () {
      window.open('http://wrds-10q-item.wrdscloud.com:8000/research_demo/', '_blank')
    }
  }
]

const router = new VueRouter({
  routes
})

export default router
