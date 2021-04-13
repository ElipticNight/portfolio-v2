<template>
  <ProjectTemplate>
    <template v-slot:title> Leeds Tech Map </template>
    <template v-slot:image>
      <img
        src="https://content.instructables.com/ORIG/FAN/BM5E/HPBPOMS8/FANBM5EHPBPOMS8.png?frame=1"
        alt=""
      />
    </template>
    <template v-slot:description>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia rerum hic
      ipsum debitis possimus exercitationem tenetur repellendus fugit eum
      quaerat ducimus temporibus perspiciatis molestias, cumque quas quis, iure
      consequuntur velit?
    </template>
  </ProjectTemplate>
</template>

<script>
import ProjectTemplate from "@/components/projects/Template.vue";

export default {
  name: "LeedsTechMapProject",
  components: {
    ProjectTemplate,
  },
};
</script>

<style lang="scss" scoped></style>
