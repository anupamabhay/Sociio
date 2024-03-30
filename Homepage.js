
let registerBtn = document.querySelector('.registerBtn');
let loginBtn = document.querySelector('.loginBtn');

registerBtn.addEventListener('click', () => {
    window.open("./Register.html", "_self");
});

loginBtn.addEventListener('click', () => {
    window.open("./Login.html", "_self");
});