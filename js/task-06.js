const input = document.querySelector('#validation-input')


// console.log(input.value)


input.addEventListener('blur', () => {
    if (input.value.length === 6) {
        input.classList.add("valid")
    }
    else input.classList.add("invalid")
})

input.addEventListener('focus', () => {
    input.classList.remove('valid');
    input.classList.remove('invalid')
})