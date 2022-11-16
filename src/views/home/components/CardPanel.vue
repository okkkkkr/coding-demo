<template>
  <!-- 业务组件：卡片组组件 -->
  <div class="demo-card-panel">
    <!-- 侧边栏 -->
    <div class="demo-card-panel-aside">
      <div
        v-for="item in siderList"
        :key="item.key"
        :class="[
          'panel-aside-item',
          siderFocus === item.index ? 'panel-aside-item-active' : '',
        ]"
        @click="selectItem(item.index)"
        @mouseenter="hoverItem(item.index)"
        @mouseleave="blurItem()"
      >
        <div
          :style="{
            background:
              siderFocus === item.index || siderHover === item.index
                ? VALUES.siderBgColorList[item.index]
                : '#ffffff',
          }"
          class="panel-aside-item-icon"
        >
          <img class="item-icon" :src="item.picture" alt="" />
        </div>
        <div class="panel-aside-item-content">
          <div class="title">{{ item.title }}</div>
          <div class="minor-title">{{ item.minorTitle }}</div>
        </div>
      </div>
      <div class="panel-aside-item-pagination" @click="paging">
        <i
          :class="[
            'el-icon-caret-top pagination-icon',
            siderMenus === 'bottom' ? 'pagination-icon-bottom' : '',
          ]"
        ></i>
      </div>
    </div>
    <!-- 内容面板 -->
    <div class="demo-card-panel-main">
      <!-- 上半部 -->
      <div class="panel-main-details">
        <!-- 文字内容 -->
        <div class="text-content">
          <div class="text-content-hd">
            <i class="el-icon-s-opportunity text-content-hd-icon"></i>
            <div class="text-content-hd-title">
              {{ mainDetails.hdTitle }}
            </div>
          </div>
          <div class="text-content-mid">
            <div class="text-content-mid-title">
              {{ mainDetails.midTitle }}
            </div>
            <div class="text-content-mid-introduce">
              {{ mainDetails.midIntroduce }}
            </div>
          </div>
          <div class="text-content-ft">
            <el-popover
              width="160"
              v-if="mainDetails.operExtra"
              placement="top"
              trigger="hover"
            >
              <div class="popover-picture">
                <img
                  v-if="mainDetails.operExtra.qrcode"
                  :src="mainDetails.operExtra.qrcode"
                  alt=""
                />
              </div>
              <div v-if="mainDetails.operExtra.tips" class="popover-text">
                {{ mainDetails.operExtra.tips }}
              </div>
              <el-button
                @click="clickEvent"
                slot="reference"
                class="text-content-ft-creation"
                type="primary"
                round
              >
                <i
                  v-if="mainDetails?.operExtra?.icon"
                  :class="mainDetails.operExtra.icon"
                ></i>
                {{ mainDetails.oper }}
              </el-button>
            </el-popover>

            <el-button
              v-else
              @click="clickEvent"
              class="text-content-ft-creation"
              type="primary"
              round
            >
              <i
                v-if="mainDetails?.operExtra?.icon"
                :class="mainDetails.operExtra.icon"
              ></i>
              {{ mainDetails.oper }}
            </el-button>

            <div
              @click="clickEvent"
              v-if="mainDetails.more"
              class="text-content-ft-more"
            >
              <span>{{ mainDetails.more }}</span>
              <i class="el-icon-arrow-right"></i>
            </div>
          </div>
        </div>
        <!-- 视频内容 -->
        <div class="media-content">
          <video
            v-if="mainDetails.mediaType === 'video'"
            autoplay
            muted
            loop
            :controls="false"
            class="media-content-item"
          >
            <source
              v-for="item in mainDetails.mediaData"
              :key="item.source"
              :src="item.source"
              :type="item.type"
            />
            您的浏览器不支持 video 标签。
          </video>
        </div>
      </div>
      <!-- 下半部 -->
      <div v-if="mainExamples" class="panel-main-example">
        <div class="example-title">{{ mainExamples.title }}</div>
        <div class="example-picture">
          <div
            v-for="item in mainExamples.exampleGroup"
            :key="item.picture"
            class="example-picture-item"
          >
            <div class="item-img-box">
              <img class="item-img" :src="item.picture" alt="" />
            </div>
            <div class="item-introduce">{{ item.introduce }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VALUES } from "../values";
