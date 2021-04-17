<template>
  <div>
    <ProjectTemplate
      sourceLink="https://github.com/ElipticNight/maze-game"
      liveLink="https://qamaze.aidanbyrne.tech"
      @expand="expanded = true"
    >
      <template v-slot:title> QA Maze Game </template>
      <template v-slot:image>
        <img :src="getImgUrl('QaMazeOne.png')" alt="" />
      </template>
      <template v-slot:description>
        A 2d maze game made for my apprenticeship
      </template>
    </ProjectTemplate>
    <ExpandedTemplate
      v-if="expanded"
      @close="expanded = false"
      sourceLink="https://github.com/ElipticNight/maze-game"
      liveLink="https://qamaze.aidanbyrne.tech"
    >
      <template v-slot:title> QA Maze Game </template>
      <template v-slot:image>
        <img :src="getImgUrl('QaMazeOne.png')" alt="" />
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
  name: "QaMazeProject",
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
