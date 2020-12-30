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
        <span class="quote__text">{{ quote }}</span>
        <span class="quote__whose">{{ whose }}</span>
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
export default {
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
    }
  },
  methods: {
    handleClick() {
      this.$axios
        .$get(this.$root.context.$config.quoteServiceBaseURL)
        .then((data: any) => {
          this.quote = data.quote[0].quote
          this.whose = data.quote[0].whose
        })
    },
    click() {
      return new Promise((resolve) => {
        this.handleClick()
        resolve(null)
      })
    },
  },
}
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
    margin: auto $distance-lg;
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
</style>
