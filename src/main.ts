import Vue from 'vue'
import VueCompositionApi from '@vue/composition-api'
import AOS from 'aos'
import App from './App.vue'
import router from './router'
import 'aos/dist/aos.css'

Vue.config.productionTip = false

const libraries = [VueCompositionApi, AOS]

libraries.forEach((library) => {
  Vue.use(library)
})

new Vue({
  router,
  created() {
    AOS.init({
      duration: 500,
      delay: 50,
    })
  },
  render: (h) => h(App),
}).$mount('#app')
