<template>
  <div id="app">
    <div
      class="mobile-nav"
      v-if="ismOrpc === 'Moperation'"
      :class="isMenu ? 'bg' : ''"
      @click.stop="onMask"
    >
      <div class="nav-wrapper" :class="isMenu ? 'transform' : ''">
        <p @click.stop="onJump('home')">Home</p>
        <p @click.stop="onJump('about')">About</p>
      </div>
    </div>
    <div class="nav" v-else>
      <div class="nav-wrapper">
        <router-link tag="p" to="/">Home</router-link>
        <router-link tag="p" to="/about">About</router-link>
      </div>
    </div>

    <div class="content-container">
      <div
        class="menu"
        v-if="ismOrpc === 'Moperation'"
        :class="isMenu ? 'z-index' : ''"
        @click="onMenu"
      >
        <img src="@/assets/menu.png" />
      </div>

      <router-view />
    </div>
  </div>
</template>

<script>
import { mobileMixins } from "@/mixins/check-mobile-mixin.js";

export default {
  name: "App",
  mixins: [mobileMixins],

  data() {
    return {
      isMenu: false,
    };
  },

  methods: {
    onMenu() {
      this.isMenu = !this.isMenu;
    },

    onMask() {
      if (!this.isMenu) return;
      this.isMenu = false;
    },

    onJump(type) {
      if (type === "home") {
        this.$router.push("/");
        this.isMenu = false;
      }

      if (type === "about") {
        this.$router.push("/about");
        this.isMenu = false;
      }
    },
  },
};
</script>
<style lang="scss">
html body {
  width: 100%;
  height: 100vh;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
  min-height: px2rem(500);
  display: flex;
  flex-direction: column;
  overflow: scroll;
  position: relative;
}

ul p {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

.nav {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-weight: 700;
  font-size: 20px;

  .nav-wrapper {
    float: right;
    width: 200px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    z-index: 3;

    > p {
      margin: 0;
      padding: 0;
      cursor: pointer;
    }
  }
}

.content-container {
  width: 100%;
  height: 100%;
  position: relative;

  .z-index {
    z-index: 0 !important;
  }

  .menu {
    position: absolute;
    top: 10px;
    left: 20px;
    z-index: 1;

    > img {
      width: 22px;
      height: 22px;
    }
  }
}

.mobile-nav {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
  z-index: 1;

  .nav-wrapper {
    height: 100%;
    width: 40%;
    background: #fff;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    font-weight: 500;
    transform: translateX(-100%);
    z-index: 3;

    > p {
      text-align: center;
      padding: 10px;
    }
  }

  .transform {
    transform: translateX(0);
    transition: 0.5s;
    z-index: 999;
  }
}

.bg {
  background: rgba(0, 0, 0, 0.1);
  display: block;
}
</style>
