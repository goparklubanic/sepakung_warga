$(document).ready(function(){
  $('#login').click(function(){
	
    $.post(
      serviceUrl+'warga.php',{
        does  : 'kulanuwun',
        uname : $('#username').val(),
        upass : $('#password').val()
      },
      function(respon){
        console.log(respon);
        var user = JSON.parse(respon);
        $('#LoginLog').html(respon);
        /*
        if(user.nik == null ){
			window.location='galo.html';
		}else{
		$('#LoginLog').html(respon);
		/*
        $("#LoginLog").html('Login Berhasil');
        localStorage.setItem('nik',user.nik);
        localStorage.setItem('nama',user.nama);
        localStorage.setItem('sex',user.kelamin);
        localStorage.setItem('lahir',user.tgLahir);
        localStorage.setItem('rtrw',user.rt + user.rw);
        window.location='index.html';
		
		} */
      });
  });
});
