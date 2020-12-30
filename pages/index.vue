<template>
  <div class="block">
    <quote></quote>
  </div>
</template>

<script lang="ts">
import Quote from '../components/organisms/Quote.vue'

export default {
  components: { Quote },
}
</script>

<style scoped lang="scss">
.block {
  max-width: $container-max-width;
  margin: 0 auto;
}
</style>
