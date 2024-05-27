// Question No. 15
var guestList = ["Asiya", "Malaika", "Alishba", "Mahrukh", "Muntaha"];
var unableToAttend = "Alishba";
var replacementGuest = "Mehak";
var index = guestList.indexOf(unableToAttend);
if (index !== -1) {
    ;
    guestList[index] = replacementGuest;
}
for (var i = 0; i < guestList.length; i++) {
    console.log("Asalaam O Alikum Dear," + guestList[i] + "! You are cordially invited to dinner.");
}
