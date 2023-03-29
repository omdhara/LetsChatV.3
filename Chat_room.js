var firebaseConfig = {
    apiKey: "AIzaSyC8PGopkmL0s-wlfpoZP49yZfXSvzjNfSM",
    authDomain: "project-d4889.firebaseapp.com",
    databaseURL: "https://project-d4889-default-rtdb.firebaseio.com",
    projectId: "project-d4889",
    storageBucket: "project-d4889.appspot.com",
    messagingSenderId: "373033968037",
    appId: "1:373033968037:web:d1069c85dd7256d9ed084c"
  };
firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 //Start code
 console.log("Room Name - " + Room_names);
 row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names +"</div><hr>";
 document.getElementsById("output").innerHTML += row; 
 //End code
 });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "Kwitter_room.html";
}

function logout()
{
  localStorage.removeItem("userName");
  localStorage.removeItem("room_name");
  window.location = "index.html";

}

function send()
{
      msg = document.getElementById("Message_input").value;
      firebase.database().ref(room_name).push({

            name:user_name,
            message:msg,
            like:0

      });
}

room_name = localStorage.getItem("room_name");
document.getElementById("title_2").innerHTML = "Room Name: " + room_name;
