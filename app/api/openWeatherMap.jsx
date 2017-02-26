var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=38cb82abc0fcc4ec4b8241e49799233f&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(
      (res) => {
        if (res.data.cod && res.data.message) {
          console.log('an error occured');
          throw new Error(res.data.message);
        } else {
          return res.data.main.temp;
        }
      },
      (res) => {
        throw new Error(res.data.message);
      }
    );
  }
};
