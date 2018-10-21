 var map = L.map('mapid',{
    center: [ 29.424349, -98.491142],
    zoom: 11.5
    });

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

  /*
  // zip
  $.getJSON("/static/data/sa_zip_geoj.geojson",function(data1){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data1).addTo(map);
  });


  // markers
  $.getJSON("/static/data/cps_subset_week.geojson",function(data2){
    // add GeoJSON layer to the map once the file is loaded
    L.geoJson(data2).addTo(map);
  });
*/

map.zoomControl.setPosition('bottomright');

