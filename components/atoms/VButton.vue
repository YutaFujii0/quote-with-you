<template>
  <button
    class="VButton"
    :disabled="isDisabled"
    :style="styleObject"
    @click="click"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

type Style = {
  backgroundColor: string
  margin: string
}

type StyleObject = {
  height: string
  width: string
  margin: string
  boxShadow: string
}

type Data = {
  styleObject: StyleObject
  isDisabled: boolean
}

type Methods = {
  click: (e: Event) => void
}

type Props = {
  onclick: (e: Event) => any
  height: string
  width: string
  margin: string
}

export default Vue.extend<Data, Methods, {}, Props>({
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
  data() {
    return {
      styleObject: {
        height: this.height,
        width: this.width,
        margin: this.margin,
        boxShadow: '',
      },
      isDisabled: false,
    }
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
      this.styleObject.boxShadow = 'none'
      this.isDisabled = true
      this.onclick(event).then((_: any) => {
        this.styleObject.boxShadow = ''
        this.isDisabled = false
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
  border: 1px solid $color-lightGray;
  border-radius: 25px;
  color: $color-mainGray;
  font-size: $font-md;
  background: $color-white;
  box-shadow: 0 4px 10px $palette-Gray;
}
</style>
