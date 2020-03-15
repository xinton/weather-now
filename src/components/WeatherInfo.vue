<template lang="html">

  <section class="weather-info">
    <main :class="temperatureColorClass" class="temperature">
    {{temperature}}
    </main>
    <footer class="footer">
      <div class="row">
        <div class='col'>
          <p class="tittle-text"> HUMIDITY </p>
          <p> {{weatherInfo.humidity}} </p>
        </div>

        <div class='col'>
          <p class="tittle-text"> PRESSURE </p>
          <p class="info-text"> {{weatherInfo.pressure}} </p>
        </div>
      </div>

      <div>
        <p class="update-info tittle-text"> Updated at {{weatherInfo.updateAt}} </p>
      </div>
          
    </footer>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'weather-info',
    components: {},
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
      },
      temperatureColorClass() {
        const temp = this.weatherInfo.temp;
        return {
          'cold-color': temp < 5,
          'moderate-color': temp <= 25 && temp > 5,
          'hot-color': temp > 25
        }
      }
    }
}


</script>

<style scoped lang="scss">
  @import "../assets/style";

  .weather-info {

  }

  .update-info {
    margin-top: 0;
    padding-bottom: 5px;
    font-size: 0.8em;
  }

  .temperature {
    font-size: 8em;
  }

  .footer {
    background-color: $color-card-footer;
    height: 100%;
  }

  .row {
    display: flex;
  }

  .col {
    flex: 50%;
  }

  .cold-color {
    color: $color-blue;
  }

  .hot-color {
    color: $color-red;
  }

  .moderate-color {
    color: $color-orange;
  }
</style>
