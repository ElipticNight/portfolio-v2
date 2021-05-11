<template>
  <div>
    <Header />
    <div class="about-me-container">
      <div class="content">
        <div class="summary">
          <h2 class="section-title">Summary</h2>
          <p>
            I am a full stack web developer who enjoys working on projects from
            large CMS monoliths and distributed microservices to small
            independent sites.
          </p>
        </div>
        <div class="skills">
          <h2 class="section-title">My skills</h2>
          <div class="table">
            <div class="col">
              <h3>Front-end</h3>
              <div class="icons">
                <div class="wrapper">
                  <img
                    src="@/assets/icons/html.png"
                    title="HTML 5"
                    alt="HTML 5 logo"
                  />
                </div>
                <div class="wrapper">
                  <img
                    src="@/assets/icons/sass.png"
                    title="SASS"
                    alt="SASS logo"
                  />
                </div>
                <div class="wrapper">
                  <img
                    src="@/assets/icons/vue.png"
                    title="VueJs"
                    alt="VueJs logo"
                  />
                </div>
                <div class="wrapper">
                  <img
                    src="@/assets/icons/jquery.png"
                    title="Jquery"
                    alt="Jquery logo"
                  />
                </div>
              </div>
            </div>
            <div class="col">
              <h3>Back-end</h3>
              <div class="icons">
                <div class="wrapper">
                  <img
                    src="@/assets/icons/node.png"
                    title="NodeJs"
                    alt="NodeJs logo"
                  />
                </div>
                <div class="wrapper">
                  <img
                    src="@/assets/icons/laravel.png"
                    title="Laravel"
                    alt="Laravel logo"
                  />
                </div>
                <div class="wrapper">
                  <img
                    src="@/assets/icons/mysql.png"
                    title="MySQL"
                    alt="MySQL logo"
                  />
                </div>
              </div>
            </div>
            <div class="col">
              <h3>Tools</h3>
              <div class="icons">
                <div class="wrapper">
                  <img
                    src="@/assets/icons/git.png"
                    title="Git bash"
                    alt="Git bash logo"
                  />
                </div>
                <div class="wrapper">
                  <img
                    src="@/assets/icons/linux.png"
                    title="Linux server management"
                    alt="Linux server management logo"
                  />
                </div>
                <div class="wrapper">
                  <img
                    src="@/assets/icons/nginx.png"
                    title="Nginx"
                    alt="Nginx logo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="work-history">
          <h2 class="section-title">Work History</h2>
          <div class="job-list">
            <div v-for="(job, index) in workHistory" :key="index" class="job">
              <a
                class="link"
                :href="job.link"
                target="_blank"
                rel="noopener noreferrer"
                ><h4>{{ job.link ? "View" : "" }}</h4></a
              >
              <h3>
                {{ job.company }} - {{ job.contract ? "Contract -" : "" }}
                {{ job.title }}
              </h3>
              <h4>{{ job.start }} - {{ job.end }}</h4>
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
            Appointed County Mental Health Advisor for Northumberland Scouts.
            Involves working closely with both members of the county and
            external mental health professionals to develop new mental health
            training which will be used in scouting nationally.
          </p>
          <h4>NGS Exec member</h4>
          <p>
            Executive committee for the Newcastle Gang Show. Assisting with the
            management of the show, including, fundraising, and safeguarding.
          </p>
        </div>
        <div class="education">
          <h2 class="section-title">Education</h2>
          <h4>
            Level Three Software Development Apprenticeship – Merit – QA
            Apprenticeships
          </h4>
          <h4>A-Levels</h4>
          <p>- Computer Science</p>
          <p>- Mathematics</p>
          <p>- Further Maths</p>
          <h4>GCSE's - 11 - including:</h4>
          <p>- Computer Science - B</p>
          <p>- Mathematics - 8 (equivalent to A*)</p>
          <p>- Further Maths - A</p>
          <h4>Trained First Aider</h4>
          <h4>Trained Mental Health First Aider</h4>
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
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LinkButton from "@/components/misc/LinkButton.vue";

export default {
  name: "AboutMe",
  components: {
    Header,
    LinkButton,
  },
  data() {
    return {
      expanded: false,
      BaseUrl: process.env.VUE_APP_API_BASE_URL,
      workHistory: {
        kytschi: {
          company: "Kytschi",
          contract: true,
          title: "Software developer",
          start: "March 2021",
          end: "April 2021",
          link: null,
          description: [
            "Worked in a small team with a senior developer & designer build a large-scale CRM with a VueJS front end and a PHP Lumen microservice back end.",
            "Created the user interface from a set of design boards, and interfaced with the API via AXIOS requests.",
            "Contributed towards architectural decisions, including the decision to use a WebSocket bastion server acting as a secure single point of access for our microservice’s APIs.",
          ],
        },
        effectivePublishing: {
          company: "Effective Publishing",
          contract: true,
          title: "Lead developer",
          start: "February 2021",
          end: "March 2021",
          link: "https://piko.kytschi.com",
          description: [
            "Created a tech map for a conference in Leeds which shows tech companies in the region and information on each of them.",
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
          link: null,
          description: [
            "Level three apprenticeship at Tritility, maintaining a legacy CRM built in procedural PHP, and porting it over to VueJS-Lumen/Laravel microservices, and then to a VueJS-Laravel monolith as the company decided to change direction.",
            "Liaised with the sales team to identify and fix reported bugs in our legacy system.",
            "Worked with the senior developers to add functionality and automated tests to the new system.",
            "Generated ad hoc SQL reports for the directors.",
          ],
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.about-me-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 40px;
  .content {
    margin-top: 40px;
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
    h3 {
      padding-left: 10px;
    }
    h4 {
      padding-left: 15px;
    }
    p {
      padding-left: 25px;
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
          margin-bottom: 65px;
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
            margin-top: 50px;
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
}
@media screen and (max-width: $m) {
  .link {
    display: none;
  }
}
@media screen and (min-width: $m) {
  .link-mobile {
    display: none;
  }
}
@media screen and (max-width: $l) and (min-width: $s) {
  ::v-deep .btn {
    width: 150px;
    height: 40px;
  }
}
</style>
