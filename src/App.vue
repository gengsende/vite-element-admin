<template>
  <div id="app">
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
  export default {
    name: 'App',
    provide() {
      return {
        reload: this.reload
      }
    },
    data() {
      return {
        isRouterAlive: true
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false
        this.$nextTick(() => (this.isRouterAlive = true))
      }
    }
  }
</script>

<style>
  .sub-el-icon {
    color: currentColor;
    width: 1em;
    height: 1em;
  }
</style>
