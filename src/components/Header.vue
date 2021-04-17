<template>
  <div class="container">
    <div class="title">
      <router-link :to="{ name: 'Index' }" class="link">
        Aidan Byrne
      </router-link>
    </div>
    <div class="filler"></div>
    <div class="navbar">
      <router-link :to="{ name: 'Index' }" class="link"> Home </router-link>
      <router-link :to="{ name: 'Index' }" class="link"> Projects </router-link>
      <router-link :to="{ name: 'Blog' }" class="link"> Blog </router-link>
      <router-link :to="{ name: 'Index' }" class="link"> About Me </router-link>
      <router-link :to="{ name: 'Index' }" class="link"> Contact </router-link>
    </div>
    <div class="hamburger">
      <i @click="openPopInMenu()" class="fas fa-bars"></i>
    </div>
    <PopInMenu v-if="popInMenuVisible" @close="closePopInMenu()"
      >pop in menu placeholder!!!!</PopInMenu
    >
  </div>
</template>

<script>
import PopInMenu from "@/components/PopInMenu.vue";

export default {
  name: "Header",
  components: {
    PopInMenu,
  },
  data() {
    return {
      popInMenuVisible: false,
    };
  },
  methods: {
    openPopInMenu() {
      this.popInMenuVisible = true;
    },
    closePopInMenu() {
      this.popInMenuVisible = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: $dblue;
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    font-size: 20px;
    font-weight: normal;
  }
  .filler {
    height: 100%;
    width: 45%;
  }
  .navbar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 35%;
    .link {
      padding: 20px 25px;
      font-size: 18px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
  .hamburger {
    height: 100%;
    width: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 30px;
    font-size: 30px;
    &:hover {
      cursor: pointer;
    }
  }
}
.link {
  color: $red;
  text-decoration: none;
}

//4k
// @media screen and (min-width: $xxxl) {
//   .container {
//     .filler {

//     }
//   }
// }
//2k
// @media screen and (min-width: $xxl) and (max-width: $xxxl) {
//   .container {
//     .filler {

//     }
//   }
// }

@media screen and (min-width: $xl) and (max-width: $xxl) {
  .container {
    .filler {
      width: 35%;
    }
    .navbar {
      width: 45%;
    }
    .hamburger {
      display: none;
    }
  }
}
@media screen and (min-width: $l) and (max-width: $xl) {
  .container {
    .filler {
      width: 30%;
    }
    .navbar {
      width: 50%;
      .link {
        padding: 20px 20px;
      }
    }
    .hamburger {
      display: none;
    }
  }
}
@media screen and (min-width: $m) and (max-width: $l) {
  .container {
    .filler {
      width: 20%;
    }
    .navbar {
      width: 60%;
      .link {
        padding: 20px 15px;
      }
    }
    .hamburger {
      display: none;
    }
  }
}
@media screen and (min-width: $s) and (max-width: $m) {
  .container {
    .title {
      width: 25%;
    }
    .filler {
      width: 60%;
    }
    .navbar {
      display: none;
    }
  }
}
@media screen and (max-width: $s) {
  .container {
    .title {
      width: 40%;
    }
    .filler {
      width: 55%;
    }
    .navbar {
      display: none;
    }
  }
}
</style>
