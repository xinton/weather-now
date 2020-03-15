<template lang="html">

  <section class="weather-card">
    <header class="card-header info-text" >
      <p class="dark-grey"> {{weatherInfo.name}}, {{weatherInfo.country}} </p>
    </header>
    <main>
      <component :is="currentComponent" v-bind="{weatherInfo: weatherInfo}"></component>
    </main>
    
  </section>

</template>

<script lang="js">

  import WeatherInfoComponent from "./WeatherInfo";
  import ErrorComponent from "./Error";
  import LoadingInfoComponent from "./Loading";
  import {getWeatherInfo} from "../services/api-weather-service";
  import {saveStorage, getLocalResource} from "../services/storage-service";

  const statusComponentEnum = {
    1 : WeatherInfoComponent,
    2 : ErrorComponent,
    3: LoadingInfoComponent
  };

  const statusEnum = {
    'SUCCESS': 1,
    'ERROR': 2,
    'LOADING': 3
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
      this.verifyLoadResources();
    },
    data () {
      return {
        weatherInfo: {},
        status: statusComponentEnum['ERROR']
      }
    },
    methods: {
      passedTenMinutes(dateToCompare){
        const tenMinutes = 10 * 60 * 1000;
        return new Date().getTime() > new Date(dateToCompare).getTime() + tenMinutes;
      },
      reloadOrLoad(resource){
        if(this.passedTenMinutes(resource.updatedAt)) {
          this.loadResources();
        } else {
          // Load from local storage
          this.weatherInfo = resource;
         this.status = statusEnum['SUCCESS'];
        }
      },
      verifyLoadResources() {
        const localResource = getLocalResource(this.cityId);
        if (localResource) {
          this.reloadOrLoad(localResource);
        } else {
          this.loadResources();
        }
      },
      async loadResources() {
        // TODO Create status Enum
        this.status = statusEnum['LOADING'];
        try {
          this.weatherInfo = await getWeatherInfo(this.cityId);
          saveStorage(this.weatherInfo, `weatherInfo${this.cityId}`);
          this.status = statusEnum['SUCCESS'];
        }catch (e) {
          console.error(e);
          this.status = statusEnum['ERROR'];
        }
      },
    },
    computed: {
      currentComponent() {
        return statusComponentEnum[this.status];
      },
      // TODO Only set props on WeatherInfoComponent
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
    border-bottom: 1px solid $color-divider;
  }

  @media screen and (max-width: 800px) {
    .weather-card {
      width: 100%;
    }
  }
</style>
