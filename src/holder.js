// Guts of getAnswers(symptom, doctor)
// ======================================


// let url = "http://api.openweathermap.org/data/2.5/weather?q=" + `${this.city}` + "&appid=" + process.env.exports.apiKey;
// let url = "`http://api.openweathermap.org/data/2.5/weather?q=" + `${city}` + "&appid=" + process.env.exports.apiKey+"`";
// let temp = process.env.exports.apiKey;
// let url = "http://api.openweathermap.org/data/2.5/weather?q=portland&appid=" + temp;

// console.log("url = " + url);
// console.log("temp = " + temp);
// $.get(url).then(function(response){
// let app = "85071d34e4085d1696790ab6d413e0cd";
// let app = process.env.exports.apiKey;
// $.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${app}`).then(function(response){
// console.log("outer function this.city = " + this.city);
// let url = "http://api.openweathermap.org/data/2.5/weather?q=" + `${this.city}` + "&appid=" + process.env.exports.apiKey;
//
// let promise = new Promise(function(resolve, reject) {
//       let request = new XMLHttpRequest();
//       request.onload = function() {
//         if (this.status === 200) {
//           resolve(request.response);
//           console.log("200 logged");
//           console.log("request.response = " + request.response);
//         } else {
//           reject(Error(request.statusText));
//           console.log("error logged");
//         }
//       }
//       request.open("GET", url, true);
//       request.send();
//     });
//
//     promise.then(function(response){
//       let body = JSON.parse(response);
//       // let temp = response.main.temp;
//       let temp = body.main.temp;
//
//       let newTemp = 9/5 * (temp - 273) + 32;
//       // displayResult(response, newTemp);
//       displayResult(body, newTemp);
//
//     }, function(error) {
//       displayError(error);
//     });
//
//

  // $.get(url).then(function(response){
  //     // convert to Farenheit
  //     // 9/5 (K - 273) + 32
  //     let temp = response.main.temp;
  //     let newTemp = 9/5 * (temp - 273) + 32;
  //       displayResult(response, newTemp);
  //     }).fail(function(error) {
  //       displayError(error);
  //     });


// GUTS OF MAIN
// ============



// let displayResult = function(response, newTemp){
//   newTemp = Math.floor(newTemp);
//   $('.showHumidity').text(`The humidity is ${response.main.humidity}%`);
//   let displayString = `The temperature in Kelvins is ${response.main.temp}.`;
//   displayString += "<br>";
//   displayString += `The temperature in Farenheit is ${newTemp}`;
//   displayString += "&#8457;";
//   $('.showTemp').html(displayString);
//
//   // $('.showTemp').html(`The temperature in Kelvins is ${response.main.temp}.`+"<br>");
//   // $('.showTemp').append(`The temperature in Farenheit is ${newTemp}`");
//
// }
//
// let displayError = function(error){
//   // $('.errors').text(error);
//   $('.errors').text("There was an error in your request! " + error.message);
// }

