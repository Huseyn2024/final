let btn1 = document.querySelector(".button")
let btn2 = document.querySelector(".button1")
let btn4 = document.querySelector(".button3")
let btn3 = document.querySelector(".button2")
let empty = document.querySelector(".pleace")
let users = JSON.parse(localStorage.getItem("users")) || []
let user = JSON.parse(localStorage.getItem("user")) || []

btn2.addEventListener("click", () => {
    location.href = "../sinIn/sinIn.html"
})

users.forEach((user) => {
    if (user.istifadeciadi) {
        btn3.style.display = "flex"
        btn4.style.display = "flex"
        btn2.style.display = "none"
    }
    else {
        btn2.style.display = "flex"
        btn3.style.display = "none"
        btn4.style.display = "none"
    }
});

btn3.addEventListener("click", () => {
    localStorage.removeItem("user")
    location.href = "../sinIn/sinIn.html"
})

btn4.addEventListener("click",()=>{
    location.href = "../mycomputers/mycomputers.html"
})

btn1.addEventListener("click",()=>{
    location.href = "../home/home.html"
})



//masinin sahibi
users.forEach((e)=>{
    if(!e.istifadeciadi){
        empty.innerHTML = ""
    }
    else{
        let element1 = `
        <h2>${user.istifadeciadi}</h2>
      `
      empty.innerHTML = element1
    }

})
