<template>
  <div class="all">
    <div class="one">
      <div class="two"></div>
      <div class="two"></div>
    </div>
    <div class="one">
      <div class="two three"></div>
      <div class="two"></div>
    </div>
  </div>
</template>

<script>
export default {
name: "test"
}
</script>

<style scoped lang="scss">
.all{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  .one{
    height: 100%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .two{
      margin-top: 10%;
      height: 30%;
      width: 30%;
      border-radius: 50px;
      background: #e0e0e0;
      box-shadow:  20px 20px 60px #bebebe,
      -20px -20px 60px #ffffff;
    }
    .three{
      margin-top: 30%;
    }
  }
}
</style>