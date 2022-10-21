<template>
    <div class="container">
        <div class="title">
            <router-link :to="{ name: 'Index' }" class="link"> Aidan Byrne </router-link>
        </div>
        <div class="filler"></div>
        <div class="navbar">
            <router-link :to="{ name: 'Index' }" class="link"> Home </router-link>
            <router-link :to="{ name: 'Projects' }" class="link"> Projects </router-link>
            <router-link :to="{ name: 'Blog' }" class="link"> Blog </router-link>
            <router-link :to="{ name: 'AboutMe' }" class="link"> About Me </router-link>
            <router-link :to="{ name: 'Contact' }" class="link"> Contact </router-link>
        </div>
        <div class="hamburger">
            <i @click="openMobileMenu()" class="fas fa-bars"></i>
        </div>
        <MobileMenu v-if="mobileMenuVisible" @close="closeMobileMenu()">pop in menu placeholder!!!!</MobileMenu>
    </div>
</template>

<script>
import MobileMenu from "@/components/MobileMenu.vue";

export default {
    name: "Header",
    components: {
        MobileMenu,
    },
    data() {
        return {
            mobileMenuVisible: false,
        };
    },
    methods: {
        openMobileMenu() {
            this.mobileMenuVisible = true;
        },
        closeMobileMenu() {
            this.mobileMenuVisible = false;
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
    .title {
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
    color: $white;
    text-decoration: none;
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
@media screen and (min-width: $s) {
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
@media screen and (min-width: $m) {
    .container {
        .filler {
            width: 20%;
        }
        .navbar {
            display: flex;
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
@media screen and (min-width: $l) {
    .container {
        .filler {
            width: 30%;
        }
        .navbar {
            display: flex;
            width: 50%;
            .link {
                padding: 20px 15px;
            }
        }
        .hamburger {
            display: none;
        }
    }
}
@media screen and (min-width: $xl) {
    .container {
        .filler {
            width: 35%;
        }
        .navbar {
            display: flex;
            width: 45%;
        }
        .hamburger {
            display: none;
        }
    }
}
@media screen and (min-width: $xxl) {
    .container {
        .navbar {
            display: flex;
            width: 45%;
        }
        .hamburger {
            display: none;
        }
    }
}
@media screen and (min-width: $xxxl) {
    .container {
        .navbar {
            display: flex;
            width: 45%;
        }
        .hamburger {
            display: none;
        }
    }
}
</style>
