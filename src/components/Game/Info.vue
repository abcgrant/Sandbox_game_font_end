<template>
  <div class="container">
    <button @click="ripple($event, refs)"
            ref="btn"
            :class="[btn, fa]">
      <span>{{str}}</span>
      <span :ref="refs" class="comInfo ripple"></span>
    </button>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

// https://segmentfault.com/a/1190000011744210
@Component
export default class Info extends Vue {
  public btn = "btn ripple-effect"
  @Prop() readonly str!: string
  @Prop() readonly refs!: string
  @Prop() readonly fa!: string
  public ripple(event: { offsetY: number; offsetX: number; }, refs: string): void{
    const ripple = this.$refs[refs] as HTMLElement
    const btn = this.$refs.btn as HTMLElement
    ripple.classList.add("animated");
    const size = Math.max(btn.offsetWidth, btn.offsetHeight);
    ripple.style.width = size + "px";
    ripple.style.height = size + "px";
    ripple.style.top = -(btn.offsetHeight-event.offsetY) + "px";
    ripple.style.left = -(btn.offsetWidth/2-event.offsetX) + "px";

    setTimeout(function(){
      ripple.classList.remove("animated")
    },800)
  }
}
</script>

<style scoped lang="scss">
.container{
  width: 20%;
  height: 45%;
  margin-left: 2%;
  margin-right: 3%;
  position: relative;
  .btn{
    display: inline-block;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: none;
    outline: none;
    cursor: pointer;
    box-shadow: 0 2px 2px rgba(0,0,0,.3);
    color: #c8793c;
    span{
      font-weight: 700!important;
      -webkit-text-fill-color: transparent;
      background-image: -webkit-linear-gradient(left,#007eef,#dc5cb6 25%,#007eef 50%,#dc5cb6 75%,#007eef);
      background-size: 200%,100%;
      -webkit-background-clip: text;
      -webkit-animation: word 3s linear infinite;
      margin-left: 10px;
      font-size: 20px;
      font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
    }
  }
  .ripple-effect {
    display: inline-block;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    z-index: 1;
  }
  .ripple-effect .ripple {
    display: block;
    position: absolute;
    border-radius: 100%;
    /*设置背景为彩虹渐变，可以换成其他颜色*/
    background: linear-gradient(45deg,
        rgba(255,0,0,.5),
        rgba(255,255,0,.5),
        rgba(0,255,255,.5),
        rgba(0,0,255,.5)
    );
    -webkit-transform: scale(0);
    transform: scale(0);
    pointer-events: none;
  }

  .ripple-effect .animated {
    -webkit-animation: ripple 0.6s linear;
    animation: ripple 0.6s linear;
  }
  @keyframes ripple {
    100% {
      opacity: 0;
      -webkit-transform: scale(2.5);
      transform: scale(2.5);
    }
  }
  @keyframes word {
    0%{
      background-position:0 0}
    100%{
      background-position:-100% 0}
  }

}
</style>