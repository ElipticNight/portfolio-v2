<template>
    <div class="btn" type="button" v-bind:class="{ small: small }">
        {{ text }}
    </div>
</template>

<script>
export default {
    name: "Button",
    props: {
        text: {
            type: String,
            default: "Link",
        },
        small: {
            type: Boolean,
            default: false,
        },
    },
};
</script>

<style lang="scss" scoped>
.btn {
    @extend %center-content;
    width: 260px;
    height: 50px;
    border: none;
    outline: none;
    color: $llavender-grey;
    font-size: 15px;
    background-image: url(../../assets/backgrounds/dark.jpg);
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 25px;
    &.small {
        width: 150px;
        height: 40px;
    }
    &:before {
        content: "";
        background: linear-gradient(
            45deg,
            #ff0000,
            #ff7300,
            #fffb00,
            #48ff00,
            #00ffd5,
            #002bff,
            #7a00ff,
            #ff00c8,
            #ff0000
        );
        position: absolute;
        top: -2px;
        left: -2px;
        background-size: 400%;
        z-index: -1;
        filter: blur(5px);
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        animation: glowing 30s linear infinite;
        opacity: 0;
        transition: opacity 0.5s ease-in-out;
        border-radius: 25px;
        @media screen and (max-width: $m) {
            opacity: 1;
        }
    }
    &:hover:before {
        opacity: 1;
    }
    &:after {
        z-index: -1;
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url(../../assets/backgrounds/dark.jpg);
        left: 0;
        top: 0;
        border-radius: 25px;
    }
}

@keyframes glowing {
    0% {
        background-position: 0 0;
    }
    50% {
        background-position: 400% 0;
    }
    100% {
        background-position: 0 0;
    }
}
</style>
