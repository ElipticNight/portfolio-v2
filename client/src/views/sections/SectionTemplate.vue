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
  @extend %center-content-vertical;
  margin-bottom: 20px;
  .title {
    margin-top: 0px;
    font-size: 36px;
    color: $llavender-grey;
  }
  .content {
    margin: 20px;
  }
  .link-container {
    @extend %center-content;
    div {
      margin: 0 20px;
    }
    @media screen and (max-width: $s) {
      flex-direction: column;
      div {
        margin: 20px 0;
      }
    }
  }
}
</style>
