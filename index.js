const arr = []
let count = 0
const num = document.querySelector('.numberPlace')
let number = Math.floor(Math.random() * 100)
console.log(number)
const hint = document.querySelector('.hints')
const submit = document.querySelector('.btn')
submit.addEventListener('click', comparison)
const tryNum = document.querySelector('.tryNum')


function comparison (num) {
    if (num < number){
        hint.textContent = `Загаданное число больше` 
    } else if (num > number) {
        hint.textContent = `Загаданное число меньше`
    } else if (num == number){
        hint.textContent = `Вы угадали число с ${count} попытки`
    }

    tryNum.textContent = arr.push(num)
    count++
    if (count == 10){
        hint.textContent = 'Попытки закончились'
        submit.classList.add('disable')
    }
}
 