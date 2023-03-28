
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  function addRoom() {
                        Room_name = document.getElementById("room_name").value;
                        firebase.database().ref("/").child(room_name).update({
                        });

                        localStorage.setItem("room_name", room_name);
                        window.location = "kwitter_room.html";
                  }
                  console.log("Room name -"+ Room_names);
                  row = "<div class='room_name' id="+Room_names+"onclick'redirectToRoomName(this.id) >#"+ Room_names +" </div><hr>";

                  function redirectToRoomName(name)
                  {
                        console.log(name);
                        localStorage.setItem("room_name", name);
                        window.location = "kwitter_page.html";
                  }
                  //End code
            });
      });
}
getData();
