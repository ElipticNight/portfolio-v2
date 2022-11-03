<template>
    <PageLayout>
        <template v-slot:page-content>
            <div class="content">
                <div class="summary">
                    <h2 class="section-title">Summary</h2>
                    <p>
                        I am a full stack web developer with a passion for developing high qulity, well designed
                        systems. My main language is currently JavaScript, however I use whichever language/tool is most
                        suitable for each project
                    </p>
                </div>
                <div class="skills">
                    <h2 class="section-title">My skills</h2>
                    <div class="table">
                        <div class="col">
                            <h3>Front-end</h3>
                            <div class="icons">
                                <div class="wrapper">
                                    <img src="@/assets/icons/react.png" title="ReactJs" alt="ReactJs logo" />
                                </div>
                                <div class="wrapper">
                                    <img src="@/assets/icons/vue.png" title="VueJs" alt="VueJs logo" />
                                </div>
                                <div class="wrapper">
                                    <img src="@/assets/icons/sass.png" title="SASS" alt="SASS logo" />
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <h3>Back-end</h3>
                            <div class="icons">
                                <div class="wrapper">
                                    <img src="@/assets/icons/node.png" title="NodeJs" alt="NodeJs logo" />
                                </div>
                                <div class="wrapper">
                                    <img src="@/assets/icons/mongodb.png" title="MongoDb" alt="MongoDb logo" />
                                </div>
                                <div class="wrapper">
                                    <img src="@/assets/icons/mysql.png" title="MySQL" alt="MySQL logo" />
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <h3>Tools</h3>
                            <div class="icons">
                                <div class="wrapper">
                                    <img src="@/assets/icons/typescript.png" title="Typescript" alt="Typescript logo" />
                                </div>
                                <div class="wrapper">
                                    <img src="@/assets/icons/git.png" title="Git bash" alt="Git bash logo" />
                                </div>
                                <div class="wrapper">
                                    <img src="@/assets/icons/azure.png" title="Azure" alt="Azure logo" />
                                </div>
                                <div class="wrapper">
                                    <img src="@/assets/icons/nginx.png" title="Nginx" alt="Nginx logo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="work-history">
                    <h2 class="section-title">Work History</h2>
                    <div class="job-list">
                        <div v-for="(job, index) in workHistory" :key="index" class="job">
                            <a class="link" :href="job.link" target="_blank" rel="noopener noreferrer"
                                ><h4>{{ job.link ? "View" : "" }}</h4></a
                            >
                            <h3 class="title">
                                {{ job.company }} - {{ job.contract ? "Contract -" : "" }}
                                {{ job.title }}
                            </h3>
                            <h4 class="date">{{ job.start }} - {{ job.end }}</h4>
                            <p v-for="(paragraph, index) in job.description" :key="index">
                                {{ paragraph }}
                            </p>
                            <div v-if="job.link" class="link-mobile-container">
                                <LinkButton
                                    target="external"
                                    :link="job.link"
                                    text="View"
                                    class="link-mobile"
                                    :small="true"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="volunteer-experience">
                    <h2 class="section-title">Volunteer Experience</h2>
                    <h4>County Mental Health Advisor</h4>
                    <p>
                        County Mental Health Advisor for Northumberland Scouts. Involves working closely with both
                        members of the county and external mental health professionals to develop new mental health
                        training, raise awareness, and develop resources.
                    </p>
                    <h4>NGS Exec member</h4>
                    <p>
                        Executive committee member for both Newcastle district and Newcastle Gang Show. Assisting with
                        the management of the district/show, including, fundraising applications and dealing with
                        safeguarding issues.
                    </p>
                </div>
                <div class="qualifications">
                    <h2 class="section-title">Qualifications</h2>
                    <p>- Level Three Software Development Apprenticeship – Merit – QA Apprenticeships</p>
                    <p>- A-Levels: Computer Science, Mathematics, Further Maths</p>
                    <p>
                        - 11 GCSE’s - including: Computer Science (B), Mathematics (8 – equivalent to A*), Further Maths
                        (A)
                    </p>
                    <p>- Trained First Aider, Trained Mental Health First Aider, Trained archery instructor</p>
                </div>
            </div>
            <div class="row-links">
                <LinkButton
                    target="external"
                    :link="`${BaseUrl}/document/Aidan Byrne CV.pdf`"
                    text="View Pdf"
                    class="button"
                />
                <LinkButton
                    target="external"
                    :link="`${BaseUrl}/document/Aidan Byrne CV.docx`"
                    text="Download Docx"
                    class="button"
                />
            </div>
        </template>
    </PageLayout>
</template>

<script>
import PageLayout from "@/views/PageLayout.vue";
import LinkButton from "@/components/misc/LinkButton.vue";

