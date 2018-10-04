// $('#myButton').click(function(){
//     var dropdown1 = $('#niveauEtude').value();
//     var dropdown2 = $('#typeContract').value();
//     var dropdown3 = $('#secteur').value();
//     var dropdown4 = $('#salaire').value();
//     if (dropdown1=='Bac') {
//       $('#modal1').show();
//       $('#modal2').hide();
//       $('#modal3').hide();
//     }
//     if (dropdown1=='BTS') {
//       $('#modal1').hide();
//       $('#modal2').show();
//       $('#modal3').hide();
//     }
//     if (dropdown1=='uvkhsrtsvh' && dropdown2=='geuriohrg' && dropdown3=='eroihhe') {
//       $('#modal1').hide();
//       $('#modal2').hide();
//       $('#modal3').show();
//     }
//   });

// ***************** afficher la modal du jeu au build *********************************
$('button').click(
    function(){
      console.log("click détécté !");
    }
);
$('#skip').click(
    function(){
      $("#GameModalButton").show();
    }
);

  $( document ).ready(function() {
    $("#ModalJeu").modal('show');
    $("#GameModalButton").hide();

      // $("#GameModalButton").show();
  });
