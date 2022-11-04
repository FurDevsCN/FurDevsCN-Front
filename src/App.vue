<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Page1 from './components/page1.vue';
import Page2 from './components/page2.vue';
import nav from './components/navigator.vue';
</script>

<template>
  <Page1/>
  <Page2/>
  <nav/>
</template>

<style>
 @media screen and ( max-width: 414px ) and ( min-width: 0px ) {
  .page::after {
      content: '';
      height: 20vh;
  }

  .card.card-intro {
      width: 90vw;
      min-width: 0;
      padding: 0;
  }

  /* 第二页样式 */

  .card.card-member {
      max-height: 90vh;
      max-width: 95vw;
      padding: 1rem;
  }

  .card-member-item {
      width: 100%;
  }
  
  .actionbar{
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.5);
      width: 20vw;
      min-width: 30vw;
      max-width: 40vw;
      border-radius: 5px;
  }
}
</style>


