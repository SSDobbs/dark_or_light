import {
    initializeApp
} from "firebase/app";
import {
    getAnalytics
} from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCSyl_V_2vw2Af-ukYjc9Jk5Tup2RmHzwM",
    authDomain: "projectsw-41.firebaseapp.com",
    projectId: "projectsw-41",
    storageBucket: "projectsw-41.appspot.com",
    messagingSenderId: "833518015882",
    appId: "1:833518015882:web:90606db8b70c926d012473",
    measurementId: "G-06RK1XL0X6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
var messagesRef = firebase.database().ref('Checking');
document.getElementById(
    'contactForm').addEventListener('submit', submitForm);
//uploading file in storage
function uploadimage() {
    var type = getInputVal('types');
    var storage = firebase.storage();
    var file = document.getElementById("files ").files[0];
    var storageref = storage.ref();
    var thisref = storageref.child(type).child(file.name).put(file);
    thisref.on('state_changed', function (snapshot) {


    }, function (error) {

    }, function () {
        // Uploaded completed successfully, now we can get the download URL
        thisref.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            //getting url of image
            document.getElementById("url ").value = downloadURL;
            alert('uploaded successfully');
            saveMessage(downloadURL);
        });
    });

    // Get values
    var url = getInputVal('url');
    // Save message
    // saveMessage(url);
}

function getInputVal(id) {
    document.getElementById('contactForm').reset();

}


// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase database
function saveMessage(url) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        imageurl: url,
    });
}