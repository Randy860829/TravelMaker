fetch('./map0331/mapcenter.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        for (let i = 0; i < myJson.length; i++) {
            tainanAreas[myJson[i].mcName] = myJson[i].mcPosition
        }
    });
fetch('./map0331/attraction.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        for (let i = 0; i < myJson.length; i++) {
            areaAttractions.push([myJson[i].attractionDistrict, myJson[i].attrName, myJson[i].position, myJson[i].attractionInfo])
        }
        console.log(myJson)
    });