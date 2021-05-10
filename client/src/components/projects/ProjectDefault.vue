<template>
  <div>
    <div class="desktop-container">
      <div @click="expand()" class="title">
        {{ title }}
      </div>
      <div @click="expand()" class="main">
        <div class="image">
          <img :src="`${baseUrl}/image/${image}`" alt="" />
        </div>
        <div class="summary">
          {{ summary }}
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
  name: "ProjectDefault",
  props: {
    title: {
      type: String,
      default: null,
    },
    summary: {
      type: String,
      default: null,
    },
    image: {
      type: String,
    },
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
    return {
      expanded: false,
      baseUrl: process.env.VUE_APP_API_BASE_URL,
    };
  },
  methods: {
    expand() {
      this.$emit("expand");
    },
  },
};
</script>

<style lang="scss" scoped>
.desktop-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 320px;
  height: 400px;
  border-radius: 10px;
  background-color: $rich-black;
  box-shadow: 0 0 3px 1px $llavender-grey;
  transition: transform 200ms;
  cursor: pointer;
  color: $lavender-grey;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 0 3px 2px $llavender-grey;
  }
  .title {
    @extend %center-content;
    height: 10%;
    width: 100%;
    border-radius: 10px 10px 0 0;
    font-size: 22px;
  }
  .main {
    @extend %center-content-vertical-top;
    height: 75%;
    width: 100%;
    margin-top: 10px;
    .image {
      width: 100%;
      padding: 0px 0px;
      img {
        max-width: 90%;
        max-height: 180px;
      }
    }
    .summary {
      width: 100%;
      margin-top: 20px;
      padding: 0px 20px;
      text-align: center;
      line-height: 20px;
    }
  }
  .buttons {
    height: 15%;
    width: 100%;
    border-radius: 0 0 10px 10px;
    display: flex;
    .source,
    .live {
      @extend %center-content;
      height: 100%;
      width: 50%;
      border-top: 0.5px solid $lavender-grey;
      color: $lavender-grey;
      &:hover {
        background-color: $lrich-black;
      }
      &.disabled {
        cursor: not-allowed;
        color: $xdlavender-grey;
        &:hover {
          background-color: transparent;
        }
      }
    }
    .source {
      border-right: 0.5px solid $lavender-grey;
      border-radius: 0 0 0 10px;
    }
    .live {
      border-radius: 0 0 10px 0;
    }
  }
}
</style>
