const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")
const qrCodeImg = document.querySelector("#qr-code img")

const geraQr = () => {
    const qrCodeValue = qrCodeInput.value

    if (!qrCodeValue) return alert("Digite um texto ou url para gerar o qr code!")
    
    qrCodeBtn.innerHTML = "Gerando Qr Code"
    qrCodeImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeValue}`

    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active")
        qrCodeBtn.innerHTML = "Qr Code Gerado!"
    })
}

qrCodeBtn.addEventListener("click", () => {
    geraQr()
})