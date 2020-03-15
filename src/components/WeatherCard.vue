<template lang="html">

  <section class="weather-card">
    <header class="card-header info-text" >
      <p class="daker-grey"> {{weatherInfo.name}}, {{weatherInfo.country}} </p>
    </header>
    <main>
      <component :is="currentComponent" v-bind="{weatherInfo: weatherInfo}"></component>
    </main>
    
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
      cityId: Number,
    },
    mounted () {
      this.loadResources();
    },
    data () {
      return {
        weatherInfo: {},
        status: 2
      }
    },
    methods: {
      async loadResources() {
        // TODO Create status Enum
        this.status = 3;
        // TODO Create Env file
        const apiKey = '5c97dec5122c0098153b2e306fe538fa';
        try {
          const response = await this.$http.get(`http://api.openweathermap.org/data/2.5/weather?id=${this.cityId}&appid=${apiKey}&units=metric`);
          this.status = 1;
          this.weatherInfo = this.cityWeatherDto(response.body);
          return this.cityWeatherDto(response.body);
        }catch (e) {
          console.log(e);
          this.status = 2;
        }
      },

      cityWeatherDto({id, name, sys:{country} , main:{temp, pressure, humidity}}) {
        const dateOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

        return  {
          id,
          name,
          country,
          temp,
          pressure,
          humidity,
          updateAt: new Date().toLocaleString("en-US", dateOptions)
        };
      }
    },
    computed: {
      currentComponent() {
        return statusComponentEnum[this.status];
      },
      // TODO Set props dinamically
      currentProperties() {
        if (this.currentComponent === 'WeatherInfoComponent') {
          return {weatherInfo: this.weatherInfo};
        }
        return {}
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
    height: 310px;
    width: 250px;
  }

  .card-header {
    padding: 5px;
    border-bottom: 1px solid $color-app-background;
  }

  @media screen and (max-width: 800px) {
    .weather-card {
      width: 100%;
    }
  }
</style>
