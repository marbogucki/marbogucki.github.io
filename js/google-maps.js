<<<<<<< HEAD
/* ----- google map ----- */
function initMap() {

    var myLatLng = {lat: 54.3023662, lng: 18.5851282};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,
        disableDoubleClickZoom: true,
        zoomControl: false,

        zoom: 15,
        styles: [
            {
                featureType: 'all',
                stylers: [
                    { hue: '#4e99cc' },
                    { saturation: -80 }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    { hue: '#4e99cc' },
                    { saturation: 50 }
                ]
            }
            ,{
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [
                    { visibility: 'off' }
                ]
            }
        ]
    });

    var image = 'images/marker.png';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ochrona Praw Pacjenta',
        animation: google.maps.Animation.DROP,
        icon: image
    });
=======
/* ----- google map ----- */
function initMap() {

    var myLatLng = {lat: 54.3023662, lng: 18.5851282};

    var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        disableDefaultUI: true,
        scrollwheel: true,
        draggable: true,
        disableDoubleClickZoom: true,
        zoomControl: false,

        zoom: 15,
        styles: [
            {
                featureType: 'all',
                stylers: [
                    { hue: '#4e99cc' },
                    { saturation: -80 }
                ]
            },
            {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [
                    { hue: '#4e99cc' },
                    { saturation: 50 }
                ]
            }
            ,{
                featureType: 'poi.business',
                elementType: 'labels',
                stylers: [
                    { visibility: 'off' }
                ]
            }
        ]
    });

    var image = 'images/marker.png';
    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Ochrona Praw Pacjenta',
        animation: google.maps.Animation.DROP,
        icon: image
    });
>>>>>>> dc86dc378ca3c81b16a8406e7182e19daad65403
}