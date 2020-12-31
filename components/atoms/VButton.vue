<template>
  <button class="VButton" :style="styles" @click="click">
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

type Style = {
  backgroundColor: string
  margin: string
}

type Data = {
  onclick: (e: Event) => any
  height: string
  width: string
  margin: string
}

type Methods = {
  click: (e: Event) => void
}

export default Vue.extend<Data, Methods, {}, {}>({
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
    styles(vm: any): Style {
      return {
        backgroundColor: vm.backgroundColor,
        margin: vm.margin,
      }
    },
  },
  methods: {
    click(event: Event): void {
      this.onclick(event)
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
  box-shadow: 0 0 25px #a9a9a9;
}
</style>
