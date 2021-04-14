<template>
  <div @click="close" class="underlay" id="underlay">
    <div class="container">
      <div class="title">
        <slot name="title"></slot>
      </div>
      <div class="main">
        <div class="image">
          <slot name="image"></slot>
        </div>
        <div class="description">
          <slot name="description"></slot>
        </div>
      </div>
      <div class="buttons">
        <a :href="sourceLink" target="_blank" class="source"> View Source </a>
        <a :href="liveLink" target="_blank" class="live"> View Live </a>
      </div>
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
    height: 650px;
    width: 1100px;
    border-radius: 10px;
    background-color: var(--xdblue-grey);
    box-shadow: 0 0 5px 2px var(--dred);
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 20%;
      width: 100%;
      border-radius: 10px 10px 0 0;
      font-size: 22px;
      color: var(--red);
    }
    .main {
      display: flex;
      height: 60%;
      width: 100%;
      margin-top: 10px;
      .image {
        width: 50%;
        height: 100%;
        padding: 0px 0px;
        img {
          max-width: 90%;
          max-height: 90%;
        }
      }
      .description {
        width: 50%;
        height: 100%;
        padding: 0px 10px;
        text-align: left;
        overflow-y: scroll;
      }
    }
    .buttons {
      height: 20%;
      width: 100%;
      border-radius: 0 0 10px 10px;
      display: flex;
      .source,
      .live {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 50%;
        color: var(--red);
        border-top: 0.5px solid var(--dred);
        &:hover {
          background-color: var(--blue-grey);
        }
      }
      .source {
        border-right: 0.5px solid var(--dred);
      }
    }
  }
}
</style>
