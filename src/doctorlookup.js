
import $ from 'jquery';
export class DoctorLookup {
  constructor (city, lat = "45.512794", lon = "-122.679565") {
    this.city = city;
    this.lat = lat;
    this.lon = lon;
  }

    getAnswers(symptom, doctor, displayResult, displayError) {

      // console.log("symptom and doctor are: " + symptom, doctor);
      // console.log("city is: " + this.city);
      // return symptom + ":" + doctor;
      // let url = "http://api.openweathermap.org/data/2.5/weather?q=" + `${this.city}` + "&appid=" + process.env.exports.apiKey;
      let url = "https://api.betterdoctor.com/2016-03-01/doctors?location=45.512794,-122.679565,25&skip=0&limit=10&user_key="+process.env.exports.apiKey;
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
            // let body = JSON.parse(response);
            // // let temp = response.main.temp;
            // // let temp = body.main.temp;
            //
            // let myResults = body.Practice.accepts_new_patients;
            let answer = "no answer";
            let results = response[1].name;
            // accepts_new_patients;
            if (results == "" || results == null) { results = answer}
            displayResult(results);
            // displayResult(body.data["practices"]);
            // displayResult(response.Practice);


          }, function(error) {
            displayError(error);
          });


  }
}
