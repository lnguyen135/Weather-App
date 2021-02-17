function getZips() {
    var zipcode = prompt("Please enter zip code");

    const url = 'http://api.zippopotam.us/us/' + zipcode;
    let longitude = 0.0;
    let latitude = 0.0;
    var urlApi = new XMLHttpRequest();
    urlApi.onreadystatechange = function () {
        if (this.readyState == 4) {
            const parsedGeoData = JSON.parse(urlApi.responseText);
            console.log('parsed geo data')
            console.log({parsedGeoData})
            const city = parsedGeoData.places[0]['place name'];
            const state = parsedGeoData.places[0]['state'];
            const postCode = zipcode;
            console.log({postCode})
           
          console.log(this);
            longitude = parseFloat(parsedGeoData.places[0].longitude);
            latitude = parseFloat(parsedGeoData.places[0].latitude);
            document.getElementById('citystate').innerHTML = `${city}, ${state}`;
            document.getElementById('zipcode').innerHTML = `zipcode: ${postCode}`;

            console.dir(parsedGeoData);
            console.dir(longitude);
            console.dir(latitude);

            weatApi.open('GET', `http://www.7timer.info/bin/api.pl?lon=${longitude}&lat=${latitude}&product=civillight&output=json`);
            weatApi.send();
        }
    };
    urlApi.open('Get', url);
    urlApi.send();

    var weatApi = new XMLHttpRequest();
    weatApi.onreadystatechange = function () {
        if (weatApi.readyState == 4) {
            const weat = JSON.parse(weatApi.responseText);
            console.log({weat})
            const dataseries = weat.dataseries[0]['temp2m'];
            const dataseriesMin = dataseries.min;
            const dataseriesMax = dataseries.max;
            const dataseriesWeather = weat.dataseries[0]['weather'];
            const FahMin = parseFloat(dataseries.min * 9 / 5 + 32).toFixed(0);
            const FahMax = parseFloat(dataseries.max * 9 / 5 + 32).toFixed(0);


            console.dir(weat);
            console.dir(dataseries);
            console.dir(FahMin);
            console.dir(FahMax);
            console.dir(dataseries.Max);
            console.dir(dataseries.Min);
            console.dir(dataseriesWeather);
            document.getElementById('weather').innerHTML = `${dataseriesWeather} ${FahMin}F`;
            let image = document.getElementById('image');
            image.src = 'http://www.7timer.info/bin/civillight.php?lon=-118.407&lat=34.09&lang=en&ac=0&unit=metric&tzshift=0';
            

        }
    };
   
}









