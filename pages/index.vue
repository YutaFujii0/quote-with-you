<template>
  <div class="block">
    <v-button :onclick="click" margin="0 auto" width="250px" height="50px">
      <span>{{ $t('button.pick') }}</span>
    </v-button>
    <div>
      <span @click="handleClick">draw!</span>
      <ol>
        <li>{{ quote }}</li>
        <li>{{ whose }}</li>
      </ol>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Quote {
  quote: string
  whose: string
}

export default Vue.extend({
  data() {
    return {
      quote: '',
      whose: '',
    }
  },
  methods: {
    handleClick() {
      this.$axios
        .$get('https://cors-anywhere.herokuapp.com/https://quote-service.yutafujii.net/quotes/pick')
        .then((data: any) => {
          this.quote = data.quote[0].quote
          this.whose = data.quote[0].whose
        })
    },
    click() {
      return new Promise((resolve) => {
        this.handleClick().then((_) => resolve(null))
      })
    },
  },
})
</script>

<style lang="scss">
.block {
  max-width: 500px;
}
</style>
