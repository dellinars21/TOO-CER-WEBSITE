import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import './assets/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faDraftingCompass, faHandshake, faLeaf, faScaleBalanced,
  faGraduationCap, faGlobe, faGears, faTrophy
} from '@fortawesome/free-solid-svg-icons'

library.add(faDraftingCompass, faHandshake, faLeaf, faScaleBalanced, faGraduationCap, faGlobe, faGears, faTrophy)

const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
