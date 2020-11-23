
let username = document.getElementById("usernameid");
let firstname = document.getElementById("firstnameid");
let lastname = document.getElementById("lastnameid");
let age = document.getElementById("ageid");
let gender = document.getElementById("genderid");
let interest = document.getElementById("interestid");
let password1 = document.getElementById("passwordid");

function validate() {
var errormessage = ""; 

//error for username
    if (username.value == "") {
        errormessage += "box is empty \n";
    }
   
//error for first name
    if (firstname.value == "") {
        errormessage += "First name is empty\n"
    }
    
//error for last name
    if (lastname.value == "") {
        errormessage += "Last name is empty\n"
    }

//error for age
    if(age.value == "") {
    errormessage += "Skriv din alder i tal\n"
    }
//error for gender

    if(gender.value == "") {
        errormessage += "What is your gender?\n";
    }

//error for interest
    if(interest.value == "")
    errormessage += "Write your interest\n"

//error for password

    if (password1.value == "" || password1.value.length <6){
        errormessage += "Submit a password with at least 6 characters\n"
    }

//alert for errors

if (errormessage != ""){
    alert(errormessage)
}

else
		{
            let userdata = {
                username : username.value,
                password1 : password1.value,
                firstname : firstname.value,
                lastname : lastname.value,
                age : age.value, 
                gender : gender.value, 
                interest : interest.value
            }

            axios.post("http://localhost:5000/users", userdata)
            .then(function(response){
                console.log(response);
            })
         alert('Welcome');
        window.location = "login.html";
		}
}

const rememberDiv = document.querySelector('.husk');
const forgetDiv = document.querySelector('.glem');
const table = document.querySelector('table');
//Bruger # fordi det er et inputfelt. 
const nameInput = document.querySelector('#skrivnavn');
const submitBtn = document.querySelector('#submitnavn');
const forgetBtn = document.querySelector('#glemnavn');

const h1 = document.querySelector('h1')
const personalGreeting = document.querySelector('.personal-greeting')


table.addEventListener('submit', function(e){
    //Gør at submit ikke gør som den plejer, men at man selv kan definere hvad den skal gøre. 
    e.preventDefault();
});
//"Click" betyder at den skal reagere på et click. 
submitBtn.addEventListener('click', function(){
    localStorage.setItem('navn', nameInput.value);
    nameDisplayCheck()
})

forgetBtn.addEventListener('click', function(){
    localStorage.removeItem('navn')
    nameDisplayCheck()
})

function nameDisplayCheck() {
    if(localStorage.getItem('navn')){
        let name = localStorage.getItem('navn');
        h1.textContent = 'Velkommen ' + name;
        personalGreeting.textContent = 'Velkommen til vores hjemmeside ' + name;
        
        } else {
            h1.textContent = 'Velkommen ukendte person';
            personalGreeting.textContent = 'Hej person som jeg ikke kender endnu';
            
        }
    }
//Dette betyder at funtionen bliver kørt til sidst. 
document.body.onload = nameDisplayCheck