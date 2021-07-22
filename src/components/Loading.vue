<template>
  <el-container class="load"
                v-loading=false
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
  public loading = true
  public closeLoading():void{
    this.loading = false
    NProgress.done();
  }
  @Prop() private msg!: string;
}
</script>

<style lang="scss" scoped>
.load{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
