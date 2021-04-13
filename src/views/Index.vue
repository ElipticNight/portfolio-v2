<template>
  <div>
    <Header></Header>
    <div class="hero-banner">
      <Signature id="signature" />
      <!-- <h1>Aidan Byrne</h1>
      <h3>Full stack web developer</h3> -->
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Signature from "@/assets/signature.svg";

export default {
  name: "Index",
  components: {
    Header,
    Signature,
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
  #signature {
    width: 100vw;
    .letter {
      // stroke-dasharray: 410;
      // stroke-dashoffset: 410;
      stroke: #b32222;
      stroke-width: 0.1;
      fill: #b32222;
      // fill: none;
    }
  }
}
</style>
