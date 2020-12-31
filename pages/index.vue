<template>
  <div class="block">
    <quote></quote>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Quote from '../components/organisms/Quote.vue'

export default Vue.extend({
  components: { Quote },
})
</script>

<style scoped lang="scss">
.block {
  max-width: $container-max-width;
  margin: 0 auto;
}
</style>
