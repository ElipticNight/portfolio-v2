<template>
    <div>
        <ProjectDefault
            @expand="expanded = true"
            :title="title"
            :summary="summary"
            :image="images[0]"
            :sourceLink="sourceLink"
            :liveLink="liveLink"
            :technologies="technologies"
            :skills="skills"
            class="project-default"
        />
        <ProjectMini
            @expand="expanded = true"
            :title="title"
            :summary="summary"
            :image="images[0]"
            :sourceLink="sourceLink"
            :liveLink="liveLink"
            :technologies="technologies"
            :skills="skills"
            class="project-mini"
        />
        <ProjectExpanded
            v-if="expanded"
            @close="expanded = false"
            :title="title"
            :summary="summary"
            :description="description"
            :images="images"
            :sourceLink="sourceLink"
            :liveLink="liveLink"
            :technologies="technologies"
            :skills="skills"
        />
    </div>
</template>

<script>
import ProjectDefault from "@/components/projects/ProjectDefault.vue";
import ProjectMini from "@/components/projects/ProjectMini.vue";
import ProjectExpanded from "@/components/projects/ProjectExpanded";

export default {
    name: "Project",
    components: {
        ProjectDefault,
        ProjectMini,
        ProjectExpanded,
    },
    props: {
        data: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            expanded: false,
            title: this.data.title,
            summary: this.data.summary,
            description: this.data.description,
            images: this.data.images,
            sourceLink: this.data.sourceLink,
            liveLink: this.data.liveLink,
            technologies: this.data.technologies,
            skills: this.data.skills,
        };
    },
};
</script>

<style lang="scss" scoped>
@media screen and (max-width: $s) {
    .project-default {
        display: none;
    }
}
@media screen and (min-width: $s) {
    .project-mini {
        display: none;
    }
}
</style>
