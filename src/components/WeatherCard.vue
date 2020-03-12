<template lang="html">

  <section class="weather-card">
    <header class="header" >
      <p class="daker-grey"> City name </p>
    </header>
    <body class="body">
      19
    </body>
    <footer class="footer">
      <div class="row">
        <div class='col'>
          <p class="grey"> Umidity </p>
          <p> 75% </p>
        </div>

        <div class='col'>
          <p class="grey"> pressura </p>
          <p> 928 </p>
        </div>
      </div>

      <div>
        <p class="update-info"> updated ate 02:04 </p>
      </div>
          
    </footer>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'weatherCard',
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
  .update-info {
    margin-top: 0em;
    padding-bottom: 5px;
    font-size: 0.8em;
  }

  .grey {
    color: #b4b4b4;
  }

  .weather-card {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 0.5em rgba(51,51,51,0.1);
  }

  .header {
    padding: 5px;
    border-bottom: 1px solid #f1f1f1;
  }

  .body {
    font-size: 8em;
  }

  .footer {
    background-color: #f1f1f1;
    opacity: 50%;
    height: 100%;
  }

  .row {
    display: flex;
  }

  .col {
    flex: 50%;
  }
</style>
