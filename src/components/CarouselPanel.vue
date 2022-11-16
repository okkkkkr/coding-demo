<template>
  <!-- 公用组件：轮播图面板组件 -->
  <div class="demo-carousel">
    <ul class="demo-carousel-panel">
      <li
        @mouseenter="stopInterVal"
        @mouseleave="startInterVal"
        @click="clickEvent"
        v-for="(item, index) in dataGroup"
        :class="[
          'demo-carousel-item',
          focusIndex === index ? 'demo-carousel-item-show' : '',
        ]"
        :key="item.key"
      >
        <a :href="item.href">
          <img class="demo-carousel-picture" :src="item.picture" alt="" />
        </a>
      </li>
    </ul>
    <!-- 操作栏 -->
    <slot name="operationGroup">
      <!-- 指示器 -->
      <slot v-if="indicator" name="indicator" class="demo-carousel-indicator">
        <ul class="indicator">
          <li
            v-for="(item, index) in dataGroup"
            @click="positioning(index)"
            :key="item.key"
            :class="[
              'indicator-item',
              focusIndex === index ? 'indicator-item-active' : '',
            ]"
          ></li>
        </ul>
      </slot>
      <!-- 后退按钮 -->
      <slot v-if="prevBtn" name="prevButton" class="demo-carousel-button prev">
        <div @click="prev" class="prev-btn">
          <i class="el-icon-arrow-left"></i>
        </div>
      </slot>
      <!-- 前进按钮 -->
      <slot v-if="nextBtn" name="nextButton" class="demo-carousel-button next">
        <div @click="next" class="next-btn">
          <i class="el-icon-arrow-right"></i>
        </div>
      </slot>
    </slot>
  </div>
</template>

<script>
export default {
  name: "DemoCarousel",
  props: {
    /* 轮播内容数组 */
    dataGroup: {
      type: Array,
      required: true,
      default: () => [],
    },

    /* 后退按钮 */
    prevBtn: {
      type: Boolean,
      default: true,
    },

    /* 前进按钮 */
    nextBtn: {
      type: Boolean,
      default: true,
    },

    /* 指示器 */
    indicator: {
      type: Boolean,
      default: true,
    },

    /* 轮询延时 */
    delay: {
      type: Number,
      default: 3000,
    },
  },
  data() {
    return {
      focusIndex: 0,
      clock: "",
    };
  },

  watch: {
    dataGroup: {
      handler(newVal) {
        if (newVal.length > 1) {
          this.startInterVal();
        }
      },
      immediate: true,
    },

    /* 轮播项切换通知外层 */
    focusIndex: function (newVal) {
      this.$emit("focusChange", newVal);
    },
  },

  methods: {
    next() {
      this.focusIndex++;
      if (this.focusIndex >= this.dataGroup.length) {
        this.focusIndex = 0;
      }
      this.$emit("next", this.dataGroup[this.focusIndex]);
    },

    prev() {
      this.focusIndex--;
      if (this.focusIndex < 0) {
        this.focusIndex = this.dataGroup.length - 1;
      }
      this.$emit("prev", this.dataGroup[this.focusIndex]);
    },

    /* 定位到某一项，重新启动定时器 */
    positioning(index) {
      this.focusIndex = index;
      this.startInterVal();
    },

    startInterVal() {
      this.clock && clearInterval(this.clock);
      this.clock = setInterval(() => {
        this.focusIndex++;
        if (this.focusIndex >= this.dataGroup.length) {
          this.focusIndex = 0;
        }
      }, this.delay);
    },

    stopInterVal() {
      this.clock && clearInterval(this.clock);
      this.clock = null;
    },
  },

  destroyed() {
    /* 清理定时器 */
    clearInterval(this.clock);
  },
};
</script>
<style lang="less" scoped>
.demo-carousel {
  position: relative;
  min-width: 1200px;
  padding-top: 25%;

  &-item {
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    transition: opacity 0.5s linear;

    &-show {
      opacity: 1;
    }
  }

  &-picture {
    display: block;
    max-width: 100%;
    margin: 0 auto;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .indicator {
    width: 100%;
    position: absolute;
    bottom: 10px;
    text-align: center;
    user-select: none;

    &-item {
      display: inline-block;
      width: 10px;
      height: 10px;
      margin: 0 5px;
      border-radius: 5px;
      background: #ededed;
      opacity: 0.6;
      cursor: pointer;

      &:hover,
      &-active {
        background: #ffffff;
        opacity: 1;
      }
    }
  }

  .prev-btn,
  .next-btn {
    width: 40px;
    height: 40px;
    line-height: 40px;
    position: absolute;
    top: calc(50% - 20px);
    text-align: center;
    border-radius: 20px;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #eeeeee;
    opacity: 0.3;
    transition: opacity 0.2;
    user-select: none;

    &:hover {
      opacity: 0.5;
    }
  }

  .prev-btn {
    left: 30px;
  }

  .next-btn {
    right: 30px;
  }
}
</style>
