<template>
  <div>
    <Header></Header>
    <div class="hero-banner">
      <Signature id="signature" />
      <!-- <h1>Aidan Byrne</h1>
      <h3>Full stack web developer</h3> -->
    </div>
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import Header from "@/components/Header.vue";
import Signature from "@/assets/signature.svg";

export default {
  name: "Index",
  components: {
    Header,
    Signature,
  },
  data() {
    return {
      letters: {
        one: {
          duration: 1000,
          relativeOffset: 0,
        },
        two: {
          duration: 500,
          relativeOffset: 500,
        },
        three: {
          duration: 500,
          relativeOffset: 250,
        },
        four: {
          duration: 500,
          relativeOffset: 250,
        },
        five: {
          duration: 500,
          relativeOffset: 250,
        },
        six: {
          duration: 1000,
          relativeOffset: 250,
        },
        seven: {
          duration: 500,
          relativeOffset: 250,
        },
        eight: {
          duration: 500,
          relativeOffset: 250,
        },
        nine: {
          duration: 500,
          relativeOffset: 250,
        },
        ten: {
          duration: 500,
          relativeOffset: 250,
        },
      },
    };
  },
  mounted() {
    let t1 = anime.timeline({
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      complete: () => {
        anime.set(".letter", {
          class: "letter filled",
        });
      },
    });

    for (let letter in this.letters) {
      let classID = `.${letter}`;
      let duration = this.letters[letter].duration;
      let relativeOffset = `-=${this.letters[letter].relativeOffset}`;
      t1.add(
        {
          targets: classID,
          strokeDashoffset: [anime.setDashoffset, 0],
          duration: duration,
          direction: "forward",
        },
        relativeOffset
      );
    }
  },
};
</script>

<style lang="scss" scoped>
.hero-banner {
  width: 100%;
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #b32222;
  #signature {
    width: 100vw;
    .letter {
      stroke: #b32222;
      stroke-width: 0.1;
      fill: none;
      &.filled {
        fill: #b32222;
      }
    }
  }
}
</style>
