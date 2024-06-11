//Get The Dom Elements
const displayOperators = document.getElementById('display')
const numberBtn = document.querySelectorAll('.key')
const operatorsBtn = document.querySelectorAll('.operator')
const clearDisplayBtn = document.getElementById('clear')
const calculateBtn = document.getElementById('calculate')

//Adding Event listener to buttons And functions



numberBtn.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = button.textContent
        displayOperators.value += buttonText
    })
})

operatorsBtn.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = button.textContent
        displayOperators.value += buttonText
    })
})

clearDisplayBtn.addEventListener('click',function(){
    displayOperators.value = ''
}) 

calculateBtn.addEventListener('click',function() {
    const result = eval(displayOperators.value)
    displayOperators.value = result
})
