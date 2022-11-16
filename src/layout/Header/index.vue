<template>
  <!-- 页面头部 -->
  <div class="demo-header">
    <div class="demo-header-content">
      <!-- 左侧logo组 -->
      <div class="logo">
        <img
          class="logo-1"
          @click="clickEvent"
          src="@/assets/header/logo1.png"
          alt=""
        />
        <el-divider class="divider" direction="vertical"></el-divider>
        <img
          class="logo-2"
          @click="clickEvent"
          src="@/assets/header/logo2.png"
          alt=""
        />
      </div>
      <!-- 中部导航 -->
      <ul class="nav">
        <li
          :class="[
            'nav-item',
            activeNumber === item.key ? 'nav-item-active' : '',
          ]"
          v-for="item in VALUES.navList"
          @click="navClick(item.key)"
          :key="item.key"
        >
          {{ item.value }}
        </li>
        <li class="nav-item-dropdown">
          <el-dropdown placement="bottom" :show-timeout="50" :hide-timeout="50">
            <span class="el-dropdown-link">
              <a href="javascript:void(0);">
                赛事活动<i class="el-icon-caret-bottom dropdown-icon"></i>
              </a>
            </span>
            <el-dropdown-menu class="dropdown-list" slot="dropdown">
              <el-dropdown-item
                class="dropdown-item-box"
                v-for="item in VALUES.activeDropdownList"
                :key="item.key"
              >
                <div class="dropdown-item">{{ item.value }}</div>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </li>
      </ul>
    </div>
    <!-- 右侧操作栏 -->
    <div class="operation">
      <el-dropdown placement="bottom" :show-timeout="50" :hide-timeout="50">
        <span class="el-dropdown-link">
          <el-button class="operation-button" type="primary" round>
            立即创作
            <i class="el-icon-caret-bottom dropdown-icon"></i>
          </el-button>
        </span>
        <el-dropdown-menu class="dropdown-list" slot="dropdown">
          <el-dropdown-item
            class="dropdown-item-box"
            v-for="item in VALUES.operationDropdownList"
            :key="item.key"
          >
            <div class="dropdown-item" @click="clickEvent">
              <i :class="item.icon"></i>
              {{ item.value }}
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <el-button type="text" class="login" @click="clickEvent">登录</el-button>
    </div>
  </div>
</template>

<script>
import { VALUES } from "./values";

export default {
  name: "PageHeader",
  data() {
    return {
      VALUES,
      activeNumber: 0,
    };
  },

  components: {},

  computed: {},

  methods: {
    navClick(value) {
      this.activeNumber = value;
      this.clickEvent();
    },
  },
};
</script>
<style lang="less" scoped>
.demo-header {
  padding-left: 40px;
  position: relative;
  user-select: none;

  &-content {
    display: flex;
    align-items: center;

    .logo {
      display: flex;
      align-items: center;
      width: 340px;

      &-1 {
        width: 180px;
        height: 52px;
        cursor: pointer;
      }

      .divider {
        height: 25px;
        margin: 0 10px;
      }

      &-2 {
        width: 133px;
        height: 57px;
        cursor: pointer;
      }
    }

    .nav {
      display: flex;
      margin-left: 20px;

      &-item {
        display: flex;
        height: 42px;
        padding: 0 28px;
        line-height: 42px;
        cursor: pointer;
        border-radius: 21px;
        transition: background-color 0.2s;

        @media screen and (max-width: 1460px) {
          padding: 0 15px;
        }
      }

      &-item-active {
        color: #0080ff;
        font-weight: 600;
      }

      &-item-dropdown {
        padding: 0 28px;
        line-height: 42px;
        color: #0080ff !important;
      }

      &-item:hover {
        background-color: #edeef0;
      }
    }
  }

  .operation {
    height: 60px;
    line-height: 60px;
    position: absolute;
    right: 40px;
    top: 0;

    &-button {
      width: 112px;
      padding: 0;
      line-height: 32px;
      font-size: 16px;
      background: #0080ff;
    }

    .login {
      margin-left: 20px;
      font-size: inherit;
      color: inherit;
      cursor: pointer;
    }
  }

  /deep/.el-dropdown {
    font-size: 16px;

    &-link {
      .dropdown-icon {
        transform: rotate(0);
        transition: transform 0.2s;
      }

      &:hover {
        .dropdown-icon {
          transform: rotate(180deg);
        }
      }
    }
  }
}

.dropdown-list {
  padding: 0;
  top: 35px !important;
  user-select: none;

  .dropdown-item,
  .dropdown-item {
    max-width: 214px;
    padding: 10px 20px;
    line-height: 24px;
  }

  .dropdown-item-box {
    padding: 0;
    max-width: 214px;
  }
}
</style>
