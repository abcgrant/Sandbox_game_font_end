<template>
  <div class="all">
    <div class="one choice" @click="finance">财务：短期借款</div>
    <div class="two choice" @click="purchasing">物料采购：房租、装修</div>
    <div class="three choice" @click="hrm">人力：教师、教师培训</div>
    <div class="four choice" @click="marketing">市场：人均ASP、广宣</div>

    <div class="other">
      <span style='font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;'></span>
      <div class="container">
        <button @click="ripple($event, 'rippleOne')" ref="btn" class="btn ripple-effect fa fa-building-o fa-2x">
          <span>公司信息</span>
          <span ref="rippleOne" class="comInfo ripple"></span>
        </button>
      </div>
      <div class="container">
        <button @click="ripple($event, 'rippleTwo')" ref="btn" class="btn ripple-effect fa fa-line-chart fa-2x">
          <span>排名</span>
          <span ref="rippleTwo" class="rank ripple"></span>
        </button>
      </div>
      <div class="container">
        <button @click="ripple($event, 'rippleThree')" ref="btn" class="btn ripple-effect fa fa-comment-o fa-2x">
          <span>规则查询</span>
          <span ref="rippleThree" class="rule ripple"></span>
        </button>
      </div>
      <div class="container pic" @click="refreshAndSubmit"></div>
    </div>
  </div>
</template>

<script lang="ts">
import Swal, { SweetAlertResult } from 'sweetalert2';
import {Component, Vue} from 'vue-property-decorator';

// https://segmentfault.com/a/1190000011744210
@Component
export default class Test extends Vue {

  public async finance(): Promise<void> {
    let forms = await Swal.fire({
        title: '短期借款',
        confirmButtonText: 'OK',
        html:
            `<input id="swal-input1" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
          const value: HTMLInputElement = document.getElementById('swal-input1') as HTMLInputElement
          console.log(value.value.toString())
          return value.value.toString()
        }
      })
    this.$store.commit("saveTeamFinance", forms.value)
  }

  public async purchasing(): Promise<void>{
    const steps = ['A', 'B', 'C']
    let forms: {[key: string]: SweetAlertResult } = {}
    console.log(this)
    for(let i=0;i<3;i++){
      let _ = steps[i]
      let confirmButtonTextValue = i!==2?'下一个 >':'OK'
      forms[_] = await Swal.fire({
        title: _ + '地区',
        progressSteps: steps,
        currentProgressStep: i,
        confirmButtonText: confirmButtonTextValue,
        html:
            `<input id="swal-input1" class="swal2-input">
           <input id="swal-input2" class="swal2-input">
           <input id="swal-input3" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => [
          (document.getElementById('swal-input1') as HTMLInputElement).value,
          (document.getElementById('swal-input2') as HTMLInputElement).value,
          (document.getElementById('swal-input3') as HTMLInputElement).value
          ]
      })
      console.log(forms[_])
      forms[_] = forms[_].value
    }

    this.$store.commit("saveTeamPurchasing", forms)
  }

  public async hrm(): Promise<void>{
    const steps = ['A', 'B', 'C']
    let forms: {[key: string]: SweetAlertResult } = {}
    for(let i=0;i<3;i++){
      let _ = steps[i]
      let confirmButtonTextValue = i!==2?'下一个 >':'OK'
      forms[_] = await Swal.fire({
        title: _ + '地区',
        progressSteps: steps,
        currentProgressStep: i,
        confirmButtonText: confirmButtonTextValue,
        html:
            `<input id="swal-input1" class="swal2-input">
           <input id="swal-input2" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            (document.getElementById('swal-input1') as HTMLInputElement).value,
            (document.getElementById('swal-input2') as HTMLInputElement).value,
          ]
        }
      })
      forms[_] = forms[_].value
    }
    this.$store.commit("saveTeamhrm", forms)
  }

  public async marketing(): Promise<void>{
    const steps = ['A', 'B', 'C']
    let forms: {[key: string]: SweetAlertResult } = {}
    for(let i=0;i<3;i++){
      let _ = steps[i]
      let confirmButtonTextValue = i!==2?'下一个 >':'OK'
      forms[_] = await Swal.fire({
        title: _ + '地区',
        progressSteps: steps,
        currentProgressStep: i,
        confirmButtonText: confirmButtonTextValue,
        html:
            `<input id="swal-input1" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            (document.getElementById('swal-input1') as HTMLInputElement).value,
          ]
        }
      })
      forms[_] = forms[_].value
    }
    this.$store.commit("saveTeamMarketing", forms)
  }

  public ripple(event: { offsetY: number; offsetX: number; }, ref: string): void{
    const ripple = this.$refs[ref] as HTMLElement
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

  public refreshAndSubmit(): void{
    this.$store.dispatch("refreshAndSubmit")
  }
}
</script>

<style scoped lang="scss">
@use "../style/box-content";
@use "../style/form";
.box{
  @include box-content.box;
}
.all{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  .one{
    top: 15%;
    left: 20%;
    box-shadow:  -5px -5px 12px #cbc2bc,
    5px 5px 12px #fffcf4;
  }
  .two{
    top: 15%;
    right: 20%;
    box-shadow:  5px -5px 12px #cbc2bc,
    -5px 5px 12px #fffcf4;
  }
  .three{
    bottom: 35%;
    left: 20%;
    box-shadow:  -5px 5px 12px #cbc2bc,
    5px -5px 12px #fffcf4;
  }
  .four{
    bottom: 35%;
    right: 20%;
    box-shadow:  5px 5px 12px #cbc2bc,
    -5px -5px 12px #fffcf4;
  }
  .choice {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 20%;
    position: absolute;
    border-radius: 46px;
    font-size: 20px;
    font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;
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
  .other{
    height: 20vh;
    width: 70vw;
    border-radius: 25px;
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
    position: absolute;
    bottom: 0;
    right: 0;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
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
    .pic{
      background: center / contain no-repeat url("../assets/pic.jpeg") ;
      opacity: 0.9;
      border-radius: 50%;
      box-shadow: 0 2px 2px rgba(0,0,0,.3);
      position: absolute;
      overflow: hidden;
      z-index: 99999;
      top: -20px;
      left: -50px;
      height: 76px;
      width: 76px;
    }
  }
}
</style>