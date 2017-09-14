<template>
  <div id="app">
    <img src="./assets/images/webpack.png" width="30%" alt="">
    <ul>
	<li>1</li>
	<li>2</li>
	<li>3</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log(process.env.NODE_ENV)
  }
}
</script>
<style lang="scss">
	ul {
		list-style: none;
		float: left;
		font-weight: bold;
		font-size: 24px;
	}
</style>
