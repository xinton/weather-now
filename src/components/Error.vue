<template lang="html">

  <section class="error">
    <p class="error-msg"> Something went wrong </p>

    <button class="btn-try-again" @click="tryAgain">
      Try Again
    </button>
  </section>

</template>

<script lang="js">
    // TODO try again buttob
  export default  {
    name: 'error',
    props: ['loadResources'],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {
      tryAgain() {
        this.loadResources();
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="scss">
  .error {
    margin-top: 20%;
  }

  .btn-try-again {
    border-radius: 30px;
    background-color: white;
    border: 2px solid black;
    padding: 15px;
    cursor: pointer;
  }

  .error-msg {
    color: #ED1946;
  }
</style>
