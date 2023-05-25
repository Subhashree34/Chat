
var firebaseConfig = {
    apiKey: "AIzaSyB6jp_Z0w1RPj750uYFWCDAjuDiaQHc_9Y",
    authDomain: "kwitter-fcd3d.firebaseapp.com",
    databaseURL: "https://kwitter-fcd3d-default-rtdb.firebaseio.com",
    projectId: "kwitter-fcd3d",
    storageBucket: "kwitter-fcd3d.appspot.com",
    messagingSenderId: "989213960451",
    appId: "1:989213960451:web:8d8348fd65a92aa521a136"
  };
  
  // Initialize Firebase
  var app = initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
