<template>
  <div>
    <Header />
    <div class="contact">
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
  height: calc(100vh - 65px);
  width: 100%;
}
</style>
