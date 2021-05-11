<template>
  <div>
    <Header />
    <div class="about-me-container">
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
        </div>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.about-me-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 65px);
  width: 100%;
  .row-links {
    @extend %center-content;
    margin: 40px 0;
    .button {
      padding: 0 20px;
    }
  }
  .content {
    margin-top: 20px;
    width: 60vw;
    text-align: left;
    > div {
      margin-bottom: 50px;
      .section-title {
        font-size: 28px;
      }
    }
    .skills {
      .table {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        .col {
          @extend %center-content-vertical-top;
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
  }
}
</style>
