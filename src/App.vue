<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
}
</script>

<style lang="scss">
@import '@/assets/styles/normalize.scss';
@import '@/assets/styles/global.scss';
</style>
