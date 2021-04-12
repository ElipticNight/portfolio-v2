<template>
  <div>
    <Header></Header>
    <div class="hero-banner">
      <h1>Aidan Byrne</h1>
      <h3>Full stack web developer</h3>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "Index",
  components: {
    Header,
  },
};
</script>

<style lang="scss" scoped>
.hero-banner {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #b32222;
}
</style>
