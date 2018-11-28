<template>
  <section class="container">
    <p> 뷰에 대하여 간단한 프리뷰</p>
    <p> 프레임워크 </p>
    <p> 단일페이지 </p>
    <p> 동적 바인딩 : 페이지 생성될때 데이터 고정이 아니라 언제든 데이터 변경하고 표시 가능 </p>
    <p> v-on: 이벤트 헨들러, v-if 조건에 따른 class 동적 바인딩 가능, v-for vue 인스턴트의 데이터로 반복문</p>
    <p>컴포넌트 시스템. 컴포넌트 단위로 소스 짜고 붙임. Spring의 템플릿과 비슷. 컴포넌트는 다른 컴포넌트 안에 속할 수 있고. 컴포넌트간 데아터 전달 가능</p>
    <br>
    <p> 전반적인 설명은 Vuejs 홈페이지에서 확인 가능 </p>
    <br>
    <div>
      <logo/>
      <h1 class="title">
        introductionVuejs
      </h1>
      <h2 class="subtitle">
        My super-excellent Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
