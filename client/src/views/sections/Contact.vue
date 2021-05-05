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
import { init } from "emailjs-com";
import { send } from "emailjs-com";

export default {
  name: "Contact",
  components: {
    SectionTemplate,
  },
  mounted() {
    init("user_guZtTc7shPrwarg4itFEZ");
    let x = false;
    if (x) {
      send("contact_service", "contact_form", {
        user_name: "aidan",
        user_email: "email",
        message: "hello",
      });
    }
  },
};
</script>

<style lang="scss" scoped>
.placeholder {
  height: 600px;
}
</style>
