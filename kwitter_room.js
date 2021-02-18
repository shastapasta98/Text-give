// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAd571Htw_VoEP_VHA7_x44180L8krz7ks",
      authDomain: "kwitter-524dd.firebaseapp.com",
      databaseURL: "https://kwitter-524dd-default-rtdb.firebaseio.com",
      projectId: "kwitter-524dd",
      storageBucket: "kwitter-524dd.appspot.com",
      messagingSenderId: "457030176126",
      appId: "1:457030176126:web:d50535f1cf8ace9dfef72f"
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
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
    
}