import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import { DoctorLookup } from "../src/doctorlookup.js";

$(document).ready(function() {
    $("#lookup").click(function() {
      let query = $("#query").val();
      $("#query").val("");
      $("#results").html("");

      if ( (query !="" && query!=null) && (query !="" || query!=null) )  {
        let myDoctor = new DoctorLookup();
        let answers = myDoctor.getAnswers(query, displayResult, displayError);
      }
  });

  let displayResult = function(response){
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
      displayString += response.newPatients + "<br>";
      displayString +="<br>";
    }
    $("#results").append(displayString);
  }

  let displayError = function(error){
    $("#results").text("There was an error in your request! " + error.message);
  }

});
