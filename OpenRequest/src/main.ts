import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import {
  ElButton,
  ElInput,
  ElForm,
  ElFormItem,
  ElSelect,
  ElSelectV2,
  ElOption,
  ElHeader,
  ElAside,
  ElMain,
  ElContainer,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElRadioButton,
  ElRadioGroup,
} from 'element-plus'
import App from './App.vue'
import '@/styles/common.less'
import 'element-plus/lib/theme-chalk/index.css'

const app = createApp(App)

app.component(ElOption.name, ElOption)
app.component(ElSelectV2.name, ElSelectV2)
app.component(ElRadioGroup.name, ElRadioGroup)
app.component(ElRadioButton.name, ElRadioButton)
app.component(ElInput.name, ElInput)
app.component(ElFormItem.name, ElFormItem)
app.component(ElForm.name, ElForm)
app.component(ElMenu.name, ElMenu)
app.component(ElSubmenu.name, ElSubmenu)
app.component(ElMenuItem.name, ElMenuItem)
app.component(ElMenuItemGroup.name, ElMenuItemGroup)

app.component(ElContainer.name, ElContainer)
app.component(ElHeader.name, ElHeader)
app.component(ElAside.name, ElAside)
app.component(ElMain.name, ElMain)
app.component(ElButton.name, ElButton)
app.component(ElSelect.name, ElSelect)

app.use(store, key)
app.use(router)
app.mount('#app')
