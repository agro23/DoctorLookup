
import $ from 'jquery';
import { Doctor } from '../src/doctor.js';

export class DoctorLookup {
  constructor (lat = "45.512794", lon = "-122.679565") {
    // this.city = city;
    this.lat = lat;
    this.lon = lon;
  }

  getAnswers(query, displayResult, displayError) {
    // let urlSymptom = "https://api.betterdoctor.com/2016-03-01/conditions?query=" + symptom + "&location=45.512794,-122.679565,100&skip=0&limit=10&user_key="+process.env.exports.apiKey;
    // // console.log("urlSymptom = " + urlSymptom);
    // let urlDoctor = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + doctor + "&location=45.512794,-122.679565,100&skip=0&limit=10&user_key="+process.env.exports.apiKey;
    // the above is the doctor lookup
    // let url = "";
    // if (doctor =="" || doctor ==null || doctor ==undefined) {
    //   url = "https://api.betterdoctor.com/2016-03-01/conditions?query=" + symptom + "&location=45.512794,-122.679565,100&skip=0&limit=10&user_key="+process.env.exports.apiKey; // if there is no doctor filled in, look for a symptom. If there's no symptom also it was already ignored anyway
    // } else {
      let url = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + query + "&location=45.512794,-122.679565,100&skip=0&limit=10&user_key="+process.env.exports.apiKey;
    // }

    // let url = "https://api.betterdoctor.com/2016-03-01/doctors?query=" + symptom + "&location=45.512794,-122.679565,100&skip=0&limit=10&user_key="+process.env.exports.apiKey;


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
      let test ="";
      let doctorArray = [];
      // let tempDoctor = null;
      let newPatients = false;
      let name ="";
      let phone="";
      let street="";
      let street1 ="";
      let street2 ="";

      // need to get street 2 also.
      let city_state="";

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
        street1 = body.data[i].practices[0].visit_address.street;
        if (body.data[i].practices[0].visit_address.street2 !="" && body.data[i].practices[0].visit_address.street2 !=null) {
           street2 = body.data[i].practices[0].visit_address.street2;
        }

        street = body.data[i].practices[0].visit_address.street;
        if (body.data[i].practices[0].visit_address.street2 !="" && body.data[i].practices[0].visit_address.street2 !=null) { street = street + "<br>" + body.data[i].practices[0].visit_address.street2; }
        // should split this into two streets
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
      let news = ""; // // this only works if the string is full of boolean false's from no records and it means that any non-match with a record won't work
      // if (!newPatients) { news = ""; } else { news = newPatients; }
      test = test + newPatientsString + "<br>" + name + "<br>" + street + "<br>" + city_state + "<br>" + phone +"<br><br>"; // soon this won't be test but an object array.
       // doctorArray[i]
      // newDoctor.name = name;
      // newDoctor.street1 = street1;
      // newDoctor.street2 = street2;
      // newDoctor.city_state = city_state;
      // newDoctor.phone = phone;
      // newDoctor.newPatients = newPatients;

      // (name, street1, street2, city_state, phone, newPatients)
      // going to pass doctor array.
      var tempDoctor = new Doctor(name, street1, street2, city_state, phone, newPatients);
      console.log("Temp Doc name" + tempDoctor.name);
      if (name !=="" && name !==null && name !==undefined) {
        doctorArray.push(tempDoctor);
        // if (i > 0 && name === doctorArray[i-1].name) {
        //   doctorArray.pop();
        // }

      } // end of name if

    } // end loop
    for (var j = doctorArray.length-1; j > 0; j--){
      if (doctorArray[j-1].name === doctorArray[j].name) {
        doctorArray.pop();
      }
    }
    console.log(doctorArray);

    // console.log("test= "+ test);

    // this is all meaningless with an object array. We can instead see if the array is empty AND see if it has duplicate records!
    // I may have to override the equals command like with Testing though!

    let tester = 0;
    let empty = true;
    while (tester < test.length) {
      if (test[tester] !="<" && test[tester] !="b" && test[tester] !="r" && test[tester] !=">" && test[tester] !=" ")
        {
          empty = false;
          test = test + "<br><br> test.length = " + test.length;
          break;
        }
      tester++;
    }
    if (empty) { test = "There is no entry with that search criteria."; } // of course with an object array it's a question of empty entries

      // for (var j = 0; j<10; j ++){
      //   console.log(body.data[j]);
      // }
      // console.log(body.data[0]);
      // displayResult(test) is going to take the results of the query as the string 'test' and format it there.
      // I'd rather pass an array of objects, or the message that there was nothing to show (but how to tell that it is the message?)

      // for (var j = 0; j < doctorArray.length; i++) {
      //   console.log (doctorArray[i]);
      // }

      // displayResult(test);
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
