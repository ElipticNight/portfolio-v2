<template>
  <div @click="close" class="underlay" id="underlay">
    <div class="container">
      <div class="exit">
        <i @click="close" id="close" class="fas fa-times"></i>
      </div>
      <div class="title">
        {{ title }}
      </div>
      <div class="main">
        <div class="image">
          <img :src="getImgUrl(images[0])" alt="" />
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
  name: "ProjectExpanded",
  props: {
    title: {
      type: String,
      default: null,
    },
    summary: {
      type: String,
      default: null,
    },
    images: {
      type: Array,
      default: () => ["LeedsTechMapOne.png"],
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
  methods: {
    close(e) {
      if (e.target.id === "underlay" || e.target.id === "close") {
        this.$emit("close");
        document.body.style.overflow = "visible";
      }
    },
    getImgUrl(file) {
      let image = require("@/assets/images/" + file);
      return image;
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
  color: $lavender-grey;
  background-color: rgba(0, 0, 0, 0.8);
  .container {
    height: 650px;
    width: 1100px;
    border-radius: 10px;
    background-color: $rich-black;
    box-shadow: 0 0 3px 1px $lavender-grey;
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
      .summary {
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
      }
    }
  }
}

@media screen and (max-width: $s) {
  .underlay {
    .container {
      height: 80vh;
      width: 85vw;
      .main {
        flex-direction: column;
        .image {
          width: 100%;
          max-height: 300px;
        }
        .summary {
          width: 100%;
        }
      }
    }
  }
}
@media screen and (max-width: $xl) {
  .underlay {
    .container {
      width: 85vw;
    }
  }
}
</style>
