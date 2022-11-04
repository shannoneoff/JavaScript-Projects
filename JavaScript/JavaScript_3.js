function displayType(ride) {
    var rideType = ride.getAttribute("data-ride-name");
    alert(rideType + " has a " + ride.innerHTML + " theme!");
}