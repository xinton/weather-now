<template lang="html">
    <section class="main">
        <div class="row">
            <div class="column" v-for="city in cities" :key="city.id">
                <WeatherCardComponent :city="city"/>
            </div>
        </div>
    </section>
</template>

<script lang="js">
    import WeatherCardComponent from "../components/WeatherCard.vue";

    export default  {
        name: 'weather',
        components: {
            WeatherCardComponent,
        },
        props: [],
        mounted () {
        },
        data () {
            return {
                cities: [
                    {name: 'Nuuk', country: 'GL', id: 3421319},
                    {name: 'Urubici', country: 'BR', id: 3445709},
                    {name: 'Nairobi', country: 'KE', id: 184742}
                ],
            }
        }
    }

</script>

<style scoped lang="scss">
    @import '../assets/style';

    .main {
        position: relative;
        background-color: #f1f1f1;
        width: 70%;
        height:100vh;
        margin: 0;
        left: 15%;
    }

    .row {
        position: absolute;
        top: 25%;
        left: 20%;
        margin-top: 70px;
    }

    /* Horizontal column layout */
    .column {
        float: left;
        padding: 0 15px;
    }

    /* Vertical column layout */
    @media screen and (max-width: 800px) {
        .main {
            width: 100vw;
            height:100vh;
            left: 0;
        }

        .column {
            float: none;
            padding: 1.5em 2.5em 2em;
            display: block;
        }

        .row {
            top: 0;
            left: 0;
            width: 100%;
            background: $color-app-background;
        }
    }
</style>
