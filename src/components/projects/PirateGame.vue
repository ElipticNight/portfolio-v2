<template>
  <div>
    <ProjectTemplate
      sourceLink="https://github.com/ElipticNight/pirate-client"
      :liveLink="null"
      @expand="expanded = true"
    >
      <template v-slot:title> Pirate Game (in progress) </template>
      <template v-slot:image>
        <img :src="getImgUrl('LeedsTechMapOne.png')" alt="" />
      </template>
      <template v-slot:description>
        A websockets based multiplayer board game with support for multiple
        simultaneous games
      </template>
    </ProjectTemplate>
    <ExpandedTemplate
      v-if="expanded"
      @close="expanded = false"
      sourceLink="https://github.com/ElipticNight/pirate-client"
      :liveLink="null"
    >
      <template v-slot:title> Pirate Game (in progress) </template>
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
