
import $ from 'jquery';
export class DoctorLookup {
  constructor (city) {
    this.city = city;
  }

    getAnswers(symptom, doctor) {

      console.log("symptom and doctor are: " + symptom, doctor);
      console.log("city is: " + this.city);
      return symptom + ":" + doctor;

  }
}
