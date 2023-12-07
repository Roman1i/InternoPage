<template>
  <div id="app">
    <TopBanner></TopBanner>
    <CategoriesComp @active="changeActive"></CategoriesComp>
    <div class="projects">
      <div v-for="(item, index) in sortedProjects" :key="index">
        <ProjectItem :project="item"></ProjectItem>
      </div>
    </div>
  </div>
</template>

<script>
import TopBanner from './components/TopBanner.vue'
import CategoriesComp from './components/CategoriesComp.vue'
import ProjectItem from './components/ProjectItem.vue'

export default {
  name: 'App',
  components: {
    TopBanner,
    CategoriesComp,
    ProjectItem
  },

  data () {
    return {
      activeCategory: 'none',
      projects: [{
        imageSource: 'bedroom.png',
        name: 'Bed Room',
        category: 'Bed Room'
      }, {
        imageSource: 'bedroom.png',
        name: 'Bed Room',
        category: 'Bed Room'
      }, {
        imageSource: 'bathroom.png',
        name: 'Bathroom',
        category: 'Bathroom'
      }, {
        imageSource: 'bathroom.png',
        name: 'Bathroom',
        category: 'Bathroom'
      }, {
        imageSource: 'bathroom.png',
        name: 'Bathroom',
        category: 'Bathroom'
      }, {
        imageSource: 'kitchen.png',
        name: 'Kitchen',
        category: 'Kitchen'
      }, {
        imageSource: 'kitchen.png',
        name: 'Kitchen',
        category: 'Kitchen'
      }]
    }
  },

  methods: {
    changeActive (data) {
      this.activeCategory = data
      // console.log(this.activeCategory)
    }
  },

  computed: {
    sortedProjects () {
      if (this.activeCategory !== 'none') {
        return this.projects.filter(item => this.activeCategory === item.category)
      } else {
        return this.projects
      }
    }
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
  margin-top: 60px;
  text-decoration: none;
}

.projects {
    margin: 61px calc(50vw - 1200px/2) 200px calc(50vw - 1200px/2);
    width: 1200px;
    display: grid;
    grid-template-columns: 50% 50%;
    gap: 30px;
}
</style>
