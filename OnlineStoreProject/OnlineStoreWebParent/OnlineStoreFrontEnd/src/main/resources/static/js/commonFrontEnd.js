$(document).ready(function() {
 $("#logoutCustomer").on("click", function(e) {
        e.preventDefault();
        document.logoutClientForm.submit();
            });
    });



         function showImageThumbNail(fileInput){
                 var file = fileInput.files[0];
                 var reader = new FileReader();
                 reader.onload = function(e) {
                     $("#thumbnail").attr("src", e.target.result);
                 };
                 reader.readAsDataURL(file);
         }



         function showModalDialog(title,message){
         $("#modalTitle").text(title);
         $("#modalBody").text(message);
         $("#modalDialog").modal();
         }

          function showErrorModal(message){
           showModalDialog("Error", message);
            }

           function showWarningModal(message){
           showModalDialog("Warning", message);
            }


