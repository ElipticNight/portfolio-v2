<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> About Me </template>
      <template v-slot:content>
        <div class="content">
          I am a full-stack web developer Specialising in VueJs, NodeJs and PHP
        </div>
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
.content {
  min-height: 300px;
  margin-bottom: 30px;
}
</style>
