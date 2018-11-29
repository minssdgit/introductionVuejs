<template>
  <div>
    <div class="header">
      <span class="main-title">
        Vuejs 소개
      </span>
      <br>
      <span class="sub-title">{{ title }}</span>
      <hr>
    </div>
    <div class="containor">
      <div class="left-nav">
        <ul>
          <li>vue js 소개</li>
          <li>NUXT 소개</li>
          <li>NUXT 특징</li>
          <li>NXXT 시작하기</li>
          <li>정리</li>
        </ul>
      </div>
      <div class="contents">
        <nuxt/>
      </div>
    </div>
    <div class="footer">
      이전페이지
      다음페이지
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
  padding: 10px 10px 5px 20px;
}
.containor {
  position: absolute;
  width: 100%;
  height: 600px;
  min-width: 1400px;
  border: 1px solid aqua;
  text-align: center;
}
.contents {
  display: inline-table;
  position: absolute;
  height: 600px;
  width: 100%;
  float: left;
  border: 1px solid black;
  align-items: center;
}
.left-nav {
  display: inline-table;
  position: absolute;
  float: left;
  height: 100%;
  width: 200px;
  border: 1px solid coral;
}
.footer {
  position: absolute;
  display: inline-table;
  margin-top: 600px;
  width: 100%;
  height: 50px;
  border: 1px solid brown;
}
.header hr {
  border: solid 2px orange;
  margin: 5px 0px 5px 0px;
}
.sub-title {
  font-size: 20px;
  margin-left: 20px;
}
body {
  background-color: lemonchiffon;
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
