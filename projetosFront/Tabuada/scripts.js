const inputNumber = document.querySelector("#number")
const inputMultiplicator = document.querySelector("#multiplication")
const multiplicationForm = document.querySelector("#multiplication-form")
const divOperations = document.querySelector("#multiplication-operations")

const createTable = (number, multiplicator) => {
    divOperations.innerHTML = ""
    for (i = 1; i <= multiplicator; i++) {
        let res = number * i

        const template = `
        <div class="row">
            <div class="operation">
                <p> ${number} x ${multiplicator} = </p>
            </div>
            <div class="result">
                <p>${res}</p>
            </div>
        </div>`
        const parser = new DOMParser()
        const htmlTemplate = parser.parseFromString(template, "text/html")
        const row = htmlTemplate.querySelector(".row")

        divOperations.appendChild(row)
    }
}

multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const multiplicationNubmer = +inputNumber.value
    const multiplicatorNumber = +inputMultiplicator.value

    if (!multiplicationNubmer || !multiplicatorNumber) {
        return alert("Digite um numero para ser multiplicado")
    }
    
    createTable(multiplicationNubmer, multiplicatorNumber)

})

