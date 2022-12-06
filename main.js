const allButtons = document.querySelectorAll(".circle")

const numberArea = document.querySelector("p")

let clickedNumberLeft= ""
let mathOperation = ""
let clickedNumberRight = ""

const rigthOrLeft = n => {
    if (mathOperation === "") {
        if (clickedNumberLeft === "") {
            if (n !== "0") { 
                clickedNumberLeft = n
            }
        }
        else {
            clickedNumberLeft += n
        }
    } 
    else {
        if (clickedNumberRight === "") {
            if (n !== "0") {
                clickedNumberRight = n
            }
        }
        else {
            clickedNumberRight += n
        }
    }
}

const valueToMathOperation = m => {
    if (mathOperation.length < 1 && clickedNumberLeft.length > 0) { // bug when i press +-/X itd when the numberArea is empty
        mathOperation = m
        console.log(mathOperation);
    }
}

const reset = () => {
    clickedNumberLeft = ""
    mathOperation = ""
    clickedNumberRight = ""
}

const equalTo = () => {
    const left = parseFloat(clickedNumberLeft)
    const right = parseFloat(clickedNumberRight)
    let afterValue
    switch (mathOperation) {
        case "+":
            afterValue = left + right
        break
        case "-":
            afterValue = left - right
        break
        case "X":
            afterValue = left * right
        break
        case "/":
            if (right !== 0) {
                afterValue = left / right
            } else {
                afterValue = "error"
            }
        break
    }
    reset()
    clickedNumberLeft = afterValue.toString()
    numberArea.textContent = afterValue.toString()
}

const btnFunctions = e => {
    const btnText = e.target.textContent

    switch (btnText) {
        case "0":
            rigthOrLeft("0")
        break
        case "1":
            rigthOrLeft("1")
        break
        case "2":
            rigthOrLeft("2")
        break
        case "3":
            rigthOrLeft("3")
        break
        case "4":
            rigthOrLeft("4")
        break
        case "5":
            rigthOrLeft("5")
        break
        case "6":
            rigthOrLeft("6")
        break
        case "7":
            rigthOrLeft("7")
        break
        case "8":
            rigthOrLeft("8")
        break
        case "9":
            rigthOrLeft("9")
        break
        case "C": 
            reset()
        break
        case "/":
            valueToMathOperation("/")
        break
        case "X":
            valueToMathOperation("X")
        break
        case "-":
            valueToMathOperation("-")
        break
        case "+":
            valueToMathOperation("+")
        break
        case "=":
            equalTo()
        break
    }
    numberArea.textContent = `${clickedNumberLeft} ${mathOperation} ${clickedNumberRight}`
}


allButtons.forEach(num => num.addEventListener("click", btnFunctions))