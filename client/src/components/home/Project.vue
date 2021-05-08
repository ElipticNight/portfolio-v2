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
import axios from "axios";

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
    axios.get("http://127.0.0.1:3000/project/" + this.projectID).then(
      response => {
        // console.log(response.data[0].images.map((obj) => {
        //   return JSON.parse(obj);
        // }));
        // console.log(JSON.parse(response.data[0].images));
        console.log((response.data[0].images));
      },
      error => {
        console.log(error);
      }
    );
  },
};
</script>

<style lang="scss" scoped></style>
