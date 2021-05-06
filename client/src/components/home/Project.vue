<template>
  <div>
    <ProjectDefault
      :title="title"
      :summary="summary"
      :images="images"
      :sourceLink="sourceLink"
      :liveLink="liveLink"
      @expand="expanded = true"
    />
  </div>
</template>

<script>
import ProjectDefault from "@/components/home/ProjectDefault.vue";
// import ProjectExpanded from "@/components/home/ProjectExpanded";

export default {
  name: "Project",
  components: {
    ProjectDefault,
    // ProjectExpanded,
  },
  props: {
    projectID: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      expanded: false,
      title: "example title",
      summary: "this is an example summary",
      images: ["LeedsTechMapOne.png"],
      sourceLink: null,
      liveLink: null,
    };
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
};
</script>

<style lang="scss" scoped></style>
