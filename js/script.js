    console.log('test');
$(document).ready(function(){
  function hideAll() {
    $('#bigPoppa').hide();
    $('#suicidalThoughts').hide();
    $('#thingsDoneChanged').hide();
    $('#whoShotYa').hide();
    $('#bigPoppaText').hide();
    $('#suicidalThoughtsText').hide();
    $('#thingsDoneChangedText').hide();
    $('#whoShotYaText').hide();
  }

  hideAll();

  $('.albumCover').click(function() {
    hideAll();
    switch ($(this).attr("id")) {
      case "readyToDie":
        $('#bigPoppa').show();
        $('#bigPoppaText').slideToggle();
        break;
      case "bornAgain":
        $('#suicidalThoughts').show();
        $('#suicidalThoughtsText').slideToggle();
        break;
      case "lifeAfterDeath":
        $('#thingsDoneChanged').show();
        $('#thingsDoneChangedText').slideToggle();
        break;
      case "duet":
        $('#whoShotYa').show();
        $('#whoShotYaText').slideToggle();
        break;
      }
    });
});
