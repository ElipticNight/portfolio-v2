<template>
  <div>
    <Header />
    <div class="about-me-container"></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "AboutMe",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.about-me-container {
  @extend %center-content-vertical;
  height: calc(100vh - 65px);
  width: 100%;
}
</style>
