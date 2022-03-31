let map;
let town;
let clickIndex;
let oldClickIndex;
const tainanAreas = {};
const areaAttractions = [];
const directionsPoints = {};
var attractionData = {};
const mode = 0;
var travelMode;

function initMap() {
    addScript("./map0331/distance.js");
    addScript("./map0331/getAttractionData.js");
    addScript("./map0331/setMarkerOnAll.js");
    addScript("./map0331/calculateAndDisplayRoute.js");
    addScript("./map0331/polygon.js");



    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        polylineOptions: {
            strokeColor: "red",
            strokeWeight: 5,
            suppressMarkers: true,
        }
    });

    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 11,
        center: { lat: 23.126094, lng: 120.2971195 },
        //disableDefaultUI: true,
        gestureHandling: 'none', //不能拖曳、放大縮小
        zoomControl: true,
        zoomControlOptions: {
            position: 1,
        },
        scaleControl: true,
        mapTypeControl: false,

        streetViewControl: false,
        rotateControl: false,
        fullscreenControl: false
    });



    const onChangeHandler = function() {
        if (attractionNameArray.length >= 2) {
            calculateAndDisplayRoute(directionsService, directionsRenderer);
            directionsRenderer.setMap(map);

            distance();
            getAttractionData(attractionShowArray);

            addScript("postAttractionData.js");
        } else {
            directionsRenderer.setMap(null);
        }

    };




    //document.getElementById("start").addEventListener("click", onChangeHandler);
    //console.log(attractionNameArray);
    setCookie(123, 456);


    //addScript("cookie.js")
}

function addScript(url) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', url);
    document.body.appendChild(script);
}

function setCookie(name, value) {
    var Days = 30; //此 cookie 將被儲存 30 天
    var exp = new Date(); //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
    document.cookie = name + "=" + value + ";expires=" + exp.toGMTString();
}

function getAttractionData(attractionShowArray) {

    attractionData['attractionList'] = attractionShowArray;


    console.log(attractionData)
    return attractionData;
}