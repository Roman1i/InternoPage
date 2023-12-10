<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <ProjectComp></ProjectComp>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectComp from './components/ProjectComp.vue'
import HeaderComp from './HeaderComp.vue'
import FooterComp from './FooterComp.vue'

export default {
  name: 'App',
  components: {
    ProjectComp,
    HeaderComp,
    FooterComp
  },
  computed: {
    ...mapGetters(['getImage', 'getData'])
  }
}
</script>

<style lang="scss">

</style>
