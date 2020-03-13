<template lang="html">

  <section class="weather-card">
    <header class="header" >
      <p class="daker-grey"> City name </p>
    </header>
    <body>
      <component :is="cardInfoComponent"></component>
    </body>
    
  </section>

</template>

<script lang="js">

  import WeatherInfoComponent from "./WeatherInfo";
  import ErrorComponent from "./Error";
  import LoadingInfoComponent from "./LoadingInfo";

  const statusComponentEnum = {
    1: WeatherInfoComponent,
    2: ErrorComponent,
    3: LoadingInfoComponent
  };

  export default  {
    name: 'weatherCard',
    components: {
      WeatherInfoComponent,
      ErrorComponent,
    },
    props: {
      weatherInfo: Object,
    },
    mounted () {
    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {
      cardInfoComponent() {
        return statusComponentEnum[this.weatherInfo.status];
      }
    }
}


</script>

<style scoped lang="scss">
  @import "../assets/style";

  .weather-card {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 0.5em $box-shadow;
    height: 340px;
  }

  .header {
    padding: 5px;
    border-bottom: 1px solid $color-app-background;
  }
</style>
