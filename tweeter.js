
function addUser() {
  user_name = document.getElementById("user_name").value;
  if (document.getElementById('user_name').value == ""){
    alert("Enter Your Username");
    document.getElementById('user_name').style.borderColor = "red";
}
else{
  

  localStorage.setItem("user_name", user_name);
  
  window.location = "tweeter_room.html";
}

  


}

