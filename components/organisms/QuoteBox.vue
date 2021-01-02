<template>
  <div>
    <div class="block__title">{{ $t('index.title') }}</div>
    <div class="quote">
      <img
        src="~/assets/quote-mark.png"
        alt="quote-mark"
        class="quote__markTop"
        width="25"
      />
      <div class="quote__quoteMsg">
        <transition name="slide-fade-in">
          <span v-if="showQuote" class="quote__text">{{ quote }}</span>
        </transition>
        <transition name="fade-in">
          <span v-if="showWhose" class="quote__whose">{{ whose }}</span>
        </transition>
      </div>
      <img
        src="~/assets/quote-mark.png"
        alt="quote-mark"
        class="quote__markBottom"
        width="25"
      />
    </div>
    <div class="block__bottom">
      <v-button :onclick="click" margin="0 auto" width="250px" height="50px">
        <span>{{ $t('button.pick') }}</span>
      </v-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  quote: string
  whose: string
  showQuoteContent: boolean
}

type Methods = {
  getQuote: () => Promise<any>
  click: () => Promise<any>
}

export default Vue.extend<Data, Methods, {}, {}>({
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      quote: '',
      whose: '',
      showQuoteContent: true,
    }
  },
  computed: {
    showQuote() {
      return this.showQuoteContent && this.quote
    },
    showWhose() {
      return this.showQuoteContent && this.whose
    },
  },
  methods: {
    getQuote(): Promise<any> {
      this.quote = ''
      this.whose = ''
      return new Promise((resolve) => {
        this.$axios.$get(this.$config.quoteServiceBaseURL).then((data: any) => {
          this.quote = data.quote[0].quote
          setTimeout(() => {
            this.whose = data.quote[0].whose
          }, 1000)
          resolve('resolved')
        })
      })
    },
    async click(): Promise<any> {
      await this.getQuote()
      return new Promise((resolve) => {
        resolve(null)
      })
    },
  },
})
</script>

<style scoped lang="scss">
.block__title {
  padding: $distance-md 0 $distance-lg 0;
  text-align: center;
  font-size: $font-lg;
}
.block__bottom {
  margin-top: $distance-lg;
}
.quote {
  margin: 0 auto;
  position: relative;
  height: 180px;
  min-width: 315px;
  background: $color-lightGray;
  box-shadow: 0 0 10px $color-white;
  border: 1px solid $color-white;

  .quote__text {
    margin: auto $distance-sm;
    color: $color-gray;
    font-size: $font-sm;
    display: block;
  }
  .quote__whose {
    margin: $distance-xs $distance-sm;
    color: $color-gray;
    font-size: $font-xs;
    display: block;
  }
  .quote__markTop {
    position: absolute;
    top: $distance-xs;
    left: $distance-xs;
  }
  .quote__quoteMsg {
    position: absolute;
    top: $distance-lg;
    width: 100%;
    text-align: center;
  }
  .quote__markBottom {
    position: absolute;
    bottom: $distance-xs;
    right: $distance-xs;
    transform: rotate(180deg);
  }
}
.slide-fade-in-enter-active {
  animation: slide-fade-in 1s;
}
.fade-in-enter-active {
  animation: fade-in 1s;
}
</style>
