<template>
  <div class="signature-container">
    <Signature id="signature" />
    <Subtitle id="subtitle" />
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import Signature from "@/assets/svgs/signature.svg";
import Subtitle from "@/assets/svgs/Subtitle.svg";

export default {
  name: "SplashSignature",
  components: {
    Signature,
    Subtitle,
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
        eleven: {
          duration: 500,
          relativeOffset: 100,
        },
        twelve: {
          duration: 250,
          relativeOffset: -250,
        },
        thirteen: {
          duration: 250,
          relativeOffset: -125,
        },
        fourteen: {
          duration: 250,
          relativeOffset: -125,
        },
        fifteen: {
          duration: 500,
          relativeOffset: -125,
        },
        sixteen: {
          duration: 250,
          relativeOffset: -250,
        },
        seventeen: {
          duration: 250,
          relativeOffset: -125,
        },
        eighteen: {
          duration: 250,
          relativeOffset: -125,
        },
        nineteen: {
          duration: 250,
          relativeOffset: -125,
        },
        twenty: {
          duration: 500,
          relativeOffset: -125,
        },
        twentyone: {
          duration: 250,
          relativeOffset: -250,
        },
        twentytwo: {
          duration: 250,
          relativeOffset: -125,
        },
        twentythree: {
          duration: 500,
          relativeOffset: -125,
        },
        twentyfour: {
          duration: 250,
          relativeOffset: -250,
        },
        twentyfive: {
          duration: 250,
          relativeOffset: -125,
        },
        twentysix: {
          duration: 250,
          relativeOffset: -125,
        },
        twentyseven: {
          duration: 250,
          relativeOffset: -125,
        },
        twentyeight: {
          duration: 250,
          relativeOffset: -125,
        },
        twentynine: {
          duration: 250,
          relativeOffset: -125,
        },
        thirty: {
          duration: 250,
          relativeOffset: -125,
        },
        thirtyone: {
          duration: 250,
          relativeOffset: -125,
        },
        thirtytwo: {
          duration: 250,
          relativeOffset: -125,
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
          fill: "hsl(258, 11%, 80%)",
          easing: "easeOutSine",
          duration: 1500,
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
.signature-container {
  margin-top: 75px;
  #signature {
    width: 80vw;
    .letter {
      stroke: $llavender-grey;
      stroke-width: 0.1;
      fill: none;
    }
    @media screen and (max-width: $l) {
      width: 130vw;
    }
  }
  #subtitle {
    margin-top: -35px;
    width: 30vw;
    .letter {
      stroke: $llavender-grey;
      stroke-width: 0.1;
      fill: none;
    }
    @media screen and (max-width: $l) {
      width: 45vw;
    }
  }
}
</style>
