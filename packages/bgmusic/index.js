// # /packages/color-picker/index.js
// 导入组件，组件必须声明 name
import bgmusic from './src/bgmusic.vue'
// 为组件提供 install 安装方法，供按需引入
bgmusic.install = function (Vue) {
 Vue.component(bgmusic.name, bgmusic)
}
// 默认导出组件
export default bgmusic
