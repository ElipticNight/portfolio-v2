<template>
  <div class="container">
    <div class="title">
      <router-link :to="{ name: 'Index' }" class="link">
        Aidan Byrne
      </router-link>
    </div>
    <div class="navbar">
      <router-link :to="{ name: 'Index' }" class="link"> One </router-link>
      <router-link :to="{ name: 'Index' }" class="link"> Two </router-link>
      <router-link :to="{ name: 'Index' }" class="link"> Three </router-link>
      <router-link :to="{ name: 'Index' }" class="link"> Four </router-link>
    </div>
    <div class="hamburger"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #232433;
  .title {
    padding-left: 75px;
    font-size: 22px;
    font-weight: bold;
  }
  .navbar {
    margin-left: auto;
    padding-right: 30px;
    .link {
      padding: 0px 20px;
      font-size: 18px;
    }
  }
}
.link {
  color: #fc3636;
  text-decoration: none;
}
</style>
