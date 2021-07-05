window.onload = function () {
    var body = document.getElementById("Body")
    var language = body.getAttribute("language")
    my_onresize()
    if (window.innerWidth > 600) {
        var div_1 = document.createElement("div")
        div_1.setAttribute("class", "odd")
        box_1(div_1, language_map[language]["information"]["contacts"]["h3"], language_map[language]["information"]["contacts"]["phone"], language_map[language]["information"]["contacts"]["email"])
        box_1(div_1, language_map[language]["information"]["delivery_methods"]["h3"], language_map[language]["information"]["delivery_methods"]["1"], language_map[language]["information"]["delivery_methods"]["2"])
        body.appendChild(div_1)

        var div_2 = document.createElement("div")
        div_2.setAttribute("class", "even")
        box_2(div_2, language_map[language]["work_shedyle"]["h3"], language_map[language]["work_shedyle"]["shedyle"])
        body.appendChild(div_2)

        var div_3 = document.createElement("div")
        div_3.setAttribute("class", "odd")
        box_1(div_3, language_map[language]["information"]["address"]["h3"], language_map[language]["information"]["address"]["market"], language_map[language]["information"]["address"]["shop"])
        box_1(div_3, language_map[language]["information"]["ways_of_payment"]["h3"], language_map[language]["information"]["ways_of_payment"]["1"], language_map[language]["information"]["ways_of_payment"]["2"])
        body.appendChild(div_3)
    } else {
        var div = document.createElement("div")
        div.setAttribute("class", "mobil")
        box_1(div, language_map[language]["information"]["contacts"]["h3"], language_map[language]["information"]["contacts"]["phone"], language_map[language]["information"]["contacts"]["email"])
        box_1(div, language_map[language]["information"]["address"]["h3"], language_map[language]["information"]["address"]["market"], language_map[language]["information"]["address"]["shop"])
        box_2(div, language_map[language]["work_shedyle"]["h3"], language_map[language]["work_shedyle"]["shedyle"])      
        box_1(div, language_map[language]["information"]["delivery_methods"]["h3"], language_map[language]["information"]["delivery_methods"]["1"], language_map[language]["information"]["delivery_methods"]["2"])      
        box_1(div, language_map[language]["information"]["ways_of_payment"]["h3"], language_map[language]["information"]["ways_of_payment"]["1"], language_map[language]["information"]["ways_of_payment"]["2"])  
        body.appendChild(div)
    }
}

window.onresize = function () {
    my_onresize()
}

function my_onresize () {
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
        var screenHeight = window.innerHeight - (screenWeight / 100 * 10)

    } else {
        var screenWeight = window.innerWidth
        var screenHeight = window.innerHeight - (screenWeight / 100 * 10) 
    }
    Body.setAttribute("style", `height:${screenHeight}px;`)
}

function box_1(div, h3, p1, p2) {
    var div_1 = document.createElement("div")
    div_1.setAttribute("class", "odd_1")

    var div_2 = document.createElement("div")
    div_2.setAttribute("class", "odd_2")

    var div_3 = document.createElement("div")
    div_3.setAttribute("class", "odd_3")

    var h3_1 = document.createElement("h3")
    h3_1.innerText = h3
    div_3.appendChild(h3_1)

    var p_1 = document.createElement("p")
    p_1.innerText = p1
    div_3.appendChild(p_1)

    var p_2 = document.createElement("p")
    p_2.innerText = p2
    div_3.appendChild(p_2)

    div_2.appendChild(div_3)
    div_1.appendChild(div_2)
    div.appendChild(div_1)
}

function box_2(div, h3, work_shedyle) {
    var div_1 = document.createElement("div")
    div_1.setAttribute("class", "even_1")

    var div_2 = document.createElement("div")
    div_2.setAttribute("class", "even_2")

    var h_3 = document.createElement("h3")
    h_3.innerText = h3
    div_2.appendChild(h_3)

    var work_shedyle_key = Object.keys(work_shedyle)

    work_shedyle_key.map((el) => {
        var p = document.createElement("p")
        p.innerText = `${work_shedyle[el]}`
        div_2.appendChild(p)
    })

    div_1.appendChild(div_2)
    div.appendChild(div_1)
}

