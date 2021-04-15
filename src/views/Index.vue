<template>
  <div>
    <Header />
    <div class="hero-banner">
      <Signature id="signature" />
      <Subtitle id="subtitle" />
      <a href="#projects"><i class="fas fa-chevron-down"></i></a>
    </div>
    <Projects id="projects" />
    <ClientProjects />
    <AboutMe />
    <Contact />
  </div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
import Header from "@/components/Header.vue";
import Signature from "@/assets/svgs/signature.svg";
import Subtitle from "@/assets/svgs/Subtitle.svg";
import Projects from "@/views/sections/Projects.vue";
import ClientProjects from "@/views/sections/ClientProjects.vue";
import AboutMe from "@/views/sections/AboutMe.vue";
import Contact from "@/views/sections/Contact.vue";

export default {
  name: "Index",
  components: {
    Header,
    Signature,
    Subtitle,
    Projects,
    ClientProjects,
    AboutMe,
    Contact,
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
          fill: "#b32222",
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
    transform: scale(2);
    .letter {
      stroke: var(--red);
      stroke-width: 0.1;
      fill: none;
    }
  }
  #subtitle {
    width: 100%;
    transform: scale(0.5);
    .letter {
      stroke: var(--red);
      stroke-width: 0.1;
      fill: none;
    }
  }
  i {
    padding: 20px;
    margin-bottom: 30px;
    font-size: 60px;
    transition: transform 1000ms;
    color: var(--red);
    &:hover {
      transform: translateY(-15px);
    }
  }
}
</style>
