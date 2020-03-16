import Vue from 'vue';
import VueResource from 'vue-resource';

Vue.use(VueResource);

export async function getWeatherInfo(cityId) {
    // TODO Create Env file
    const apiKey = '5c97dec5122c0098153b2e306fe538fa';
    try {
        const response = await Vue.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityId}&appid=${apiKey}&units=metric`);
        return cityWeatherDto(response.body);
    }catch (e) {
        console.error(e);
        throw undefined;
    }
}

function cityWeatherDto({id, name, sys:{country} , main:{temp, pressure, humidity}}) {
    const info = {
        id,
        name,
        country,
        temp,
        pressure,
        humidity,
        updatedAt: new Date()
    };
    return info
}