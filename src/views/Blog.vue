<template>
  <div>
    <Header />
    <div class="test"><h1>Coming Soon !</h1></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Blog",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.test {
  height: 200vh;
  width: 100%;
}
</style>
