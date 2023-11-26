<template>
  <div id="app">
    <NewsBlock></NewsBlock>
  </div>
</template>

<script>
import NewsBlock from './components/NewsBlock.vue'

export default {
  name: 'App',
  components: {
    NewsBlock
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-left: calc(50vw - 1200px/2);
  margin-right: calc(50vw - 1200px/2);
  width: 1200px;
}
</style>
