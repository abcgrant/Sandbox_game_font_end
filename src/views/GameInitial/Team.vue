<template>
  <div class="team">
    <L msg="Welcome to sandbox game"/>
  </div>
</template>

<script>
import L from '@/components/Loading.vue'

export default {
  name: 'L',
  components: {
    L
  }
}
</script>

<style scoped lang="scss">
.team{
  height: 100vh;
  width: 100vw;
}
</style>
