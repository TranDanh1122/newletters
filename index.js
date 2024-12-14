let inputEl = document.getElementById("email")
let successBox = document.getElementById("success-box")
let flipState = (state) => {
    if (state) {
        inputEl.classList.remove("error")
        Array.from(document.getElementsByClassName("error")).forEach((item) => item.classList.add("hide"))
        return true
    }
    inputEl.classList.add("error")
    Array.from(document.getElementsByClassName("error")).forEach((item) => item.classList.remove("hide"))
}
let validate = (data) => {
    if (!data.email) return false
    return data.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
}


let subscriptionForm = document.getElementById("subscription")
let hanldeSubmit = (e) => {
    e.preventDefault()
    let data = Object.fromEntries(new FormData(e.target));
    let isValid = validate(data);
    console.log(subscriptionForm)
    if (isValid) subscriptionForm.submit()
    flipState(isValid)
}
subscriptionForm.addEventListener("submit", hanldeSubmit);
