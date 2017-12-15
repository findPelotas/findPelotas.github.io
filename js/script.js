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

    $("#btPesquisar").click(function(){
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

      if (busca == "mercado"){
         $('#modal1').modal('show');
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

      if (busca == "mercado central"){
         $('#modal1').modal('show');
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

      if (busca == "museu da baronesa"){
         $('#modal2').modal('show');
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

      if (busca == "baronesa"){
         $('#modal2').modal('show');
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

      if (busca == "praça coronel pedro osorio"){
         $('#modal3').modal('show');
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

      if (busca == "praca coronel"){
         $('#modal3').modal('show');
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

      if (busca == "teatro guarany"){
         $('#modal4').modal('show');
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

      if (busca == "guarany"){
         $('#modal4').modal('show');
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

      if (busca == "catedral sao francisco de paula"){
         $('#modal5').modal('show');
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

      if (busca == "catedral metropolitana"){
         $('#modal5').modal('show');
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

      if (busca == "grande hotel"){
         $('#modal6').modal('show');
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

      if (busca == "biblioteca publica"){
         $('#modal7').modal('show');
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

      if (busca == "biblioteca"){
         $('#modal7').modal('show');
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

      if (busca == "catedral do redentor"){
         $('#modal8').modal('show');
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

      if (busca == "igraja cabeluda"){
         $('#modal8').modal('show');
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

      if (busca == "charqueadas sao joao"){
         $('#modal9').modal('show');
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

      if (busca == "charqueadas são joão"){
         $('#modal9').modal('show');
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

      if (busca == "castelo simoes lopes"){
         $('#modal10').modal('show');
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

      if (busca == "castelo simões lopes"){
         $('#modal10').modal('show');
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

      if (busca == "praia do laranjal"){
         $('#modal11').modal('show');
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

      if (busca == "laranjal"){
         $('#modal11').modal('show');
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

      if (busca == "praia do barro duro"){
         $('#modal12').modal('show');
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

      if (busca == "barro duro"){
        $('#modal1').modal('show');
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
         $('#modal12').modal('show');
      }

      if (busca == "museu do doce"){
         $('#modal13').modal('show');
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

      if (busca == "museu de arte leopoldo gotuzzo"){
         $('#modal14').modal('show');
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

      if (busca == "museu de ciencias naturais carlos ritter"){
         $('#modal15').modal('show');
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

      if (busca == "museu de ciências naturais carlos ritter"){
         $('#modal15').modal('show');
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

      if (busca == "parque dom antonio zattera"){
         $('#modal16').modal('show');
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

      if (busca == "rodoviaria de pelotas"){
         $('#modal17').modal('show');
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

      if (busca == "rodoviarias"){
         $('#modal17').modal('show');
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

      if (busca == "praca piratinino de almeida"){
         $('#modal18').modal('show');
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

      if (busca == "praça piratinino de almeida"){
         $('#modal18').modal('show');
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

      if (busca == "praca cipriano barcelos"){
         $('#modal19').modal('show');
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

      if (busca == "praça cipriano barcelos"){
         $('#modal19').modal('show');
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

      if (busca == "charqueadas santa rita"){
         $('#modal20').modal('show');
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

      if (busca == "santa rita"){
         $('#modal20').modal('show');
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

      if (busca == "bella napoli"){
         $('#modal21').modal('show');
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

      if (busca == "pizzaria pizzarela"){
         $('#modal22').modal('show');
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

      if (busca == "pizzarela"){
         $('#modal22').modal('show');
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

      if (busca == "universitalia"){
         $('#modal23').modal('show');
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

      if (busca == "pizza.com"){
         $('#modal24').modal('show');
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

      if (busca == "verace italia"){
         $('#modal25').modal('show');
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

      if (busca == "verace"){
         $('#modal25').modal('show');
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

      if (busca == "sabores do sul"){
         $('#modal26').modal('show');
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

      if (busca == "rei da pizza"){
         $('#modal27').modal('show');
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

      if (busca == "cantina da bento"){
         $('#modal28').modal('show');
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

      if (busca == "cantina"){
         $('#modal28').modal('show');
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

      if (busca == "nella pietra pizza"){
         $('#modal29').modal('show');
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

      if (busca == "nella pietra"){
         $('#modal29').modal('show');
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

      if (busca == "pizza hut pelotas"){
         $('#modal30').modal('show');
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

      if (busca == "pizza hut"){
         $('#modal30').modal('show');
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

      if (busca == "cantina de mamma pizza"){
         $('#modal31').modal('show');
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

      if (busca == "mamma pizza"){
         $('#modal31').modal('show');
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

      if (busca == "sorveteria e pizzaria el sabory"){
         $('#modal32').modal('show');
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

      if (busca == "el sabory"){
         $('#modal32').modal('show');
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

      if (busca == "bud bar"){
         $('#modal33').modal('show');
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

      if (busca == "joao gilberto bar"){
         $('#modal34').modal('show');
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

      if (busca == "joão gilberto bar"){
         $('#modal34').modal('show');
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

      if (busca == "papuera bar"){
         $('#modal35').modal('show');
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

      if (busca == "papuera"){
         $('#modal35').modal('show');
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

      if (busca == "johnnie jack"){
         $('#modal36').modal('show');
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

      if (busca == "escritorio bar"){
         $('#modal37').modal('show');
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

      if (busca == "escritório bar"){
         $('#modal37').modal('show');
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

      if (busca == "botequim das goordas"){
         $('#modal38').modal('show');
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

      if (busca == "bar do zé"){
         $('#modal39').modal('show');
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

      if (busca == "bar do ze"){
         $('#modal39').modal('show');
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

      if (busca == "boteco do cruz"){
         $('#modal40').modal('show');
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

      if (busca == "sherlock pub"){
         $('#modal41').modal('show');
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

      if (busca == "sherlock"){
         $('#modal41').modal('show');
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

      if (busca == "choperia cruz de malta"){
         $('#modal42').modal('show');
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

      if (busca == "diabluras gastronômicas"){
         $('#modal43').modal('show');
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

      if (busca == "diabluras gastronomicas"){
         $('#modal43').modal('show');
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

      if (busca == "madre mia"){
         $('#modal44').modal('show');
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

      if (busca == "polaka lanches"){
         $('#modal45').modal('show');
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

      if (busca == "polaka"){
         $('#modal45').modal('show');
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

      if (busca == "dago's lanches"){
         $('#modal46').modal('show');
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

      if (busca == "dago's"){
         $('#modal46').modal('show');
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

      if (busca == "dagos"){
         $('#modal46').modal('show');
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

      if (busca == "rm lanches"){
         $('#modal47').modal('show');
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

      if (busca == "rm"){
         $('#modal47').modal('show');
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

      if (busca == "komilão lanches"){
         $('#modal48').modal('show');
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

      if (busca == "komilao lanches"){
         $('#modal48').modal('show');
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

      if (busca == "komilão"){
         $('#modal48').modal('show');
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
      if (busca == "komilao"){
         $('#modal48').modal('show');
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

      if (busca == "circulu's lanches deodoro"){
         $('#modal49').modal('show');
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

      if (busca == "circulus lanches deodoro"){
         $('#modal49').modal('show');
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

      if (busca == "circulu's deodoro"){
         $('#modal49').modal('show');
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

      if (busca == "circulus deodoro"){
         $('#modal49').modal('show');
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

      if (busca == "circulu's lanches três de maio"){
         $('#modal50').modal('show');
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

      if (busca == "circulu's três de maio"){
         $('#modal50').modal('show');
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

      if (busca == "circulus lanches tres de maio"){
         $('#modal50').modal('show');
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

      if (busca == "circulu's três de maio"){
         $('#modal50').modal('show');
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

      if (busca == "sanata lanches três de maio"){
         $('#modal51').modal('show');
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

      if (busca == "sanata três de maio"){
         $('#modal51').modal('show');
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

      if (busca == "sanata lanches tres de maio"){
         $('#modal51').modal('show');
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

      if (busca == "sanata tres de maio"){
         $('#modal51').modal('show');
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

      if (busca == "sanata lanches anchieta"){
         $('#modal52').modal('show');
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

      if (busca == "sanata anchieta"){
         $('#modal52').modal('show');
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

      if (busca == "dadá lanches e pizza"){
         $('#modal53').modal('show');
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

      if (busca == "dadá lanches e pizza"){
         $('#modal53').modal('show');
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

      if (busca == "dada lanches e pizza"){
         $('#modal53').modal('show');
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

      if (busca == "ronaldo lanches"){
         $('#modal54').modal('show');
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

      if (busca == "ronaldo"){
         $('#modal54').modal('show');
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

      if (busca == "lanches mak mello"){
         $('#modal55').modal('show');
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

      if (busca == "mak mello"){
         $('#modal55').modal('show');
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

      if (busca == "polonga lanches"){
         $('#modal56').modal('show');
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

      if (busca == "polonga"){
         $('#modal56').modal('show');
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

      if (busca == "mcdonald's"){
         $('#modal57').modal('show');
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

      if (busca == "mcdonalds"){
         $('#modal57').modal('show');
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

      if (busca == "cafe.com"){
         $('#modal58').modal('show');
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

      if (busca == "cafe aquarius"){
         $('#modal59').modal('show');
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

      if (busca == "café aquárius"){
         $('#modal59').modal('show');
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

      if (busca == "picanha express"){
         $('#modal60').modal('show');
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

      if (busca == "confeitaria otto"){
         $('#modal61').modal('show');
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

      if (busca == "confeitaria Otto"){
         $('#modal61').modal('show');
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

      if (busca == "alles blau"){
         $('#modal62').modal('show');
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

      if (busca == "churrascaria lobão"){
         $('#modal63').modal('show');
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

      if (busca == "churrascaria lobao"){
         $('#modal63').modal('show');
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

      if (busca == "lobão"){
         $('#modal63').modal('show');
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

      if (busca == "lobao"){
         $('#modal63').modal('show');
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

      if (busca == "cruz de malta"){
         $('#modal64').modal('show');
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

      if (busca == "parrillada el paisano"){
         $('#modal65').modal('show');
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

      if (busca == "el paisano"){
         $('#modal65').modal('show');
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

      if (busca == "parrillada"){
         $('#modal65').modal('show');
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

      if (busca == "grelhados batuva"){
         $('#modal66').modal('show');
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

      if (busca == "batuva"){
         $('#modal66').modal('show');
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

      if (busca == "shanghay sushi lounge"){
         $('#modal67').modal('show');
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

      if (busca == "sushi lounge"){
         $('#modal67').modal('show');
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

      if (busca == "trem bão"){
         $('#modal68').modal('show');
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

      if (busca == "trem bao"){
         $('#modal68').modal('show');
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

      if (busca == "polo norte"){
         $('#modal69').modal('show');
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

      if (busca == "chu"){
         $('#modal70').modal('show');
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

      if (busca == "choperia cruz de malta"){
         $('#modal71').modal('show');
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

      if (busca == "madre mia"){
         $('#modal72').modal('show');
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

      if (busca == "ristorante vesúvio"){
         $('#modal73').modal('show');
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

      if (busca == "vesúvio"){
         $('#modal73').modal('show');
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

      if (busca == "ristorante vesuvio"){
         $('#modal73').modal('show');
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

      if (busca == "vesuvio"){
         $('#modal73').modal('show');
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

      if (busca == "tio hugo"){
         $('#modal74').modal('show');
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

      if (busca == "churrascaria tradição"){
         $('#modal75').modal('show');
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

      if (busca == "churrascaria tradicao"){
         $('#modal75').modal('show');
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

      if (busca == "tradição"){
         $('#modal75').modal('show');
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

      if (busca == "tradicao"){
         $('#modal75').modal('show');
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

      if (busca == "mendes refeições"){
         $('#modal76').modal('show');
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

      if (busca == "mendes refeicoes"){
         $('#modal76').modal('show');
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

      if (busca == "mendes"){
         $('#modal76').modal('show');
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
    });
  });