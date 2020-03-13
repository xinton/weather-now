<template lang="html">

  <section class="weather-info">
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
          <p class="grey"> pressure </p>
          <p> {{weatherInfo.pressure}} </p>
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
    name: 'weather-info',
    props: {
      weatherInfo: Object,
    },
    mounted () {
      console.log(this.weatherInfo)
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
  .weather-info {

  }

  .update-info {
    margin-top: 0em;
    padding-bottom: 5px;
    font-size: 0.8em;
  }

  .grey {
    color: #b4b4b4;
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
