<template>
  <Decisions :label-choice="labelChoice" :active-name="activeName" />
</template>

<script>
import Decisions from "@/components/Decisions";
export default {
  name: "HRM",
  components:{
    Decisions
  },
  data(){
    return{
      labelChoice:{
        'A地区': ['优质教师资源', '金牌教师资源'],
        'B地区': ['优质教师资源', '金牌教师资源'],
        'C地区': ['优质教师资源', '金牌教师资源'],
      },
      activeName:'A地区'
    }
  }
}
</script>

<style scoped>

</style>