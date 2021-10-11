
    var firebaseConfig = { 
          apiKey: "AIzaSyBQyjrjTsIQsGMGcgu-cr1HjszcHi5ZWMk", 
          authDomain: "testkwitter.firebaseapp.com", 
          databaseURL: "https://testkwitter.firebaseio.com", 
          projectId: "testkwitter", 
          storageBucket: "testkwitter.appspot.com", 
          messagingSenderId: "624653701634", 
          appId: "1:624653701634:web:2cb9a8bd873f17d92d8d1b" 
      }; 
          
          firebase.initializeApp(firebaseConfig);

    go_around = localStorage.getItem("jhonny_user");

    document.getElementById("youcanalways_goaround").innerHTML = "Welcome " + go_around;

    function addJhonny(){
         var jhoonny_romming_around = document.getElementById("jhonny_logs_in").value;
         firebase.database().ref("/").child(jhoonny_romming_aroun).update({
               purpose : "adding user"
         });
    }

function jhonnyadds(){
      var jhonny_has_a_name= document.getElementById("jhonny_is_the_input").value;

      firebase.database().ref("/").child(jhonny_has_a_name).update({
            purpose : "adding a jhoony like room"
      });

      localStorage.setItem("jhonny_has_a_name", jhonny_has_a_name);

      window.location = "kwitter_page.html";
}

    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("out").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Roomie"+ jhonny_has_a_name);
       row = "<div class='jhonny_trends_on_yt' id="+Room_names+" onclick='rederectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
       document.getElementById("out").innerHTML += row
      });});}
getData();

function logout_jhonny(){
      window.location = "index.html";
}