const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}=</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        appendAlert('Nice, you triggered this alert message!', 'success')
    })
}

let btn1 = document.querySelector("#btn2")
let btn2 = document.querySelector("#btn3")
let istifadeciadi = document.querySelector("#validationCustom01")
let sifer = document.querySelector("#validationCustom02")
let errormodal = new bootstrap.Modal(document.querySelector(".errormodal"))
let form = document.querySelector("form")

btn2.addEventListener("click", () => {
    location.href = "../sinup/sinup.html"
})

let users = JSON.parse(localStorage.getItem("users")) || []

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let user = users.find((item) => {
        return item.istifadeciadi === istifadeciadi.value && item.sifre === sifer.value
    })

    console.log(user);

    if (!user) {
        errormodal.show()
    }
    else {
        localStorage.setItem("user", JSON.stringify(user))
        setTimeout(() => {
            location.href = "../index/index.html"
        }, 1000);
    }
})