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
        <div class="expanded-description">
          <div class="overview">
            <div class="left">
              <h3>Techologies</h3>
              <div class="technologies">
                <p>- HTML5</p>
                <p>- CSS3</p>
                <p>- JavaScript</p>
              </div>
            </div>
            <div class="right">
              <h3>Skills</h3>
              <div class="skills">
                <div>- HTML5 Canvas</div>
                <div>- OOP</div>
              </div>
            </div>
          </div>
          <div class="Summary">
            <h3>Summary</h3>
            <p>
              For appreticeship's end point assessment, i had to create a maze
              game
            </p>
            <p>
              i built a 2d ui using HTML5 Canvas as i thought it would give a
              better result, and more fun than simply making a text based maze
            </p>
          </div>
          <div class="detailed">
            <h3>Detailed</h3>
            <p>More Details coming!</p>
          </div>
        </div>
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

<style lang="scss" scoped>
.expanded-description {
  .overview {
    width: 100%;
    display: flex;
    .left,
    .right {
      width: 50%;
      .technologies,
      .skills {
        p {
          padding-top: 3px;
        }
      }
    }
  }
  .summary {
    //
  }
  .detailed {
    //
  }
  h3 {
    font-weight: bold;
    margin-bottom: 5px;
  }
  p {
    padding: 0px;
    margin: 0px;
  }
}
</style>
