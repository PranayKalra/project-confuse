var  firebaseConfig = {
  apiKey: "AIzaSyAJAohkk1WELXd8PkoWSYOkyTniH_PRQPg",
  authDomain: "lets-chat-web-app-projec-2e441.firebaseapp.com",
  databaseURL: "https://lets-chat-web-app-projec-2e441-default-rtdb.firebaseio.com",
  projectId: "lets-chat-web-app-projec-2e441",
  storageBucket: "lets-chat-web-app-projec-2e441.appspot.com",
  messagingSenderId: "222575231288",
  appId: "1:222575231288:web:b5a5f3ab3f072b308881cd"
};


firebaseConfig.initializeApp(firebaseConfig);





user_name = localStorage.getItem("user_name");
document.getElementById("username").innerHTML = "Welcome  " + user_name + "!";
function AddRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
      }
      
function getData() {
        firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        console.log("Room names " + Room_names);
        row = "<div class='room_name' id=" + Room_names + " onclick = 'redirecttoRoomName(this.id)'>#" + Room_names + "</div><hr>";
        document.getElementById("output").innerHTML += row;
  
  
  });});}
  getData();
  
  
  
  
  
  function redirecttoRoomName(name){
        console.log(name)
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
  
  
  
  
  
  }
  

function Logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
      window.location ="index.html"
}