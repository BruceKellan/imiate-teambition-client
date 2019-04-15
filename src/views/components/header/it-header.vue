<template>
  <header class="it-header flex-h">
    test
  </header>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ItHeader extends Vue {

}
</script>

<style lang="scss">
@import '@/assets/styles/functions.scss';

.it-header {
  justify-content: space-between;
  height: px2rem(48px);
}
</style>
