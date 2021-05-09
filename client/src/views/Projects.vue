<template>
  <div>
    <Header />
    <div class="projects-container">
      <div class="tags"></div>
      <Divider />
      <div class="projects"></div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Divider from "@/components/misc/PageDivider.vue";
import axios from "axios";

export default {
  name: "Projects",
  components: {
    Header,
    Divider,
  },
  data() {
    return {
      projects: [],
    }
  },
  mounted() {
    axios
      .get(`${process.env.VUE_APP_API_BASE_URL}/projects`)
      .then(
        (response) => {
          this.projects = response.data;
          console.log(this.projects);
        },
        (error) => {
          console.log(error);
        }
      );
  }
};
</script>

<style lang="scss" scoped>
.projects-container {
  @extend %center-content-virtical;
  width: 100%;
  .tags {
    //
  }
  ::v-deep .divider {
    width: 15vw;
  }
  .projects {
    //
  }
}
</style>
