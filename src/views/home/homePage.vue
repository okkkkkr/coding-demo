<template>
  <div class="demo-homepage">
    <!-- 轮播图 -->
    <carousel-panel
      ref="carousel"
      @focusChange="focusChange"
      :data-group="VALUES.carouselList"
    >
      <div class="demo-homepage-operation" slot="operationGroup">
        <div class="demo-homepage-operation-box">
          <div class="demo-homepage-prev" @click="$refs.carousel.prev()">
            <i class="el-icon-arrow-left"></i>
          </div>
          <div class="demo-homepage-indicator">
            <ul class="demo-homepage-indicator-box">
              <li
                class="demo-homepage-indicator-item"
                v-for="(item, index) in VALUES.carouselList"
                :key="item.key"
                @click="$refs.carousel.positioning(index)"
              >
                <div
                  :class="[
                    'indicator-items',
                    index === focusIndex ? 'indicator-items-focus' : '',
                  ]"
                >
                  <span class="indicator-items-title">{{ item.title }}</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="demo-homepage-next" @click="$refs.carousel.next()">
            <i class="el-icon-arrow-right"></i>
          </div>
        </div>
      </div>
    </carousel-panel>
    <div class="demo-homepage-body">
      <!-- 新闻走马灯 -->
      <wheel-casting :content="VALUES.newsList"></wheel-casting>
      <empty-content></empty-content>
      <div id="cardPanel" class="demo-homepage-main-title">
        编程好工具，学习更轻松
      </div>
      <div class="demo-homepage-minor-title">选择适合你的编程神器</div>
      <!-- 卡片组 -->
      <card-panel :data-group="VALUES.cardPanelList"></card-panel>
      <empty-content></empty-content>
      <!-- 锚点侧边栏 -->
      <anchor-sider class="demo-homepage-anchor"></anchor-sider>
    </div>
  </div>
</template>

<script>
import { VALUES } from "./values";
import WheelCasting from "@/components/WheelCasting.vue";
import CarouselPanel from "@/components/CarouselPanel.vue";
import EmptyContent from "./components/EmptyContent.vue";
import CardPanel from "./components/CardPanel.vue";
import AnchorSider from "@/components/AnchorSider.vue";

export default {
  name: "HomePage",
  components: {
    WheelCasting,
    CarouselPanel,
    EmptyContent,
    CardPanel,
    AnchorSider,
  },
  data() {
    return {
      VALUES,
      focusIndex: 0,
    };
  },
  methods: {
    focusChange(index) {
      this.focusIndex = index;
    },
  },
};
</script>

<style lang="less" scoped>
.demo-homepage {
  position: relative;
  width: 100%;
  background-color: #eff3f8;
  padding-bottom: 50px;

  &-body {
    width: 1200px;
    margin: 0 auto;
  }

  &-main-title {
    font-size: 40px;
    font-weight: bold;
    text-align: center;
  }

  &-minor-title {
    margin: 10px 0 26px;
    text-align: center;
    color: rgba(74, 89, 111, 0.6);
  }

  &-operation {
    width: 100%;
    position: absolute;
    bottom: 0;

    &-box {
      width: 1200px;
      display: flex;
      align-items: center;
      margin: 0 auto;
    }
  }

  &-prev,
  &-next {
    position: relative;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: rgba(255, 255, 255, 0.4);
    font-weight: bold;
    font-size: 24px;
    cursor: pointer;
    user-select: none;

    &::after {
      content: "";
      width: 100%;
      height: 6px;
      position: absolute;
      bottom: 0;
      left: 0;
      background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));
    }

    &:hover {
      background: #ffffff;
      color: #009cff;
    }
  }

  &-prev {
    border-radius: 12px 0 0 0;
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }

  &-next {
    border-radius: 0 12px 0 0;
  }

  &-indicator-box {
    display: flex;
    align-items: center;

    .indicator-items {
      position: relative;
      width: 219px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: rgba(255, 255, 255, 0.4);
      border-right: 1px solid rgba(255, 255, 255, 0.6);
      cursor: pointer;
      user-select: none;

      &::after {
        content: "";
        width: 100%;
        height: 6px;
        position: absolute;
        bottom: 0;
        left: 0;
        background: linear-gradient(rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.1));
      }

      &:hover,
      &-focus {
        color: #009cff;
      }

      &-focus::after {
        height: 3px;
        background: #009cff;
      }

      &-title {
        opacity: 1;
      }
    }
  }

  &-anchor {
    position: fixed;
    bottom: 80px;
    right: 1%;
  }
}
</style>
