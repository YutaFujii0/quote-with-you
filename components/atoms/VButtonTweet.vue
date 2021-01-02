<template>
  <div>
    <a class="VButtonTweet" :href="tweetUrl" target="_blank">
      <fa :icon="['fab', 'twitter']" class="fa__link--gray" />
    </a>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    text: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    hashtags: {
      type: Array,
      default: () => ['YourQuote2021'],
    },
  },
  computed: {
    tweetUrl() {
      return `https://twitter.com/intent/tweet?text=${this.text}&url=${this.url}&hashtags=${this.hashtags.join(',')}`
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
