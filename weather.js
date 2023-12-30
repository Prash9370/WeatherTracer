let wdata = {};
function getData(location) {
    if (location != "") {

        fetch("http://api.weatherapi.com/v1/current.json?key=53cf5e773aac4ac7a7975920233012&q=" + location + "&aqi=no")
            .then(response => response.json())
            .then((json) => {
                wdata = json;
                document.getElementsByClassName("weatherdt")[0].style.display = "block";
                document.getElementById("weatherimg").style.display = "none";
                document.getElementById("weatherimg2").style.display = "block";
                updateWeatherData();
            })
            .catch((error) => {
                if (error == "TypeError: Cannot read properties of undefined (reading 'name')") {
                    alert("Enter a valid Location");
                } else {
                    alert(error);
                }
            });
    } else {
        alert("No Location Specified");
    }
}

function updateWeatherData() {
    document.getElementById("loctitle").innerText = wdata.location.name;
    document.getElementById("reg").innerText = wdata.location.region;
    document.getElementById("country").innerText = wdata.location.country;
    document.getElementById("lt").innerText = wdata.location.lat + "° N  ";
    document.getElementById("lg").innerText = wdata.location.lon + "° E";
    document.getElementById("date").innerText = wdata.location.localtime;
    document.getElementById("temp").innerText = wdata.current.temp_c;
    document.getElementById("DorN").innerText = DN(wdata.current.is_day);
    document.getElementById("condition").innerText = wdata.current.condition.text;
    document.getElementById("cdimg").src = wdata.current.condition.icon;
    document.getElementById("Wind").innerText = wdata.current.wind_kph;
    document.getElementById("rain").innerText = wdata.current.precip_mm;
    document.getElementById("humidity").innerText = wdata.current.humidity;

}
function DN(code) {
    if (code == 1) {
        return "Day";
    } else {
        return "Night";
    }
}
function iptsearch(event, location) {
    if (event.keyCode === 13) {
        getData(location);
        event.preventDefault();
    }
}