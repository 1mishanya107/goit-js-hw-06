const form = document.querySelector(".login-form")
form.addEventListener("submit", control);

function control(event) {
    event.preventDefault()
    const { elements: { email, password } } = event.currentTarget
    // console.log()

        
        if (email.value === "" || password.value === "") {
    return alert("Внимание! Для отправки формы все поля должны быть заполнены!");
        }
    
    const elem = {
        email: email.value,
        password: password.value,
    }
    console.log(elem)
    
    
    
    
    event.currentTarget.reset();
}
