<template>
  <div>
    <router-link
      v-if="target !== 'external'"
      :to="{ name: target }"
      class="link"
    >
      <Button :text="text" />
    </router-link>
    <a :href="link" v-else target="_blank" rel="noopener noreferrer">
      <Button :text="text" />
    </a>
  </div>
</template>

<script>
import Button from "@/components/form/Button.vue";

export default {
  name: "LinkButton",
  components: {
    Button,
  },
  props: {
    target: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
    text: {
      type: String,
      default: "Link",
    },
  },
};
</script>

<style lang="scss" scoped></style>
