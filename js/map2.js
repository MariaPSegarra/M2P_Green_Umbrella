//funtion MAP 2 - pubs

function initMap() {
    var map = new google.maps.Map(document.getElementById("map2"), {
        zoom: 3,
        center: {
            lat: 53.3498,
            lng: -6.2603
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 53.3449326, lng: -6.2763323 }, 
        { lat: 53.340665304, lng: -6.257665636 }, 
        { lat: 53.339498642, lng: -6.258665632 },
        { lat: 53.3486, lng: -6.2667 },
        { lat: 	53.3438996456, lng: -6.26089632928 },
        { lat: 53.3451827106, lng: -6.26744694921 },
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }  