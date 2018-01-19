$(document).ready(function(){
	$("#LoginLog").html('Bersiap Login');
	$( "#login-form" ).submit(function( event ) {
 
		// Stop form from submitting normally
		event.preventDefault();
 
		// Send the data using post
		var posting = $.post( serviceUrl+'warga.php', { 
			does  : 'kulanuwun',
			uname : $('#username').val(),
			upass : $('#password').val()
		} );
 
		// Put the results in a div
		posting.done(function( data ) {
			
			var user = JSON.parse(data);
			if(user.nik == null ){
				window.location='galo.html';
			}else{
			
				$("#LoginLog").html('Login Berhasil');
				localStorage.setItem('nik',user.nik);
				localStorage.setItem('nama',user.nama);
				localStorage.setItem('sex',user.kelamin);
				localStorage.setItem('lahir',user.tgLahir);
				localStorage.setItem('rtrw',user.rt + user.rw);
				window.location='./index.html';
			}
		});
		
		posting.fail(function(xhr, status, error){
			var ex = "<p>"+xhr.responseText+"</p>";
			var es = "<p>"+status+"</p>";
			var er = "<p>"+error+"</p>";
			var em = ex + es + er;
			$("#LoginLog").html(em);
		});
	});
	
});
