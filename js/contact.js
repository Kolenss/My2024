var albion = document.getElementById('albion');
var about = document.getElementById('about');
var academic = document.getElementById('academic');
var hobby = document.getElementById('hobby');
var contact = document.getElementById('contact');
var cclogo = document.getElementById('cclogo');
var loginbtn = document.getElementById('loginbtn');
var signupbtn = document.getElementById('signupbtn');
var submit = document.getElementById('submitbtn');

var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var email = document.getElementById('email');
var concern = document.getElementById('concern');



cclogo.onclick = function(){
    window.location.href = "index.html";
}
about.onclick = function(){
    window.location.href = "aboutunfinish.html";
}
academic.onclick = function(){
    window.location.href = "ctu.html";
}
hobby.onclick = function(){
    window.location.href = "hobbyunfi.html";
}
contact.onclick = function(){
    window.location.href = "contact.html";
}
signupbtn.onclick = function () {
    window.location.href = "signup.html";
}
loginbtn.onclick = function () {
    window.location.href = "main.html";
}
submit.onclick = function(){
    alert("Feedback has been submitted, Thank you!");
    email.value = "";
    firstname.value = "";
    lastname.value = "";
    concern.value = "";

}




var facebook = document.getElementById('facebook');
var instagram = document.getElementById('instagram');
var twitter = document.getElementById('twitter');

facebook.onclick = function(){
    window.open("https://www.facebook.com/Chip.Collins.M/", "_blank");
}
instagram.onclick = function(){
    window.open("https://www.instagram.com/chip.maglasang/", "_blank");
}
twitter.onclick = function(){
    window.open("https://x.com/ChipMaglasang", "_blank");
}


