function validation(){
var num = document.getElementById("number").value;
var num2 = num.replace(/\D/g, '');
if(num2.length != 10){
    alert("Please enter 10 digits");
    return false;
}
if(num2.charAt(0)==='0' || num2.charAt(0)==='1'){
    alert("please enter a valid number");
    return false;
}
alert("Phone number is valid");
return true;
}
function mnc(){
var mnc = document.getElementById("MNC");
var comp = document.getElementById("Comp_name");
var emp_id = document.getElementById("emp_id");
var emp_proof = document.getElementById("comp_proof");
if(mnc.value=="MNC"){
    comp.disabled = false;
    emp_id.disabled = false;
    emp_proof = false;
}
}
function terms(){
    var term = document.getElementById("term");
    var submit = document.getElementById("submit_btn");
    if(term.value=="Accepted"){
        submit.disabled= false;
    }
}
let img = document.getElementById("img");
    let doc = document.getElementById("upload");
    doc.onchange = function(){
        img.src = URL.createObjectURL(doc.files[0]);
    }
