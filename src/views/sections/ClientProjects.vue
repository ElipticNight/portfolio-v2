<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Client Projects </template>
      <template v-slot:content>
        <div class="projects-container">
          <LeedsTechMap />
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import LeedsTechMap from "@/components/projects/LeedsTechMap.vue";

export default {
  name: "Projects",
  components: {
    SectionTemplate,
    LeedsTechMap,
  },
};
</script>

<style lang="scss" scoped>
.projects-container {
  min-height: 400px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 50px;
  row-gap: 50px;
}
</style>
