$('#buttonR').click(
      function() {

    var dropdown1 = $('#niveauEtude').val();
    var dropdown2 = $('#typeContract').val();
    var dropdown3 = $('#secteur').val();
    var dropdown4 = $('#salaire').val();

    if ( dropdown1=='Bac' && dropdown3=='Développement' && dropdown4=='(20K€-25K€)' ) {
                $("#resultat1").modal('show');
                // $('#modal2').hide();
                // $('#modal3').hide();
      }

      if ( dropdown1=='Bac' && dropdown3=='Réseaux' && dropdown4=='(20K€-25K€)' ) {
                  $("#resultat1").modal('show');
                  // $('#modal2').hide();
                  // $('#modal3').hide();
            }
                if ( dropdown1=='BTS' && dropdown4=='(30K€-35K€)' ) {
                $("#resultat2").modal('show');
                $('#modal2').show();
                $('#modal3').hide();
              }

                  if ( dropdown1=='Bac + 4' && dropdown4=='(35K€-40K€)' ) {
                  $("#resultat3").modal('show');
                  $('#modal2').hide();
                  $('#modal3').show();
                }
                    if ( dropdown1==dropdown1 && dropdown3=='' && dropdown2=='' && dropdown4=='' ) {
                      $("#general").modal('show');
                    }
                        if ( dropdown1=='' && dropdown3==dropdown3 && dropdown2=='' && dropdown4=='' ) {
                          $("#general").modal('show');
                        }
                          if ( dropdown1=='' && dropdown2==dropdown2 && dropdown3=='' && dropdown4=='' ) {
                            $("#general").modal('show');
                          }
                              if ( dropdown1=='' && dropdown3=='' && dropdown2=='' && dropdown4==dropdown4 ) {
                                $("#general").modal('show');
                              }
  });


   // ************ hide skip and show 'Decouvrire le site !'  ************
$('#skip').click(
    function(){
      $("#GameModalButton").show();
      $("#skip").hide();
    }
);

// ************ manage game modal (on refresh)  ************

  $( document ).ready(function() {
    $("#ModalJeu").modal('show');
    $("#GameModalButton").hide();
      // $("#GameModalButton").show();
  });



  // ***************** afficher la modal du jeu au build *********************************
  //
  // $('#buttonR').click(
  //     function() {
  //       console.log("merci buttonR");
  //       console.log($('#niveauEtude option:selected').text());
  //       console.log($('#typeContract option:selected').text());
  //       console.log($('#secteur option:selected').text());
  //       console.log($('#dropDownId').val());
  //
  //       $('#niveauEtude option:selected').text();
  //     }
  // );

  // $('#niveauEtude').click(
  //     function() {
  //       console.log("merci buttonR");
  //       console.log($('#niveauEtude option:selected').text());
  //       $('#niveauEtude option:selected').text();
  //       console.log($('#niveauEtude').val());
  //
  //     }
  // );
