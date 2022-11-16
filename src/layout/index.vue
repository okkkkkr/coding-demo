<template>
  <!-- 首页页面布局：头部/内容/底部 -->
  <div class="demo-home-layout">
    <el-container>
      <el-header id="demoHeader" class="demo-header-wrapper">
        <page-header></page-header>
      </el-header>
      <el-main class="demo-main-wrapper">
        <router-view />
      </el-main>
      <el-footer class="demo-main-wrapper">
        <page-footer></page-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import PageHeader from "./Header/index.vue";
import PageFooter from "./Footer/index.vue";

export default {
  name: "HomeLayout",
  data() {
    return {};
  },

  components: { PageHeader, PageFooter },

  computed: {},

  methods: {},
};
</script>
<style lang="less" scoped>
.demo-home-layout {
  min-width: 1200px;

  .demo-header-wrapper,
  .demo-main-wrapper,
  .demo-footer-wrapper {
    height: auto !important;
    padding: 0;
    overflow: hidden;
  }
}
</style>
