let btn = document.querySelector(".btn")
let form = document.querySelector("form")
let ad = document.querySelector("#validationCustom01")
let telefon = document.querySelector("#validationCustom02")
let istifadeciadi = document.querySelector("#validationCustom03")
let sifre = document.querySelector("#validationCustom04")
let errortoast = new bootstrap.Toast(document.querySelector("#etoast"))
let modalbody = document.querySelector(".modal-body")
let modal = new bootstrap.Modal(document.querySelector(".modal"))
let users = JSON.parse(localStorage.getItem("users")) || []



form.addEventListener("submit", (e) => {
    e.preventDefault()
    let checkuser = users.some(function (e) {
        return e.istifadeciadi == istifadeciadi.value
    })

    if (checkuser) {
        let element = `
          <p>${istifadeciadi.value} istifadeci adi ile insan movcudur</p>`
        modalbody.innerHTML = element
        modal.show()
    }

    else {
        if (form.checkValidity()) {
            let user = {
                ad: ad.value,
                telefon: telefon.value,
                istifadeciadi: istifadeciadi.value,
                sifre: sifre.value,
            }
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users))
            setTimeout(() => {
                location.href = "../sinIn/sinIn.html"
            }, 1000)


        }
        else {
            errortoast.show()
        }
    }
})