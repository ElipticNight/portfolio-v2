<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Contact </template>
      <template v-slot:content>
        <div class="contact-info">
          <div>Get in touch at:</div>
          <div class="email">contact@aidan-byrne.org.uk</div>
          <div>or fill in the form below</div>
        </div>
        <ContactForm />
      </template>
    </SectionTemplate>
  </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import ContactForm from "@/components/contact/ContactForm";

export default {
  name: "Contact",
  components: {
    SectionTemplate,
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
.contact-info {
  margin-bottom: 60px;
  div {
    margin-bottom: 5px;
    &.email {
      margin-bottom: 20px;
    }
  }
}
</style>
