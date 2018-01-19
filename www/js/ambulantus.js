$(document).ready(function(){
  $('#backTomain').click(function(){
    window.location='index.html';
  });
  
  $.post(
	serviceUrl+'warga.php',
	{
		does : 'ambulanStatus',
		nik  : localStorage.getItem('nik')
	},function(respon){
		$("#respon").html(respon);
	});
  
});
