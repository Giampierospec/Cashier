var btnAccept = document.getElementById("acceptBtn");
var validateQuantity = document.getElementById('validateQuantity');
var quantity = document.getElementById("quantity");

function qt(qt){
  this.quantity = qt;
}
//
function checkQuantity(){
   var qtValue = quantity.value;
    if(qtValue == null || qtValue == ''){
      $(validateQuantity).show().html("el campo está vacio");
    }
    else{
      btnAccept.disabled = true;
      quantity.disabled = true;
        var r = new qt(qtValue);
        save(r);
        $(".jumbotron").append("<i class='fa fa-spinner fa-spin fa-3x'></i>");

        setTimeout(openNewSite,3000);
    }
}
function openNewSite(){
  window.open("retrieve.html","_self");
}

function save(r){
  var data = JSON.stringify(r);
  localStorage.setItem("quantity",data);
}
//This will validate the input
$(document).ready(function() {
  $("#quantity").on("input", function(){
    var input = $(this);
    var is_quantity = input.val();
    if(is_quantity){
      $(validateQuantity).hide();
      btnAccept.disabled = false;
    }
    else{
      btnAccept.disabled = true;
    }
  });
});
btnAccept.addEventListener("click",checkQuantity);
