export const mobileMixins = {
  data() {
    return {
      ismOrpc: "Moperation",
      screenWidth: document.body.clientWidth,
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

  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;

        that.ismOrpc = that.screenWidth < 400 ? "Moperation" : "PCoperation";
      })();
    };
  },
};
