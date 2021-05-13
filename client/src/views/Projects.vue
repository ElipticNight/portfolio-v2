<template>
  <PageLayout>
    <template v-slot:page-content>
      <div class="tags">
        <TagSelector v-if="!tagsLoading" v-model="tags" />
      </div>
      <Divider />
      <div v-if="!projectsLoading" class="projects">
        <div
          v-for="project in filteredProjects"
          :key="project.id"
          class="project-wrapper"
        >
          <Project v-if="matchesTags(project.tags)" :data="project" class="project" />
        </div>
      </div>
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from "@/views/PageLayout.vue";
import TagSelector from "@/components/form/TagSelector.vue";
import Divider from "@/components/misc/PageDivider.vue";
import Project from "@/components/projects/Project.vue";
import axios from "axios";

export default {
  name: "Projects",
  components: {
    PageLayout,
    TagSelector,
    Divider,
    Project,
  },
  data() {
    return {
      projectsLoading: true,
      tagsLoading: true,
      projects: [],
      tags: [],
    };
  },
  computed: {
    tagList() {
      return this.tags.filter(obj => obj.selected).map(obj => obj.name);
    },
    filteredProjects() {
      return this.projects.filter(project => this.matchesTags(project.tags));
    }
  },
  created() {
    axios.get(`${process.env.VUE_APP_API_BASE_URL}/projects`).then(
      (response) => {
        this.projects = response.data;
        this.projectsLoading = false;
      },
      (error) => {
        console.log(error);
      }
    );
    axios.get(`${process.env.VUE_APP_API_BASE_URL}/projects/tags`).then(
      (response) => {
        this.tags = response.data;
        this.tagsLoading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  },
  methods: {
    matchesTags(projectTags) {
      return this.tagList.every(tag => projectTags.includes(tag));
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep .page-content {
  justify-content: flex-start;
}
::v-deep .divider {
  width: 15vw;
  margin-top: 5px;
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
  @media screen and (max-width: $s) {
    width: 90vw;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: $s) {
    width: 90vw;
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (min-width: $m) {
    width: 90vw;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: $l) {
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
</style>
