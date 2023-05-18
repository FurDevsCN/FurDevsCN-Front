<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import IntroPage from './views/IntroView.vue'
import CardPage from './views/CardView.vue'
import NavigatorBar from './components/NavigationBar.vue'
import LoaderWrapper from './components/LoadWrapper.vue'
</script>

<template>
  <LoaderWrapper />
  <IntroPage />
  <CardPage />
  <NavigatorBar />
</template>

<style type="text/css">
/* 背景样式 */

body {
  width: 100%;
  height: 100%;
  background: url(https://imgapi.cn/bing.php?rand=true) no-repeat center center
    fixed;
  z-index: -1;
  -moz-background-size: cover;
  /*背景图片拉伸以铺满全屏*/
  -ms-background-size: cover;
  -webkit-background-size: cover;
  background-size: cover;
  -o-background-size: cover;
  font-family: 'Inter', sans-serif;
  overflow: auto;
  /* 禁止选中 */
  user-select: none;
}

body::-webkit-scrollbar {
  display: none;
}

/* 核心内容布局 */

:root {
  /* --gray-bg: #fbfbfb; */
  --gray: #707070;
  --gray-dark: #383838;
  --note-green: #3f6600;
  --github-purple: #6e34da;
  --qq-light-blue: #1890ff;
  --tg-blue: #30a3e6;
  --link-blue: #2f54eb;
}

body,
.p-1 {
  flex-direction: column;
}

body,
.page {
  display: flex;
  margin: 0;
  background-color: var(--gray-bg);
}

.page {
  min-height: 100vh;
}
</style>
<!-- 又臭又长（ -->
