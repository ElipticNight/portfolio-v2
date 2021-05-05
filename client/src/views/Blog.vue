<template>
  <div>
    <Header />
    <div class="temp"><h1>Coming Soon !</h1></div>
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
.temp {
  height: calc(100vh - 65px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
