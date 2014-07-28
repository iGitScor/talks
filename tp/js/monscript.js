$( document ).ready(function() {
    $('footer').click(function() {
        $('article').toggle();
        $('video').toggle();
    });
    
    $('footer img').hover(function(){
        $(this).parent().parent().find('legend').html($(this).attr('src'));
    });

    $('video').toggle();
    
    function maPosition(position) {
      var infopos = "Position déterminée :\n";
      infopos += "Latitude : "+position.coords.latitude +"\n";
      infopos += "Longitude: "+position.coords.longitude+"\n";
      infopos += "Altitude : "+position.coords.altitude +"\n";
      $('#geolocalisation').html(infopos);
      $('form textarea').html(infopos);
    }

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(maPosition);
    }
});