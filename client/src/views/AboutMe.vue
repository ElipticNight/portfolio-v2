<template>
  <div>
    <Header />
    <div class="about-me-container">
      <div class="row-links">
        <LinkButton
          target="external"
          :link="`${BaseUrl}/document/Aidan Byrne CV.pdf`"
          text="View Pdf"
          class="button"
        />
        <LinkButton
          target="external"
          :link="`${BaseUrl}/document/Aidan Byrne CV.docx`"
          text="Download Docx"
          class="button"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LinkButton from "@/components/misc/LinkButton.vue";

export default {
  name: "AboutMe",
  components: {
    Header,
    LinkButton,
  },
  data() {
    return {
      expanded: false,
      BaseUrl: process.env.VUE_APP_API_BASE_URL,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-me-container {
  height: calc(100vh - 65px);
  width: 100%;
  .row-links {
    @extend %center-content;
    margin: 40px 0;
    .button {
      padding: 0 20px;
    }
  }
}
</style>
