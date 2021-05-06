<template>
  <div></div>
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
    sourceLink: {
      type: String,
      default: null,
    },
    liveLink: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped></style>
