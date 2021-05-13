<template>
  <PageLayout>
    <template v-slot:page-content>
      <div class="splash-page">
        <SplashSignature />
        <a
          ><i
            class="fas fa-chevron-down"
            @click="scrollToSection('main-page')"
          ></i
        ></a>
      </div>
      <Divider id="main-page" />
      <AboutMe />
      <Divider />
      <ClientProjects />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from "@/views/PageLayout.vue";
import SplashSignature from "@/components/home/SplashSignature.vue";
import Divider from "@/components/misc/PageDivider.vue";
import Projects from "@/views/sections/Projects.vue";
import ClientProjects from "@/views/sections/ClientProjects.vue";
import AboutMe from "@/views/sections/AboutMe.vue";
import Contact from "@/views/sections/Contact.vue";

export default {
  name: "Index",
  components: {
    PageLayout,
    SplashSignature,
    Divider,
    Projects,
    ClientProjects,
    AboutMe,
    Contact,
  },
  methods: {
    scrollToSection(section) {
      document.getElementById(section).scrollIntoView();
    },
  },
};
</script>

<style lang="scss" scoped>
.splash-page {
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
    cursor: pointer;
    &:hover {
      transform: translateY(-15px);
    }
  }
}
.footer {
  margin-top: 200px;
}
</style>
