<template>
    <div class="header">
        <a href="index.html" class="header__logo">
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z" fill="#CDA274"/>
              </svg>
          <h2 class="header__logo__text">Interno</h2>
      </a>
      <div class="header__links">
          <a href="#">Home</a>
          <a href="#">Project</a>
          <a href="#">Blog</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderBlock'
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    height: 50px;
    margin-top: 44px;
    margin-bottom: 57px;
    margin-left: calc(50vw - 1200px/2);
    margin-right: calc(50vw - 1200px/2);
    width: 1200px;
    &__logo {
        display: flex;
        align-items: center;
        gap: 10px;
        &__text {
            font-family: DM Serif Display;
            font-size: 40px;
            font-weight: 400;
            line-height: 50px;
            letter-spacing: 0em;
            text-align: left;
            color: #292F36;
        }
    }
    &__links {
        display: flex;
        align-items: center;
        gap: 40px;font-family: Jost;
        font-size: 20px;
        font-weight: 400;
        line-height: 25px;
        letter-spacing: 0em;
        text-align: center;
        color: #292F36;
    }
}
</style>
