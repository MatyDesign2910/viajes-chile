$(document).ready(function() {
  /*Incorporar tooltip de bootstrap */
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  /*Mostrar y ocultar boton ver imagen en card la pasa por encima */
  $('.card_1 .card-img').hover(function() {
    $('.verImagen1').toggleClass('d-none');
  });
  $('.card_2 .card-img').hover(function() {
    $('.verImagen2').toggleClass('d-none');
  });
  $('.card_3 .card-img').hover(function() {
    $('.verImagen3').toggleClass('d-none');
  });
  $('.card_4 .card-img').hover(function() {
    $('.verImagen4').toggleClass('d-none');
  });

  /*Agregar imagen a imagen de card */
  $('[alt="tarjeta_1"]').attr("src","assets/img/card1.jpg");
  $('[alt="tarjeta_2"]').attr("src","assets/img/card2.jpg");
  $('[alt="tarjeta_3"]').attr("src","assets/img/card3.jpg");
  $('[alt="tarjeta_4"]').attr("src","assets/img/card4.jpg");

  /*Agregar imagen a modal */
  $(".verImagen1").click(function() {
    $('[alt="imagen_1"]').attr("src","assets/img/card1.jpg");
  });
  $(".verImagen2").click(function() {
    $('[alt="imagen_1"]').attr("src","assets/img/card2.jpg");
  });
  $(".verImagen3").click(function() {
    $('[alt="imagen_1"]').attr("src","assets/img/card3.jpg");
  });
  $(".verImagen4").click(function() {
    $('[alt="imagen_1"]').attr("src","assets/img/card4.jpg");
  });

  /*Cambiar color de fondo de navbar al hacer scroll */
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      /*Cambia el color del div cuando es distinto a 0*/
      if(scroll!=0){
          $('.navbar').css({
              backgroundColor: 'black'
          });
      }else{
          $('.navbar').css({
              backgroundColor: 'transparent'
          });
      }
  });
});
