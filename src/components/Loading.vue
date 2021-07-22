<template>
  <el-container class="loading"
                v-loading="true"
                element-loading-text="Loading……">
    <button @click="closeLoading">1</button>
    <h1>{{ msg }}</h1>
  </el-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

@Component
export default class HelloWorld extends Vue {
  public closeLoading():void{
    // this.$store.dispatch("closeLoad")
    NProgress.done();
  }
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
.loading{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
