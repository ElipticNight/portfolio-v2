<template>
  <div class="container">
    <div class="title">
      <router-link :to="{ name: 'Index' }" class="link">
        Aidan Byrne
        <Signature v-if="false" id="header-signature" />
      </router-link>
    </div>
    <div class="navbar">
      <router-link :to="{ name: 'Index' }" class="link"> One </router-link>
      <router-link :to="{ name: 'Index' }" class="link"> Two </router-link>
      <router-link :to="{ name: 'Index' }" class="link"> Three </router-link>
      <router-link :to="{ name: 'Index' }" class="link"> Four </router-link>
    </div>
    <div class="hamburger"></div>
  </div>
</template>

<script>
import Signature from "@/assets/signature.svg";

export default {
  name: "Header",
  components: {
    Signature,
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #212130;
  .title {
    padding-top: 5px;
    padding-left: 75px;
    font-size: 20px;
    font-weight: normal;
    #header-signature {
      width: 160px;
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
  .navbar {
    margin-left: auto;
    padding-right: 30px;
    .link {
      padding: 0px 20px;
      font-size: 16px;
    }
  }
}
.link {
  color: #b32222;
  text-decoration: none;
}
</style>
