const axios = require('axios')

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=7b2aa93e13363ef679e6e8f9c6e55353&units=metric"

module.exports = {
	getTemp: function (location) {
		var encodedLocation = encodeURIComponent(location)
		var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function (res) {
			if (res.data.cod && res.data.message) {
				console.log(res.data.cod)
				console.log(res.data.message)
				throw new Error(res.data.message);
			} else {
				console.log(res.data)
				return res.data.main.temp;
			}
		}, function (res) {
			throw new Error(res.data.message);
		})
	}
}