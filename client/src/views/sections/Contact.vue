<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Contact </template>
      <template v-slot:content>
        <div class="form">
          <TextInput
            v-model="contactForm.email"
            label="Email"
            validation="email"
            class="email"
          />
          <TextInput
            v-model="contactForm.name"
            label="Name"
            validation="text"
            class="name"
          />
          <TextInput
            v-model="contactForm.message"
            label="Message"
            validation="text"
            class="message"
          />
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import TextInput from "@/components/form/Input";
import { init } from "emailjs-com";
import { send } from "emailjs-com";

export default {
  name: "Contact",
  components: {
    SectionTemplate,
    TextInput,
  },
  data() {
    return {
      contactForm: {
        email: ""
      }
    }
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
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
  .email,
  .name,
  .message {
    margin-bottom: 35px;
  }
}
</style>
