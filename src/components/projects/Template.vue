<template>
  <div>
    <div class="container">
      <div @click="expand()" class="title">
        <slot name="title"></slot>
      </div>
      <div @click="expand()" class="main">
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
  name: "ProjectTemplate",
  components: {},
  props: {
    sourceLink: {
      type: String,
      default: null,
    },
    liveLink: {
      type: String,
      default: null,
    },
  },
  data() {
    return {};
  },
  methods: {
    expand() {
      this.$emit("expand");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 550px;
  height: 320px;
  border-radius: 10px;
  background-color: $dblue;
  box-shadow: 0 0 5px 2px $red;
  transition: transform 200ms;
  cursor: pointer;
  color: $lred;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 5px 4px $red;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
    border-radius: 10px 10px 0 0;
    font-size: 22px;
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
      line-height: 20px;
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
      border-top: 0.5px solid $dred;
      color: $lred;
      &:hover {
        background-color: $lblue;
      }
      &.disabled {
        cursor: not-allowed;
        color: $dred;
        &:hover {
          background-color: transparent;
        }
      }
    }
    .source {
      border-right: 0.5px solid $dred;
      border-radius: 0 0 0 10px;
    }
    .live {
      border-radius: 0 0 10px 0;
    }
  }
}
</style>
