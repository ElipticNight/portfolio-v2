<template>
  <div>
    <div class="desktop-container">
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
    <div class="mobile-container" v-bind:class="{ expanded: expanded }">
      <div class="row-title" @click="expanded = !expanded">
        <div class="title">
          <slot name="title"></slot>
        </div>
        <i
          v-if="!expanded"
          class="fas fa-chevron-down"
        ></i>
        <i @click="expanded = !expanded" v-else class="fas fa-chevron-up"></i>
      </div>
      <div @click="expand()" v-if="expanded" class="main">
        <div class="image">
          <slot name="image"></slot>
        </div>
        <div class="description">
          <slot name="description"></slot>
        </div>
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
    return {
      expanded: false,
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
  width: 550px;
  height: 320px;
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
      border-top: 0.5px solid $lavender-grey;
      color: $lavender-grey;
      &:hover {
        background-color: $lrich-black;
      }
      &.disabled {
        cursor: not-allowed;
        color: $dlavender-grey;
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

.mobile-container {
  width: 85vw;
  height: 75px;
  border-radius: 10px;
  background-color: $rich-black;
  box-shadow: 0 0 3px 1px $lavender-grey;
  transition: transform 200ms;
  color: $lavender-grey;
  display: flex;
  flex-direction: column;
  &.expanded {
    min-height: 300px;
    &:hover {
      cursor: pointer;
      transform: scale(1.01);
      box-shadow: 0 0 3px 2px $lavender-grey;
    }
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
    display: flex;
    flex-direction: column;
    height: 60%;
    width: 100%;
    margin-top: 10px;
    padding-bottom: 30px;
    .image {
      height: 100%;
      padding: 0px 0px;
      img {
        max-width: 90%;
        max-height: 90%;
      }
    }
    .description {
      height: 100%;
      padding: 0px 10px;
      text-align: left;
      line-height: 20px;
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
