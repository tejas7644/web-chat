//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBLFEfSDtRAjalZM1tbapT4h6w6JgDxYLw",
      authDomain: "kwitter-2fc66.firebaseapp.com",
      databaseURL: "https://kwitter-2fc66-default-rtdb.firebaseio.com",
      projectId: "kwitter-2fc66",
      storageBucket: "kwitter-2fc66.appspot.com",
      messagingSenderId: "211265444984",
      appId: "1:211265444984:web:4904eadcc477d7b46ee18d"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");


function getData() {
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        console.log(firebase_message_id);
                        console.log(message_data);
                        name = message_data['name'];
                        like = message_data['message'];
                        like = message_data['like'];
                        name_with_tag = "<h4>" + name + "img class='user_tick' src='tick.png'></h4>";
                        mmessage_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                        like_button = "<button class='btn btn-warning' id=" + firebase_message_id + "value=" + like + " onclick='updateLike(this.id)'>";
                        span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Likes:" + Like + "</span></button></hr>";

                        row + name_with_tag + mmessage_with_tag + like_button + span_with_tag;
                        document.getElementById("output").innerHTML += row;

                        function updateLike(message_id) {
                              console.log("clicked on like button -" + message_id);
                              button_id= message_id;
                              likes= document.getElementById(button_id).value;
                              update_Likes= Number(likes) + 1;
                              comsole.log(updated_likes);

                              firebase.database().ref(room_name).child(message_id).update({
                                    Like : updated_likes

                              });
                        }

                        function send() {
                              msg = document.getElementById("msg").value;
                              firebase.database().ref(room_name).push({
                                    name: user_name,
                                    message: msg,
                                    like: 0
                              });

                              document.getElementById("msg").value = "";
                        }

                        function logout() {

                              localStorage.removeItem("user_name");
                              localStorage.removeItem("room_name");
                              window.location = "kwiter.html";
                        }


                  }
            });
      });
}
getData();
