<template>
  <div class="box">
    <div class="content">
      <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
        <el-tab-pane
            v-for="(choiceL, area) in labelChoice"
            :label="area"
            :name="area"
            :key="area">
          <Choice v-for="type in choiceL" :key="type" :type="type" />
        </el-tab-pane>
      </el-tabs>
  </div>
  </div>

</template>

<script>
import Choice from "@/components/Game/Choice";
export default {
  name: "Test",
  components: {Choice},
  props:['labelChoice', 'activeName'],
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },

  }
};
</script>

<style scoped lang="scss">
@use "../style/box-content";
@use "../style/form";
.box{
  @include box-content.box;
}

</style>