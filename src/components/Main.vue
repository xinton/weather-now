<template lang="html">

  <section class="main">
    <header>
      <figure>
        <img class="img" alt="Weather Now logo" src="../assets/logo.svg">
      </figure>      
    </header>

    <main class="main-container">
      <div class="cards row">
<!--        <div class="column" >-->
<!--          <WeatherCardComponent :weatherInfo="cardInfo1"/>-->
<!--        </div>-->
        <div class="column" v-for="weatherInfo in weatherInfoList" :key="weatherInfo.id">
          <WeatherCardComponent :weatherInfo="weatherInfo"/>
        </div>
      </div>
    </main>
  </section>

</template>

<script lang="js">
  import WeatherCardComponent from "./WeatherCard.vue";

  export default  {
    name: 'main',
    components: {
      WeatherCardComponent,
    },
    props: [],
    mounted () {
      this.loadResources();
    },
    data () {
      return {
        cardInfo1: {status: 1},
        cardInfo2: {status: 2},
        cardInfo3: {status: 3},
      }
    },
    methods: {
      async getWeatherInfo(cityId, apiKey) {
        try {
          const response = await this.$http.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`);
          return this.cityWeatherDto(response.body);
        } catch (e) {
          console.error(e);
          this.cardInfo = {status: 3};
        }
      },

      async loadResources() {
        const apiKey = '5c97dec5122c0098153b2e306fe538fa';
        const citiesIds = [3421319, 3445709, 184742];

        const citiesList = citiesIds.map(async cityId => {
          // await this.getWeatherInfo(cityId, apiKey);
          const response = await this.$http.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`);
          return this.cityWeatherDto(response.body);
        });

        return await Promise.all(citiesList);
      },

      cityWeatherDto({id, name, sys:{country} , main:{temp, pressure, humidity}}) {
        const info = {
          id,
          name,
          country,
          temp,
          pressure,
          humidity,
          status: 1
        };
        return info
      }
    },
    computed: {
      weatherInfoList() {
        return this.loadResources();
      }
    }
}

</script>

<style scoped lang="scss">
  .main {

  }

  .cards {
    position: absolute;
    top: 25%;
    left: 15%;
    right: 15%;
    background-color: yellowgreen;
  }

  .img {
    height: 50px;
  }

  .main-container {
    background-color: #f1f1f1;
    width: 100%;
    height: 800px;
    position: relative;
  }

  /* Float four columns side by side */
  .column {
    float: left;
    width: 31%;
    padding: 0 15px;
  }

  /* Responsive columns - one column layout (vertical) on small screens */
  @media screen and (max-width: 800px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }
  }
</style>
