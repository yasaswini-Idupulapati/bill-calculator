console.log("annyeong")




const billIn = document.getElementById("billInput")
const tipIn = document.getElementById("tipInput")
const splitDiv = document.getElementById("split-container")
const peopleNumber = document.getElementById("numberOfPeople")

const increDiv = document.getElementById("Increment")
const decreDiv = document.getAnimations("decrement")
const resulttDiv = document.getElementById("result")

numberOfP = peopleNumber.innerText
//CALCULATE BILL

//Percent = Givetip/100
//tipPercent = Percent*BillCost
//get totalBill = BillCost + tipPercent 
//add input cost and tip cost

const calculateBill = () => {

    let amountPP = ''

    const billDollar = billIn.value
    const tipPh = tipIn.value
    console.log(billDollar)
    console.log(tipPh)
    const tipPercent = tipPh /100
    //console.log(tipPercent)
    const tipDollar = (tipPercent*billDollar)
    //console.log(tipDollar)


    totalBill = Number(billDollar) + Number(tipDollar)
    amountPP = totalBill/numberOfP
    console.log(amountPP)
    resulttDiv.innerHTML = `<b>$${amountPP.toFixed(2)}</b>`
    return amountPP
}






//CALCULATE INCRE FUNC
const incre = () => {
  numberOfP++
  console.log(numberOfP)
  peopleNumber.innerHTML = numberOfP
  calculateBill()
  return numberOfP
} 


//CALCULATE DECRE FUNC
const decre = () => {
    if(numberOfP<2){
        return
    }
    else {
        numberOfP-=1
    }
    console.log(numberOfP)
    peopleNumber.innerHTML = `${numberOfP}`
    calculateBill()
    return numberOfP
}

//SHOW ON TOTAL AMOUNT
//in total div, get calculated amount per person

//resulttDiv.innerHTML = `${amountPP}`
