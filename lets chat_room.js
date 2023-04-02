var firebaseConfig = {
      apiKey: "AIzaSyBLFEfSDtRAjalZM1tbapT4h6w6JgDxYLw",
      authDomain: "kwitter-2fc66.firebaseapp.com",
      databaseURL: "https://kwitter-2fc66-default-rtdb.firebaseio.com",
      projectId: "kwitter-2fc66",
      storageBucket: "kwitter-2fc66.appspot.com",
      messagingSenderId: "211265444984",
      appId: "1:211265444984:web:4904eadcc477d7b46ee18d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");
function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room name -" + Room_names);
                  row = "<div class='room_name' id=" + Room_names + "onclick'redirectToRoomName(this.id) >#" + Room_names + " </div><hr>";
                  //Start code
                  function addRoom() {
                        Room_name = document.getElementById("room_name").value;
                        firebase.database().ref("/").child(room_name).update({
                        });

                        localStorage.setItem("room_name", room_name);
                        window.location = "kwitter_room.html";
                  }
                  

                  function redirectToRoomName(name) {
                        console.log(name);
                        localStorage.setItem("room_name", name);
                        window.location = "kwitter_page.html";
                  }

                  function logout() {

                        localStorage.removeItem("user_name");
                        localStorage.removeItem("room_name");
                        window.location = "kwiter.html";
                  }

            });
      });
}
getData();
