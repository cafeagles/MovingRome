// This example creates an interactive map which constructs a
// polyline based on user clicks. Note that the polyline only appears
// once its path property contains two LatLng coordinates.

var poly;
var map;

function initialize() {
  var mapOptions = {
    zoom: 5,
    disableDoubleClickZoom : true,
    // Center the map on Chicago, USA.
    center: new google.maps.LatLng(40.622291783092706, 17.91046142578125)
  };

  map = new google.maps.Map(document.getElementById('map-canvas-tool'), mapOptions);

  var polyOptions = {
    strokeColor: '#000000',
    strokeOpacity: 1.0,
    strokeWeight: 3
  };
  poly = new google.maps.Polyline(polyOptions);
  poly.setMap(map);

  // Add a listener for the click event
  google.maps.event.addListener(map, 'click', addLatLng);
}

/**
 * Handles click events on a map, and adds a new point to the Polyline.
 * @param {google.maps.MouseEvent} event
 */
function addLatLng(event) {

  var path = poly.getPath();
  var stringLatLng = event.latLng.toString();
  document.getElementById('latLongList').innerHTML += '<br>.push(new google.maps.LatLng'+stringLatLng+')';
  console.log(event.latLng.toString());

  // Because path is an MVCArray, we can simply append a new coordinate
  // and it will automatically appear.
  path.push(event.latLng);

  // Add a new marker at the new plotted point on the polyline.
  var marker = new google.maps.Marker({
    position: event.latLng,
    title: '#' + event.latLng,
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);

for (i = 0; i <=100 ; i++)
{
  if(i == 50)
  {
    {document.getElementById("numberPoints").innerHTML += ("<br>," + i)} 
  }
  else
    {document.getElementById("numberPoints").innerHTML += ("," + i)} 
}

