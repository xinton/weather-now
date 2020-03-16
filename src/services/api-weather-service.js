import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export async function getWeatherInfo(cityId) {
    try {
        const response = await Vue.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${process.env.VUE_APP_API_KEY}&units=metric`);
        return cityWeatherDto(response.body);
    }catch (e) {
        console.error(e);
        throw undefined;
    }
}

function cityWeatherDto({id, name, sys:{country} , main:{temp, pressure, humidity}}) {
    return  {
        id,
        name,
        country,
        temp,
        pressure,
        humidity,
        updatedAt: new Date()
    };
}