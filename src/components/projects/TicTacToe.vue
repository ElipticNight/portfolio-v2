<template>
  <div>
    <ProjectTemplate
      sourceLink="https://github.com/ElipticNight/tic-tac-toe"
      liveLink="https://tictactoe.aidanbyrne.tech"
      @expand="expanded = true"
    >
      <template v-slot:title> Tic Tac Toe (in progress) </template>
      <template v-slot:image>
        <img :src="getImgUrl('LeedsTechMapOne.png')" alt="" />
      </template>
      <template v-slot:description>
        A Tic Tac Toe game with an AI you can play against (you won't win)
      </template>
    </ProjectTemplate>
    <ExpandedTemplate
      v-if="expanded"
      @close="expanded = false"
      sourceLink="https://github.com/ElipticNight/tic-tac-toe"
      liveLink="https://tictactoe.aidanbyrne.tech"
    >
      <template v-slot:title> Tic Tac Toe (in progress) </template>
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
