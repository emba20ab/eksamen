
class newUser {
    constructor(firstname, lastname, age, gender, interest) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.gender = gender;
        this.interest = interest;
       
    } 
} 

// Metode der udregner alder
    
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970); 
}
    var Jack = new User("Jack", "Sparrow", calculate_age(new Date(1969, 10, 01)), "male", "female");
    var Ryan  = new User("Ryan", "Gosling", calculate_age(new Date(1988, 11, 02)), "male", "female");

console.log(Jack, Ryan);


var personArray = [
        [Jack.name, calculate_age(new Date(1969, 10, 01)), Jack.gender, Jack.interest],
        [Ryan.name, calculate_age(new Date(1988, 11, 02)), Ryan.gender, Ryan.interest],
        
        
];

for(var i=0; i < personArray.length; i++)
{
    var newRow = document.getElementById("table").insertRow(table.length);
    for(var j =0; j < personArray[i].length; j++){
        var cell = newRow.insertCell(j);
        cell.innerHTML = personArray [i][j];
    }

}

