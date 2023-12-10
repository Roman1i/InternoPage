<template>
    <div>
        <img class="banner" :src="project.banner" alt="">
        <div class="projectBlock">
            <h1 class="header">{{ project.head }}</h1>
            <p class="text">{{ project.text }}</p>
        </div>
        <ImageSlider class="images"></ImageSlider>
    </div>
</template>

<script>
import ImageSlider from './ImageSlider.vue'

export default {
  name: 'ProjectComp',
  components: {
    ImageSlider
  },

  data () {
    return {
      project: this.$store.getters.getData
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
  margin-bottom: 200px;
}

.projectBlock {
    margin-left: calc(50vw - 1200px/2);
    margin-right: calc(50vw - 1200px/2);
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.header {
  font-family: DM Serif Display;
  font-size: 50px;
  font-weight: 400;
  line-height: 63px;
  letter-spacing: 0.02em;
  text-align: left;
  color: #292F36;
  width: 658px;
}

.text {
  font-family: Jost;
  font-size: 22px;
  font-weight: 400;
  line-height: 33px;
  letter-spacing: 0.01em;
  text-align: left;
  color: #4D5053;
  width: 658px;
  padding-bottom: 100px;
}

.images {
  margin-bottom: 200px;
}
</style>
