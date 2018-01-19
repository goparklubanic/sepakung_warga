$(document).ready(function(){
	
	$.post(
		serviceUrl+'warga.php',
		{
			does : 'referlist',
			nik : localStorage.getItem('nik')
		},
		function(nomor){
			var data = JSON.parse(nomor);
			$.each(data,function(i,ref){
				console.log('ref',ref);
			});
			
			$("ul#reflist li").remove();
			$.each(data,function(i,ref){
				$("ul#reflist").append(
				"<li class='list-group-item' style='font-family:monospace;'>"+
				"<p><label class='reflist'>Tanggal</label>:<span>"+ref.tanggal+"</span></p>"+
				"<p><label class='reflist'>Keperluan</label>:<span>"+ref.keperluan+"</span></p>"+
				"<p><label class='reflist'>Status</label>:<span>"+ref.status+"</span></p>"+
				"</li>");
			});
			 
		});
	
	
	$('#backTomain').click(function(){
		window.location='index.html';
	});
	
});
