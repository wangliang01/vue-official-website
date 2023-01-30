<script setup lang="ts"></script>

<template>
  <div class="app flex flex-col min-h-screen">
    <y-header></y-header>
    <div class="flex-1 flex flex-col">
      <router-view></router-view>
    </div>
    <y-footer></y-footer>
  </div>
</template>

<style scoped>
/* @import url('./assets/fonts/font.css'); */
.app {
  background-color: #f5f5f5;
}
</style>
