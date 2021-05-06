<template>
  <div>
    <ProjectDefault
      @expand="expanded = true"
      :title="title"
      :summary="summary"
      :images="images"
      :sourceLink="sourceLink"
      :liveLink="liveLink"
    />
    <ProjectExpanded
      v-if="expanded"
      @close="expanded = false"
      :title="title"
      :summary="summary"
      :images="images"
      :sourceLink="sourceLink"
      :liveLink="liveLink"
    />
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
};
</script>

<style lang="scss" scoped></style>
