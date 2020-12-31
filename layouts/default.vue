<template>
  <div class="wrapper">
    <header>
      {{ $t('header.title') }}
    </header>
    <div class="container">
      <Nuxt />
    </div>
    <footer>
      <div class="footer__container">
        <a
          href="https://twitter.com/__yutafujii__"
          target="_blank"
          class="fa__snsLink"
        >
          <fa :icon="['fab', 'twitter']" class="fa__link" />
        </a>
        <a href="https://github.com/YutaFujii0/quote-with-you" target="_blank">
          <div class="fa__snsLink">
            <fa :icon="['fab', 'github-square']" class="fa__link" />
            <span class="fa__linkText">client</span>
          </div>
        </a>
        <a
          href="https://github.com/YutaFujii0/serverless-quote-service"
          target="_blank"
        >
          <div class="fa__snsLink">
            <fa :icon="['fab', 'github-square']" class="fa__link" />
            <span class="fa__linkText">API</span>
          </div>
        </a>
      </div>
    </footer>
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
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
    background-color: #fff;
  }
  > footer {
    width: 100%;
    height: 70px;
    background-color: none;
    bottom: 0;
    position: fixed;
  }
  .footer__container {
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
  .fa__snsLink {
    text-align: center;
    margin: 0 $distance-xs;
  }
  .fa__linkText {
    display: block;
    text-decoration: none;
    color: $color-white;
    font-size: $font-xs;
    &:hover {
      color: $color-lightGray;
      text-decoration: none;
    }
  }
}
</style>
