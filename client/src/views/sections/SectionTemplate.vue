<template>
    <div class="container">
        <header>
            <h1 class="title">
                <slot name="title"></slot>
            </h1>
        </header>
        <main class="content">
            <slot name="content"></slot>
        </main>
        <footer class="link-container">
            <slot name="links"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    name: "SectionTemplate",
};
</script>

<style lang="scss" scoped>
.container {
    @extend %center-content-vertical;
    margin-bottom: 20px;
    .title {
        margin: 0px;
        font-size: 36px;
        color: $llavender-grey;
    }
    .content {
        margin: 20px;
    }
    .link-container {
        @extend %center-content;
        div {
            margin: 0 20px;
        }
        @media screen and (max-width: $s) {
            flex-direction: column;
            div {
                margin: 20px 0;
            }
        }
    }
}
</style>
