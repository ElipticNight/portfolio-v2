<template>
  <div class="container">
    <div class="title">
      <slot name="title"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div class="link-container">
      <slot name="links"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  @extend %center-content-virtical;
  .title {
    margin-top: 0px;
    font-size: 36px;
    color: $llavender-grey;
  }
  .content {
    margin-top: 30px;
  }
  .link-container {
    @extend %center-content;
    div {
      margin: 0 20px;
    }
  }
}
</style>
