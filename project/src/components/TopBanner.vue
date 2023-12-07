<template>
    <div class="banner">
        <img class="image" src="banner.png" alt="">
        <div class="tag">
            <h1 class="header">Our Project</h1>
            <p class="text">Home / Project</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'TopBanner',

  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.banner {
    position: relative;
}

.tag {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 504px;
    height: 178px;
    position: absolute;
    background-color: white;
    left: calc(50% - 504px/2);
    top: 178px;
    border-top-right-radius: 37px;
    border-top-left-radius: 37px;
}
.header {
    padding-top: 41px;
    font-family: DM Serif Display;
    font-size: 50px;
    font-weight: 400;
    line-height: 63px;
    letter-spacing: 0em;
    text-align: left;
    margin: 0;
}
.text {
    font-family: Jost;
    font-size: 22px;
    font-weight: 400;
    line-height: 33px;
    letter-spacing: 0.01em;
    text-align: left;
    margin: 0;
}
</style>
