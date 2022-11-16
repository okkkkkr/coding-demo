<template>
  <!-- 公用组件：新闻轮播面板组件 -->
  <div class="wheel-casting">
    <div class="wheel-casting-body">
      <!-- 前置Icon -->
      <slot v-if="prefix" name="prefix" class="wheel-casting-prefix">
        <div class="wheel-casting-prefix-icon"></div>
      </slot>
      <!-- 新闻内容 -->
      <slot class="wheel-casting-content">
        <a
          v-if="newsContent"
          @click="clickEvent"
          class="wheel-casting-content-link"
          :href="newsContent.href"
        >
          {{ newsContent.value }}
        </a>
      </slot>
      <!-- 后置Icon -->
      <slot v-if="suffix" name="suffix" class="wheel-casting-suffix">
        <div class="wheel-casting-suffix-icon">Hot</div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "WheelCasting",
  props: {
    /* 新闻内容数组 */
    content: {
      type: Array,
      required: true,
      default: () => [],
    },

    /* 轮播延时 */
    delay: {
      type: Number,
      default: 5000,
    },

    /* 是否需要前置icon */
    prefix: {
      type: Boolean,
      default: true,
    },

    /* 是否需要后置icon */
    suffix: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      newsIndex: 0,
      newsContent: null,
      clock: null,
    };
  },

  watch: {
    content: {
      handler(newVal) {
        this.newsContent = this.content[0];
        this.newsIndex = 0;
        if (newVal.length > 1) {
          this.startInterval();
        }
      },
      immediate: true,
    },
  },

  methods: {
    /* 启动定时器 */
    startInterval() {
      this.clock && clearInterval(this.clock);
      this.clock = setInterval(() => {
        if (this.newsIndex !== this.content.length - 1) {
          this.newsIndex++;
        } else {
          this.newsIndex = 0;
        }

        this.newsContent = this.content[this.newsIndex];
      }, this.delay);
    },

    /* 暂停定时器 */
    stopInterval() {
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
.wheel-casting {
  width: 100%;
  background-color: #ffffff;
  border-radius: 0 0 12px 12px;

  &-body {
    height: 70px;
    display: flex;
    align-items: center;
    padding: 0 28px;
  }

  &-prefix {
    &-icon {
      width: 138px;
      height: 22px;
      margin-right: 12px;
      background: url("@/assets/components/spritegraph.png");
      background-position: 0px -40px;
    }
  }

  &-content {
    &-link {
      line-height: 16px;
      color: inherit;
      &:hover {
        color: #0080ff;
      }
    }
  }

  &-suffix {
    &-icon {
      width: 36px;
      height: 16px;
      margin-left: 5px;
      line-height: 16px;
      border-radius: 8px 8px 8px 0;
      background: #eb676a;
      font-size: 12px;
      text-align: center;
      color: #ffffff;
      user-select: none;
    }
  }
}
</style>
