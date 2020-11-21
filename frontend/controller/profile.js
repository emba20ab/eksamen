//Lav eventlistener. 


function deleteuser() {
  
    axios.delete("http://localhost:5000/users/" + localStorage.getItem('loggedIn'))
    .then(function(response){
        console.log(response);
    })
  
}



/*var localStorage
for (var i = 0; i < localStorage.length; i++){
    {
    var newRow = document.getElementById("table").insertRow(table.length);
    $('body').append(localStorage.getItem(localStorage.key(i)));
    var cell = newRow.insertCell(j);
    cell.innerHTML = localStorage [i];
    }
}


/*const signUp = e => {
    let formData= {

username: document.getElementById('usernameid').value,
password: document.getElementById('passwordid').value,
lastname: document.getElementById('lastnameid').value,
age: document.getElementById('ageid').value,
gender: document.getElementById('genderid').value,
interest: document.getElementById('interestid').value,
}

localStorage.setItem('formData', JSON.stringify(formData));

disData();
e.preventDefault();
}

});
//"Click" betyder at den skal reagere på et click. 
submitBtn.addEventListener('click', function(){
    localStorage.setItem('username', usernameInput.value);
    localStorage.setItem('firstname', firstnameInput.value);
    localStorage.setItem('lastname', lastnameInput.value);
    localStorage.setItem('age', ageInput.value);
    localStorage.setItem('gender', genderInput.value);
    localStorage.setItem('interest', interestInput.value);
    localStorage.setItem('password', password1Input.value);
})

function nameDisplayCheck() {
    if(localStorage.getItem('firstname')){
        let firstname = localStorage.getItem('firstname');
        h1.textContent = 'Velkommen' + firstname;
        personalGreeting.textContent = 'Velkommen til vores hjemmeside ' + firstname;
}}

*/
