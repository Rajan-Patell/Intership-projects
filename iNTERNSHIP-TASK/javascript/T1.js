function internalalert(){
  alert("Valid Click");
}
function internalconfrim()
{
  if(confirm("Are you sure..?")){
      alert("Yes");
  }
  else{
      alert("Nooo");
  }
}

function internalprompt(){
var fname=prompt("Enter first name");
var lname=prompt("Enter last name");
var f1name=prompt("Enter Father's name");
alert(fname+" "+lname+" "+f1name);
}

function bodycolorchange(){
document.body.style.backgroundColor="teal";
}
function divcolorchange(){
document.getElementById("s1").style.backgroundColor="orange";
}
function colorpicker(){
document.getElementById('colorpicker').style.backgroundColor=document.getElementById('colorPicker').value;


}
function divcolorpicker(){
document.getElementById('s1').style.backgroundColor=document.getElementById('divcolorchange').value;



}