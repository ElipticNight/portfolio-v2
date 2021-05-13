<template>
  <div v-if="loaded">
    <ProjectDefault
      @expand="expanded = true"
      :title="title"
      :summary="summary"
      :image="images[0]"
      :sourceLink="sourceLink"
      :liveLink="liveLink"
      :technologies="technologies"
      :skills="skills"
      class="project-default"
    />
    <ProjectMini
      @expand="expanded = true"
      :title="title"
      :summary="summary"
      :image="images[0]"
      :sourceLink="sourceLink"
      :liveLink="liveLink"
      :technologies="technologies"
      :skills="skills"
      class="project-mini"
    />
    <ProjectExpanded
      v-if="expanded"
      @close="expanded = false"
      :title="title"
      :summary="summary"
      :description="description"
      :images="images"
      :sourceLink="sourceLink"
      :liveLink="liveLink"
      :technologies="technologies"
      :skills="skills"
      class="project-expanded"
    />
  </div>
</template>

<script>
import ProjectDefault from "@/components/home/ProjectDefault.vue";
import ProjectMini from "@/components/projects/ProjectMini.vue";
import ProjectExpanded from "@/components/projects/ProjectExpanded.vue";
import axios from "axios";

export default {
  name: "Project",
  components: {
    ProjectDefault,
    ProjectMini,
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
      loaded: false,
      expanded: false,
      title: "",
      summary: "",
      description: "",
      images: [],
      sourceLink: null,
      liveLink: null,
      technologies: [],
      skills: [],
    };
  },
  created() {
    axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/project/${this.projectID}`)
      .then(
        (response) => {
          let res = response.data[0];
          this.title = res.title;
          this.summary = res.summary;
          this.description = res.description;
          this.sourceLink = res.sourceLink;
          this.liveLink = res.liveLink;
          this.images = res.images;
          this.technologies = res.technologies;
          this.skills = res.skills;
          this.loaded = true;
        },
        (error) => {
          console.log(error);
        }
      );
  },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: $s) {
  .project-default {
    display: none;
  }
}
@media screen and (min-width: $s) {
  .project-mini {
    display: none;
  }
}
</style>
