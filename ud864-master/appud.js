var map;
function initMap() {
  // Constructor creates a new map - only center and zoom are required.
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 40.7413549, lng: -73.9980244 },
    zoom: 13
  });
  var tribeca = { lat: 40.719526, lng: -74.0089932 };
  var marker = new google.maps.Marker({
    position: tribeca,
    map: map,
    title: 'First Marker!'
  });
  var infowindow = new google.maps.InfoWindow({
    content: 'test content!'
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });

}
