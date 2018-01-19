$(document).ready(function(){
  $('#backTomain').click(function(){
    window.location='index.html';
  });
  
/*  $("input[type='submit']").click(function(){ */
  /*
  $('form').submit(function(){ 
	
	var jp_rumah = $("#jp_rumah").val();
	var jp_rt_rw = $("#jp_rt").val()+"/"+$("#jp_rw").val();
	var t4tujuan = $("#tujuan").val();
	var nik = localStorage.getItem('nik');
	
	$.post(
		serviceUrl+'warga.php',
		{
			does  : 'ambulance',
			nonik : nik,
			rumah : jp_rumah,
			rt_rw : jp_rt_rw,
			tjuan : t4tujuan
		},
		function(){
		alert('Permintaan telah dikirim');
	});
	
  });
  */ 
  $('#abs').click(function(){
	window.location='ambulanStatus.html';
  });
  
});
