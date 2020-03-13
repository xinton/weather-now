export default async function getWeatherInfo(cityId, apiKey) {
    try {
        const response = await this.$http.get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}&units=metric`);
        return this.cityWeatherDto(response.body);
    } catch (e) {
        console.error(e);
        this.cardInfo = {status: 3};
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
        status: 1
    };
    return info
}