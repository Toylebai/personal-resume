<template>
  <div class="home" :class="ismOrpc === 'PCoperation' ? 'pc-home' : ''">
    <header-content />
    <content-list />
  </div>
</template>

<script>
import HeaderContent from "./components/header.vue";
import ContentList from "./components/content.vue";

export default {
  name: "Home",
  components: { HeaderContent, ContentList },
  data() {
    return {
      ismOrpc: "Moperation",
    };
  },
  methods: {
    //判断
    _isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    getRem(pwidth, prem) {
      const html = document.getElementsByTagName("html")[0];
      const oWidth =
        document.body.clientWidth || document.documentElement.clientWidth;
      html.style.fontSize = (oWidth / pwidth) * prem + "px";
    },

    getIsMobile() {
      const _this = this;
      if (this._isMobile()) {
        //手机端
        _this.ismOrpc = "Moperation";
        //设置rem
        window.onload = function () {
          _this.getRem(750, 100);
        };
        window.onresize = function () {
          _this.getRem(750, 100);
        };
      } else {
        //pc端
        _this.ismOrpc = "PCoperation";
      }
    },
  },
  created() {
    this.getIsMobile();
  },
};
</script>
<style lang="scss">
.home {
  flex: 1;
  font-size: 30px;
}
.pc-home {
  flex: 1;
  font-size: 30px;
  z-index: 99;

  .header {
    width: 100%;
    height: 340px;
    background: linear-gradient(to top, #373737, #212121);
    line-height: 340px;
    text-align: center;
    font-size: 42px;
    font-weight: 700;
    text-shadow: #111 0px 0px 10px;
    color: #fff;
  }

  .content {
    width: 800px;
    height: auto;
    padding: 20px 0;
    margin: 0 auto;
    box-shadow: 0 0 0 3px rgba(185, 169, 169, 0.1);

    .title {
      font-size: 26px;
      font-weight: 700;
      margin: 20px 0 24px 20px;
    }

    .content-item {
      .content-item-wrapper {
        .title {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 20px 0 24px 20px;
        }

        .item-container {
          .item {
            font-size: 14px;
            line-height: 40px;

            .num {
              padding-right: 10px;
            }
          }
        }
      }
    }

    .project-item {
      .project-item-wrapper {
        .message {
          .name-container {
            .item-container {
              .item {
                font-size: 14px;
                line-height: 40px;
                padding-bottom: 20px;

                .direction {
                  min-width: 70px;
                  line-height: 25px;
                }

                .each-item {
                  line-height: 25px;
                  margin-left: 20px;
                  padding-bottom: 10px;
                }
              }
            }
          }
        }
      }
    }

    .display {
      display: flex;
    }
  }
}
</style>
