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
      });
  });
});
