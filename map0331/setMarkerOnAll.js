const labels = "";
let labelIndex = 0;
let markers = [];
let attractionNameArray = [];
let attractionShowArray = [];
let travelCount = 0;
var tempAttractionId;
var divAttractionNameArray = [];

function setMarkers(map, infowindowAreas, areaName) {


    deleteMarkers();
    // const shape = {
    //   coords: [1, 1, 1, 20, 18, 20, 18, 1],
    //   type: "poly",
    // };


    for (let i = 0; i < areaAttractions.length; i++) {
        if (areaAttractions[i][0] == areaName) {
            //const attractionName = areaAttractions[i][0];
            const attraction = areaAttractions[i][2].split(', ');
            //console.log(areaAttractions[i])
            const marker = new google.maps.Marker({
                position: { lat: Number(attraction[0]), lng: Number(attraction[1]) },
                map,
                animation: google.maps.Animation.DROP
                    //label: labels[labelIndex++ % labels.length],
                    //icon: image,
                    //title: areaAttractions[i][1],
                    //shape: shape,
                    //title: attraction[0],
            })

            marker.addListener("mouseover", () => {
                infowindowAreas.setContent('<h2>' + areaAttractions[i][1] + '</h2>' +
                    //'<p>'+ areaAttractions[i][3]+'<p>'
                    '<img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Simple_icon_time.svg">'
                );
                infowindowAreas.open({
                    anchor: marker,
                    map,
                    shouldFocus: false,
                });
            });
            marker.addListener("mouseout", () => {
                infowindowAreas.setPosition(null);
            });
            marker.addListener("click", (e) => {


                //0331
                tempAttractionId = areaAttractions[i][1];
                //console.log(tempAttractionId);


                if (attractionNameArray.indexOf(areaAttractions[i][1]) > -1) {
                    const index = attractionNameArray.indexOf(areaAttractions[i][1]);
                    attractionNameArray.splice(index, 1);


                    attractionShowArray.splice(index, 1);
                    //console.log(attractionNameArray);
                } else {
                    attractionNameArray.push(areaAttractions[i][1]);
                    attractionShowArray.push(
                        [areaAttractions[i][1], areaAttractions[i][2]]
                    );
                }
                //console.log(attractionNameArray);

                //0330_把attractionNameArray的資料抓到creatediv方法裡面
                creatediv();

                //marker.setLabel(attractionNameArray.length.toString());

            });
            markers.push(marker);
        }
    }
}


