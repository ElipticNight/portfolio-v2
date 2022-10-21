<template>
    <PageLayout>
        <template v-slot:page-content>
            <h1>Coming soon!</h1>
        </template>
    </PageLayout>
</template>

<script>
import PageLayout from "@/views/PageLayout.vue";

export default {
    name: "Blog",
    components: {
        PageLayout,
    },
};
</script>

<style lang="scss" scoped></style>
