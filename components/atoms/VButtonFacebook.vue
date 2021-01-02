<template>
  <div>
    <a class="VButtonTweet" :href="shareUrl" target="_blank">
      <fa :icon="['fab', 'facebook']" class="fa__link--gray" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    url: {
      type: String,
      default: '',
      required: true,
    },
  },
  computed: {
    shareUrl() {
      return `https://www.facebook.com/sharer/sharer.php?u=${this.url}`
    },
  },
})
</script>

<style scoped lang="scss">
.VButtonTweet {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: 1px solid $color-lightGray;
  border-radius: 50%;
  color: $color-mainGray;
  font-size: $font-md;
  background: $color-white;
  box-shadow: 0 4px 10px $palette-Gray;
}
</style>
