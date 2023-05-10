

var firebaseConfig = {
 apiKey: "AIzaSyAJEz-Z2XRVA-0ntX3deYxWC9lRmfMzbHM",
  authDomain: "methodical-tea-383407.firebaseapp.com",
  databaseURL: "https://methodical-tea-383407-default-rtdb.firebaseio.com",
  projectId: "methodical-tea-383407",
  storageBucket: "methodical-tea-383407.appspot.com",
  messagingSenderId: "648544396016",
  appId: "1:648544396016:web:a86862add7aafb79a79835",
  measurementId: "G-K2H02RJK3R"
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";


function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot)
 { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
 { childKey  = childSnapshot.key;
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
