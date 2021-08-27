<template>
  <div class="all">
    <div v-for="(val, key, i) in choiceOne"
         :class="val[0]"
         @click="choiceFunc(key)"
         :key="i">{{val[1]}}
    </div>

    <div class="other">
      <Info str="公司信息" refs="rippleOne" fa="fa fa-building fa-2x" @ripple="drawerComInfo = true"/>
      <Info str="排名" refs="rippleTwo" fa="fa fa-line-chart fa-2x" @ripple="drawerRank = true"/>
      <Info str="规则查询" refs="rippleOne" fa="fa fa-comment-o fa-2x" @ripple="drawerRule = true"/>
      <div class="container pic" @click="refreshAndSubmit"></div>
      <el-drawer
        title="公司信息"
        :visible.sync="drawerComInfo"
        :direction="direction"
        size="66%"
      >
        <div class="drawer">
          <Info str="本期决策" refs="rippleOne" fa="fa fa-comment-o fa-2x" />
          <Info str="往期决策" refs="rippleOne" fa="fa fa-comment-o fa-2x" />
          <Info str="上期数据" refs="rippleOne" fa="fa fa-comment-o fa-2x" />
        </div>
      </el-drawer>
      <el-drawer
          title="排名"
          :visible.sync="drawerRank"
          :direction="direction"
          size="66%"
      >
        <div class="drawer">
          <Info str="本期决策" refs="rippleOne" fa="fa fa-comment-o fa-2x" />
        </div>
      </el-drawer>
      <el-drawer
          title="规则查询"
          :visible.sync="drawerRule"
          :direction="direction"
          size="66%"
      >
        <div class="drawer">
          <Info str="本期决策" refs="rippleOne" fa="fa fa-comment-o fa-2x" />
        </div>
      </el-drawer>
    </div>
  </div>
</template>

<script lang="ts">
import Swal, { SweetAlertResult } from "sweetalert2";
import { Component, Vue } from "vue-property-decorator";
import Info from "@/components/Game/Info.vue";

// https://segmentfault.com/a/1190000011744210
@Component({
  components: {
    Info,
  },
})
export default class Test extends Vue {
  public choiceOne = {
    finance: ["one choice", "财务：短期借款"],
    purchasing: ["two choice", "物料采购：房租、装修"],
    hrm: ["three choice", "hrm"],
    marketing: ["four choice", "市场：人均ASP、广宣"]
  };
  public drawerComInfo = false;
  public drawerRank = false;
  public drawerRule = false;
  public direction = "rtl";

  public choiceFunc(choice: string): Promise<void>{
    if(choice === 'finance'){
      return this.finance()
    }else if(choice === 'purchasing'){
      return this.purchasing()
    }else if (choice === 'hrm'){
      return this.hrm()
    }else {
      return this.marketing()
    }
  }

  public async finance(): Promise<void> {
    let forms = await Swal.fire({
      title: "短期借款",
      confirmButtonText: "OK",
      html: `<input id="swal-input1" class="swal2-input">`,
      focusConfirm: false,
      preConfirm: () => {
        const value: HTMLInputElement = document.getElementById(
          "swal-input1"
        ) as HTMLInputElement;
        console.log(value.value.toString());
        return value.value.toString();
      },
    });
    this.$store.commit("saveTeamFinance", forms.value);
  }

  public async purchasing(): Promise<void> {
    const steps = ["A", "B", "C"];
    let forms: { [key: string]: SweetAlertResult } = {};
    console.log(this);
    for (let i = 0; i < 3; i++) {
      let _ = steps[i];
      let confirmButtonTextValue = i !== 2 ? "下一个 >" : "OK";
      forms[_] = await Swal.fire({
        title: _ + "地区",
        progressSteps: steps,
        currentProgressStep: i,
        confirmButtonText: confirmButtonTextValue,
        html: `<input id="swal-input1" class="swal2-input">
           <input id="swal-input2" class="swal2-input">
           <input id="swal-input3" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => [
          (document.getElementById("swal-input1") as HTMLInputElement).value,
          (document.getElementById("swal-input2") as HTMLInputElement).value,
          (document.getElementById("swal-input3") as HTMLInputElement).value,
        ],
      });
      console.log(forms[_]);
      forms[_] = forms[_].value;
    }

    this.$store.commit("saveTeamPurchasing", forms);
  }

  public async hrm(): Promise<void> {
    const steps = ["A", "B", "C"];
    let forms: { [key: string]: SweetAlertResult } = {};
    for (let i = 0; i < 3; i++) {
      let _ = steps[i];
      let confirmButtonTextValue = i !== 2 ? "下一个 >" : "OK";
      forms[_] = await Swal.fire({
        title: _ + "地区",
        progressSteps: steps,
        currentProgressStep: i,
        confirmButtonText: confirmButtonTextValue,
        html: `<input id="swal-input1" class="swal2-input">
           <input id="swal-input2" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            (document.getElementById("swal-input1") as HTMLInputElement).value,
            (document.getElementById("swal-input2") as HTMLInputElement).value,
          ];
        },
      });
      forms[_] = forms[_].value;
    }
    this.$store.commit("saveTeamhrm", forms);
  }

  public async marketing(): Promise<void> {
    const steps = ["A", "B", "C"];
    let forms: { [key: string]: SweetAlertResult } = {};
    for (let i = 0; i < 3; i++) {
      let _ = steps[i];
      let confirmButtonTextValue = i !== 2 ? "下一个 >" : "OK";
      forms[_] = await Swal.fire({
        title: _ + "地区",
        progressSteps: steps,
        currentProgressStep: i,
        confirmButtonText: confirmButtonTextValue,
        html: `<input id="swal-input1" class="swal2-input">`,
        focusConfirm: false,
        preConfirm: () => {
          return [
            (document.getElementById("swal-input1") as HTMLInputElement).value,
          ];
        },
      });
      forms[_] = forms[_].value;
    }
    this.$store.commit("saveTeamMarketing", forms);
  }

  public refreshAndSubmit(): void {
    this.$store.dispatch("refreshAndSubmit");
  }
}
</script>

<style scoped lang="scss">
@use "../style/box-content";
@use "../style/form";
.box {
  @include box-content.box;
}
.all {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  .one {
    top: 15%;
    left: 20%;
    box-shadow: -5px -5px 12px #cbc2bc, 5px 5px 12px #fffcf4;
  }
  .two {
    top: 15%;
    right: 20%;
    box-shadow: 5px -5px 12px #cbc2bc, -5px 5px 12px #fffcf4;
  }
  .three {
    bottom: 35%;
    left: 20%;
    box-shadow: -5px 5px 12px #cbc2bc, 5px -5px 12px #fffcf4;
  }
  .four {
    bottom: 35%;
    right: 20%;
    box-shadow: 5px 5px 12px #cbc2bc, -5px -5px 12px #fffcf4;
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
    font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;
    background: linear-gradient(limegreen, transparent),
      linear-gradient(90deg, skyblue, transparent),
      linear-gradient(-90deg, coral, transparent);
    background-blend-mode: screen;
  }
  .other {
    height: 20vh;
    width: 70vw;
    border-radius: 25px;
    background: linear-gradient(limegreen, transparent),
      linear-gradient(90deg, skyblue, transparent),
      linear-gradient(-90deg, coral, transparent);
    background-blend-mode: screen;
    position: absolute;
    bottom: 0;
    right: 0;
    line-height: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    .drawer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      height: 100%;
    }
    .pic {
      background: center / contain no-repeat url("../assets/pic.jpeg");
      opacity: 0.9;
      border-radius: 50%;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
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