window.οnlοad = function () {
    findProductByKinds("溶剂型清洗剂");
}

$(function () {
    $(".banner input[type='radio']:nth-of-type(1)").attr("checked", true);
    // 加载首页商品

    findProductByKinds("溶剂型清洗剂");

})




//轮播图

$(".banner .controls-left").click(function () {
    var button;
    if ($(".banner input[type='radio']:nth-of-type(1)").is(':checked')) {
        button = "button1"
    }
    if ($(".banner input[type='radio']:nth-of-type(2)").is(':checked')) {
        button = "button2"
    }
    if ($(".banner input[type='radio']:nth-of-type(3)").is(':checked')) {
        button = "button3"
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
    if ($(".banner input[type='radio']:nth-of-type(1)").is(':checked')) {
        button = "button1"
    }
    if ($(".banner input[type='radio']:nth-of-type(2)").is(':checked')) {
        button = "button2"
    }
    if ($(".banner input[type='radio']:nth-of-type(3)").is(':checked')) {
        button = "button3"
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
    function () {
        // alert("left")
        console.log("left")
    }
)

$(".index_hot_product .button-right").click(
    function () {
        // alert("right")
        console.log("right")
    }
)

// 商品导航栏
$(".index_product .container li").click(
    function () {
        //先清空元素
        $(".index_product .container main ").empty()

        //替换标题内容
        var kinds = $(".index_product .container li:hover").text();

        // 根据标题内容显示元素
        findProductByKinds(kinds);


        // 将商品展示出来
        $(".index_product .container main ")
        // imageLoading();
    }
)
//根据种类查找商品

function findProductByKinds(kinds) {
    var geturl = "https://www.szhaibai.cn/findProductByKinds?kinds=" + kinds;
    $.ajax({
        url: geturl,
        dataType: 'json',
        type: "get",
        async: true,
        success: function (data) {
            var Json = JSON.stringify(data)
            // console.log(data)
            // console.log(data.length)
            for (let i = 0; i < data.length; i++) {
                addCard(data[i]);
                if (i === data.length - 1) {
                    imageLoading();
                }
            }
        },
        failure: function () {
            imageLoading();
        }

    });


}

function addCard(product) {
    if (typeof (product) !== 'undefined') {
        var text = "<div class='product_container'> <div id='img'><img data-src='" + product.imgUrl + "' alt='工业酒精'></div><span>" + product.name + "</span>";
        $(".index_product .container main ").append(text);
    }

}

//图片懒加载

function imageLoading() {
    const images = document.querySelectorAll('img');
    // const images =$("img");
    // console.log("images:"+images)
    const callback = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const image = entry.target;
                const data_src = image.getAttribute('data-src');
                if (data_src != null) {
                    image.setAttribute('src', data_src);
                    image.removeAttribute('data-src');
                }
                Observer.unobserve(image);
                // console.log("触发")
            }
        })
    }
    const Observer = new IntersectionObserver(callback);

    Array.from(images).forEach(image => {
        Observer.observe(image);
    })

}