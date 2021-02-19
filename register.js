
//Form Check with jquery validation
$(document).ready(function () {
    $('#registForm').validate({ 
        rules: {
            email: {
                required: true,
                email: true,
            },
            name: {
                required: true,
            },
            pw: {
                required: true,
                minlength: 5
            },
            pwC: {
                required: true,
                minlength: 5,
                equalTo: "#pw"
            },
            businessName: {
                required: true,
            },
            phone: {
                required: true, 
                minlength:10,
                maxlength:14
            },
            businessType: {
                required: true,
                },
                businessRegistNo:{
                    required:true,
                }
        },
        messages:{
            pw:{
                required:"Please create a new password",
            },
            pwC:{
                required:"Please enter the same password",
                equalTo:"Please enter the same password"
            }
        }
    });
});


//register screens
var $current_fs, $next_fs, $previous_fs;

$(".nextBTN").click(function(event){ //next step
    if (!$("#registForm").valid()) {
        return;
    }
    event.preventDefault();
	$current_fs = $(this).parent().closest("fieldset");
	$next_fs = $(this).parent().closest("fieldset").next();

    $current_fs.hide();
    $next_fs.show()
  
});

$(".backBTN").click(function(event){ //previous step
    event.preventDefault();
	$current_fs = $(this).parent().closest("fieldset");
	$next_fs = $(this).parent().closest("fieldset").prev();

    $current_fs.hide();
    $next_fs.show()
  
});

