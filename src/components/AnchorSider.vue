<template>
  <!-- 公用组件：锚点侧边导航 -->
  <!-- 待完善：1、通过数据进行渲染 2、定位方式优化 -->
  <div
    :class="[
      'demo-anchor-sider',
      scrollY >= 500 ? 'demo-anchor-sider-show' : '',
    ]"
  >
    <div @click="clickEvent" class="demo-anchor-sider-hd"></div>
    <ul class="demo-anchor-sider-ft">
      <li class="anchor-link-item">
        <a
          @click="anchorJump('#cardPanel')"
          :class="[
            'anchor-link',
            anchorPosition === 'cardPanel' ? 'anchor-link-active' : '',
          ]"
        >
          <i class="el-icon-monitor anchor-link-icon"></i>
          <div class="anchor-link-text">实验室</div>
        </a>
      </li>
      <li class="anchor-link-item">
        <a @click="anchorJump('#demoHeader')" class="anchor-link">
          <i class="el-icon-upload2 anchor-link-icon"></i>
          <div class="anchor-link-text">回顶部</div>
        </a>
      </li>
    </ul>
    <div @click="clickEvent" class="demo-anchor-sider-qrcode">
      <i class="el-icon-mobile"></i>
    </div>
    <div @click="clickEvent" class="demo-anchor-sider-question">
      <i class="el-icon-edit"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnchorSider",
  data() {
    return {
      scrollY: 0,
      anchorPosition: "",
    };
  },

  methods: {
    anchorJump(name) {
      document.querySelector(name).scrollIntoView({ behavior: "smooth" });
    },

    handleScroll() {
      this.scrollY = window.scrollY;
      if (window.scrollY >= 1000 && window.scrollY <= 1700) {
        this.anchorPosition = "cardPanel";
      } else {
        this.anchorPosition = "";
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  destroyed() {
    /* 清除滑动监听 */
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="less" scoped>
.demo-anchor-sider {
  width: 102px;
  height: 146px;
  transition: all 0.5s;

  &-show {
    height: 430px;

    .demo-anchor-sider-ft {
      opacity: 1;
    }

    .demo-anchor-sider-qrcode,
    .demo-anchor-sider-question {
      opacity: 1;
    }
  }

  &-hd {
    width: 102px;
    height: 136px;
    background-position: 0px -279px;
    background-image: url("@/assets/components/spritegraph.png");
    cursor: pointer;

    &:hover {
      background-position: 0px -139px;
    }
  }

  &-ft {
    width: 60px;
    margin: 15px auto;
    background: #ffffff;
    border-radius: 8px;
    box-shadow: 0px 0px 4px rgb(74 89 111 / 20%);
    overflow: hidden;
    opacity: 0;
    transition: all 0.5s;
    .anchor-link-item {
      width: 100%;
      cursor: pointer;
      user-select: none;

      .anchor-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 68px;
        color: inherit;
        border-bottom: 1px solid #eff3f8;

        &-text {
          margin-top: 5px;
          font-size: 12px;
        }

        &:hover,
        &-active {
          color: #ffffff;
          background: #009cff;
        }
      }
    }
  }

  &-qrcode,
  &-question {
    width: 60px;
    height: 60px;
    line-height: 60px;
    margin: 0 auto 10px;
    border-radius: 30px;
    box-shadow: 0px 0px 4px rgb(74 89 111 / 20%);
    background: #ffffff;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    opacity: 0;
    user-select: none;
    transition: opacity 0.2s;

    &:hover {
      color: #ffffff;
      background: #009cff;
    }
  }
}
</style>
