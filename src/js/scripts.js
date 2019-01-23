
$(function(){
    $('#form').on('submit', function(event) {
        var mail = $('#email').val();
        var emailpattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var is_email = emailpattern.test(mail);
        var phonenumber = $("#phonenumber").val();
        if(is_email){
			$("#form").addClass("formopacity");
            $("#loader").removeClass("loaderhidden");
            setTimeout(function(){
                alert('Wysłano formularz poprawnie')
            }, 1500); 
		}
		else{
        $("#error").removeClass("errorhidden");
        $(".input-group").addClass("input-group-validation");
        $(".input-group-text").addClass("input-group-text-validation");
        $("#checkmark").addClass("checkmark-validation");
		}
        event.preventDefault();
	});	
  });