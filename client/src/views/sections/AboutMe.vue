<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> About Me </template>
      <template v-slot:content>
        <div class="content">
          I am a full-stack web developer Specialising in VueJs, NodeJs, PHP, and Laravel
          <!-- add some icons for the langs/frameworks here -->
        </div>
      </template>
      <template v-slot:links>
        <LinkButton target="AboutMe" text="View resume" />
        <LinkButton
          target="external"
          link="https://github.com/ElipticNight"
          text="View GitHub"
        />
        <LinkButton target="Personal" text="Find out more" />
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import LinkButton from "@/components/misc/LinkButton.vue";

export default {
  name: "AboutMe",
  components: {
    SectionTemplate,
    LinkButton,
  },
};
</script>

<style lang="scss" scoped>
.content {
  min-height: 100px;
}
@media screen and (max-width: $l) and (min-width: $s) {
  ::v-deep .btn {
    width: 150px;
    height: 40px;
  }
}
</style>
