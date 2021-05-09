<template>
  <div>
    <Header />
    <div class="temp"><h1>Coming Soon !</h1></div>
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
.temp {
  @extend %center-content-vertical;
  height: calc(100vh - 65px);
  width: 100%;
}
</style>
