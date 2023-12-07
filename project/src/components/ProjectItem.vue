<template>
    <div class="project">
        <img :src="project.imageSource" alt="">
        <div class="bottom">
            <div class="info">
                <p class="name">{{ project.name }}</p>
                <p class="type">Decor / Artchitecture</p>
            </div>
            <a href="#" class="link">
                <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 19L9 10L1 1" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: { project: Object },

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.project {
    width: 586px;
}

.bottom {
    padding-top: 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.name {
    font-family: DM Serif Display;
    font-size: 25px;
    font-weight: 400;
    line-height: 31px;
    letter-spacing: 0.02em;
    text-align: left;
    color: #292F36;
    margin: 0;
    padding-bottom: 4px;
}

.type {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    color: #4D5053;
    margin: 0;
}

.link {
    width: 70px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F4F0EC;
    border-radius: 50px;
}
</style>
