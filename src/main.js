import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Weather from "../src/weather-resource.js";
import { DoctorLookup } from "../src/doctorlookup.js";
// import './styles.css';

$(document).ready(function() {
    $("#lookup").click(function() {
      // let city = "Portland;"
      let query = $("#query").val();
      // let doctor = $('#doctor').val();
      // console.log(`symptom is: ${symptom} and doctor is: ${doctor}`);
      $("#query").val("");
      $("#results").html("");
      // $('#doctor').val("");

      if ( (query !="" && query!=null) && (query !="" || query!=null) )  {
        let myDoctor = new DoctorLookup();
        // let x = myDoctor.getAnswers(symptom, doctor, displayResult, displayError);
        // how am I differentiating between a symptom call versus doctor call?
        let answers = myDoctor.getAnswers(query, displayResult, displayError);
      }
  });

  let displayResult = function(response){
    // newTemp = Math.floor(newTemp);
    // $('.showHumidity').text(`The humidity is ${response.main.humidity}%`);
    // let displayString = `The temperature in Kelvins is ${response.main.temp}.`;
    // displayString += "<br>";
    // displayString += `The temperature in Farenheit is ${newTemp}`;
    // displayString += "&#8457;";
    // let displayString = response; // why am i doing this? Why not just response unhindered?

// I will process the response string here. ********************************************************

// let's hope that it comes in here as an array of doctors

/*
loop through the response string array
if it's not the first entry check to see if this current entry is a duplicate of the previous one and ignore it if it is
if all the entries are empty, the response will be "There are no entries matching your response."
otherwise show the compiled list of doctors as HTML
*/
    let displayString ="There are no results matching your query.";
    if (response !=="" && response !==null && response !==undefined && response !=="none"){
      displayString = response.name + "<br>" + response.street1 + "<br>";
      if (response.street2 !=="" && response.street2 !==null && response.street2 !==undefined) {
        displayString += response.street2 + "<br>";
      }
      displayString += response.city_state + "<br>" + response.phone + "<br>";
      if (response.website !=="" && response.website !==null && response.website !==undefined) {
        displayString += response.website + "<br>";
      }
      if (response.newPatients === true) {
        displayString +="They're accepting new paitents." + "<br>";
      } else {
        displayString +="They're not accepting new paitents." + "<br>";
      }
      displayString +="<br>";
    }
    $("#results").append(displayString);

    // $('.showTemp').html(`The temperature in Kelvins is ${response.main.temp}.`+"<br>");
    // $('.showTemp').append(`The temperature in Farenheit is ${newTemp}`");

  }

  let displayError = function(error){
    // $('.errors').text(error);
    $("#results").text("There was an error in your request! " + error.message);
  }

});
