<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Personal Projects </template>
      <template v-slot:content>
        <div class="projects-container">
          <PirateGame />
          <TicTacToe />
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import PirateGame from "@/components/projects/PirateGame.vue";
import TicTacToe from "@/components/projects/TicTacToe.vue";

export default {
  name: "Projects",
  components: {
    SectionTemplate,
    PirateGame,
    TicTacToe,
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
