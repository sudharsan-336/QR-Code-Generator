let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");

function isValidURL(str) {
    return /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/i.test(str);
}

function isValidText(str) {
    return /^[A-Za-z0-9\s]+$/.test(str);
}

function generateQR() {
    let value = qrText.value.trim();

    if (value.length === 0) {
        qrText.classList.add("error");
        setTimeout(() => qrText.classList.remove("error"), 1000);
        return;
    }

    if (!isValidText(value) && !isValidURL(value)) {
        alert("Enter valid text or URL!");
        return;
    }

    qrImage.src =
        "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + value;

    imgBox.classList.add("show-img");
}

function downloadQR() {
    if (!qrImage.src || !imgBox.classList.contains("show-img")) {
        alert("Generate a QR code first!");
        return;
    }

    fetch(qrImage.src)
        .then(response => response.blob())
        .then(blob => {
            let link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "qrcode.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        })
        .catch(() => alert("Failed to download QR code"));
}

qrText.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        generateQR();
    }
});