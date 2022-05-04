
var names = ["Jon Snow", "Cersei Lannister", "Daenerys Targaryen", "Theon Greyjoy", "Tyrion Lannister", "Arya Stark"];
console.log(names[0] + ", " + names[names.length -1]);
var number = parseInt(prompt("Įveskite skaičių nuo 1 iki 6"));
if(number <=6 && number >0){
    console.log("Vardas: " + names[ number - 1]);
}



