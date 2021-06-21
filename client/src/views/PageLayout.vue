<template>
  <div>
    <slot name="header">
      <Header />
    </slot>
    <div class="page-content">
      <slot name="page-content"></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "PageLayout",
  components: {
    Header,
  },
  props: {
    header: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 20px;
}
.page-content {
  @extend %center-content-vertical;
  min-height: calc(100vh - 85px);
  width: 100%;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