language_map = {
    ukraine: {
        information: {
            contacts: {
                h3: "Контакти",
                phone: "тел: 050 582 40 42",
                email: "e-mail: annakrochak71@gmail.com"
            },
            delivery_methods: {
                h3: "Способи доставки",
                1: "Укрпошта",
                2: "Нова пошта"
            },
            address: {
                h3: "Адреса",
                market: `Ужгород, Ринок "Краснодонців"`,
                shop: "вул.Замкова, маг.13"
            },
            ways_of_payment: {
                h3: "Способи оплати",
                1: "Наложений платіж",
                2: "Банківська картка",
            }
        },
        work_shedyle: {
            h3: "Графік роботи",
            shedyle: {
                monday: "Понеділок - Зачинено",
                tuesday: "Вівторок - 09:00-14:00",
                wednesday: "Середа - 09:00-14:00",
                thursday: "Четвер - 09:00-14:00",
                friday: "П'ятниця - 09:00-14:00",
                saturday: "Субота - 09:00-14:30",
                sunday: "Неділя - 09:00-14:30"
            }
        }
    },
    russia: {
        information: {
            contacts: {
                h3: "Контакты",
                phone: "тел: 050 582 40 42",
                email: "e-mail: annakrochak71@gmail.com"
            },
            delivery_methods: {
                h3: "Способы доставки",
                1: "Укрпошта",
                2: "Нова пошта"
            },
            address: {
                h3: "Адрес",
                market: `Ужгород, Рынок "Краснодонцев"`,
                shop: "ул.Замкова, маг.13"
            },
            ways_of_payment: {
                h3: "Способы оплаты",
                1: "Наложеный платеж",
                2: "Банковская карта",
            }
        },
        work_shedyle: {
            h3: "График роботы",
            shedyle: {
                monday: "Понедельник - Закрыто",
                tuesday: "Вторник - 09:00-14:00",
                wednesday: "Среда - 09:00-14:00",
                thursday: "Четверг - 09:00-14:00",
                friday: "Пятница - 09:00-14:00",
                saturday: "Суббота - 09:00-14:30",
                sunday: "Воскресенье - 09:00-14:30"
            }
        }
    },
    english: {
        information: {
            contacts: {
                h3: "Contacts",
                phone: "pho: 050 582 40 42",
                email: "e-mail: annakrochak71@gmail.com"
            },
            delivery_methods: {
                h3: "Delivery methods",
                1: "Укрпошта",
                2: "Нова пошта"
            },
            address: {
                h3: "Address",
                market: `Uzhhorod, Market "Krasnodontsy"`,
                shop: "st.Zamkova, shop.13"
            },
            ways_of_payment: {
                h3: "Ways of payment",
                1: "Cash on delivery",
                2: "Bank card",
            }
        },
        work_shedyle: {
            h3: "Work shedule",
            shedyle: {
                monday: "Monday - Closed",
                tuesday: "Tuesday - 09:00-14:00",
                wednesday: "Wednesday - 09:00-14:00",
                thursday: "Thursday - 09:00-14:00",
                friday: "Friday - 09:00-14:00",
                saturday: "Saturday - 09:00-14:30",
                sunday: "Sunday - 09:00-14:30"
            }
        }
    },
    slovakia: {
        information: {
            contacts: {
                h3: "Kontakty",
                phone: "tel: 050 582 40 42",
                email: "e-mail: annakrochak71@gmail.com"
            },
            delivery_methods: {
                h3: "Spôsoby doručenia",
                1: "Укрпошта",
                2: "Нова пошта"
            },
            address: {
                h3: "Adresa",
                market: `Užhorod, Trhové "Krasnodontsy"`,
                shop: "pou.Zamkova, pre.13"
            },
            ways_of_payment: {
                h3: "Spôsoby platby",
                1: "Na dobierku",
                2: "Banková karta",
            }
        },
        work_shedyle: {
            h3: "Pracovný rozvrh",
            shedyle: {
                monday: "Pondelok - Zatvorené",
                tuesday: "Utorok - 09:00-14:00",
                wednesday: "Streda - 09:00-14:00",
                thursday: "štvrtok - 09:00-14:00",
                friday: "Piatok - 09:00-14:00",
                saturday: "Sobota - 09:00-14:30",
                sunday: "Nadeía - 09:00-14:30"
            }
        }
    },
    hungary: {
        information: {
            contacts: {
                h3: "Kapcsolatok",
                phone: "tel: 050 582 40 42",
                email: "e-mail: annakrochak71@gmail.com"
            },
            delivery_methods: {
                h3: "Szállítási lehetöségek",
                1: "Укрпошта",
                2: "Нова пошта"
            },
            address: {
                h3: "Cím",
                market: `Ungvár, Piac "Krasnodontsy"`,
                shop: "uts.Zamkova, üzlet.13"
            },
            ways_of_payment: {
                h3: "Fizetési módok",
                1: "TÖKEHAL",
                2: "Bank kártya",
            }
        },
        work_shedyle: {
            h3: "Munkarend",
            shedyle: {
                monday: "Hétfő - Zárva",
                tuesday: "Kedd - 09:00-14:00",
                wednesday: "Szerda - 09:00-14:00",
                thursday: "Csütörtök - 09:00-14:00",
                friday: "Péntek - 09:00-14:00",
                saturday: "Szombat - 09:00-14:30",
                sunday: "Vasárnap - 09:00-14:30"
            }
        }
    }
}