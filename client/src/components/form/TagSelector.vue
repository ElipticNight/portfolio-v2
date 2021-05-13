<template>
  <div class="tag-container">
    <div
      v-for="(tag, index) in tags"
      :key="'tag-' + index"
      class="tag"
      @click="toggleTag(index)"
      v-bind:class="{ selected: tags[index].selected === true }"
    >
      {{ tag.name }}
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default {
  name: "Tagselector",
  props: {
    value: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      tags: this.value,
    };
  },
  methods: {
    toggleTag(index) {
      if (this.tags[index].selected !== undefined) {
        Vue.delete(this.tags[index], "selected");
      } else {
        Vue.set(this.tags[index], "selected", true);
      }
      this.sortTags();
      this.$emit("input", this.tags);
    },
    sortTags() {
      let sortedTags = this.tags.filter((tag) => tag.selected);
      let unselected = this.tags
        .filter((tag) => !tag.selected)
        .sort((a, b) => (a.id > b.id ? 1 : -1));
      console.log(unselected);
      sortedTags.push(...unselected);
      this.tags = sortedTags;
    },
  },
};
</script>
<style lang="scss" scoped>
.tag-container {
  @extend %center-content-wrap;
  @media screen and (max-width: $s) {
    margin-top: 10px;
    width: 500px;
  }
  @media screen and (min-width: $s) {
    width: 600px;
  }
  @media screen and (min-width: $m) {
    margin-top: 20px;
    width: 700px;
  }
  @media screen and (min-width: $l) {
    width: 800px;
  }
  @media screen and (min-width: $xl) {
    width: 900px;
  }
  .tag {
    @extend %center-content;
    cursor: pointer;
    padding: 8px 15px;
    border-radius: 50px;
    margin-bottom: 15px;
    margin-right: 10px;
    border: solid 1px $lavender-grey;
    background-color: $drich-black;
    color: $llavender-grey;
    font-size: 14px;
    user-select: none;
    &.selected {
      background-color: $dgreen;
    }
  }
}
</style>
