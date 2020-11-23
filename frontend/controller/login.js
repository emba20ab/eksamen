
//Lav eventlistener. 

let username2 = document.getElementById("usernameid2");
let password2 = document.getElementById("passwordid2");

//her skal bruges getElementById til at få fat i bruger input
function loginValidate() {
    let logindata = {
        username2 : username2.value,
        password2 : password2.value 
    }
    axios.post("http://localhost:5000/users/login", logindata)
                .then(function(response){
                    console.log(response);
                    localStorage.setItem('loggedIn', response.data.id);
                    localStorage.setItem('username', username2.value);
                    
                })

                .then(() => window.location = "profile.html");


}


/*axios.get("http://localhost:5000/users/login", displaydata)
.then(function(response){
    console.log(response);
    localStorage.getItem('loggedIn', response.data.id);
})*/
