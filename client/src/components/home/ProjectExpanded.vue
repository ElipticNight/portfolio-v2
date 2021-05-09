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
          <img :src="images[0]" alt="" />
        </div>
        <div class="content">
          <div class="tags">
            <div>
              Technologies
              <ul class="list">
                <li v-for="technology in technologies" :key="technology.id">
                  {{ technology.name }}
                </li>
              </ul>
            </div>
            <div>
              Skills
              <ul class="list">
                <li v-for="skill in skills" :key="skill.id">
                  {{ skill.name }}
                </li>
              </ul>
            </div>
          </div>
          <div class="summary">
            <div class="section-title">Summary</div>
            <div class="section-content">
              {{ summary }}
            </div>
          </div>
          <div class="description">
            <div class="section-title">Description</div>
            <div class="section-content">
              {{ description }}
            </div>
          </div>
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
      default: "coming soon",
    },
    summary: {
      type: String,
      default: "coming soon",
    },
    description: {
      type: String,
      default: "coming soon",
    },
    images: {
      type: Array,
      default: () => [],
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
  @extend %center-content;
  position: fixed;
  z-index: 998;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
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
        @extend %center-content;
        width: 50%;
        height: 100%;
        padding: 0px 0px;
        img {
          max-width: 90%;
          max-height: 90%;
        }
      }
      .content {
        width: 50%;
        height: 95%;
        padding: 0px 10px;
        text-align: left;
        overflow-y: auto;
        .tags {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 20px;
          .list {
            padding-left: 15px;
            font-size: 16px;
            font-weight: normal;
            li {
              margin-bottom: 3px;
            }
          }
        }
        .summary,
        .description {
          .section-title {
            text-align: left;
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 15px;
          }
          .section-content {
            font-size: 16px;
            font-weight: normal;
            margin-bottom: 35px;
          }
        }
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

@media screen and (max-width: $l) {
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
          padding-top: 10px;
          width: 100%;
          text-align: center;
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
