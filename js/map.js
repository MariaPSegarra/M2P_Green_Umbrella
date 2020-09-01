//funtion MAP 1 - Landmarks

function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 53.3498,
            lng: -6.2603
        }
    });

    var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    var locations = [
        { lat: 53.3395, lng: -6.2715 },
        { lat: 53.3435, lng: -6.2711 },
        { lat: 53.3419, lng: -6.3098 },
        { lat: 53.3440, lng: -6.2566 },
        { lat: 53.3493, lng: -6.2611 },
        { lat: 53.3429, lng: -6.2674 }
    ];

    var markers = locations.map(function(location, i) {
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });

    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    }

    