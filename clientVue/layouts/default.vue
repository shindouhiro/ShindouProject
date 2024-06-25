<!-- layouts/AdminLayout.vue -->

<template>
  <div>
    <header>
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
        <el-radio-button :value="false">expand</el-radio-button>
        <el-radio-button :value="true">collapse</el-radio-button>
      </el-radio-group>
    </header>
    <div class="admin-layout">
      <!-- Sidebar -->
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item-group>
            <template #title><span>Group One</span></template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item two</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Group Two">
            <el-menu-item index="1-3">item three</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title><span>item four</span></template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <el-icon><document /></el-icon>
          <template #title>Navigator Three</template>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><setting /></el-icon>
          <template #title>Navigator Four</template>
        </el-menu-item>
      </el-menu>

      <!-- Main content area -->
      <main class="main">
        <slot></slot>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Document, Menu as IconMenu, Location, Setting } from "@element-plus/icons-vue";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
// 使用 script setup 语法
</script>

<style scoped>
/* Scoped styles for AdminLayout.vue */
.admin-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 250px; /* 固定侧边栏宽度 */
  background-color: #333; /* 侧边栏背景色 */
  color: #fff; /* 侧边栏文字颜色 */
}

.sidebar .nav ul {
  list-style-type: none;
  padding-left: 0;
}

.sidebar .nav li {
  padding: 10px;
}

.main {
  flex: 1; /* 主内容区域填充剩余空间 */
  padding: 20px; /* 主内容区域内边距 */
}
</style>
