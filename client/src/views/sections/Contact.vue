<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Contact </template>
      <template v-slot:content>
        <div class="form">
          <div class="row-headings">
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
          </div>
          <div class="row-message">
            <TextInput
              v-model="contactForm.message"
              label="Message"
              validation="text"
              class="message"
            />
          </div>
          <div class="row-send">
            <div @click="sendEmail" class="send-button">
              Send
            </div>
          </div>
        </div>
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import TextInput from "@/components/form/Input";
import emailjs from "emailjs-com";

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
    emailjs.init("user_guZtTc7shPrwarg4itFEZ");
  },
  methods: {
    sendEmail() {
      if (this.isValidForm()) {
        emailjs.send("contact_service", "contact_form", {
          user_name: this.contactForm.name,
          user_email: this.contactForm.email,
          message: this.contactForm.message,
        });
      }
    },
    isValidForm() {
      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
.form {
  width: 750px;
  .email,
  .name,
  .message {
    margin-bottom: 40px;
  }
  .row-headings {
    display: flex;
    .email {
      margin-right: 30px;
    }
    .name {
      margin-left: 30px;
    }
  }
  .row-send {
    display: flex;
    justify-content: center;
    align-items: center;
    .send-button {
      width: 130px;
      height: 50px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $blue;
      cursor: pointer;
    }
  }
}
</style>
