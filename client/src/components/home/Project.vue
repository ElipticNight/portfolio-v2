<template>
  <div>

  </div>
</template>

<script>
import ProjectDefault from "@/components/home/ProjectDefault.vue";
import ProjectExpanded from "@/components/home/ProjectExpanded";

export default {
  name: "Project",
  components: {
    ProjectDefault,
    ProjectExpanded,
  },
  props: {
    projectID: {
      type: Number,
      required: true
    }
  },
  mounted() {
    //fetch project info
  },
  methods: {
    //this will be used until i store images on the server
    getImgUrl(file) {
      let image = require("@/assets/images/" + file);
      return image;
    },
  },
}
</script>

<style lang="scss" scoped>

</style>