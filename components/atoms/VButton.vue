<template>
  <button class="VButton" :style="styles" @click="click">
    <slot />
  </button>
</template>

<script lang="ts">
export default {
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
  },
  computed: {
    styles: (vm: any) => ({
      backgroundColor: vm.backgroundColor,
      margin: vm.margin,
    }),
  },
  methods: {
    click(event: Event) {
      this.onclick(event)
    },
  },
}
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
  box-shadow: 0 0 25px #a9a9a9;
}
</style>
