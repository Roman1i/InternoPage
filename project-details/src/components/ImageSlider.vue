<template>
    <div class="imgBlock">
        <img class="iamge" :src="this.$store.getters.getImage" alt="">
        <div class="arrow prev" @click="PREVIOS_IMAGE">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="M10.605 12.727 5.656 7.776l4.949-4.948L7.777 0 0 7.776l7.777 7.779 2.828-2.828z"/></svg>
        </div>
        <div class="arrow next" @click="NEXT_IMAGE">
            <svg xmlns="http://www.w3.org/2000/svg" width="10.605" height="15.555"><path d="m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"/></svg>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'ImageSlider',
  props: { iamge: String },

  data () {
    return {
    }
  },
  methods: {
    ...mapMutations(['PREVIOS_IMAGE', 'NEXT_IMAGE'])
  }
}
</script>

<style lang="scss" scoped>
.imgBlock {
    border-radius: 70px;
    overflow: hidden;
    position: relative;
    margin-left: calc(50vw - 1200px/2);
    margin-right: calc(50vw - 1200px/2);
    width: 1200px;
    transition: 0.2s;
}

.imgBlock:hover .arrow {
    display: flex;
    transition: 0.2s;
}

.arrow {
    position: absolute;
    display: none;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: rgba(255, 228, 196, 0.5);
    top: 375px;
    border-radius: 30px;
    transition: 0.2s;
}

.arrow:hover {
    background-color: rgba(255, 228, 196);
    transition: 0.2s;
}

.prev {
    left: 10px;
}

.next {
    left: 1141px;
}
</style>
