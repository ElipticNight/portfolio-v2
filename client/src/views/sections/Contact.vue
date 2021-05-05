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
              v-bind:isValid.sync="isValid.email"
            />
            <TextInput
              v-model="contactForm.name"
              label="Name"
              validation="text"
              class="name"
              v-bind:isValid.sync="isValid.name"
            />
          </div>
          <div class="row-message">
            <TextInput
              v-model="contactForm.message"
              type="textarea"
              label="Message"
              validation="text"
              class="message"
              v-bind:isValid.sync="isValid.message"
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
        email: "",
        name: "",
        message: ""
      },
      isValid: {
        email: false,
        name: false,
        message: false
      }
    }
  },
  mounted() {
    emailjs.init("user_guZtTc7shPrwarg4itFEZ");
  },
  methods: {
    sendEmail() {
      if (!Object.keys(this.isValid).every(k => !!this.isValid[k])) {
        this.$root.$emit("flash-invalid");
        return;
      }
      this.$root.$emit("reset-inputs")
      emailjs.send("contact_service", "contact_form", {
        user_name: this.contactForm.name,
        user_email: this.contactForm.email,
        message: this.contactForm.message,
      });
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
      &:hover {
        background-color: $lblue;
      }
    }
  }
}
</style>
