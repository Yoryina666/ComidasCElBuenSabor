var latitud, longuitud;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarUbicacion);
} else {
    window.confirm("Lo sentimos no pudimos acceder a su ubicación");
}

function mostrarUbicacion(ubicacion) {
    latitud = ubicacion.coords.latitude;
    longuitud = ubicacion.coords.longitude;
    initMap();
}

function initMap() {
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const directionsService = new google.maps.DirectionsService();
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: { lat: 9.996270163055726, lng: -84.24224062049385 },
    });
    directionsRenderer.setMap(map);
    calculateAndDisplayRoute(directionsService, directionsRenderer);
}

  function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    directionsService.route(
      {
        origin: { lat: latitud, lng: longuitud },
        destination: { lat: 9.996270163055726, lng: -84.24224062049385 },
    
        travelMode: google.maps.TravelMode["DRIVING"],
      },
      (response, status) => {
        if (status == "OK") {
          directionsRenderer.setDirections(response);
        } else {
          window.alert("Directions request failed due to " + status);
        }
      }
    );
  }