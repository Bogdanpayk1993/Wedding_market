window.onload = function () {
    $.getJSON(`data.json`, function (data) {
        show_goods(data)
    })
}

window.onresize = function () {
    my_onresize()
}

function show_goods(goods) {
    var goods_name = Object.keys(goods).reverse()

    var body = document.getElementById("Body")

    my_onresize()

    goods_name.map((el, i) => {
        var div = document.createElement("div")
        div.setAttribute("class", "goods")

        var imgs = goods[el].split(",")

        var img = document.createElement("img")
        img.setAttribute("src", `./image/${imgs[0]}`)
        div.appendChild(img)

        var div_1 = document.createElement("div")
        div_1.setAttribute("onclick", `zoom_in("${imgs}")`)

        var h2 = document.createElement("h2")
        h2.innerText = goods_name[i]

        div_1.appendChild(h2)

        div.appendChild(div_1)

        body.appendChild(div)
    })
}

function zoom_in(imgs) {
    var body = document.getElementById("Body")

    var imgs_1 = imgs.split(",")

    var div = document.createElement("div")
    div.setAttribute("id", "big_img")
    div.setAttribute("class", "big_img")

    if (imgs_1.length == 1) {
        var div_1 = document.createElement("div")
        div_1.setAttribute("class", "zoom")

        var img = document.createElement("img")
        img.setAttribute("src", `./image/${imgs_1[0]}`)
        img.setAttribute("id", "myimage_0")
        img.setAttribute("onmouseover", `magnify("myimage_0", 2)`)

        div_1.appendChild(img)
        div.appendChild(div_1)
    } else {
        var div_1 = document.createElement("div")
        div_1.setAttribute("id", "carouselExampleIndicators")
        div_1.setAttribute("class", "carousel slide")
        div_1.setAttribute("data-ride", "carousel")

        var ol = document.createElement(ol)
        ol.setAttribute("class", "carousel-indicators")

        for (let i = 0; i < imgs_1.length; i++) {
            var li = document.createElement("li")
            li.setAttribute("data-target", "#carouselExampleIndicators")
            li.setAttribute("data-slide-to", `${i}`)
            if (i == 0) {
                li.setAttribute("class", "active")
            }
            ol.appendChild(li)
        }

        div_1.appendChild(ol)

        var div_2 = document.createElement("div")
        div_2.setAttribute("class", "carousel-inner")

        for (let i = 0; i < imgs_1.length; i++) {
            var div_3 = document.createElement("div")
            if (i == 0) {
                div_3.setAttribute("class", "carousel-item active")
            } else {
                div_3.setAttribute("class", "carousel-item")
            }

            var div_4 = document.createElement("div")
            div_4.setAttribute("class", "zoom")

            var img = document.createElement("img")
            img.setAttribute("src", `./image/${imgs_1[i]}`)
            img.setAttribute("id", `myimage_${i}`)
            img.setAttribute("onmouseover", `magnify("myimage_${i}", 2)`)

            div_4.appendChild(img)

            div_3.appendChild(div_4)

            div_2.appendChild(div_3)
        }
        div_1.appendChild(div_2)

        var a_1 = document.createElement("a")
        a_1.setAttribute("class", "carousel-control-prev")
        a_1.setAttribute("href", "#carouselExampleIndicators")
        a_1.setAttribute("role", "button")
        a_1.setAttribute("data-slide", "prev")

        var span_1 = document.createElement("span")
        span_1.setAttribute("class", "carousel-control-prev-icon")
        span_1.setAttribute("aria-hidden", "true")
        a_1.appendChild(span_1)

        div_1.appendChild(a_1)

        var a_2 = document.createElement("a")
        a_2.setAttribute("class", "carousel-control-next")
        a_2.setAttribute("href", "#carouselExampleIndicators")
        a_2.setAttribute("role", "button")
        a_2.setAttribute("data-slide", "next")

        var span_2 = document.createElement("span")
        span_2.setAttribute("class", "carousel-control-next-icon")
        span_2.setAttribute("aria-hidden", "true")
        a_2.appendChild(span_2)

        div_1.appendChild(a_2)

        div.appendChild(div_1)
    }

    var p = document.createElement("p")
    p.innerText = '\u00D7'
    p.setAttribute("onclick", "zoom_out()")
    div.appendChild(p)

    body.appendChild(div)
}

function zoom_out() {
    var big_img = document.getElementById("big_img")
    big_img.remove()
}

function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);

    var img_magnifier_glass = document.getElementById("img-magnifier-glass")
    if (img_magnifier_glass != null)
    {
        img_magnifier_glass.remove()
    }

    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass")
    glass.setAttribute("id", "img-magnifier-glass")

    img.parentElement.insertBefore(glass, img);

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;

    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);

    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
        var pos, x, y;

        e.preventDefault();

        pos = getCursorPos(e);
        x = pos.x;
        y = pos.y;

        if (x > img.width - (w / zoom)) { x = img.width - (w / zoom); }
        if (x < w / zoom) { x = w / zoom; }
        if (y > img.height - (h / zoom)) { y = img.height - (h / zoom); }
        if (y < h / zoom) { y = h / zoom; }

        glass.style.left = (x - w) + "px";
        glass.style.top = (y - h) + "px";


        glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
        var a, x = 0, y = 0;
        e = e || window.event;

        a = img.getBoundingClientRect(); 

        x = e.pageX - a.left;
        y = e.pageY - a.top;

        x = x - window.pageXOffset;
        y = y - window.pageYOffset;
        return { x: x, y: y };
    }
}

function my_onresize() {
    var width_w = innerWidth
    var height_w = innerHeight

    var img = document.createElement("img")
    img.src = "../../image/fon.jpg"
    var width_i = img.width
    var height_i = img.height

    var body = document.getElementById("body")

    if ((width_w / height_w) < (width_i / height_i)) {
        body.setAttribute("style", "background-size: auto 100%; background-position-x: 60%;")
    } else {
        body.setAttribute("style", "background-size: 100%")
    }

    var Body = document.getElementById("Body")

    if (width_w > 600) {     
        var screenWeight = window.innerWidth
        var screenHeight = window.innerHeight - (screenWeight / 100 * 16)

    } else {
        var screenWeight = window.innerWidth
        var screenHeight = window.innerHeight - (screenWeight / 100 * 25) 
    }
    Body.setAttribute("style", `height:${screenHeight}px;`)
}

