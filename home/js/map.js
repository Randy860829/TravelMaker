$(function(){
    //$(".right_box .citys>ul").hide();
    //$(".right_box").hide();
    
    //網頁刷新後消失
    $(".cityAA").hide();
    $(".cityBB").hide();
    $(".city_box").hide();
    // $(".sortable div").hide();

    // $(".right_box>.city").click(function(){
    //     $(this).siblings(".citys").children("ul").show();
    // });
    $(".city").click(function(){
        // $(".city_box .citys>ul").toggle();
        $(".city_box").toggle();
    });

    $(".city_box").click(function(){
        $(".city").hide();
        $(".city_box").hide();
        $(".cityAA").show();
        $(".cityBB").show();
    });

    $(".cityAA").click(function(){
        $(".cityAA").hide();
        $(".cityBB").hide();
        $(".city").show();
        $(".city_box").show();
    });

    // $(".city").click(function(){
    //     $(".city").hide();
    //     $(".city_box").hide();
    // });
    

    // $(".city_box .citys>ul").click(function(){
    //     $(".city_box .citys>ul").hide();
    //     $(".main_box_bgc>.city").hide();
    //     $(".cityAA").show();
    //     $(".main_box_bgc .cityBB ").show();
    // })

    $(".citys2>ul>li").click(function(){
        var index = $(this).index();
        console.log(index);
    })

    //點擊右上叉叉，移除某個點的地標訊息
    $(".title_box > i").click(function(){
        let index = $(this).parents(".left_box").index();
        console.log(index);
        $(this).parents(".left_box").remove();
    });

    //拖曳效果
    $(".left_content").sortable({
        revert: true
    });

    //摺疊內容
    // $(".sortable").accordion();

    
   

    
    
    

    // $(".right_box>.city").mouseout(function(){
    //     $(this).siblings(".citys").children("ul").hide();
    // })
    //var index = $(this).index();
    // $(".banner .right li").click(function(){
    //     var index = $(this).index();
    //     //console.log(index);
    //     // if(index === 0){
    //     //     $(".main").children(".main_map").addClass("add1");
    //     // }
    //     // else{
    //     //     $(".main").children(".main_map").addClass("add2");
    //     // }
    //     switch (index){
    //         case 0:
    //             $(".main").children(".main_map").addClass("add1");
    //             console.log(index);
    //             break;
    //         case 1:
    //             $(".main").children(".main_map").addClass("add2");
    //             console.log(index);
    //             break;
    //     }
    // })
})

// $(function(){
//     $("#sortable").sortable();
// });

// $(function() {
//     $("#sortable").sortable({
//       //當元素拖拽結束後，元素回到原來的位置
//       revert: true
//     });
//     $("#draggable").draggable({
//       //允許draggable被拖拽到指定的sortables中，如果使用此選項helper屬性必須設置成clone才能正常工作。
//       connectToSortable: "#sortable",
//       helper: "clone",

//       revert: "invalid"
//     });
//     //$("ul, li").disableSelection();//如果要使文字不可選擇，這很有用
// });


