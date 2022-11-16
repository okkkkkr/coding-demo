<template>
  <!-- 页面底部 -->
  <div class="demo-footer">
    <div class="demo-footer-guide">
      <div class="demo-footer-guide-logo">
        <img class="logo" src="@/assets/footer/logo.png" alt="" />
      </div>
      <div class="demo-footer-guide-link">
        <div class="demo-footer-guide-link-list link-programming">
          <div class="guide-link-list-title">青少年编程</div>
          <div class="guide-link-list-item-box">
            <div>
              <div
                v-for="item in VALUES.programList.slice(0, 6)"
                :key="item.key"
                class="guide-link-list-item"
              >
                <span @click="clickEvent">{{ item.value }}</span>
              </div>
            </div>
            <div>
              <div
                class="guide-link-list-item"
                v-for="item in VALUES.programList.slice(6)"
                :key="item.key"
              >
                <span @click="clickEvent">{{ item.value }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="demo-footer-guide-link-list link-friendship">
          <div class="guide-link-list-title">友情链接</div>
          <div
            class="guide-link-list-item"
            v-for="item in VALUES.friendShipList"
            :key="item.key"
          >
            <span @click="clickEvent">{{ item.value }}</span>
          </div>
        </div>
      </div>
      <div class="demo-footer-guide-qrcode">
        <div class="qrcode-box">
          <img class="qrcode" src="@/assets/footer/qrcode.png" alt="" />
        </div>
        <div class="introduce">
          <p>关注扣叮公众号</p>
          <p>携手创造孩子未来</p>
        </div>
      </div>
    </div>
    <div class="demo-footer-protocol">
      <div class="demo-footer-protocol-left">
        Copyright © 1998 - 2022 Tencent. All Rights Reserved. 腾讯公司 版权所有
      </div>
      <div class="demo-footer-protocol-right">
        <a @click="clickEvent" class="protocol-link" href="javascript:void(0);">
          服务协议
        </a>
        <el-divider direction="vertical"></el-divider>
        <a @click="clickEvent" class="protocol-link" href="javascript:void(0);">
          隐私政策
        </a>
        <el-divider direction="vertical"></el-divider>
        <a @click="clickEvent" class="protocol-link" href="javascript:void(0);">
          版权保护投诉指引
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { VALUES } from "./values";

export default {
  name: "PageFooter",
  data() {
    return {
      VALUES,
    };
  },

  components: {},

  computed: {},

  methods: {},
};
</script>
<style lang="less" scoped>
.demo-footer {
  width: 1200px;
  padding: 35px 0;
  margin: 0 auto;

  &-guide {
    display: flex;
    align-items: flex-start;
    position: relative;

    &-logo {
      user-select: none;

      .logo {
        width: 180px;
        height: 52px;
      }
    }

    &-link {
      display: flex;
      align-items: flex-start;

      .link-programming {
        margin: 0 40px 0 180px;
        .guide-link-list-item-box {
          display: flex;
          align-items: flex-start;
        }
      }

      .guide-link-list-title {
        margin-bottom: 12px;
        color: rgba(74, 89, 111, 0.6);
      }

      .guide-link-list-item {
        width: 130px;
        margin-right: 40px;
        line-height: 28px;
        font-size: 14px;
        & > span {
          cursor: pointer;
          &:hover {
            color: #0080ff;
          }
        }
      }
    }

    &-qrcode {
      position: absolute;
      right: 0;
      top: 0;

      .qrcode-box {
        width: 120px;
        height: 120px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #eff3f8;
        border-radius: 4px;
        .qrcode {
          width: 104px;
          height: 104px;
        }
      }

      .introduce {
        margin-top: 6px;
        line-height: 20px;
        font-size: 14px;
        text-align: center;
        color: rgba(74, 89, 111, 0.6);
      }
    }
  }

  &-protocol {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;
    font-size: 14px;
    border-top: 1px solid #eff3f8;
    .protocol-link {
      color: inherit;
      &:hover {
        color: #0080ff;
      }
    }
  }
}
</style>
