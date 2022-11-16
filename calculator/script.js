const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotal = document.getElementById('perPersonTotal')

let numberOfPeople = Number(numberOfPeopleDiv.innerText)

const calculateBill = () => {
    const bill = Number(billInput.value)

    const tipPercentage = Number(tipInput.value)/100

    const tipAmount = bill * tipPercentage

    perPersonTotal.innerText = `R$${((bill + tipAmount) / numberOfPeople).toFixed(2)}`
  
  }

  const increasePeople = () => {
    numberOfPeople += 1
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
  }
   
  const decreasePeople = () => {
    if(numberOfPeople > 1) {
        numberOfPeople -= 1
        numberOfPeopleDiv.innerText = numberOfPeople
        calculateBill()
    }
  }