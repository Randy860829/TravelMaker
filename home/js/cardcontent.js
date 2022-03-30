function sliderInit() {
    $('.mycarousel').slick({

        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
}

fetch('./attractions.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        $.each(myJson, function(key, attractions) {

            $("<div/>", {


                "class": "card ",
                "id": `${attractions.attr_Id}`,


            }).appendTo("#hotActive");

            $("<a/>", {
                "href": "https://www.google.com.tw/?hl=zh_TW"
            }).appendTo(`#${attractions.attr_Id}`);

            $("<div/>", {
                "class": "overlap",
            }).appendTo(`#${attractions.attr_Id}>a`);

            $("<div/>", {

                "class": "cardImg",

            }).appendTo(`#${attractions.attr_Id}`);

            $("<img/>", {
                "src": "https://pic.pimg.tw/anrine910070/1603330842-626939543-g.jpg"
            }).appendTo(`#${attractions.attr_Id}`);
            $("<div/>", {


                "class": "card-body",

            }).appendTo(`#${attractions.attr_Id}`);

            $("<h5/>", {


                "class": "card-text",
                "text": `${attractions.attrName}`

            }).appendTo(`#${attractions.attr_Id}>.card-body`);

            $("<h5/>", {



                "text": "TWD 300"

            }).appendTo(`#${attractions.attr_Id} >.card-body`);
        })
        sliderInit()

    });