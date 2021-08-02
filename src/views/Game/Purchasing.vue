<template>
  <Decisions :label-choice="labelChoice" :active-name="activeName" />
</template>

<script>
import Decisions from "@/components/Decisions";
export default {
  name: "Purchasing",
  components:{
    Decisions
  },
  data(){
    return{
      labelChoice:{
        'A地区': ['大房型', '中房型', '小房型'],
        'B地区': ['大房型', '中房型', '小房型'],
        'C地区': ['大房型', '中房型', '小房型'],
      },
      activeName:'A地区'
    }
  }
}
</script>

<style scoped>

</style>