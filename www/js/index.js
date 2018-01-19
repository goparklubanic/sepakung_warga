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
			$('#LoginLog').append(
			"<p>NIK     :"+user.nik+"</p>"+
			"<p>Nama    :"+user.nama+"</p>"+
			"<p>L/P     :"+user.kelamin+"</p>"+
			"<p>Tg Lahir:"+user.tgLahir+"</p>"+
			"<p>RT      :"+user.rt+"</p>"+
			"<p>RW      :"+user.rw+"</p>"
			);
		});
		
		posting.fail(function(){
			$("#LoginLog").html('Error Tak Dikenal');
		});
	});
	
});
