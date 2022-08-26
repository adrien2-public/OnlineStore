
$(document).ready(function() {
    $(".linkMinus").on("click", function(evt) {
        evt.preventDefault();
        decreaseQuantity($(this));
    });


 $(".linkPlus").on("click", function(evt) {
        evt.preventDefault();
        increaseQuantity($(this));
    });


});

function decreaseQuantity(link){

     productId = link.attr("pid");
        quantityInput = $("#quantity" + productId);
        newQuantity =  parseInt(quantityInput.val()) - 1;

        if(newQuantity > 0){
            quantityInput.val(newQuantity);
            updateQuantity(productId,newQuantity);
        }else{
            showModalDialog("Minimum quantity is 1");
        }

}

function increaseQuantity(link){

productId = link.attr("pid");
       quantityInput = $("#quantity" + productId);
       newQuantity =  parseInt(quantityInput.val()) + 1 ;

         if(newQuantity <= 10){
                    quantityInput.val(newQuantity);
                    updateQuantity(productId,newQuantity);
                }else{
                    showModalDialog("Warning","Max quantity is 10");
                }

}

function updateQuantity(productId, quantity){
    url = contextPath + "cart/update/" + productId + "/" + quantity;


$.ajax({
    type: "POST",
    url: url,
    beforeSend: function(xhr) {
        xhr.setRequestHeader(csrfHeaderName, csrfValue);
    }

}).done(function(updatedSubtotal) {
    updateSubtotal(updatedSubtotal, productId);
    updateTotal();
    showModalDialog("Update on item Occurred", "updated Subtotal : " + updatedSubtotal);
    }).fail(function(){
    showErrorModal("Error while updating product to cart");
    });



}


function updateSubtotal(updatedSubtotal, productId){

    formattedSubtotal = $.number(updatedSubtotal, 2);
    $("#subtotal" + productId).text(formattedSubtotal);

}

function updateTotal(){
    total = 0.0;

    $(".subtotal").each(function(index,element){
    total += parseFloat(element.innerHTML.replaceAll(",", ""));
    });

    formattedTotal = $.number(total,2);
    $("#total").text(formattedTotal);

}