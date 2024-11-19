let table = new DataTable('.table');
let comps = JSON.parse(localStorage.getItem("comps")) || []
let users = JSON.parse(localStorage.getItem("users")) || []
let user = JSON.parse(localStorage.getItem("user")) || []
let toast = new bootstrap.Toast(document.querySelector(".toast"))
let Modal = new bootstrap.Modal(document.querySelector(".modal"))
let modal2 = new bootstrap.Modal(document.querySelector(".modal2"))
let tbody = document.querySelector(".tbody")
let modalbody = document.querySelector(".modalbody")
let Kateqoriyalar = document.querySelector("#validationCustom01")
let ad = document.querySelector("#validationCustom02")
let qiymet = document.querySelector("#validationCustom03")
let tesvir = document.querySelector("#validationCustom04")
let yeni = document.querySelector("#validationCustom05")
let sekil = document.querySelector("#validationCustom06")
let emeliY = document.querySelector("#validationCustom07")
let merkeziP = document.querySelector("#validationCustom08")
let dayimiY = document.querySelector("#validationCustom09")
let dayimiYt = document.querySelector("#validationCustom10")
let emeliS = document.querySelector("#validationCustom11")
let videoC = document.querySelector("#validationCustom12")
let imgparent = document.querySelector(".imgparent")
let btn = document.querySelector("#btn")
let btn1 = document.querySelector("#btn1")
let form = document.querySelector("form")

function genid() {
    return comps[comps.length - 1]?.id + 1 || 1
}

btn.addEventListener("click", () => {
    location.href = "../index/index.html"
})

function displaycomps() {
    tbody.innerHTML = ""
    let filterdcomps = comps.filter((comp) => {
        return comp.komputerins == user.istifadeciAdi
    })
    console.log(filterdcomps);

    filterdcomps.forEach(function (comp) {
        table.row.add([
            comp.id, comp.ad, `<img onclick="openmodal(${comp.id})" style="height: 100px;width: 100px;object-fit: cover;" src="${comp.sekil}">`, `${comp.qiymet} AZN`,
            `<button onclick="removeComp(${comp.id})" class="btn btn-danger">sil</button>
                <button onclick="changComp(${comp.id})" class="btn btn-primary">Redakte</button>`
        ]).draw()
    })
}

function checkcomps(id) {
    let user1 = user.filter((e) => {
        return id.user == e.user
    })
}

function removeComp(id) {
    comps = comps.filter((e) => {
        return e.id !== id
    })
    localStorage.setItem("comps", JSON.stringify(comps))
    location.reload()
}

function openmodal(id) {
    let comps1 = comps.find((comp) => {
        return comp.id == id

    })
    let element = `
        <img style="width: 100%;height: 100%;" src="${comps1.sekil}" alt="">
    `
    modalbody.innerHTML = element
    console.log(comps1);
    modal2.show()


}

function checkUser() {
    if (!user) {
        location.href = "../sinIn/sinIn.html"
    }
    else {
        let check = users.find((e) => {
            return user.istifadeciAdi == e.istifadeciAdi && user.sifre == e.sifre
        })
        if (!check) {
            location.href = "../sinIn/sinIn.html"
        }
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (form.checkValidity()) {
        let comp = {
            id: genid(),
            ad: ad.value,
            komputerins: user.istifadeciAdi,
            telefon: user.telefon,
            Kateqoriyalar: Kateqoriyalar.value,
            tesvir: tesvir.value,
            emeliS: emeliS.value,
            yeni: yeni.value,
            emeliY: emeliY.value,
            videoC: videoC.value,
            dayimiYt: dayimiYt.value,
            merkeziP: merkeziP.value,
            dayimiY: dayimiY.value,
            sekil: sekil.value,
            qiymet: qiymet.value
        }
        console.log(comp);
        comps.push(comp)
        console.log("isledi");

        localStorage.setItem("comps", JSON.stringify(comps))
        displaycomps()
        location.reload()
    }
    else {
        alert("zehmet olmasa butun inputlari doldurun")
        toast.show()
    }
})

sekil.addEventListener("input", (a) => {
    console.log(a.target.value);
    if (a.target.value == "") {
        imgparent.innerHTML = ""
    }
    else {
        imgparent.innerHTML = `<img src="${a.target.value}" alt="sekil linki sehefdir">`
    }

})

checkUser()
displaycomps()

let openmodal1 = new bootstrap.Modal(document.querySelector(".modal1"))
let editform = document.querySelector(".editForm")
let editkote = document.querySelector("#editkote")
let editad = document.querySelector("#editad")
let editqiymet = document.querySelector("#editqiymet")
let edittesvir = document.querySelector("#edittesvir")
let edityeni = document.querySelector("#edityeni")
let editsekil = document.querySelector("#editsekil")
let editEY = document.querySelector("#editEY")
let editMP = document.querySelector("#editMP")
let editDY = document.querySelector("#editDY")
let editDYT = document.querySelector("#editDYT")
let editES = document.querySelector("#editES")
let editVK = document.querySelector("#editVK")
let editimg = document.querySelector(".editimg")
let selectedcompid

function changComp(compid) {
    selectedcompid = compid

    openmodal1.show()

    let findedcomp = comps.find((comp1) => {
        return comp1.id == compid
    })

    editkote.value = findedcomp.Kateqoriyalar
    editad.value = findedcomp.ad
    editqiymet.value = findedcomp.qiymet
    edittesvir.value = findedcomp.tesvir
    edityeni.value = findedcomp.yeni
    editsekil.value = findedcomp.sekil
    editEY.value = findedcomp.emeliY
    editMP.value = findedcomp.merkeziP
    editDYT.value = findedcomp.dayimiYt
    editDY.value = findedcomp.dayimiY
    editES.value = findedcomp.emeliS
    editVK.value = findedcomp.videoC

}

editform.addEventListener("submit", (e) => {
    e.preventDefault()
    if (editform.checkVisibility()) {
        comps = comps.map(function (comp) {
            if (comp.id == selectedcompid) {
                return {
                    ...comp,
                    ad: editad.value,
                    telefon: user.telefon,
                    Kateqoriyalar: editkote.value,
                    tesvir: edittesvir.value,
                    yeni: edityeni.value,
                    emeliY: editEY.value,
                    videoC: editVK.value,
                    dayimiYt: editDYT.value,
                    dayimiY: editDY.value,
                    sekil: editsekil.value,
                    qiymet: editqiymet.value
                }

            }
            return comp
        })
        console.log(comps);
        localStorage.setItem("comps", JSON.stringify(comps))
        location.reload()
    }
    else {
        alert("zehmet olmasa inputdari gelen defe bos goymayin")
    }
})

editsekil.addEventListener("input", (a) => {
    console.log(a.target.value);
    if (a.target.value == "") {
        editimg.innerHTML = ""
    }
    else {
        editimg.innerHTML = `<img src="${a.target.value}" alt="sekil linki sehefdir">`
    }

})