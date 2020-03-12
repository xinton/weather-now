<template lang="html">

  <section class="error">
    <p class="error-msg"> Somethinh went wrong </p>

    <button class="btn-try-again">
      Try Again
    </button>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'error',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

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
  }

  .error-msg {
    color: #ED1946;
  }
</style>