export default {
  name: "CardList",
  props: {
    dataGroup: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      VALUES,
      siderFocus: 0,
      siderHover: 0,
      siderList: [],
      mainDetails: null,
      mainExamples: null,
      siderMenus: "top", // top 代表展示前7项，bottom代表展示后7项
    };
  },

  computed: {
    /* 确保数据获取到后再执行 */
    hasDataGroup() {
      if (this.dataGroup && this.dataGroup?.length) {
        return true;
      } else {
        return false;
      }
    },
  },

  watch: {
    hasDataGroup: {
      handler(newVal) {
        if (newVal) {
          this.siderList = this.dataGroup.slice(0, 7);
          this.setMainContent(0);
        }
      },
      immediate: true,
    },

    siderMenus: function (newVal) {
      this.siderList =
        newVal === "top" ? this.dataGroup.slice(0, 7) : this.dataGroup.slice(2);
    },
  },

  methods: {
    selectItem(index) {
      this.siderFocus = index;
      this.setMainContent(index);
      this.$emit("selectItem", this.dataGroup[index]);
    },

    hoverItem(index) {
      this.siderHover = index;
    },

    blurItem() {
      this.siderHover = -1;
    },

    paging() {
      this.siderMenus = this.siderMenus === "top" ? "bottom" : "top";
    },

    setMainContent(index) {
      this.mainDetails = this.dataGroup[index].childNodes.details;
      this.mainExamples = this.dataGroup[index].childNodes?.examples ?? null;
    },
  },
};
</script>
<style lang="less" scoped>
.demo-card-panel {
  width: 100%;
  height: 600px;
  display: flex;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 5px 5px 10px #dbdbdb, -5px -5px 10px #ffffff;

  &-aside {
    position: relative;
    width: 290px;
    height: 100%;
    overflow: hidden;
    background: #009cff;
    border-radius: 12px 0 0 12px;

    .panel-aside-item {
      position: relative;
      height: 82px;
      display: flex;
      align-items: center;
      padding: 0 20px;
      border-bottom: 1px solid #0090ff;
      cursor: pointer;

      &-icon {
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 14px 0 0;
        border-radius: 12px;
        transition: all 0.2s;

        .item-icon {
          scale: 1;
          transition: scale 0.2s;
        }
      }

      &-content {
        color: #ffffff;
        .title {
          font-size: 18px;
        }

        .minor-title {
          font-size: 12px;
          line-height: 24px;
        }
      }

      &:hover {
        background: rgba(255, 255, 255, 0.1);

        .panel-aside-item-icon {
          border-radius: 24px;
        }

        .item-icon {
          scale: 0.8;
        }
      }

      &-active {
        background: #ffffff !important;
        .panel-aside-item-icon {
          border-radius: 24px;
          background: rgb(251, 232, 194);
        }

        .panel-aside-item-content {
          color: #498ff6;
        }

        &::before {
          content: "";
          height: 100%;
          width: 4px;
          position: absolute;
          top: 0;
          left: 0;
          background: #0080ff;
        }
      }

      &-pagination {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 26px;
        line-height: 26px;
        background: #0080ff;
        text-align: center;
        font-size: 24px;
        cursor: pointer;
        color: #7db4e8;
        user-select: none;
        &:hover {
          color: #ffffff;
        }

        .pagination-icon {
          transform: rotate(0);

          &-bottom {
            transform: rotate(180deg);
          }
        }
      }
    }
  }

  &-main {
    width: 810px;
    height: 100%;
    margin-left: 50px;

    .panel-main-details {
      padding: 30px 0 20px;
      margin-bottom: 20px;
      display: flex;
      align-items: flex-start;
      border-bottom: 1px solid rgba(74, 89, 111, 0.1);

      .text-content {
        width: 410px;
        &-hd {
          display: flex;
          align-items: center;

          &-icon {
            font-size: 24px;
            color: #ffc919;
            margin-right: 5px;
          }
        }

        &-mid {
          &-title {
            font-size: 24px;
            margin: 23px 0 12px;
          }

          &-introduce {
            line-height: 30px;
            height: 90px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 3;
            text-overflow: ellipsis;
            color: rgba(74, 89, 111, 0.6);
          }
        }

        &-ft {
          height: 40px;
          display: flex;
          align-items: center;
          margin: 30px 0 0;

          &-creation {
            height: 40px;
            width: 150px;
            margin-right: 28px;
            font-size: inherit;
          }

          &-more {
            cursor: pointer;
            &:hover {
              color: #0080ff;
            }
          }
        }
      }

      .media-content {
        width: 360px;
        height: 270px;
        margin-left: 40px;
        border-radius: 8px;
        border: 1px solid rgba(74, 89, 111, 0.1);
        overflow: hidden;
        &-item {
          width: 100%;
          height: 100%;
        }
      }
    }

    .panel-main-example {
      .example-title {
        height: 34px;
        line-height: 34px;
        font-size: 18px;
      }

      .example-picture {
        height: 208px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-top: 8px;

        &-item {
          .item-img-box {
            width: 258px;
            height: 140px;
            border-radius: 4px;
            overflow: hidden;

            .item-img {
              display: block;
              width: 100%;
              height: 100%;
              border-radius: 4px;
              transform: scale(1) translateZ(0);
              transition: all 0.2s;

              &:hover {
                transform: scale(1.03) translateZ(0);
              }
            }
          }
          .item-introduce {
            margin-top: 8px;
          }
        }
      }
    }
  }
}

.popover-picture {
  width: 142px;
  margin: 8px auto 5px;

  img {
    width: 142px;
    height: 142px;
  }
}
.popover-text {
  font-size: 16px;
  color: #4a5d6d;
  opacity: 0.6;
  text-align: center;
}
</style>
