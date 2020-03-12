<template lang="html">

  <section class="main">
    <header>
      <figure>
        <img class="img" alt="Weather Now logo" src="../assets/logo.svg">
      </figure>      
    </header>

    <main class="main-container">
      <div class="cards row">
        <div class="column">
          <WeatherCardComponent />
        </div>
        <div class="column">
          <WeatherCardComponent />
        </div>
        <div class="column">
          <WeatherCardComponent />
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
