<template>
  <div class="loading">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Loading.vue'

export default {
  name: 'Loading',
  components: {
    HelloWorld
  }
}
</script>
