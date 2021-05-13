<template>
  <div>
    <SectionTemplate>
      <template v-slot:title> Contact </template>
      <template v-slot:content>
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

<style lang="scss" scoped></style>
