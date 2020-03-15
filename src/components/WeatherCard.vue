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
  import LoadingInfoComponent from "./LoadingInfo";
  import {getWeatherInfo} from "../services/api-weather-service";
  import {saveStorage, getLocalResource} from "../services/storage-service";

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
      this.verifyLoadResources();
    },
    data () {
      return {
        weatherInfo: {},
        status: 2
      }
    },
    methods: {
      passedTenMinutes(dateToCompare){
        const now = new Date();
        dateToCompare = new Date(dateToCompare);
        const tenMinutes = 10 * 60 * 1000;
        return now.getTime() > dateToCompare.getTime() + tenMinutes;
      },
      reloadOrLoad(resource){
        if(this.passedTenMinutes(resource.updatedAt)) {
          this.loadResources();
        } else {
          // Load from local storage
          this.weatherInfo = resource;
         this.status = 1;
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
        this.status = 3;
        try {
          this.weatherInfo = await getWeatherInfo(this.cityId);
          saveStorage(this.weatherInfo, `weatherInfo${this.cityId}`);
          this.status = 1;
        }catch (e) {
          console.error(e);
          this.status = 2;
        }
      },
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
    border-bottom: 1px solid $color-divider;
  }

  @media screen and (max-width: 800px) {
    .weather-card {
      width: 100%;
    }
  }
</style>
