<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Personal Projects </template>
      <template v-slot:content>
        <div class="projects-container">
          <Project :projectID="3" />
          <PirateGame />
          <Project :projectID="2" />
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import PirateGame from "@/components/projects/PirateGame.vue";
import Project from "@/components/home/Project.vue";

export default {
  name: "Projects",
  components: {
    SectionTemplate,
    PirateGame,
    Project,
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
