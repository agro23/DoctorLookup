import $ from 'jquery';
export class Weather {
  constructor (city) {
    this.city = city;
  }

  getWeather(displayResult, displayError) {

  // let url = "http://api.openweathermap.org/data/2.5/weather?q=" + `${this.city}` + "&appid=" + process.env.exports.apiKey;
  // let url = "`http://api.openweathermap.org/data/2.5/weather?q=" + `${city}` + "&appid=" + process.env.exports.apiKey+"`";
  // let temp = process.env.exports.apiKey;
  // let url = "http://api.openweathermap.org/data/2.5/weather?q=portland&appid=" + temp;

  // console.log("url = " + url);
  // console.log("temp = " + temp);
  // $.get(url).then(function(response){
  // let app = "85071d34e4085d1696790ab6d413e0cd";
  // let app = process.env.exports.apiKey;
  // $.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${app}`).then(function(response){
  // console.log("outer function this.city = " + this.city);
  let url = "http://api.openweathermap.org/data/2.5/weather?q=" + `${this.city}` + "&appid=" + process.env.exports.apiKey;

  let promise = new Promise(function(resolve, reject) {
        let request = new XMLHttpRequest();
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
            console.log("200 logged");
            console.log("request.response = " + request.response);
          } else {
            reject(Error(request.statusText));
            console.log("error logged");
          }
        }
        request.open("GET", url, true);
        request.send();
      });

      promise.then(function(response){
        let body = JSON.parse(response);
        // let temp = response.main.temp;
        let temp = body.main.temp;

        let newTemp = 9/5 * (temp - 273) + 32;
        // displayResult(response, newTemp);
        displayResult(body, newTemp);

      }, function(error) {
        displayError(error);
      });



    // $.get(url).then(function(response){
    //     // convert to Farenheit
    //     // 9/5 (K - 273) + 32
    //     let temp = response.main.temp;
    //     let newTemp = 9/5 * (temp - 273) + 32;
    //       displayResult(response, newTemp);
    //     }).fail(function(error) {
    //       displayError(error);
    //     });


  }

}
