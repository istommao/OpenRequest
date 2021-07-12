import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const navList = [
      { url: '/', name: '首页' },
      { url: '/codemirror', name: 'CodeMirror' },
    ]

    return { navList }
  }
})
