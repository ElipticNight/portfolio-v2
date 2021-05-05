<template>
  <div>
    <Header />
    <div class="hero-banner">
      <SplashSignature />
      <a href="#about-me"><i class="fas fa-chevron-down"></i></a>
    </div>
    <Divider />
    <AboutMe id="about-me" />
    <Divider />
    <ClientProjects />
    <Divider />
    <Projects />
    <Divider />
    <Contact />
    <div class="footer"></div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import SplashSignature from "@/components/SplashSignature.vue";
import Divider from "@/components/PageDivider.vue";
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
.footer {
  margin-top: 200px;
}
</style>
