
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBm0ibXFE51K1VOju3gkPOfgNxXm3WuOxA",
    authDomain: "tweeter-7efdb.firebaseapp.com",
    projectId: "tweeter-7efdb",
    storageBucket: "tweeter-7efdb.appspot.com",
    messagingSenderId: "207659002971",
    appId: "1:207659002971:web:658c68639ea784306fa37e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const firebaseConfig = {
    apiKey: "AIzaSyBm0ibXFE51K1VOju3gkPOfgNxXm3WuOxA",
    authDomain: "tweeter-7efdb.firebaseapp.com",
    databaseURL: "https://tweeter-7efdb-default-rtdb.firebaseio.com",
    projectId: "tweeter-7efdb",
    storageBucket: "tweeter-7efdb.appspot.com",
    messagingSenderId: "207659002971",
    appId: "1:207659002971:web:658c68639ea784306fa37e"
  };



  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "tweeter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
