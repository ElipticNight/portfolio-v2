<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Colours */
:root {
  --red: #b32222;
  --dblue-grey: #202024;
  --dblue-grey: #212130;
}

#app {
  font-family: serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

div {
  box-sizing: border-box !important;
}

html,
body {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  background-color: #1a1b29;
  color: var(--red);
}

@font-face {
  font-family: "Champignon";
  src: local("Champignon"),
    url(./assets/fonts/Champignon.otf) format("truetype");
}
</style>
