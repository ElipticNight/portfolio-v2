<template>
  <div @click="close" class="underlay" id="underlay">
    <div class="container">
      <div class="title"></div>
      <div class="content"></div>
      <div class="buttons"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("orehgier");
  },
  methods: {
    close(e) {
      if (e.target.id === "underlay" || e.target.id === "close") {
        this.$emit("close");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.underlay {
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    height: 500px;
    width: 750px;
    background-color: cadetblue;
  }
}
</style>
