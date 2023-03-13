<template>
  <v-app id="inspire">
    <div class="line">
      <div class="head-language">
        <div class="day">Thursday, November 17, 2022</div>
        <div class="language-icon">
          <span v-for="(script, $index) in scripts" :key="$index">
            {{ script.text }}
          </span>
        </div>
      </div>
      <div class="top">
        <div class="telefone">
          <img src="./assets/header_bg.jpg" alt="" />
        </div>
        <div class="icons"></div>
      </div>
      <div class="bar">
        <div class="insigna">
          <img src="./assets/Angola-Insignia_Logo.png" alt="" />
          <div class="txt">
            <h3>EMBAIXADA DA REPÚBLICA DE ANGOLA</h3>
            <h4>NA ALEMANHA</h4>
          </div>
        </div>
      </div>
    </div>
    <v-app-bar prominent flat max-height="65">
      <Header />
    </v-app-bar>

    <!-- <Background></Background> -->

    <router-view></router-view>

    <!-- <v-footer absolute> -->
    <Footer />
    <!-- </v-footer> -->
  </v-app>
</template>

<script>
import Header from "./views//Header";
import Footer from "./views/Footer";
// import Background from "./components/Background.vue";

export default {
  name: "App",
  data() {
    return {
      items: [
        {
          src: require("./assets/ASSEMBELEIA-1024x683.jpg"),
        },
        {
          src: require("./assets/Fortaleza-Luanda-Angola-1024x683.jpg"),
        },
        {
          src: require("./assets/Marginal-de-Luanda-at-Night--1024x682.jpeg"),
        },
      ],
      scripts: [
        {
          text: "PT",
        },
        {
          text: "EN",
        },
        {
          text: "DE",
        },
      ],
    };
  },

  components: {
    Header,
    Footer,
    // Background,
  },

  // data: () => ({}),
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Spirax&display=swap");

html {
  // .width {
  //   width: 100%;
  // }
  // width: 100%;
  body {
    max-width: 100%;
    min-height: auto;

    scroll-behavior: smooth;
    a {
      color: black;
    }
  }
  body::-webkit-scrollbar {
    display: none !important;
  }
  li {
    color: black;
    a {
      color: black;
    }
  }
}
.large {
  .v-image__image.v-image__image--cover {
    background-size: contain;
  }
}
.line {
  text-align: center;
  .img {
    width: 800px;
    margin-top: 6px;
    display: inline-grid;
  }
  .top {
    .icons i {
      margin: 10px;
      &:hover {
        color: red;
      }
      cursor: pointer;
    }
    .icons {
      a {
        color: navy;
      }
    }
    img {
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
    }
  }
  .bar {
    .insigna {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-bottom: 13px;
      img {
        width: 110px;
        padding-right: 25px;
      }
      p {
        font-size: 20px;
        font-weight: 600;
      }
    }

    .txt {
      padding-top: 15px;
    }
  }
  .head-language {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px;
    i {
      margin-right: 20px;
    }
    .language-icon {
      img {
        // width: 28px;
        height: 28px;
        margin-left: 10px;
        cursor: pointer;
      }
    }
  }
}
</style>
