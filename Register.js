console.log("execution started");
for(let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.getItem(localStorage.key(i)));
}

let username = document.querySelector('#username');
let password = document.querySelector('#password');
let contact = document.querySelector('#contact');
let dob = document.querySelector('#dob');
let registerBtn = document.querySelector('#register-btn');

registerBtn.addEventListener('click', () => {
    if(username.value !== '' || password.value !== '') {
        localStorage.setItem('username', username.value);
        localStorage.setItem('password', password.value);
        localStorage.setItem('contact', contact.value);
        localStorage.setItem('dob', dob.value);
        alert("Registration successful!");
        window.open("./Login.html", "_self");
    }
    else {
        alert("Registration failed!");
    }
});

// const obj1 = {fname: "John", lname: "Doe"};
