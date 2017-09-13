<template>
  <div id="app">
    <img src="./assets/images/webpack.png" width="30%" alt="">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('wsy wrapper')
  }
}
</script>
