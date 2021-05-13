<template>
  <div class="mobile-container" v-bind:class="{ expanded: expanded }">
    <div class="row-title" @click="expanded = !expanded">
      <div class="title">
        {{ title }}
      </div>
      <i :class="'fas fa-chevron-' + (expanded ? 'up' : 'down')"></i>
    </div>
    <div v-if="expanded" class="main">
      <div class="image">
        <img :src="`${BaseUrl}/image/${image}`" alt="" />
      </div>
      <div class="summary">
        {{ summary }}
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
    technologies: {
      type: Array,
      default: () => [],
    },
    skills: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      expanded: false,
      BaseUrl: process.env.VUE_APP_API_BASE_URL,
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
.mobile-container {
  width: 85vw;
  min-height: 75px;
  border-radius: 10px;
  background-color: $drich-black;
  box-shadow: 0 0 3px 1px $lavender-grey;
  transition: transform 200ms;
  color: $lavender-grey;
  display: flex;
  flex-direction: column;
  &.expanded {
    min-height: 300px;
  }
  .row-title {
    height: 75px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px 0 30px;
    font-size: 20px;
    cursor: pointer;
    i {
      padding: 20px;
    }
  }
  .main {
    @extend %center-content-vertical;
    height: calc(100% - 75px);
    width: 100%;
    margin-top: 10px;
    .image {
      padding: 0px 0px;
      img {
        max-width: 80%;
      }
    }
    .summary {
      height: 100%;
      margin-top: 30px;
      padding: 0px 10px;
      text-align: center;
      line-height: 20px;
    }
    .buttons {
      height: 50px;
      width: 100%;
      margin-top: 30px;
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
      }
    }
  }
}

@media screen and (max-width: $s) {
  .desktop-container {
    display: none;
  }
}
@media screen and (min-width: $s) {
  .mobile-container {
    display: none;
  }
}
</style>
