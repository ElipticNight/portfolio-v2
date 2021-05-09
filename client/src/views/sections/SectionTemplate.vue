<template>
  <div class="container">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    margin-top: 0px;
    font-size: 36px;
    color: $llavender-grey;
  }
  .content {
    margin-top: 30px;
  }
}
</style>
