<template>
  <div>
    <Header />
    <div class="contact">
      <div class="info">
        <h2>Do you think I may be a good fit for your company?</h2>
        <h2>Do you have a website you want built?</h2>
        <h3>Get in touch!</h3>
        <h4>Email me at: contact@aidan-byrne.org.uk</h4>
        <h4>Or fill in the form below</h4>
      </div>
      <ContactForm />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ContactForm from "@/components/contact/ContactForm";

export default {
  name: "Contact",
  components: {
    Header,
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
.contact {
  @extend %center-content-vertical;
  min-height: calc(100vh - 65px);
  width: 100%;
  margin: 20px 0;
  .info {
    margin-bottom: 50px;
  }
}
</style>
