function getZips() {
    var zipcode= prompt("Please enter zip code");



    var cityElement = document.getElementById("city");
    var stateElement = document.getElementById("state");
  
    var client = new XMLHttpRequest();
    client.open("GET", "http://api.zippopotam.us/us/" + zipcode)
    client.onreadystatechange = function() {
      if (this.readyState == 4) {
          console.log("hello");
          console.log(this);
        // document.getElementById("result").innerHTML = 
        //   JSON.stringify(JSON.parse(client.responseText), null, 4);
        const parsedGeoData = JSON.parse(this.response);
        console.log(parsedGeoData);
        const city = parsedGeoData.places[0]['place name'];
        const state = parsedGeoData.places[0].state;
        cityElement.innerText = city;
        stateElement.innerText = state;
        console.log(stateElement);
        console.log(cityElement);
      };
    };
    client.send();
    return false;

}
  