import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Weather from "../src/weather-resource.js";
import { DoctorLookup } from "../src/doctorlookup.js";
// import './styles.css';

$(document).ready(function() {
    $("#lookup").click(function() {
      let city = "Portland;"
      let symptom = $('#symptom').val();
      let doctor = $('#doctor').val();
      $('#symptom').val("");
      $('#doctor').val("");
      let myDoctor = new DoctorLookup(city);
      let x = myDoctor.getAnswers(symptom, doctor, displayResult, displayError);
      // console.log("x = " + x);
      // myDoctor.city= "Seattle";
      // console.log("new city = " + myDoctor.city);
  });

  let displayResult = function(response){
    // newTemp = Math.floor(newTemp);
    // $('.showHumidity').text(`The humidity is ${response.main.humidity}%`);
    // let displayString = `The temperature in Kelvins is ${response.main.temp}.`;
    // displayString += "<br>";
    // displayString += `The temperature in Farenheit is ${newTemp}`;
    // displayString += "&#8457;";
    let displayString = response;
    $("#results").text(displayString);

    // $('.showTemp').html(`The temperature in Kelvins is ${response.main.temp}.`+"<br>");
    // $('.showTemp').append(`The temperature in Farenheit is ${newTemp}`");

  }

  let displayError = function(error){
    // $('.errors').text(error);
    $("#results").text("There was an error in your request! " + error.message);
  }

});
