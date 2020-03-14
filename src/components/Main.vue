<template lang="html">

  <section class="main">
      <div class="cards row">
<!--        <div class="column" >-->
<!--          <WeatherCardComponent :weatherInfo="cardInfo1"/>-->
<!--        </div>-->
        <div class="column" v-for="cityId in citiesIds" :key="cityId">
          <WeatherCardComponent :cityId="cityId"/>
        </div>
      </div>
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
    },
    data () {
      return {
        citiesIds: [3421319, 3445709, 184742],
        cardInfo1: {status: 1},
        cardInfo2: {status: 2},
        cardInfo3: {status: 3},
      }
    },
    methods: {

    },
    computed: {
    }
}

</script>

<style scoped lang="scss">
  .main {
      position: relative;
      background-color: #f1f1f1;
      width: 70%;
      height:100vh;
      margin: 0px;
      left: 15%;
  }

  .cards {
    position: absolute;
    top: 25%;
    left: 20%;
    background-color: yellowgreen;
  }

  /* Float four columns side by side */
  .column {
    float: left;
    /*width: 31%;*/
    padding: 0 15px;
  }

  /* Responsive columns - one column layout (vertical) on small screens */
  @media screen and (max-width: 800px) {
    .column {
      width: 100%;
      display: block;
      margin-bottom: 20px;
    }

    .cards {
        position: absolute;
        background-color: yellowgreen;
        top: 0%;
        left: 0%;
    }
  }
</style>
