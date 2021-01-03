<template>
  <div>
    <div class="block__title" :style="titleFontFamily">
      {{ $t('index.title') }}
    </div>
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
      <v-button
        v-if="!isDrawn"
        :onclick="click"
        margin="0 auto"
        width="250px"
        height="50px"
      >
        <span>{{ $t('button.pick') }}</span>
      </v-button>
      <template v-if="isDrawn">
        <div class="block__bottomSns">
          <v-button-tweet
            :text="tweetText"
            :url="serviceLink"
            :hashtags="tweetHashtags"
          ></v-button-tweet>
          <v-button-facebook :url="serviceLink"></v-button-facebook>
        </div>
        <span class="block__refreshText" @click="refresh">
          {{ $t('quoteBox.again') }}
        </span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
type Data = {
  quote: string
  whose: string
  isDrawn: boolean
}

type Methods = {
  getQuote: () => Promise<any>
  click: () => Promise<any>
  refresh: () => void
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
      isDrawn: false,
    }
  },
  computed: {
    showQuote() {
      return this.quote
    },
    showWhose() {
      return this.whose
    },
    tweetText() {
      return `${this.quote} %7C ${this.$t('quoteBox.tweetTitle')}`
    },
    serviceLink() {
      return `${this.$config.serviceLink}${this.$i18n.locale}`
    },
    tweetHashtags() {
      return [this.$t('quoteBox.tweetHashtagFirst')]
    },
    titleFontFamily() {
      const fontFamily = this.$i18n.locale === 'en' ? 'caveat' : 'Sawarabi Mincho'
      return { fontFamily }
    },
  },
  methods: {
    getQuote(): Promise<any> {
      this.quote = ''
      this.whose = ''
      return new Promise((resolve) => {
        const params = {
          params: {
            lang: this.$i18n.locale || this.$i18n.defaultLocale,
          },
        }
        this.$axios
          .$get(this.$config.quoteServiceBaseURL, params)
          .then((data: any) => {
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
        this.isDrawn = true
        resolve(null)
      })
    },
    refresh(): void {
      this.isDrawn = false
    },
  },
})
</script>

<style scoped lang="scss">
.block__title {
  padding: $distance-md 0 $distance-md 0;
  text-align: center;
  font-size: $font-lg;
}
.block__bottom {
  margin-top: $distance-md;
}
.block__bottomSns {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.block__refreshText {
  display: block;
  margin-top: $distance-sm;
  font-size: $font-sm;
  text-align: center;
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
    display: block;
  }
  .quote__whose {
    display: block;
  }
  .quote__markTop {
    position: absolute;
    top: $distance-xs;
    left: $distance-xs;
  }
  .quote__quoteMsg {
    position: absolute;
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
@media screen and (min-width: 800px) {
  .quote {
    height: 400px;
  }
  .quote__text {
    margin: auto $distance-lg;
    color: $color-gray;
    font-size: $font-lg;
    display: block;
  }
  .quote__whose {
    margin: $distance-md $distance-lg;
    color: $color-gray;
    font-size: $font-md;
    display: block;
  }
  .quote__quoteMsg {
    top: $distance-xxl;
  }
  .block__bottomSns {
    padding: 0 $distance-xxl;
  }
}
@media screen and (max-width: 800px) {
  .quote {
    height: 180px;
  }
  .quote__text {
    margin: auto $distance-sm;
    color: $color-gray;
    font-size: $font-sm;
  }
  .quote__whose {
    margin: $distance-xs $distance-sm;
    color: $color-gray;
    font-size: $font-xs;
  }
  .quote__quoteMsg {
    top: $distance-lg;
  }
}
</style>
