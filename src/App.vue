<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

html,
body {
  margin: 0;
  padding: 0;
  background-color: #1a1b29;
}

@font-face {
  font-family: "Champignon";
  src: local("Champignon"),
    url(./assets/fonts/Champignon.otf) format("truetype");
}

/* Colours */
:root {
  --red: #b32222;
}
</style>
