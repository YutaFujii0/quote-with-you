<template>
  <div class="block">
    <quote-box></quote-box>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import QuoteBox from '../components/organisms/QuoteBox.vue'

export default Vue.extend({
  components: { QuoteBox },
})
</script>

<style scoped lang="scss">
.block {
  max-width: $container-max-width;
  margin: 0 auto;
  padding: 0 $distance-sm;
}
</style>
