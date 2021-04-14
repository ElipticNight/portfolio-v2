<template>
  <div>
    <ProjectTemplate
      sourceLink="https://google.com"
      liveLink="https://google.com"
      @expand="expanded = true"
    >
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
        quaerat ducimus temporibus perspiciatis molestias, cumque quas quis,
        iure consequuntur velit?
      </template>
    </ProjectTemplate>
    <ExpandedTemplate
      v-if="expanded"
      @close="expanded = false"
    ></ExpandedTemplate>
  </div>
</template>

<script>
import ProjectTemplate from "@/components/projects/Template.vue";
import ExpandedTemplate from "@/components/projects/ExpandedTemplate";

export default {
  name: "LeedsTechMapProject",
  components: {
    ProjectTemplate,
    ExpandedTemplate,
  },
  data() {
    return {
      expanded: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
