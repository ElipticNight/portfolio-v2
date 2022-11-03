<template>
    <button class="button" type="button" v-bind:class="{ small: small }">
        {{ text }}
    </button>
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
.button {
    background-color: transparent;
    color: $white;
    height: 50px;
    text-align: center;
    width: 250px;
    transition: all 0.5s;
    position: relative;
    line-height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 5px;
    &:hover {
        cursor: pointer;
        &::before {
            opacity: 0;
            transform: scale(0.5, 0.5);
        }
        &::after {
            opacity: 1;
            transform: scale(1, 1);
        }
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        color: rgb(205, 205, 205);
        border: 1px solid $white;
        transition: all 0.3s;
        border-radius: 10px;
    }
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0;
        transition: all 0.3s;
        background-color: $faded-white;
        transform: scale(1.2, 1.2);
        border-radius: 10px;
    }
}
</style>
