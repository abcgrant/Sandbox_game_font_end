<template>
  <div>
    <div>
      {{type}}
      <el-input-number
          v-model="num"
          @change="handleChange"
          :min="0" :max="10"
          label="描述文字">
      </el-input-number>
    </div>
  </div>
</template>

<script>
export default {
  name: "Choice",
  data(){
    return{
      num: 1,
    }
  },
  props:['type'],
  methods: {
    handleChange(value) {
      console.log(value);
    },
  }
}
</script>

<style scoped>
div{
  margin: 10px;
}
</style>