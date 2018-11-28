<template>
  <div>
    <div class="header">
      Vuejs 소개
      <br>
      <span class="header sub-title">{{ title }}</span>
      <hr>
    </div>
    <div class="containor">
      <div class="left-nav">
        <ul>
          <li>vue js 소개</li>
        </ul>
      </div>
      <div class="contents">
        <nuxt/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'vuejs 소개'
    }
  }
}
</script>

<style>
.header {
  font-size: 30px;
  padding: 20px 10px 10px 20px;
}
.header hr {
  border: solid 2px orange;
}
.header.sub-title {
  font-size: 20px;
}
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
