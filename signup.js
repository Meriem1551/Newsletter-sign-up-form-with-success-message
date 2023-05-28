let form=document.getElementById('email');
let Email=document.getElementById('EMAIL');
let containerDiv= document.getElementById("container");
let subscribedDiv=document.getElementById("subscribed");
 let DismissButton=document.getElementById("dismissButton")
let yourEmail=document.getElementById("defaultMessage");
let pattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
subscribedDiv.style.display="none";
subbutton.addEventListener('click',checkValidEmail);
function checkValidEmail(){
 if(!Email.value.match(pattern)){
    showError(Email,'valid email required');
 }
 else{
    subscribedDiv.style.display="block";
    containerDiv.style.display="none";
    putYourEmail(Email);
    DismissButton.addEventListener('click',returnToFirstPage);
 }
 }
 function showError(input,message){
    const YourEmail=input.parentElement;
    YourEmail.className='emailInput error';
    const errorMessage=YourEmail.querySelector('small');
    errorMessage.textContent=message;
 }
function putYourEmail(input){
   yourEmail.textContent=input.value;
}
 function returnToFirstPage(){
   subscribedDiv.style.display="none";
   containerDiv.style.display=" block";
 }
 