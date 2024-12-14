const getEl = (id) => document.getElementById(id);
const [inputEl, successBox, cardEl, subscriptionForm, backBtn] = ["email", "success-box", "form-box", "subscription", "back"].map(getEl);
const flipState = (state) => {
    inputEl.classList.toggle("error", !state);
    cardEl.classList.toggle("hide", state);
    successBox.classList.toggle("hide", !state);
    document.querySelectorAll(".error").forEach(el => el.classList.toggle("hide", state));
};
const validate = (data) => data.email?.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    const isValid = validate(data);
    if(isValid) {
        inputEl.value = "";
        //subscriptionForm.submit()
    } 
    flipState(isValid);
};

subscriptionForm.addEventListener("submit", handleSubmit);
backBtn.addEventListener("click" , () => flipState(false))