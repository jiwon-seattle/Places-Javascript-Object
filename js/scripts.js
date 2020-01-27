// //Business Logic for AddressBook -------------
// function AddressBook() {
//   this.contacts = [];
//   this.currentId = 0;
// }

// AddressBook.prototype.addContact = function(contact) {
//   contact.id = this.assignId();
//   this.contacts.push(contact);
// }

// AddressBook.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// AddressBook.prototype.findContact = function(id) {
//   for (var i=0; i < this.contacts.length; i++) {
//     if (this.contacts[i]) {
//       if (this.contacts[i].id == id) {
//         return this.contacts[i]
//       }
//     }
//   };
//   return false;
// }

// AddressBook.prototype.deleteContact = function(id) {
//   for (var i=0; i< this.contacts.length; i++) {
//     if (this.contacts[i]) { 
//       if (this.contacts[i].id == id) {
//         delete this.contacts[i];
//         return true;
//       }
//     }
//   };
//   return false;
// }


// User Interface
$(document).ready(function(){
  $("#seattle").click(function(){
    $("#seattleDetails").text("")
    $("#seattleDetails").append(seattle.details())
  })
  $("#korea").click(function(){
    $("#koreaDetails").text("")
    $("#koreaDetails").append(korea.details())
  })
  $("#newYork").click(function(){
    $("#newYorkDetails").text("")
    $("#newYorkDetails").append(newYork.details())
  })
})


//Business Logic for Place -------------
function Place(location, landmarks, time, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.time = time;
  this.notes = notes
}

Place.prototype.details = function() {
  return "Location: " + this.location + "<br>Landmarks: <br>" + this.landmarks.join("<br>") + "<br>Best time to visit: " + this.time + "<br>Notes: " + this.notes.join(", ");
}

var seattle = new Place("Washington State", ["Space Needle", "Pike Place Market", "Capitol Hill"], "Summer", ["Coffee", "Rain", "IT", "Liberal"])

var korea = new Place("East Asia", ["Seoul", "Busan"], "Spring", ["K-pop", "Night life", "Food"])

var newYork = new Place("USA", ["Empire State Building", "Central Park", "The Statue of Liberty"], "Fall", ["fashion", "Broadway"])
