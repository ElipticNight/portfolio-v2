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
  width: 550px;
  height: 350px;
  border-radius: 10px;
  background-color: var(--dgrey);
  box-shadow: 0 0 3px 1px var(--red);
  transition: transform 200ms;
  &:hover {
    transform: scale(1.01);
  }
}
</style>
