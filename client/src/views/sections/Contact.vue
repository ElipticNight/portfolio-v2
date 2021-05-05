<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Contact </template>
      <template v-slot:content>
        <div class="placeholder">
          <div>Get in touch at:</div>
          <div>contact@aidan-byrne.org.uk</div>
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";

export default {
  name: "Contact",
  components: {
    SectionTemplate,
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.placeholder {
  height: 600px;
}
</style>
