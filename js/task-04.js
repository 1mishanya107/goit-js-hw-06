const counter = document.querySelector('#counter')
let value = document.querySelector('#value')

const btnDec = counter.firstElementChild
const btnInc = counter.lastElementChild

let counterValue = 0


const decrement = () => {
    counterValue -= 1
    value.textContent = counterValue
    console.log(counterValue)
}

btnDec.addEventListener('click', decrement)

const increment = () => {

    counterValue += 1
    value.textContent = counterValue
    console.log(counterValue)   
}


btnInc.addEventListener('click', increment)
