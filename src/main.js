import Vue from 'vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import less from 'less'

import {
  Button,
  Row,
  Col,
  Card,
  Backtop,
  Form,
  FormItem,
  Select,
  Input,
  Tree,
  Option,
  Main,
  Divider,
  Loading,
  Table,
  TableColumn
} from 'element-ui'

Vue.use(less)
Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Backtop)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Input)
Vue.use(Tree)
Vue.use(Option)
Vue.use(Main)
Vue.use(Divider)
Vue.use(Loading)
Vue.use(Table)
Vue.use(TableColumn)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
