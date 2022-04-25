function displayOnMap(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // Let's use Google Maps to display the location

    const exactLocation = latitude + longitude;
    console.log(exactLocation);
}



const geobutton = document.getElementById("geobutton");
geobutton.addEventListener('click', determineLocation);


console.log("The code is working!");