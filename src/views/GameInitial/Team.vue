<template>
  <div class="loading">
    <HelloWorld msg="Welcome to sandbox game"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/Loading.vue'

export default {
  name: 'Loading',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">
.loading{
  height: 100vh;
  width: 100vw;
}
</style>
