function myMap() {

    var mapOptions = {
        center: new google.maps.LatLng(28.677782, 77.261272),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("mapNIEC"), mapOptions);



var marker = new google.maps.Marker({
          position:{lat: 28.677782, lng: 77.261272},
          map: map
        });
}


