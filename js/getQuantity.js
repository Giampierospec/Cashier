var quantity;
var qtEstablished = document.getElementById("quantityEstablished");
var validateQuantity = document.getElementById("validateQuantity");
var validationSummary = document.getElementById("validationSummary");
var rtBtn = document.getElementById("rtBtn");
var qt = document.getElementById("quantity");
function quant(q){
  this.quantity = q;
}
function loadData(){
  var data = localStorage.getItem("quantity");
  if(data != null){
    quantity = JSON.parse(data);
    qtEstablished.value = quantity.quantity;
    if(quantity.quantity == 0){
      rtBtn.disabled = true;
      qt.disabled = true;
      $(validationSummary).show().html("Su monto se acabo");
      $(".jumbotron").append("<i class='fa fa-3x fa-spinner fa-spin'></i>");
      setTimeout(rtPage,5000);
    }
  }
}
function checkRetrieval(){
  var q = qt.value;
  var qEstablished = qtEstablished.value;
  if(q == null || q == ""){
    $(validateQuantity).show().html("Campo vacio llenelo");
  }
  else if(q > qEstablished){
    $(validateQuantity).show().html("El monto que usted introdujo sobrepasa los limites intente denuevo");
  }
  else if(qEstablished == 0){
    rtBtn.disabled = true;
    qt.disabled = true;
    $(validationSummary).show().html("Su monto se acabo");
    $(".jumbotron").append("<i class='fa fa-3x fa-spinner fa-spin'></i>");
    setTimeout(rtPage,5000);
  }
  else{
      qt.disabled = true;
      rtBtn.disabled = true;
      quantity.quantity -= q;
      var r = new quant(quantity.quantity);
      console.log(r);
      save(r);
      $(".jumbotron").append("<i class='fa fa-3x fa-spinner fa-spin'></i>");
      setTimeout(reload,5000);

  }
}
function rtPage(){
  window.open("index.html","_self");
}
function reload(){
  location.reload();
}
function save(r){
  var data = JSON.stringify(r);
  localStorage.setItem("quantity",data);
}
$(document).ready(function() {
  $("#quantity").on('input',  function() {
    var input = $(this);
    var is_quantity = input.val();
    if(is_quantity){
      $(validateQuantity).hide();
      $(validationSummary).hide();
      rtBtn.disabled = false;
    }
    else{
      rtBtn.disabled = true;
    }
  });
  $("#quantityEstablished").on("input", function(){
    var input = $(this);
    var is_qt_est = input.val();
    if(is_qt_est == 0){
      rtBtn.disabled = true;
      $(validationSummary).show().html("Su monto se acabo");
      $(".jumbotron").append("<i class='fa fa-3x fa-spinner fa-spin'></i>");
      setTimeout(rtPage,5000);
    }

  });
});



window.addEventListener("load",loadData);
rtBtn.addEventListener("click",checkRetrieval);
