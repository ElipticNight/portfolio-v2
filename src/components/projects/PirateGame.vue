<template>
  <div>
    <ProjectTemplate
      sourceLink="https://github.com/ElipticNight/pirate-client"
      :liveLink="null"
      @expand="expanded = true"
    >
      <template v-slot:title> Pirate Game (in progress) </template>
      <template v-slot:image>
        <img :src="getImgUrl('PirateGameOne.png')" alt="" />
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
        <img :src="getImgUrl('PirateGameOne.png')" alt="" />
      </template>
      <template v-slot:description>
        <div class="expanded-description">
          <div class="overview">
            <div class="left">
              <h3>Techologies</h3>
              <div class="technologies">
                <p>- VueJs</p>
                <p>- NodeJs/Express</p>
                <p>- MySQL</p>
              </div>
            </div>
            <div class="right">
              <h3>Skills</h3>
              <div class="skills">
                <div>- WebSockets</div>
                <div>- OOP</div>
              </div>
            </div>
          </div>
          <div class="Summary">
            <h3>Summary</h3>
            <p>
              A very large project that i sarted while on furlough and
              unfortunately haven't had time to finish
            </p>
            <p>
              This is an online real-time multiplayer boardgame, capable of
              suporting multiple simultaneous games, built using websockets
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
