<template>
  <div>
    <Header />
    <div class="temp"><h1>Page not found</h1></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "NotFound",
  components: {
    Header,
  },
  mounted() {
    //hit some sort of random fact api to keep it interesting
    //this will do
    //https://uselessfacts.jsph.pl/random.json?language=en
  },
};
</script>

<style lang="scss" scoped>
.temp {
  @extend %center-content-virtical;
  height: calc(100vh - 65px);
  width: 100%;
}
</style>