function setMapOnAll(map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

function hideMarkers() {
    setMapOnAll(null);
}

function deleteMarkers() {
    hideMarkers();
    markers = [];
}

// 0330_動態生成左邊小區塊
var i = -1;

function creatediv() { //參數 creatediv(data) = creatediv(attractionNameArray)
    i += 1;
    divAttractionNameArray.push(tempAttractionId);
    console.log(divAttractionNameArray)
        //console.log(data)
        //if (divAttractionNameArray.indexOf() == -1) {//-1表示，陣列裡面找不到
        // alert(777);
        //divAttractionNameArray.push(tempAttractionId);


    //alert('沒有重複的資料');

    // 建立最裡層父級<div>
    //在<div>標籤裡面添加class屬性，<div class="title_box"></div>
    var title_box = $('<div></div>');
    title_box.addClass('title_box');

    // 建立子級<p>
    // 在<p>標籤裡面添加class屬性，<p class="title"></p>
    var title = $('<p></p>');
    title.addClass('title');

    //把抓到的值，丟到html裡面的內容
    title.html(divAttractionNameArray[i]);

    //var name = data[i];

    // 建立子級<i>
    // 在<i>標籤裡面添加class屬性，<i class="fa-solid fa-xmark"></i>
    var x = $('<i></i>');
    x.addClass('fa-solid fa-xmark');

    // 將子級<p>,<i>標籤加到最裡層父級<div>
    title.appendTo(title_box);
    x.appendTo(title_box);

    // 建立第二個<p>標籤
    // 在<p>標籤裡面添加class屬性，<p class="content"></p>
    var content = $('<p></p>');
    content.addClass('content');

    // 建立最外層父級<div>
    // 在最外層父級<div>標籤裡面添加class屬性，<div class="left_box"></div>
    var left_box = $('<div></div>');
    left_box.addClass('left_box');

    // 最後將子級<div>,<p>新增到最外層父級<div>
    title_box.appendTo(left_box);
    content.appendTo(left_box);

    // 把<div class="left_box">標籤添加到<div class="left_content">標籤裡面
    left_box.appendTo('.left_content');

    //動態添加id屬性
    //先用querySelectorAll選取全部，class屬性名為left_box的標籤
    //再用 .setAttribute('id', ""+ 變數 +""); 添加id屬性及屬性名
    var createID = document.querySelectorAll('.left_box');
    createID[i].setAttribute('id', "" + i + "");

    var createIid = document.querySelectorAll('.fa-xmark');
    createIid[i].setAttribute('id', "i" + i + "");


    //0331
    //動態生成div之後，執行這段的jQuery程式碼
    $(function() {
            //點擊叉叉按鈕時，刪除該區塊
            $("#i" + i + "").click(function() {
                //當點擊叉叉按鈕時，找出<div class="left_box"><div>裡面id的屬性值
                var index_id = $(this).parents(".left_box").attr('id');

                //當點擊叉叉按鈕時，找出該title的文字內容
                var name = $(this).siblings().html();
                //console.log(name);

                //在陣列中找尋該文字的索引值為多少
                var nums = divAttractionNameArray.indexOf(name);
                //console.log(nums);

                //找到該文字索引值之後，用splice()從陣列中刪除該文字
                divAttractionNameArray.splice(nums, 1);

                //移除被選中的整個小區塊
                $(this).parents(".left_box").remove();

                //移除一個區塊，因此i也必須減1
                i = i - 1;
                //console.log(i)
                console.log(divAttractionNameArray);
            });
        })
        //console.log(i);
        //console.log(data);
        //}

    if (divAttractionNameArray[i - 1] == divAttractionNameArray[i]) {
        divAttractionNameArray.splice(i, 1);
        console.log(divAttractionNameArray)

        //0331
        //動態生成div之後，執行這段的jQuery程式碼
        $(function() {
            //點擊叉叉按鈕時，刪除該區塊
            $("#i" + i + "").click(function() {
                //當點擊叉叉按鈕時，找出<div class="left_box"><div>裡面id的屬性值
                var index_id = $(this).parents(".left_box").attr('id');

                //當點擊叉叉按鈕時，找出該title的文字內容
                var name = $(this).siblings().html();
                //console.log(name);

                //在陣列中找尋該文字的索引值為多少
                var nums = divAttractionNameArray.indexOf(name);
                //console.log(nums);

                //找到該文字索引值之後，用splice()從陣列中刪除該文字
                divAttractionNameArray.splice(nums, 1);

                //移除被選中的整個小區塊
                $(this).parents(".left_box").remove();

                //移除一個區塊，因此i也必須減1
                i = i - 1;
                //console.log(i)
                console.log(divAttractionNameArray);
            });
        })
    }

    // if(divAttractionNameArray.indexOf(tempAttractionId) != -1) {
    //   divAttractionNameArray.splice(i, 1);
    //   console.log(divAttractionNameArray);
    // }

    //拖曳效果
    $(".left_content").sortable({
        start: function(event, ui) {
            var start_pos = ui.item.index();
            //ui.item.data('startIndex', start_pos);
            //console.log(start_pos)
            var nameId = $(this).children(".fa-xmark").html();
            console.log(nameId);

        },
        //   change: function(event, ui) {
        //     var start_pos = ui.item.data('startIndex');
        //     var index = ui.placeholder.index();
        //     index = (start_pos > index) ? index : index - 1; 
        //     // $(".left_content").append(start_pos + ' ' + index + '<br>');
        //     ui.item.data('startIndex', index);
        //     //console.log(start_pos, index);
        //   },
        revert: true
    });

}

$(function() {
    $(".left_box").change(function() {
        alert(77);
    })
})