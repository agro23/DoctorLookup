
import $ from 'jquery';
export class DoctorLookup {
  constructor (city, lat = "45.512794", lon = "-122.679565") {
    this.city = city;
    this.lat = lat;
    this.lon = lon;
  }

  getAnswers(symptom, doctor, displayResult, displayError) {

    let url = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + symptom + "&location=45.512794,-122.679565,100&skip=0&limit=10&user_key="+process.env.exports.apiKey;
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
      // // let myResults = body.data[0].profile.first_name;
      let test ="";
      let newPatients = false;
      let name ="";
      let phone="";
      let street="";
      let city_state="";
      // for (var i = 0; i < 10; i++) {
      //   // if (body.data[i].length > 0) {
      //     // newPatients = body.data[i].practices[0].accepts_new_patients;
      //     // if (newPatients == true) {
      //     //   newPatients = "Accepting new patients";
      //     // } else {
      //     //   newPatients = "Not currently accepting new patients";
      //     // }
      //     // name = body.data[i].profile.first_name + " " + body.data[i].profile.last_name;
      //     // phone = body.data[i].practices[0].phones[0].number;
      //     console.log("got here" + body.data[i].practices[0].visit_address.city);
      //     // city_state = body.data[i].practices[0].visit_address.city + ' ' + body.data[i].practices[0].visit_address.state;
      //     // test = test + newPatients + "\n" + name + "\n" + street + "\n" + city_state + "\n" + phone ;
      //   // }
      //
      // }

      for (var i = 0; i < 10; i++) { // maybe a while loop or i length should be the number of matching results? How to know the end of results?

    	try {
    		newPatients = body.data[i].practices[0].accepts_new_patients;
          if (newPatients == true) {
  			    newPatients = "Accepting new patients";
            } else {
              newPatients = "Not currently accepting new patients";
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
          street = body.data[i].practices[0].visit_address.street;
          if (body.data[i].practices[0].visit_address.street2 !="" && body.data[i].practices[0].visit_address.street2 !=null) {street = street + "<br>" + body.data[i].practices[0].visit_address.street2; }
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

    	test = test + newPatients + "<br>" + name + "<br>" + street + "<br>" + city_state + "<br>" + phone +"<br><br>";

    }

      // for (var j = 0; j<10; j ++){
      //   console.log(body.data[j]);
      // }
      console.log(body.data[0]);
      // displayResult(body);
      displayResult(test);

    }, function(error) {
      displayError(error);
    });

  }
}
