<template>
  <!-- 空内容占位 -->
  <div class="demo-empty-content">
    <el-empty description="占位"></el-empty>
  </div>
</template>

<script>
export default {
  name: "EmptyContent",
};
</script>
<style lang="less" scoped>
.demo-empty-content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
}
</style>
