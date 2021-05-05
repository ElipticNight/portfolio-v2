<template>
  <Divider class="divider" />
</template>

<script>
import Divider from "@/assets/dividers/divider2.svg";

export default {
  name: "PageDivider",
  components: {
    Divider,
  },
};
</script>

<style lang="scss" scoped>
.divider {
  stroke: $llavender-grey;
  fill: $llavender-grey;
  margin: 35px 0;
  width: 30vw;
  height: 75px;
}
</style>
