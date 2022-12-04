const btn0 = document.querySelector(".btn-0")
const btn1 = document.querySelector(".btn-1")
const btn2 = document.querySelector(".btn-2")
const btn3 = document.querySelector(".btn-3")
const btn4 = document.querySelector(".btn-4")
const btn5 = document.querySelector(".btn-5")
const btn6 = document.querySelector(".btn-6")
const btn7 = document.querySelector(".btn-7")
const btn8 = document.querySelector(".btn-8")
const btn9 = document.querySelector(".btn-9")

const allNumbers = document.querySelectorAll(".number")

const btnReset = document.querySelector(".btn-reset")
const btnPlusMinus = document.querySelector(".btn-plus-minus")
const btnProcent = document.querySelector(".btn-procent")
const btnDivideBy = document.querySelector(".btn-divide-by")
const btnMultiply = document.querySelector(".btn-multiply")
const btnMinus = document.querySelector(".btn-minus")
const btnPlus = document.querySelector(".btn-plus")
const btnEqualTo = document.querySelector(".btn-equal-to")

const numberArea = document.querySelector("p")

let clickedNumber = ""

const checkValueOfButton = e => {
    const buttonTarget = e.target
    switch (buttonTarget.textContent) {
        case "0":
            if (numberArea.textContent !== "0") {
                clickedNumber += "0"
            }
            break
        case "1":
            clickedNumber += "1"
            break
        case "2":
            clickedNumber += "2"
            break
        case "3":
            clickedNumber += "3"
            break
        case "4":
            clickedNumber += "4"
            break
        case "5":
            clickedNumber += "5"
            break
        case "6":
            clickedNumber += "6"
            break
        case "7":
            clickedNumber += "7"
            break
        case "8":
            clickedNumber += "8"
            break
        case "9":
            clickedNumber += "9"
            break
    }

    if (numberArea.textContent === "0") {
        numberArea.textContent = buttonTarget.textContent
    } else {
        numberArea.textContent += buttonTarget.textContent
    }
    console.log(clickedNumber);
}

const resetCalculatorValues = () => {
    numberArea.textContent = "0"
    clickedNumber = ""
}

allNumbers.forEach(num => num.addEventListener("click", checkValueOfButton))
btnReset.addEventListener("click", resetCalculatorValues)