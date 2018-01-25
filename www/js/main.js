$(document).ready(function(){
  var nik = localStorage.getItem('nik');
  var nma = localStorage.getItem('nama');
  getPosition();

  // cek otorisasi
  isAuth(nik);
  $('#pengantar').click(function(){
    window.location='pengantar.html';
  });
  // set owner
  $('#own-nama').html(nma);
  $('#own-nike').html(nik);
  $('#ambulance').click(function(){
    window.location='ambulans.html';
  });
  
  $('#panic').click(function(){
	getPosition();
	
  });
  
  $(".logout").click(function(){
	localStorage.setItem('nik','');  
	localStorage.setItem('nama','');
	window.location='uauth.html';
  });
});

function isAuth(unik){
  if(unik == null || unik =='' ){
    window.location='uauth.html';
  }
}

function getPosition() {
   var options = {
      enableHighAccuracy: true,
      timeout : 10000,
      maximumAge: 3600000
   }
   var watchID = navigator.geolocation.getCurrentPosition(onSuccess, onError, options);

   function onSuccess(position) {
         
			localStorage.setItem('long', position.coords.longitude);
			localStorage.setItem('lati', position.coords.latitude);
			localStorage.setItem('tmst', position.timestamp);
         
   };

   function onError(error) {
      alert('code: '    + error.code    + '\n' + 'message: ' + error.message + '\n');
   }
   

}

