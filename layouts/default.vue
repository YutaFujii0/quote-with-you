<template>
  <div class="wrapper">
    <header>
      <div class="header">
        <div class="header__content">
          <span class="header__title">{{ $t('header.title') }}</span>
          <div class="header__lang">
            <nuxt-link :to="switchLocalePath('en')">EN</nuxt-link>
            <span> | </span>
            <nuxt-link :to="switchLocalePath('ja')">JA</nuxt-link>
          </div>
        </div>
        <div class="header__bar"></div>
      </div>
    </header>
    <div class="container">
      <Nuxt />
    </div>
    <footer>
      <div class="footer__pantoneColor">
        <span>13-0647 Illuminating</span>
        <span>17-5104 Ultimate Gray</span>
      </div>
      <div class="footer">
        <a
          href="https://twitter.com/__yutafujii__"
          target="_blank"
          class="footer__faSnsLink"
        >
          <fa :icon="['fab', 'twitter']" class="fa__link" />
        </a>
        <a href="https://github.com/YutaFujii0/quote-with-you" target="_blank">
          <div class="footer__faSnsLink">
            <fa :icon="['fab', 'github-square']" class="fa__link" />
            <span class="footer__faLinkText">client</span>
          </div>
        </a>
        <a
          href="https://github.com/YutaFujii0/serverless-quote-service"
          target="_blank"
        >
          <div class="footer__faSnsLink">
            <fa :icon="['fab', 'github-square']" class="fa__link" />
            <span class="footer__faLinkText">API</span>
          </div>
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
html {
  font-family: $font-mainFirst, $font-mainSecond, $font-mainThird, sans-serif;
  font-size: $font-md;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
a {
  text-decoration: none;
}
button {
  font-family: $font-mainFirst, $font-mainSecond, $font-mainThird, sans-serif;
  &:focus {
    outline: none;
  }
}
.wrapper {
  width: 100vw;
  height: 100vh;
  color: $color-white;
  background: linear-gradient(
    90deg,
    $color-mainYellow 50%,
    $color-mainGray 50%
  );
  > header {
    width: 100%;
    height: 70px;
  }
  > footer {
    width: 100%;
    height: 70px;
    background-color: none;
    bottom: 0;
    position: fixed;
    padding: 0 $distance-sm;
  }
  .header__content {
    display: flex;
    justify-content: space-between;
    padding: $distance-xs $distance-sm;
    height: 50px;
  }
  .header__title {
    // margin: 0 $distance-sm;
    // padding: $distance-xs 0;
  }
  .header__lang {
    a {
      text-decoration: none;
      color: $color-white;
      font-size: $font-sm;
    }
  }
  .header__bar {
    height: 2px;
    width: 70vw;
    background: $color-white;
    box-shadow: 0 0 10px $color-white;
  }
  .footer {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100%;
    align-items: center;
    max-width: $container-max-width;
    margin: 0 auto;
    text-align: right;
  }
  .fa__link {
    color: $color-white;
    &:hover {
      color: $color-lightGray;
    }
  }
  .footer__faSnsLink {
    text-align: center;
    margin: 0 $distance-xs;
  }
  .footer__faLinkText {
    display: block;
    text-decoration: none;
    color: $color-white;
    font-size: $font-xs;
    &:hover {
      color: $color-lightGray;
      text-decoration: none;
    }
  }
  .footer__pantoneColor {
    position: fixed;
    font-size: $font-sm;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-90deg);
    span {
      display: block;
    }
  }
}
</style>
