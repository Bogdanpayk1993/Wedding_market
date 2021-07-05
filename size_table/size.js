window.onload = function() {
    background_size()
}

window.onresize = function() {
    background_size()
}

function background_size() {
    var width_w = innerWidth
    var height_w = innerHeight

    var img = document.createElement("img")
    img.src = "../image/fon.jpg"
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

move = (number) => {
    var size = document.getElementsByClassName(number)
    for (let i = 0; i < size.length; i++) {
        size[i].style.backgroundColor = "rgba(202, 1, 13, 1)"
        size[i].style.color = "white"
    }
}

out = (number) => {
    var size = document.getElementsByClassName(number)
    for (let i = 0; i < size.length; i++) {
        if (i % 2 == 0) {
            size[i].style.backgroundColor = "rgba(0, 0, 0, 0)"
        } else {
            size[i].style.backgroundColor = "rgba(0, 0, 0, 0)"
        }
        size[i].style.color = "black"
    }
}