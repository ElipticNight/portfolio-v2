<template>
    <div>
        <SectionTemplate>
            <template v-slot:title> About Me </template>
            <template v-slot:content>
                <div class="content">
                    I am a full-stack web developer Specialising in ReactJs, SCSS, and NodeJs PHP. With additional
                    experience in VueJs
                    <div class="icon-container">
                        <div class="wrapper">
                            <img src="@/assets/icons/react.png" title="ReactJs" alt="ReactJs logo" />
                        </div>
                        <div class="wrapper">
                            <img src="@/assets/icons/sass.png" alt="SASS logo" />
                        </div>
                        <div class="wrapper">
                            <img src="@/assets/icons/node.png" alt="NodeJs Logo" />
                        </div>
                        <div class="wrapper">
                            <img src="@/assets/icons/vue.png" alt="VueJs Logo" />
                        </div>
                    </div>
                </div>
            </template>
            <template v-slot:links>
                <LinkButton target="AboutMe" text="View resume" />
                <LinkButton target="external" link="https://github.com/EllipticElysium" text="View GitHub" />
                <LinkButton target="Personal" text="Find out more" />
            </template>
        </SectionTemplate>
    </div>
</template>

<script>
import SectionTemplate from "@/views/sections/SectionTemplate.vue";
import LinkButton from "@/components/misc/LinkButton.vue";

export default {
    name: "AboutMe",
    components: {
        SectionTemplate,
        LinkButton,
    },
};
</script>

<style lang="scss" scoped>
.content {
    min-height: 100px;
    .icon-container {
        margin: 100px 0 75px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-flow: row wrap;
        .wrapper {
            width: 25%;
            padding: 0 60px;
            @media screen and (max-width: $s) {
                width: 50%;
                padding: 30px;
            }
            img {
                max-height: 75px;
                @media screen and (max-width: $l) {
                    max-height: 60px;
                }
                @media screen and (max-width: $m) {
                    max-height: 50px;
                }
            }
        }
    }
}
@media screen and (max-width: $l) and (min-width: $s) {
    ::v-deep .btn {
        width: 150px;
        height: 40px;
    }
}
</style>
