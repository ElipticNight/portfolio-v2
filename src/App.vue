<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box !important;
}

html,
body {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  background-image: url(./assets/backgrounds/dark.jpg);
  background-repeat: repeat;
  color: $lavender-grey;
  overflow-x: hidden;
}

#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: none;
  color: $lavender-grey;
}

@font-face {
  font-family: "Champignon";
  src: local("Champignon"),
    url(./assets/fonts/Champignon.otf) format("truetype");
}
</style>
