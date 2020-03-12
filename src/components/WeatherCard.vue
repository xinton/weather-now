<template lang="html">

  <section class="weather-card">
    <header class="header" >
      <p class="daker-grey"> City name </p>
    </header>
    <body>
      <ErrorComponent />
    </body>
    
  </section>

</template>

<script lang="js">

  import WeatherInfoComponent from "./WeatherInfo";
  import ErrorComponent from "./Error";

  export default  {
    name: 'weatherCard',
    components: {
      // eslint-disable-next-line vue/no-unused-components
      WeatherInfoComponent,
      // eslint-disable-next-line vue/no-unused-components
      ErrorComponent,
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
  .weather-card {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 0.5em rgba(51,51,51,0.1);
    height: 340px;
  }

  .header {
    padding: 5px;
    border-bottom: 1px solid #f1f1f1;
  }
</style>
