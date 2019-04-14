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
@import '@/assets/styles/reset.scss';
</style>
