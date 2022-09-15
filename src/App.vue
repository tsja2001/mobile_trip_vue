<template>
	<div class="app">app</div>
	<router-view />
	<!-- <router-link to="/home">home</router-link>
	<router-link to="/favor">favor</router-link>
	<router-link to="/message">message</router-link>
	<router-link to="/order">order</router-link> -->
	<tab-bar></tab-bar>
</template>

<script setup>
import TabBar from "./components/tab-bar/tab-bar.vue";
</script>
<style lang="less" scoped></style>
