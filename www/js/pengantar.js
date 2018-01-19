$(document).ready(function(){
	
	$.post(
		serviceUrl+'warga.php',
		{
			does : 'nomoreq'
		},
		function(nomor){
			$("#request_id").val(nomor);
		}
	);
	
	$('#kirim').click(function(){
		$.post(
			serviceUrl+'warga.php',
			{
				does  : 'refreq',
				nomor : $('#request_id').val(),
				nonik : localStorage.getItem('nik'),
				perlu : $('#keperluan').val()
			},
			function(reqStatus){
				$("#request-status").html(reqStatus);
			}
		);
		
		$("#request_id").val('');
		$("#keperluan").val('');
		$("#kirim").hide();
		
	});
	
	$("#cekPengantar").click(function(){
		window.location='pengantar-dft.html';
	});
	
	$('#backTomain').click(function(){
		window.location='index.html';
	});
	
});
