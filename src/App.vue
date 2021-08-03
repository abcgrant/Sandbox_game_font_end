<template>
  <div id="app">
<!--    <div class="custom-shape-divider-top-1627955540">-->
<!--      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">-->
<!--        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>-->
<!--      </svg>-->
<!--    </div>-->
    <div id="live2d-widget">
      <canvas id="live2dcanvas" width="500" height="600" style="position: fixed;opacity: 0.7;left: 0px;bottom: -20px;z-index: 99999;pointer-events: none;border: 1px dashed rgb(204, 204, 204);"></canvas>
    </div>
    <router-view style="height: 100vh"/>
  </div>
</template>

<script lang="js">
import DynamicLine from '@/helper/dynamicLine';

export default {
  mounted() {
    DynamicLine();
  }
}
</script>

<style lang="scss">
body,ol,ul,h1,h2,h3,h4,h5,h6,p,th,td,dl,dd,form,fieldset,legend,input,textarea,select{margin:0;padding:0}
body{font:12px"宋体","Arial Narrow",HELVETICA;background:#fff;-webkit-text-size-adjust:100%;}
a{color:#2d374b;text-decoration:none}
a:hover{color:#cd0200;text-decoration:underline}
em{font-style:normal}
li{list-style:none}
img{border:0;vertical-align:middle}
table{border-collapse:collapse;border-spacing:0}
p{word-wrap:break-word}
#app {
  background: linear-gradient(
          limegreen,
          transparent
  ),
  linear-gradient(
          90deg,
          skyblue,
          transparent
  ),
  linear-gradient(
          -90deg,
          coral,
          transparent
  );
  background-blend-mode: screen;
}
//#app{
//  position: relative;
//}
//.custom-shape-divider-top-1627955540 {
//  position: absolute;
//  top: 0;
//  left: 0;
//  width: 100%;
//  overflow: hidden;
//  line-height: 0;
//  transform: rotate(180deg);
//}
//.custom-shape-divider-top-1627955540 svg {
//  position: relative;
//  display: block;
//  width: calc(123% + 1.3px);
//  height: 218px;
//  transform: rotateY(180deg);
//}
//.custom-shape-divider-top-1627955540 .shape-fill {
//  fill: #FFFFFF;
//}
</style>
