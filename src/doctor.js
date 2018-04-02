export class Doctor {
// test = test + newPatients + "<br>" + name + "<br>" + street + "<br>" + city_state + "<br>" + phone +"<br><br>";
  constructor (name, street1, street2, city_state, phone, newPatients) {
    this.name = name;
    this.street1 = street1;
    this.street2 = street2;
    this.city_state = city_state;
    this.phone = phone;
    this.newPatients = newPatients;
  }

  //
  // makeDoctorHTML(crap) {
  //   HTMLString += name+"<BR>";
  //   HTMLString += street1+"<BR>";
  //   HTMLString += street2+"<BR>";
  //   HTMLString += city_state+"<BR>";
  //   HTMLString += phone+"<BR>";
  //   HTMLString += newPatients+"<BR>";
  //   return HTMLString;
  // }
  //
  // fixDoctor(){
  //   return doctorHTML;
  // }

}
