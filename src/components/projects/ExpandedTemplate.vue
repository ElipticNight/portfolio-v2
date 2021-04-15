<template>
  <div @click="close" class="underlay" id="underlay">
    <div class="container">
      <div class="exit">
        <i @click="close" id="close" class="fas fa-times"></i>
      </div>
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
        <a
          :href="sourceLink"
          target="_blank"
          class="source"
          v-bind:class="{ disabled: this.sourceLink === null }"
        >
          View Source
        </a>
        <a
          :href="liveLink"
          target="_blank"
          class="live"
          v-bind:class="{ disabled: this.liveLink === null }"
        >
          View Live
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sourceLink: {
      type: String,
      default: "",
    },
    liveLink: {
      type: String,
      default: "",
    },
  },
  mounted() {
    document.body.style.overflow = "hidden";
  },
  methods: {
    close(e) {
      if (e.target.id === "underlay" || e.target.id === "close") {
        this.$emit("close");
        document.body.style.overflow = "visible";
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
    .exit {
      height: 5%;
      display: flex;
      justify-content: flex-end;
      padding: 15px 25px;
      i {
        font-size: 22px;
        cursor: pointer;
        transition: transform 200ms;
        &:hover {
          transform: scale(1.25);
        }
      }
    }
    .title {
      display: flex;
      justify-content: center;
      height: 10%;
      width: 100%;
      border-radius: 10px 10px 0 0;
      font-size: 22px;
      color: var(--red);
    }
    .main {
      display: flex;
      height: 70%;
      width: 100%;
      .image {
        width: 50%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0px 0px;
        img {
          max-width: 90%;
          max-height: 90%;
        }
      }
      .description {
        width: 50%;
        height: 95%;
        padding: 0px 10px;
        text-align: left;
        overflow-y: auto;
      }
    }
    .buttons {
      height: 15%;
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
        &.disabled {
          cursor: not-allowed;
          color: var(--dred);
          &:hover {
            background-color: transparent;
          }
        }
      }
      .source {
        border-right: 0.5px solid var(--dred);
      }
    }
  }
}
</style>
