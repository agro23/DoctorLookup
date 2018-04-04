import $ from 'jquery';
import { Doctor } from '../src/doctor.js';

export class DoctorLookup {
  constructor (lat = "45.512794", lon = "-122.679565") {
    this.lat = lat;
    this.lon = lon;
  }

  getAnswers(query, displayResult, displayError) {
    let url = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + query + "&location=45.512794,-122.679565,100&skip=0&limit=10&user_key="+process.env.exports.apiKey;

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
          // success
        } else {
          reject(Error(request.statusText));
          // error
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response){
      let body = JSON.parse(response);
      let newPatientsString = "";
      let doctorArray = [];
      let newPatients = false;
      let name ="";
      let street1 ="";
      let street2 ="";
      let city_state="";
      let phone="";
      let website =";"

      for (var i = 0; i < 10; i++) {

    	try {
    		newPatients = body.data[i].practices[0].accepts_new_patients;
          if (newPatients == true) {
  			    newPatientsString = "Currently accepting new patients";
            } else {
              newPatientsString = "Not currently accepting new patients";
            }
    	}
      catch (error){
    		console.error(error);
    	}

    	try {
    		name = body.data[i].profile.first_name + " " + body.data[i].profile.last_name;
    	}
    	catch (error){
    		console.error(error);
    	}

    	try {
    		phone = body.data[i].practices[0].phones[0].number;
        }
    	catch (error) {
    		console.error(error);
    	}

      try {
    		website = body.data[i].practices[0].website;
        console.log("Website: " + website);
        }
    	catch (error) {
    		console.error(error);
    	}

      try {
        street1 = body.data[i].practices[0].visit_address.street;
        if (body.data[i].practices[0].visit_address.street2 !="" && body.data[i].practices[0].visit_address.street2 !=null) {
           street2 = body.data[i].practices[0].visit_address.street2;
        }
      }
      catch (error) {
        console.error(error);
      }

    	try {
    	    city_state = body.data[i].practices[0].visit_address.city + ' ' +
    		body.data[i].practices[0].visit_address.state;
    	}
    	catch (error) {
    		console.error(error);
    	}

      var tempDoctor = new Doctor(name, street1, street2, city_state, phone, website, newPatientsString);
      if (name !=="" && name !==null && name !==undefined) {
        doctorArray.push(tempDoctor);
      }
    }
    for (var j = doctorArray.length-1; j > 0; j--){
      if (doctorArray[j-1].name === doctorArray[j].name) {
        doctorArray.pop();
      }
    }

      if (doctorArray.length > 0) {
        for (let j=0; j < doctorArray.length; j++) {
          displayResult(doctorArray[j]);
        }
      } else {
        displayResult("none");
      }

    }, function(error) {
      displayError(error);
    });

  }
}
