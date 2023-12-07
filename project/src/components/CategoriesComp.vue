<template>
    <div class="block">
        <div class="categories">
            <p v-for="(item, index) in isActive" :key="index" @click="setActive(index)" :class="item.className">{{ item.name }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'PageCategoriesComp',

  data () {
    return {
      activeCategory: '',
      categories: [{
        name: 'Bathroom',
        className: 'notActive'
      }, {
        name: 'Bed Room',
        className: 'notActive'
      }, {
        name: 'Kitchen',
        className: 'notActive'
      }, {
        name: 'Living Area',
        className: 'notActive'
      }]
    }
  },
  methods: {
    setActive (i) {
      if (this.categories[i].name !== this.activeCategory) {
        this.activeCategory = this.categories[i].name
        // console.log(this.activeCategory)
      } else {
        this.activeCategory = 'none'
        // console.log('none')
      }
      this.$emit('active', this.activeCategory)
    }
  },
  computed: {
    isActive () {
      this.categories.forEach(item => {
        if (item.name === this.activeCategory) {
          item.className = 'active'
        } else {
          item.className = 'notActive'
        }
      })
      return this.categories
    }
  }
}
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.block {
    margin-top: 200px;
    justify-content: center;
    display: flex;
}

.categories {
    border: 1px solid #CDA274;
    border-radius: 18px;
    width: 880px;
    height: 75px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-bottom: 0px;
}

.notActive {
    width: 219px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: center;
}

.active {
    width: 219px;
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Jost;
    font-size: 18px;
    font-weight: 600;
    line-height: 23px;
    letter-spacing: 0.02em;
    text-align: center;
    background-color: #CDA274;
    color: #FFFFFF;
    border-radius: 18px;
}
</style>
