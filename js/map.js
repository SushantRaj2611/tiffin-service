function initMap() {

  // Tiffin shop location (change kar lena)
  const shop = { lat: 28.6139, lng: 77.2090 }; // Delhi example

  navigator.geolocation.getCurrentPosition(position => {

    const user = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };

    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 13,
      center: user
    });

    // User marker
    new google.maps.Marker({
      position: user,
      map: map,
      label: "You"
    });

    // Bike / delivery marker
    new google.maps.Marker({
      position: shop,
      map: map,
      icon: "https://img.icons8.com/color/48/bike.png"
    });

    // Distance calculate
    const distance = getDistance(user, shop);

    document.getElementById("distance").innerText =
      "Delivery Distance: " + distance.toFixed(2) + " km";

  });

}

// Distance function
function getDistance(loc1, loc2) {
  const R = 6371;

  const dLat = (loc2.lat - loc1.lat) * Math.PI / 180;
  const dLng = (loc2.lng - loc1.lng) * Math.PI / 180;

  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(loc1.lat * Math.PI / 180) *
    Math.cos(loc2.lat * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  return R * c;
}

// Page load hone par map run hoga
window.onload = initMap;