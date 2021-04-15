<template>
  <div>
    <ProjectTemplate
      :sourceLink="null"
      liveLink="https://piko.kytschi.com"
      @expand="expanded = true"
    >
      <template v-slot:title> Leeds Tech Map </template>
      <template v-slot:image>
        <img :src="getImgUrl('LeedsTechMapOne.png')" alt="" />
      </template>
      <template v-slot:description>
        A map of tech companies in leeds in the style of a subway map
      </template>
    </ProjectTemplate>
    <ExpandedTemplate
      v-if="expanded"
      @close="expanded = false"
      :sourceLink="null"
      liveLink="https://piko.kytschi.com"
    >
      <template v-slot:title> Leeds Tech Map </template>
      <template v-slot:image>
        <img :src="getImgUrl('LeedsTechMapOne.png')" alt="" />
      </template>
      <template v-slot:description>
        <h2>Techologies</h2>
        <p>these are my techs</p>
      </template>
    </ExpandedTemplate>
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
  methods: {
    getImgUrl(file) {
      let image = require("@/assets/images/" + file);
      return image;
    },
  },
};
</script>

<style lang="scss" scoped></style>
