<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Contact </template>
      <template v-slot:content>
        <div class="placeholder">No info yet</div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";

export default {
  name: "Projects",
  components: {
    SectionTemplate,
  },
};
</script>

<style lang="scss" scoped>
.placeholder {
  height: 600px;
}
</style>
