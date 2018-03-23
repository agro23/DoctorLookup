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
      let x = myDoctor.getAnswers(symptom, doctor);
      console.log("x = " + x);
  });
});
