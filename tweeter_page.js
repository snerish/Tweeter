var firebaseConfig = {
  apiKey: "AIzaSyAC9ktn0vcPkK7w_NzJdzxJHUpn2TjpsAo",
  authDomain: "we-kweet-fea48.firebaseapp.com",
  projectId: "we-kweet-fea48",
  storageBucket: "we-kweet-fea48.appspot.com",
  messagingSenderId: "28088941586",
  appId: "1:28088941586:web:12113e9fdd952b728a6ccb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);





	user_name = localStorage.getItem("user_name");
	room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
   });

  document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}
