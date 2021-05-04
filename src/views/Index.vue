<template>
  <div>
    <Header />
    <div class="hero-banner">
      <SplashSignature />
      <a href="#client-projects"><i class="fas fa-chevron-down"></i></a>
    </div>
    <Divider class="divider" />
    <ClientProjects id="client-projects" />
    <Divider class="divider" />
    <Projects />
    <Divider class="divider" />
    <AboutMe />
    <Divider class="divider" />
    <Contact />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SplashSignature from "@/components/SplashSignature.vue";
import Divider from "@/assets/dividers/divider2.svg";
import Projects from "@/views/sections/Projects.vue";
import ClientProjects from "@/views/sections/ClientProjects.vue";
import AboutMe from "@/views/sections/AboutMe.vue";
import Contact from "@/views/sections/Contact.vue";

export default {
  name: "Index",
  components: {
    Header,
    SplashSignature,
    Divider,
    Projects,
    ClientProjects,
    AboutMe,
    Contact,
  },
};
</script>

<style lang="scss" scoped>
.hero-banner {
  width: 100%;
  height: calc(100vh - 65px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  i {
    margin-top: auto;
    padding: 20px;
    font-size: 60px;
    transition: transform 1000ms;
    color: $white;
    &:hover {
      transform: translateY(-15px);
    }
  }
}
.divider {
  stroke: $llavender-grey;
  fill: $llavender-grey;
  margin: 20px 0;
  width: 30vw;
  height: 75px;
}
</style>