// format
/*
Doctor_List {
meta (Metadata): Provides technical metadata about the API transaction (request), returned payload and/or error details. ,
data (Array[Doctor]): The payload, if the request was successful.
}
Metadata {
data_type (string): Indicates the payload data type; either a primitive, complex type or an array (list) of a type indicated by item_type. ,
item_type (string, optional): Indicates the item type for lists. ,
total (integer, optional): The total number of items in a full result set. ,
count (integer, optional): The number of items in the current result set page. ,
skip (integer, optional): The zero-based offset of the current result set page. ,
limit (integer, optional): The requested page size (number of list items). ,
fields_requested (string, optional): Comma-separated list of fields requested to be included in the output, with optional multi(level(nesting)). Default: 'all fields'. ,
ignored_query_parameters (Array[string], optional): List of submitted request query parameters that were ignored by the service, but did not prevent processing of the request.
}
Doctor {
practices (Array[Practice], optional): The practices that this doctor works at. ,
educations (Array[Education], optional): The educational degrees that the doctor holds. ,
profile (Profile): Personal profile information. ,
ratings (Array[Rating]): Aggregated user ratings from multiple sources. ,
insurances (Array[DoctorInsurancePlan], optional): The insurance plans and providers accepted by the doctor. ,
specialties (Array[Specialty]): A list of specialties. ,
hospital_affiliations (Array[HospitalAffiliation], optional): A list of hospitals that the doctor is known to have an affiliation with. ,
group_affiliations (Array[GroupAffiliation], optional): A list of industry groups that the doctor is known to have an affiliation with. ,
claims (Array[Claim], optional): Medicare claim statistics. ,
licenses (Array[License], optional),
uid (string): The unique identifier for this Doctor. ,
npi (string, optional): National Provider Identifier (NPI)
}
Practice {
location_slug (string, optional): Human-friendly location identifier; Can be used as the location parameter instead of lat, lon. ,
within_search_area (boolean, optional): True if location search criteria includes the location of this practice. ,
distance (number, optional): Distance (miles) between the practice and user location (if provided). ,
lat (number, optional): Latitude coordinate of this Practice's physical location. ,
lon (number, optional): Longitude coordinate of this Practice's physical location. ,
uid (string, optional): The unique identifier for this Practice. ,
npi (object, optional): National Provider Identifier (NPI). ,
tin (object, optional): Practice's Tax Identification Number. This attribute is restricted in use. Contact BetterDoctor if you need permission. ,
slug (string, optional): An human-readable identifier; used often in SEO optimized URLs, unique to each practice. ,
name (string, optional): The name of this practice. ,
website (object, optional): The URL of the practice's website. ,
email (object, optional): The email address of this practice. ,
******* description (object, optional): A compact description. ,
******* accepts_new_patients (boolean, optional): True indicates that the practice is accepting new patients. ,
image_urls (Array[string], optional): List of image URLs. ,
insurance_uids (Array[string], optional): List of insurance policy uids accepted at the practice. ,
visit_address (StreetAddress, optional): The street address of the practice's physical location. ,
office_hours (Array[string], optional): Describes time intervals during which the practice has office hours. ,
phones (Array[PhoneNumber], optional): A list of phone numbers to the practice. ,
languages (Array[Language], optional): List of languages spoken. ,
media (Array[Media], optional): Media asset URLs for the practice. ,
total_doctors (number, optional): Total number of doctors in this practice. ,
doctors_pagination_url (string, optional): Pagination URL for doctors inside of this practice ,
doctors (Array[PracticeDoctor], optional)
}
Education {
school (object, optional): Name of the school attended. ,
graduation_year (object, optional): Year of graduation (YYYY). ,
degree (string, optional): Name of the degree earned.
}
Profile {
******* first_name (string, optional): First name. ,
******* middle_name (object, optional): Middle name. ,
******* last_name (string, optional): Last name. ,
slug (string, optional): Human friendly handle; used as part of a BetterDoctor profile page URL. Unique string used as an SEO friendly id. ,
title (string, optional): The professional title. ,
image_url (string, optional): URL to the primary portrait image. ,
gender (string, optional): Gender specifier, 'male', 'female', 'other'. = ['male', 'female', 'other'],
languages (Array[Language], optional): List of languages spoken. ,
bio (string, optional): Curated or compiled biographical summary.
}
Rating {
active (boolean, optional): Specifies if this rating entry is considered current. ,
provider (string, optional): Specifies the data source for this rating entry. ,
provider_uid (string, optional): Unique identifier of the data source. ,
provider_url (string, optional): Attribution URL to the data provider. ,
rating (number, optional): A numeric (0-5) star rating. ,
review_count (integer, optional): The count of reviews that the rating is based on. ,
image_url_small (string, optional): URL to a visual 'star rating' representation. ,
image_url_small_2x (string, optional): URL to a visual 'star rating' representation (2x size). ,
image_url_large (string, optional): URL to a visual 'star rating' representation. ,
image_url_large_2x (string, optional): URL to a visual 'star rating' representation (2x size).
}
DoctorInsurancePlan {
insurance_plan (InsurancePlan, optional),
insurance_provider (InsuranceProviderBase, optional)
}
Specialty {
uid (string, optional): Unique identifer for the specialty. ,
******** name (string, optional): Name of the specialty. ,
description (object, optional): Human-readable description. ,
******** category (string, optional): Specified the branch of medicine that this specialty relates to. ,
actor (string, optional): English-language singular noun describing a practitioner of this specialty. ,
actors (string, optional): English-language plural noun describing practitioners of this specialty.
}
HospitalAffiliation {
uid (string, optional),
name (string, optional),
type (string, optional),
address (StreetAddress, optional),
phone (PhoneNumber, optional)
}
GroupAffiliation {
uid (string, optional),
name (string, optional),
type (string, optional),
address (StreetAddress, optional),
phone (PhoneNumber, optional)
}
Claim {
hcpcs (string, optional),
hcpcs_description (string, optional): The description of the operation type. ,
service_cnt (integer, optional): Number of operations performed. ,
bene_uniq_cnt (integer, optional): Number of unique patients treated. ,
avg_allowed_amt (number, optional): The contracted amount allowed. ,
avg_charge_amt (number, optional): The amount billed. ,
avg_payment_amt (number, optional): The amount paid.
}
License {
number (object): The official license number. ,
state (object): Two-letter state abbreviation of the state that issued the license. ,
end_date (object): Expiration date of the license (YYYY-MM-DD).
}
StreetAddress {
city (string, optional): City ,
lat (number, optional): Latitude coordinate of the street address. ,
lon (number, optional): Longitude coordinate of the street address. ,
slug (object, optional): An human-readable location identifier ,
state (string, optional): Two letter state abbreviation (e.g. 'CA'). ,
state_long (string, optional): Full name of the state (e.g. 'California'). ,
street (string, optional): Street address (1st line). ,
street2 (string, optional): Street address (2nd line). ,
zip (string, optional): Zip code
}
PhoneNumber {
number (string, optional): The 10-digit phone number, without separators or spaces. ,
type (string, optional): Describes the type of the number (mobile, landline, fax, etc.).
}
Language {
name (string, optional): English-language name of the language. ,
code (string, optional): ISO 639-1 language code.
}
Media {
uid (string, optional): Unique identifier for this media. ,
status (string, optional): Status of this media. Status can be either active or inactive. ,
url (string, optional): Default URL for this media. ,
tags (Array[string], optional),
versions (MediaVersion, optional): Different versions of this media.
}
PracticeDoctor {
educations (Array[Education], optional): The educational degrees that the doctor holds. ,
profile (Profile): Personal profile information. ,
ratings (Array[Rating], optional): Aggregated user ratings from multiple sources. ,
insurances (Array[DoctorInsurancePlan], optional): The insurance plans and providers accepted by the doctor. ,
*********  specialties (Array[Specialty]): A list of specialties. ,
hospital_affiliations (Array[HospitalAffiliation], optional): A list of hospitals that the doctor is known to have an affiliation with. ,
group_affiliations (Array[GroupAffiliation], optional): A list of industry groups that the doctor is known to have an affiliation with. ,
claims (Array[Claim], optional): Medicare claim statistics. ,
licenses (Array[License], optional),
uid (string): The unique identifier for this Doctor. ,
npi (string, optional): National Provider Identifier (NPI)
}
InsurancePlan {
uid (string, optional): Unique identifier for the insurance plan. ,
name (string, optional): Name of the insurance plan. ,
category (Array[string], optional): List of category descriptors.
}
InsuranceProviderBase {
uid (string, optional): Unique identifier for the insurance provider. ,
name (string, optional): Name of the insurance provider.
}
MediaVersion {
thumbnail (string, optional): The default URL. Very small thumbnail of the media. ,
thumbnail2x (string, optional): Larger thumbnail of the media. ,
small (string, optional): Small version of the media. ,
medium (string, optional): Medium version of the media. ,
large (string, optional): Large version of the media. ,
hero (string, optional): Largest version of the media.
}
*/
