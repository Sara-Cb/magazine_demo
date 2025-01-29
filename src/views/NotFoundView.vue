<template>
  <section class="pageWrapper" id="pageNotFound">
    <h1 class="error-code">404</h1>
    <p class="error-message">Oops! The page you are looking for does not exist.</p>
    <router-link to="/" class="back-home">Back to Home</router-link>
  </section>
</template>

<style scoped lang="scss">
#pageNotFound {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  .error-code {
    font-size: 4rem;
    margin: 0 0 0.5rem;
    color: grey;
  }

  .error-message {
    font-size: 1.25rem;
    color: darken(grey, 10%);
    margin-bottom: 1.5rem;
  }

  .back-home {
    font-size: 1rem;
    color: red;
    text-decoration: underline;

    &:hover {
      color: darken(red, 10%);
    }
  }

  // Media query per schermi grandi
  @media (min-width: 1024px) {
    .error-code {
      font-size: 6rem;
    }
  }
}
</style>
