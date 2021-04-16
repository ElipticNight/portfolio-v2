<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  /* Colours */
  --red: #b32222;
  --dred: #662525;
  --blue: #282841;
  --blue-grey: #232330;
  --dblue-grey: #212130;
  --xdblue-grey: #1c1c27;
}
* {
  box-sizing: border-box !important;
}

html,
body {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  background-color: #1a1b29;
  color: $red;
  overflow-x: hidden;
}

#app {
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a {
  text-decoration: none;
  color: $red;
}

@font-face {
  font-family: "Champignon";
  src: local("Champignon"),
    url(./assets/fonts/Champignon.otf) format("truetype");
}
</style>
