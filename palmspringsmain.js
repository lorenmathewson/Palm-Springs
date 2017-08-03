$(document).ready(function(){
  var chooseOptions = function() {
    var howlong = $('#howlongselection').val();
    var selectionsAppearing = options[Math.floor(Math.random() * options.length)];
    return selectionsAppearing;
  };

  var options = ['#thesaguarosection', '#pinkdoorsection', '#salvationmountainsection', '#cabazondinosaurssection',   '#tramwaysection', '#spencerssection', '#artmuseumsection', '#joshuatreesection', '#korakiasection', '#barsection', '#acehotelsection', '#melvynssection'];

  // var threeOptions = function() {
  //   return  [
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)]
  //   ];
  // }

  function showOptions(event){
    chooseOptions();
    var userInput = $(event.target).val();
    if (userInput === "1 day"){
       $('#frontpage').hide();
      //  $('#holiday-options').show();
       $('#back').show();
       threeOptions();
    } else if (userInput === "2 days"){
      $('#frontpage').hide();
      $('#holiday-options').show();
      $('#back').show();
      sixOptions();
    } else if (userInput === "3 days"){
      $('#frontpage').hide();
      $('#holiday-options').show();
      $('#back').show();
      nineOptions();
    }
  }

  $('#back').click(function() {
    $('#back').hide();
    $('#holiday-options').hide();
    $('#frontpage').show();
  });

  $('#howlongselection').change(showOptions);
});





  // function sixOptions() {
  //   return  [
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)]
  //   ];
  // }
  //
  // function nineOptions() {
  //   return  [
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)],
  //     options[Math.floor(Math.random() * options.length)]
  //   ];
  // }
