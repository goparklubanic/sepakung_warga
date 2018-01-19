    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDvmTV7mIejMv3OANsoxjB4zhNUau8CjlE",
      authDomain: "nunukdemopushnotif.firebaseapp.com",
      databaseURL: "https://nunukdemopushnotif.firebaseio.com",
      projectId: "nunukdemopushnotif",
      storageBucket: "nunukdemopushnotif.appspot.com",
      messagingSenderId: "376367601132"
    };
    firebase.initializeApp(config);
    
    // retriefing data
    /*
    var ref = firebase.database().ref().child('sos');

	ref.on("value", function(snapshot) {
		console.log('sosData',snapshot.val());
	}, function (error) {
		console.log("Error: " + error.code);
	});
	*/
 
function sendFireSos(nik,lat,lon,tms){
	var sos = firebase.database.ref().child('sos');
	sos.set({
		lati : lat,
		long : lon,
		nik  : nik,
		tstp : tms
	});
}
