<template>
  <div>
    <Header />
    <div class="hero-banner">
      <Signature id="signature" />
    </div>
    <Projects />
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import Header from "@/components/Header.vue";
import Signature from "@/assets/signature.svg";
import Projects from "@/views/sections/Projects.vue";

export default {
  name: "Index",
  components: {
    Header,
    Signature,
    Projects,
  },
  data() {
    return {
      letters: {
        one: {
          duration: 1000,
          relativeOffset: 300,
        },
        two: {
          duration: 500,
          relativeOffset: -500,
        },
        three: {
          duration: 500,
          relativeOffset: -250,
        },
        four: {
          duration: 500,
          relativeOffset: -250,
        },
        five: {
          duration: 500,
          relativeOffset: -250,
        },
        six: {
          duration: 1500,
          relativeOffset: -250,
        },
        seven: {
          duration: 500,
          relativeOffset: -750,
        },
        eight: {
          duration: 500,
          relativeOffset: -350,
        },
        nine: {
          duration: 500,
          relativeOffset: -250,
        },
        ten: {
          duration: 500,
          relativeOffset: -250,
        },
      },
    };
  },
  mounted() {
    let t1 = anime.timeline({
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "easeInOutSine",
      complete: () => {
        anime({
          targets: ".letter",
          fill: "#b32222",
          easing: "easeInOutSine",
          duration: 1000,
        });
      },
    });

    for (let letter in this.letters) {
      let classID = `.${letter}`;
      let duration = this.letters[letter].duration;
      let relativeOffset = `+=${this.letters[letter].relativeOffset}`;
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
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--red);
  #signature {
    width: 100%;
    .letter {
      stroke: var(--red);
      stroke-width: 0.1;
      fill: none;
    }
  }
}
</style>
