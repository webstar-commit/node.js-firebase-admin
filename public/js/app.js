    var config = {
    apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: "",
	appId: "",
	//measurementId: "G-584BGECY9S"
  };

    firebase.initializeApp(config);
    
    const messaging = firebase.messaging();
    messaging.requestPermission()
    .then(function () {
      
      console.log("Notification permission granted.");
      return messaging.getToken()
    })
    .then(function(token) {
        console.log(token);
    })
   .catch(function (err) {
      console.log("Unable to get permission to notify.", err);
    });


    messaging.onMessage(function(payload) {
        console.log("Message received. ", payload);
    
    });

    firebase.auth.Auth.Persistence.LOCAL; 

    
    $("#password").keydown(function (e) {
          if (e.keyCode == 13) 
          {
                var email = $("#email").val();
                var password = $("#password").val(); 

                var result = firebase.auth().signInWithEmailAndPassword(email, password);
            
                result.catch(function(error){
                    var errorCode = error.code; 
                    var errorMessage = error.message; 

                    console.log(errorCode);
                    console.log(errorMessage);
                });
          }
    });
    $("#btn-login").click(function(){
        
        var email = $("#email").val();
        var password = $("#password").val(); 

        var result = firebase.auth().signInWithEmailAndPassword(email, password);
    
        result.catch(function(error){
            var errorCode = error.code; 
            var errorMessage = error.message; 

            console.log(errorCode);
            console.log(errorMessage);
        });

    });

    $("#btn-logout").click(function(){
        firebase.auth().signOut();
    });

    function switchView(view){
        $.get({
            url:view,
            cache: false,  
        }).then(function(data){
            $("#container").html(data);
        });
    }