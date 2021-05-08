<template>
  <div>
    <ProjectDefault
      @expand="expanded = true"
      :title="title"
      :summary="summary"
      :image="image"
      :sourceLink="sourceLink"
      :liveLink="liveLink"
    />
    <ProjectExpanded
      v-if="expanded"
      @close="expanded = false"
      :title="title"
      :summary="summary"
      :description="description"
      :images="[image]"
      :imageNo="imageNo"
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
      title: "",
      summary: "",
      description: "",
      image: null,
      imageNo: null,
      sourceLink: null,
      liveLink: null,
    };
  },
  mounted() {
    axios.get(`http://127.0.0.1:3000/project/${this.projectID}`).then(
      (response) => {
        let res = response.data[0];
        this.title = res.title;
        this.summary = res.summary;
        this.description = res.description;
        this.sourceLink = res.sourceLink;
        this.liveLink = res.liveLink;
        this.imageNo = res.imageNo;
      },
      (error) => {
        console.log(error);
      }
    );
    axios
      .get(`http://127.0.0.1:3000/project/${this.projectID}/images/0`, {
        responseType: "blob",
      })
      .then(
        (response) => {
          this.image = URL.createObjectURL(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
  },
};
</script>

<style lang="scss" scoped></style>
