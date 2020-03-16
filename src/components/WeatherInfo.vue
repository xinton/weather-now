<template lang="html">

  <section class="weather-info">
    <main :class="temperatureColorClass" class="temperature">
    {{temperature}}
    </main>
    <footer class="footer">
      <div class="row">
        <div class='col'>
          <p class="tittle-text"> HUMIDITY </p>
          <p class="metric-info">{{this.weatherInfo.humidity}}</p>
          <p class="unit-info">%</p>
        </div>

        <div class='col'>
          <p class="tittle-text"> PRESSURE </p>
          <p class="metric-info">{{this.weatherInfo.pressure}}</p>
          <p class="unit-info">nPa</p>
        </div>
      </div>

      <div class="update-info">
        <p class="tittle-text"> <time>{{updatedAtString}}</time> </p>
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
        return `${Math.round(this.weatherInfo.temp)}°`;
      },
      temperatureColorClass() {
        const temp = this.weatherInfo.temp;
        return {
          'cold-color': temp < 5,
          'moderate-color': temp <= 25 && temp > 5,
          'hot-color': temp > 25
        }
      },
      updatedAtString() {
        const dateOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
        return `Updated at ${new Date(this.weatherInfo.updatedAt).toLocaleString("en-US", dateOptions)}`;
      }
    }
}


</script>

<style scoped lang="scss">
  @import "../assets/style";

  .update-info {
    width: 100%;
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

  .metric-info {
    display: inline;
    font-size: 1.3em;
    color: $color-dark-gray;
  }

  .unit-info {
    display: inline;
    color: $color-gray;
    font-size: small;
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
