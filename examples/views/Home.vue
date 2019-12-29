<template>
  
  <div class="home">
    <hello-world></hello-world>
    <color-picker 
    v-model="color" v-on:change="headleChangeColor"
    ></color-picker>
    <bgmusic></bgmusic>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '../components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      color: '#ff0000'
    }
  },
  methods: {
    headleChangeColor() {
      console.log('颜色改变')
    }
  },
  components: {
    HelloWorld
  }
}
</script>
