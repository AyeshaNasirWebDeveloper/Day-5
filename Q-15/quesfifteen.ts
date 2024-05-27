// Question No. 15

let guestList : string[] = ["Asiya", "Malaika", "Alishba", "Mahrukh", "Muntaha"];

const unableToAttend:string = "Alishba";
const replacementGuest:string = "Mehak";

const index = guestList.indexOf(unableToAttend);

if(index !== -1){;
    guestList[index] = replacementGuest;
}

for(let i = 0; i < guestList.length; i++){
    console.log("Asalaam O Alikum Dear," + guestList[i] + "! You are cordially invited to dinner.");
}