// Global Variables
var jsfileversion="0019";

function showMenuComponent(sect) {
var elements = document.getElementsByClassName("MenuComponent");

    for (var i = 0; i < elements.length; i++){
        elements[i].style.display = "none";
    }
var x = document.getElementById(sect);
x.style.display = "block";

var elements = document.getElementsByClassName("MenuButton");

    for (var i = 0; i < elements.length; i++){
        elements[i].style.textDecoration = "";
    }

var y = document.getElementById(sect + "Button");
y.style.textDecoration = "underline";

document.getElementById("JSSerNo").textContent="."+jsfileversion;
}

function formResponse(){
document.getElementById('form-response').style.display='inline';
document.getElementById('join-button').style.display='none';
}

function formSubmit(formid){

var form=document.getElementById(formid);
var namef=form.elements.fname.value;
var namel=form.elements.lname.value;
var addrfrom=form.elements.email.value;

if(document.getElementById("road").checked){var runtype="Road Running"}
if(document.getElementById("trail").checked){var runtype="Trail Running"}
if(document.getElementById("both").checked){var runtype="Road and Trail Running"}

emailjs.init("user_KA2KaFXQUejP5h83rWQcg");
emailjs.send("service_00lxi2c", "template_6szs6gt", {
from_name: namef + " " + namel,
reply_to: addrfrom,
message: "Preferred Running Type: " + runtype
}
);
}

