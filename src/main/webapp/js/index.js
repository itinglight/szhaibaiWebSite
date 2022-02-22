



$(function () {
    $(".banner input[type='radio']:nth-of-type(1)").attr("checked", true);
    // 加载首页商品

    findProductByKinds("溶剂型清洗剂")
})





//轮播图

$(".banner .controls-left").click(function () {
    var button;
    if($(".banner input[type='radio']:nth-of-type(1)").is(':checked')){
        button="button1"
    }
    if($(".banner input[type='radio']:nth-of-type(2)").is(':checked')){
        button="button2"
    }
    if($(".banner input[type='radio']:nth-of-type(3)").is(':checked')){
        button="button3"
    }
    // alert(button)
    switch (button) {
        case "button1":
            $(".banner input[type='radio']:nth-of-type(1)").attr("checked", false);
            $(".banner input[type='radio']:nth-of-type(3)").attr("checked", true);
            break;
        case "button2":
            $(".banner input[type='radio']:nth-of-type(2)").attr("checked", false);
            $(".banner input[type='radio']:nth-of-type(1)").attr("checked", true);
            break;
        case "button3":
            $(".banner input[type='radio']:nth-of-type(3)").attr("checked", false);
            $(".banner input[type='radio']:nth-of-type(2)").attr("checked", true);
            break;
    }

  
})

$(".banner .controls-right").click(function () {
    var button;
    if($(".banner input[type='radio']:nth-of-type(1)").is(':checked')){
        button="button1"
    }
    if($(".banner input[type='radio']:nth-of-type(2)").is(':checked')){
        button="button2"
    }
    if($(".banner input[type='radio']:nth-of-type(3)").is(':checked')){
        button="button3"
    }
    // alert(button)

    switch (button) {
        case "button1":
            $(".banner input[type='radio']:nth-of-type(1)").attr("checked", false);
            $(".banner input[type='radio']:nth-of-type(2)").attr("checked", true);
            break;
        case "button2":
            $(".banner input[type='radio']:nth-of-type(2)").attr("checked", false);
            $(".banner input[type='radio']:nth-of-type(3)").attr("checked", true);
            break;
        case "button3":
            $(".banner input[type='radio']:nth-of-type(3)").attr("checked", false);
            $(".banner input[type='radio']:nth-of-type(1)").attr("checked", true);
            break;
    }
})
//切换热门商品
$(".index_hot_product .button-left").click(
    function(){
        alert("left")
    }
)

$(".index_hot_product .button-right").click(
    function(){
        alert("right")
    }
)

// 商品导航栏
$(".index_product .container li").click(
    function () {
        //先清空元素
        $(".index_product .container main ").empty()

        //根据标题内容显示元素
        var kinds = $(".index_product .container li:hover").text();

        // alert(kinds)
        findProductByKinds(kinds);

        // 将商品展示出来
        $(".index_product .container main ")
    }
)
//根据种类查找商品

function findProductByKinds(kinds) {
    var geturl = "http://47.94.154.2/findProductByKinds?kinds=" + kinds;
    $.ajax({
        url: geturl,
        dataType: 'json',
        type: "get",
        async: true,
        success: function (data) {
            var Json = JSON.stringify(data)
            // alert(JSON.stringify(data));

            console.log(Json)
            for (let i = 0; i <= data.length; i++) {
                console.log(data[i]);
                addCard(data[i])
            }
        }

    });


}

function addCard(product) {
    var text = "<div class='product_container'> <div id='img'><img src='" + product.imgUrl + "'></div><span>" + product.name + "</span>";
    $(".index_product .container main ").append(text);
}
