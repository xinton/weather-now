<template lang="html">

  <section class="weather-info">
    <body class="body">
    {{temperature}}
    </body>
    <footer class="footer">
      <div class="row">
        <div class='col'>
          <p class="grey"> HUMIDITY </p>
          <p> {{weatherInfo.humidity}} </p>
        </div>

        <div class='col'>
          <p class="grey"> PRESSURE </p>
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
      temperature() {
        return Math.round(this.weatherInfo.temp);
      }
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
