<template>
<PageLayout>
    <template v-slot:page-content>
      <div class="info">
        <h2>Do you think I may be a good fit for your company?</h2>
        <h2>Do you have a website you want built?</h2>
        <h3>Get in touch!</h3>
        <h4>Email me at: contact@aidan-byrne.org.uk</h4>
        <h4>Or fill in the form below</h4>
      </div>
      <ContactForm />
    </template>
  </PageLayout>
</template>

<script>
import PageLayout from "@/views/PageLayout.vue";
import ContactForm from "@/components/contact/ContactForm";

export default {
  name: "Contact",
  components: {
    PageLayout,
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
.info {
  margin: 20px 0;
}
</style>
