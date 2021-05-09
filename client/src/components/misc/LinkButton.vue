<template>
  <div>
    <router-link :to="{ name: target }" class="link">
      <Button :text="text" />
    </router-link>
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
    text: {
      type: String,
      default: "Link",
    }
  }
};
</script>

<style lang="scss" scoped>

</style>
