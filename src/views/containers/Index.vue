<template>
  <div id="app">
    <it-header></it-header>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ItHeader from '@/views/components/header/it-header.vue';

@Component({
  components: {
    ItHeader,
  },
})
export default class Index extends Vue {}
</script>
