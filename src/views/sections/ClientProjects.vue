<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Client Projects </template>
      <template v-slot:content>
        <div class="projects-container">
          <LeedsTechMap />
          <QaMaze />
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import LeedsTechMap from "@/components/projects/LeedsTechMap.vue";
import QaMaze from "@/components/projects/QaMaze.vue";

export default {
  name: "ClientProjects",
  components: {
    SectionTemplate,
    LeedsTechMap,
    QaMaze,
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
