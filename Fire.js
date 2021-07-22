import firebase from 'firebase';

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDtiksOOhKYAe2-JVj2BYFvcEBsXn-cJ9E",
    authDomain: "chatapp-14a4c.firebaseapp.com",
    projectId: "chatapp-14a4c",
    storageBucket: "chatapp-14a4c.appspot.com",
    messagingSenderId: "906512289400",
    appId: "1:906512289400:web:5072826bab4a1445b6678d"
  };
  // Initialize Firebase
  const Fire = firebase.initializeApp(firebaseConfig);

export default Fire;