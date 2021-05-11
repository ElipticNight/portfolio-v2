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
    height: calc(100% - 75px);
    width: 100%;
    margin-top: 10px;
    padding-bottom: 30px;
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
