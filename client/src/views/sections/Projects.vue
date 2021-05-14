<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Personal Projects </template>
      <template v-slot:content>
        <div class="projects-container">
          <Project :projectID="3" />
          <Project :projectID="4" />
        </div>
      </template>
      <template v-slot:links>
        <LinkButton target="Projects" text="View all projects" />
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import Project from "@/components/home/Project.vue";
import LinkButton from "@/components/misc/LinkButton.vue";

export default {
  name: "Projects",
  components: {
    SectionTemplate,
    Project,
    LinkButton,
  },
};
</script>

<style lang="scss" scoped>
.projects-container {
  margin: 50px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
  @media screen and (max-width: $xl) {
    grid-template-columns: 1fr;
  }
}
</style>
