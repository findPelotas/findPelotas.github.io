$(document).ready(function(){
    $("#nav-about").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").show();
        $(".pontos-turisticos").hide();
        $(".restaurantes-bares").hide();
        $(".cinemas").hide();
        $(".pizzarias").hide();
        $(".bares").hide();
        $(".lancherias").hide();
    });

    $("#nav-home").click(function(){
        $(".header").show();
        $(".text-center").show();
        $(".container").show();
        $(".about").hide();
        $(".pontos-turisticos").hide();
        $(".restaurantes-bares").hide();
        $(".cinemas").hide();
        $(".pizzarias").hide();
        $(".bares").hide();
        $(".lancherias").hide();
    });

    $("#dropdown-turismo").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").hide();
        $(".pontos-turisticos").show();
        $(".restaurantes-bares").hide();
        $(".cinemas").hide();
        $(".pizzarias").hide();
        $(".bares").hide();
        $(".lancherias").hide();
    });

    $("#pontosTuristicos").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").hide();
        $(".pontos-turisticos").show();
        $(".restaurantes-bares").hide();
        $(".cinemas").hide();
        $(".pizzarias").hide();
        $(".bares").hide();
        $(".lancherias").hide();
    });

    $("#dropdown-restaurantes").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").hide();
        $(".pontos-turisticos").hide();
        $(".restaurantes-bares").show();
        $(".cinemas").hide();
        $(".pizzarias").hide();
        $(".bares").hide();
        $(".lancherias").hide();
    });

    $("#card-restaurantes").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").hide();
        $(".pontos-turisticos").hide();
        $(".restaurantes-bares").show();
        $(".cinemas").hide();
        $(".pizzarias").hide();
        $(".bares").hide();
        $(".lancherias").hide();
    });

    $("#dropdown-cinemas").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").hide();
        $(".pontos-turisticos").hide();
        $(".restaurantes-bares").hide();
        $(".cinemas").show();
        $(".pizzarias").hide();
        $(".bares").hide();
        $(".lancherias").hide();
    });

    $("#dropdown-pizzarias").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").hide();
        $(".pontos-turisticos").hide();
        $(".restaurantes-bares").hide();
        $(".cinemas").hide();
        $(".pizzarias").show();
        $(".bares").hide();
        $(".lancherias").hide();
    });

    $("#dropdown-bares").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").hide();
        $(".pontos-turisticos").hide();
        $(".restaurantes-bares").hide();
        $(".cinemas").hide();
        $(".pizzarias").hide();
        $(".bares").show();
        $(".lancherias").hide();
    });

    $("#dropdown-lancherias").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").hide();
        $(".pontos-turisticos").hide();
        $(".restaurantes-bares").hide();
        $(".cinemas").hide();
        $(".pizzarias").hide();
        $(".bares").hide();
        $(".lancherias").show();
    });

    $("#card-cinemas").click(function(){
        $(".header").hide();
        $(".text-center").hide();
        $(".container").hide();
        $(".about").hide();
        $(".pontos-turisticos").hide();
        $(".restaurantes-bares").hide();
        $(".cinemas").hide();
        $(".pizzarias").hide();
        $(".bares").hide();
        $(".cinemas").show();
    });

    var buscaFunction = function() {
      var busca = $("#inBusca").val().toLowerCase();
      console.log(busca);

      if (busca == "turismo"){
         $(".header").hide();
         $(".text-center").hide();
         $(".container").hide();
         $(".about").hide();
         $(".pontos-turisticos").show();
         $(".restaurantes-bares").hide();
         $(".cinemas").hide();
         $(".pizzarias").hide();
         $(".bares").hide();
         $(".lancherias").hide();
      }

      if (busca == "cinemas"){
         $(".header").hide();
         $(".text-center").hide();
         $(".container").hide();
         $(".about").hide();
         $(".pontos-turisticos").hide();
         $(".restaurantes-bares").hide();
         $(".cinemas").show();
         $(".pizzarias").hide();
         $(".bares").hide();
         $(".lancherias").hide();
      }

      if (busca == "restaurantes"){
         $(".header").hide();
         $(".text-center").hide();
         $(".container").hide();
         $(".about").hide();
         $(".pontos-turisticos").hide();
         $(".restaurantes-bares").show();
         $(".cinemas").hide();
         $(".pizzarias").hide();
         $(".bares").hide();
         $(".lancherias").hide();
      }

      if (busca == "pizzarias"){
         $(".header").hide();
         $(".text-center").hide();
         $(".container").hide();
         $(".about").hide();
         $(".pontos-turisticos").hide();
         $(".restaurantes-bares").hide();
         $(".cinemas").hide();
         $(".pizzarias").show();
         $(".bares").hide();
         $(".lancherias").hide();
      }

      if (busca == "bares"){
         $(".header").hide();
         $(".text-center").hide();
         $(".container").hide();
         $(".about").hide();
         $(".pontos-turisticos").hide();
         $(".restaurantes-bares").hide();
         $(".cinemas").hide();
         $(".pizzarias").hide();
         $(".bares").show();
         $(".lancherias").hide();
      }

      if (busca == "lancherias"){
         $(".header").hide();
         $(".text-center").hide();
         $(".container").hide();
         $(".about").hide();
         $(".pontos-turisticos").hide();
         $(".restaurantes-bares").hide();
         $(".cinemas").hide();
         $(".pizzarias").hide();
         $(".bares").hide();
         $(".lancherias").show();
      }
    };

    $("#btPesquisar").click(buscaFunction);

    $('#inBusca').keypress(function (e) {

        if(e.which == 13) {
            buscaFunction();
        }

    });
  });




















