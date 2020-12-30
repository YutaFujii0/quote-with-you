<template>
  <button
    class="VButton"
    :style="styles"
    @click="click"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    onclick: {
      type: Function,
      required: true,
    },
    height: {
      type: String,
      default: '50px',
    },
    width: {
      type: String,
      default: '250px',
    },
    margin: {
      type: String,
      default: '',
    },
    backgroundColor: {
      type: String,
      default: '$color-white',
    },
  },
  computed: {
    styles: (vm) => ({
      backgroundColor: vm.backgroundColor,
      margin: vm.margin,
    }),
  },
  methods: {
    click(event: Event) {
      this.onclick(event).then(() => {
      })
    },
  },
})
</script>

<style scoped lang="scss">
.VButton {
  display: block;
  width: 250px;
  height: 50px;
  border: 2px solid $color-white;
  border-radius: 25px;
  color: $color-mainYellow;
  font-size: $font-lg;
  background: $color-white;
}
</style>
