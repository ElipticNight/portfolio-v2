<template>
    <PageLayout>
        <template v-slot:page-content>
            <h1>Page not found</h1>
        </template>
    </PageLayout>
</template>

<script>
import PageLayout from "@/views/PageLayout.vue";

export default {
    name: "NotFound",
    components: {
        PageLayout,
    },
    mounted() {
        //hit some sort of random fact api to keep it interesting
        //this will do
        //https://uselessfacts.jsph.pl/random.json?language=en
    },
};
</script>

<style lang="scss" scoped></style>