export default {
    name: "AboutMe",
    components: {
        PageLayout,
        LinkButton,
    },
    data() {
        return {
            expanded: false,
            BaseUrl: process.env.VUE_APP_API_BASE_URL,
            workHistory: {
                unumboxLead: {
                    company: "Unumbox",
                    contract: false,
                    title: "Lead developer",
                    start: "March 2022",
                    end: "Current",
                    link: null,
                    description: [
                        "Lead an external team to develop our E-Learning platform. Spearheaded major reworks of the most critical sections of our system, drastically reducing time spent on maintenance and allowing for future scalability/expansion.",
                        "Worked with the senior developer to handle architectural decisions and plan the implementation new features. Assisted the team with their own development and ensured good code quality by implementing a code review process.",
                    ],
                },
                unumbox: {
                    company: "Unumbox",
                    contract: false,
                    title: "Software developer",
                    start: "June 2021",
                    end: "March 2022",
                    link: null,
                    description: [
                        "Worked with a small team of mid/junior level developers working on multiple projects in ReactJs and NodeJs, using MongoDb and Azure.",
                        "Maintained and expanded a custom E-learning platform, improved code quality by converting to TypeScript, setting clear standards and refactoring some of the old sections of the system.",
                        "Improved development practices by implementing CICD with GitHub Actions and Azure and setting up a Kanban board to manage our tickets.",
                    ],
                },
                kytschi: {
                    company: "Kytschi",
                    contract: true,
                    title: "Software developer",
                    start: "March 2021",
                    end: "June 2021",
                    link: null,
                    description: [
                        "Worked in a small team with a senior developer & designer build a large-scale CRM with a VueJS front end and a PHP Lumen microservice back end.",
                        "Created the user interface from a set of design boards, and interfaced with the API via AXIOS requests, and contributed towards architectural decisions.",
                    ],
                },
                effectivePublishing: {
                    company: "Effective Publishing",
                    contract: true,
                    title: "Lead developer",
                    start: "February 2021",
                    end: "March 2021",
                    link: "https://leedstechmap.com",
                    description: [
                        "Created a tech map for a conference in Leeds which showing tech companies in the region and information on each of them.",
                        "From a design of the map, took the project through all stages of the SLDC including planning, development, database administration and deployment.",
                        "Developed with VueJs and SVG animations on the front end, and a NodeJs Express server integrating with a MySQL database on the backend.",
                    ],
                },
                tritility: {
                    company: "Tritility Ltd",
                    contract: false,
                    title: "Apprentice software developer",
                    start: "December 2019",
                    end: "Frebruary 2021",
                    link: "https://qamaze.aidanbyrne.tech",
                    description: [
                        "Level three apprenticeship at Tritility, maintaining a legacy CRM built in procedural PHP, and porting it over to VueJS-Lumen/Laravel microservices, and then to a VueJS-Laravel monolith as the company decided to change direction.",
                        "As part of my apprenticeship assessments, I developed a maze game built with HTML5 canvas, and a recursive backtracker algorithm to generate a new maze each time.",
                    ],
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.content {
    width: 70vw;
    text-align: left;
    @media screen and (max-width: $xl) {
        width: 80vw;
    }
    @media screen and (max-width: $l) {
        width: 90vw;
    }
    > div {
        margin-bottom: 50px;
        .section-title {
            font-size: 28px;
        }
    }
    h3,
    h4,
    p {
        padding-left: 10px;
    }
    h4 {
        margin-bottom: 15px;
    }
    p {
        margin: 0;
        padding: 7px 10px;
    }
    .skills {
        .table {
            display: grid;
            display: flex;
            flex-flow: row wrap;
            justify-content: space-around;
            .col {
                @extend %center-content-vertical-top;
                width: 33%;
                @media screen and (max-width: $l) {
                    width: 50%;
                }
                @media screen and (max-width: $m) {
                    width: 100%;
                }
                h3 {
                    margin-bottom: 60px;
                }
                .icons {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    flex-flow: row wrap;
                    .wrapper {
                        @extend %center-content;
                        width: 50%;
                        padding: 0 20px 40px;
                        img {
                            max-height: 50px;
                        }
                    }
                }
            }
        }
    }
    .work-history {
        .job-list {
            .job {
                margin-bottom: 50px;
                .title {
                    margin-bottom: 5px;
                }
                .date {
                    margin-top: 0;
                }
                .link {
                    float: right;
                    h4 {
                        margin: 0;
                        text-decoration: underline;
                        &:hover {
                            transform: scale(1.1);
                        }
                    }
                }
                .link-mobile-container {
                    @extend %center-content;
                    margin-top: 30px;
                }
            }
        }
    }
}
.row-links {
    @extend %center-content;
    margin: 40px 0;
    .button {
        padding: 0 20px;
    }
    @media screen and (max-width: $s) {
        flex-direction: column;
        .button {
            padding: 20px 20px;
        }
    }
}
@media screen and (max-width: $m) {
    .link {
        display: none;
    }
}
@media screen and (min-width: $m) {
    .link-mobile-container,
    .link-mobile {
        display: none !important;
    }
}
@media screen and (max-width: $l) and (min-width: $s) {
    ::v-deep .btn {
        width: 150px;
        height: 40px;
    }
}
</style>
