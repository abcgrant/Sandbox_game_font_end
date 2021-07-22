<template>
  <div class="loading">
    <HelloWorld msg="Welcome to sandbox game"/>
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
