<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
/* Colours */
:root {
  --red: #b32222;
  --dred: #662525;
  --blue: #282841;
  --blue-grey: #232330;
  --dblue-grey: #212130;
  --xdblue-grey: #1c1c27;
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

a {
  text-decoration: none;
}

html,
body {
  scroll-behavior: smooth;
  margin: 0;
  padding: 0;
  background-color: #1a1b29;
  color: var(--red);
  overflow-x: hidden;
}

@font-face {
  font-family: "Champignon";
  src: local("Champignon"),
    url(./assets/fonts/Champignon.otf) format("truetype");
}
</style>
