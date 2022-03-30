fetch('http://20.222.89.212/api/travel/gettravel')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);
    });