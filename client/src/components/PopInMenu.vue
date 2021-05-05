<template>
  <div class="pop-in-menu-container">
    <div class="exit">
      <i @click="$emit('close')" class="far fa-times-circle"></i>
    </div>
    <div class="navbar">
      <router-link :to="{ name: 'Index' }" class="link"> Home </router-link>
      <router-link :to="{ name: 'Projects' }" class="link">
        Projects
      </router-link>
      <router-link :to="{ name: 'Blog' }" class="link"> Blog </router-link>
      <router-link :to="{ name: 'AboutMe' }" class="link">
        About Me
      </router-link>
      <router-link :to="{ name: 'Contact' }" class="link">
        Contact
      </router-link>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.pop-in-menu-container {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 0;
  background-image: url(../assets/backgrounds/dark.jpg);
  background-repeat: repeat;
  .exit {
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    i {
      padding-right: 30px;
      font-size: 20px;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px 40px;
    .link {
      width: 100%;
      height: 85px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding-left: 30px;
      border-bottom: solid 1px $lavender-grey;
      font-size: 26px;
    }
  }
}

@media screen and (min-width: $m) {
  .pop-in-menu-container {
    display: none;
  }
}
@media screen and (max-width: $s) {
  .pop-in-menu-container {
    .navbar {
      margin: 20px 20px;
    }
  }
}
</style>
