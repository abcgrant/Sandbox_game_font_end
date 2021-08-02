<template>
  <Decisions :label-choice="labelChoice" :active-name="activeName" />
</template>

<script>
import Decisions from "@/components/Decisions";
export default {
  name: "Marketing",
  components:{
    Decisions
  },
  data(){
    return{
      labelChoice:{
        'A地区': ['人均ASP'],
        'B地区': ['人均ASP'],
        'C地区': ['人均ASP'],
      },
      activeName:'A地区'
    }
  }
}
</script>

<style scoped>

</style>