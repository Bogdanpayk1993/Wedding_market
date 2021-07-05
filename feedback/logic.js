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


function feedback() {
    var body = document.getElementById("Body")
    var language = body.getAttribute("language")

    let userName = document.getElementById("userName")
    let userPhone = document.getElementById("userPhone")
    let userEmail = document.getElementById("userEmail")
    let userMessage = document.getElementById("userMessage")

    if (userName.value != "" && userPhone.value != "" && userEmail.value != "" && userMessage.value != "") {
        let userDate = {
            userName: userName.value,
            userPhone: userPhone.value,
            userEmail: userEmail.value,
            userMessage: userMessage.value
        }

        let service_id = "gmail"
        let template_id = "template_nX8BTPGS"
        let user_id = "user_i05opLh3d3XKKsDSWbnDS"
        
        //emailjs.send(service_id, template_id, userDate, user_id)

        outputting_message(body, language)

        userName.value = ""
        userPhone.value = ""
        userEmail.value = ""
        userMessage.value = ""

        userName.style.borderColor = ""
        userPhone.style.borderColor = ""
        userEmail.style.borderColor = ""
        userMessage.style.borderColor = ""
    }
    else {
        if (userName.value == "") {
            userName.style.borderColor = "rgba(202,1,13,1)"
        }
        else {
            userName.style.borderColor = ""
        }
        if (userPhone.value == "") {
            userPhone.style.borderColor = "rgba(202,1,13,1)"
        }
        else {
            userPhone.style.borderColor = ""
        }
        if (userEmail.value == "") {
            userEmail.style.borderColor = "rgba(202,1,13,1)"
        }
        else {
            userEmail.style.borderColor = ""
        }
        if (userMessage.value == "") {
            userMessage.style.borderColor = "rgba(202,1,13,1)"
        }
        else {
            userMessage.style.borderColor = ""
        }
    }
}

function outputting_message(body, language) {
    var div = document.createElement("div")
    div.setAttribute("id", "message")

    var div_1 = document.createElement("div")

    var p = document.createElement("p")
    p.innerText = messages[language]
    
    div_1.appendChild(p)
    
    var button = document.createElement("button")
    button.innerText = "Ok"
    button.setAttribute("onclick", "closed_message()")

    div_1.appendChild(button)
    div.appendChild(div_1)

    body.appendChild(div)
}

function closed_message() {
    var message = document.getElementById("message")
    message.remove()
}

var messages = {
    ukraine: "Ваше повідомлення надіслане, наш оператор зв'яжеться з вами протягом доби.",
    russia: "Ваше сообщение отправленно, наш оператор свяжется с вами в течение суток.",
    english: "Your message was sent, our operator contact with you during twenty-four hour.",
    slovakia: "Vaša správa bola odoslaná, náš operátor vás bude kontaktovať do 24 hodín.", 
    hungary: "Üzenetét elküldtük, üzemeltetőnk 24 órán belül felveszi Önnel a kapcsolatot."
}