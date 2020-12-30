<template>
  <div class="wrapper">
    <header>
      {{ $t('header.title') }}
    </header>
    <div class="container">
      <Nuxt />
    </div>
    <footer>Created by {{ $t('creator') }}</footer>
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
    background-color: #ccc;
    bottom: 0;
    position: fixed;
  }
}
</style>
