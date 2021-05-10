<template>
  <div>
    <Header />
    <div class="projects-container">
      <div class="tags"></div>
      <Divider />
      <div v-if="!loading" class="projects">
        <div
          v-for="project in projects"
          :key="project.id"
          class="project-wrapper"
        >
          <Project :data="project" class="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Divider from "@/components/misc/PageDivider.vue";
import Project from "@/components/projects/Project.vue";
import axios from "axios";

export default {
  name: "Projects",
  components: {
    Header,
    Divider,
    Project,
  },
  data() {
    return {
      loading: true,
      projects: [],
    };
  },
  created() {
    axios.get(`${process.env.VUE_APP_API_BASE_URL}/projects`).then(
      (response) => {
        this.projects = response.data;
        this.loading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>

<style lang="scss" scoped>
.projects-container {
  @extend %center-content-vertical;
  height: 100%;
  width: 100%;
  margin-bottom: 100px;
  ::v-deep .divider {
    width: 15vw;
  }
  .projects {
    height: 100%;
    width: 80vw;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    row-gap: 50px;
    .project-wrapper {
      @extend %center-content;
    }
    @media screen and (min-width: $s) {
      width: 90vw;
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: $xl) {
      width: 90vw;
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: $xxl) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
