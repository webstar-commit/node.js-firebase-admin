importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.7.0/firebase-messaging.js');


  
  firebase.initializeApp({
    apiKey: "AIzaSyBQ-EW0vCyB63N3VN70cWEfEL8Hs39xN14",
    authDomain: "abac-fdef3.firebaseapp.com",
    databaseURL: "https://abac-fdef3.firebaseio.com",
    projectId: "abac-fdef3",
    storageBucket: "abac-fdef3.appspot.com",
    messagingSenderId: "449151087496",
    appId: "1:449151087496:web:aee8bd6b4bc2f814e3003d"
	});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/itwonders-web-logo.png'
  };

  return self.registration.showNotification(notificationTitle,
      notificationOptions);
});