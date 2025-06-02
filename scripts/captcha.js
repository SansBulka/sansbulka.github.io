let captchaText = "";

function generateCaptcha() {
    const canvas = document.querySelector(".canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    captchaText = Array.from({ length: 5 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
    if(Math.random() < 0.11) {
        captchaText = "SYBAU";
    }

    ctx.font = "24px Arial";
    ctx.fillStyle = "#000";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(captchaText, canvas.width / 2, canvas.height / 2);

    for (let i = 0; i < 50; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 2 + 1;
        const color = "#000"

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.fill();
    }
}

function validateCaptcha() {
    const userInput = document.getElementById("captchaInput").value;
    const message = document.getElementById("captchaMessage");

    if (userInput === captchaText) {
        message.style.color = "green";
        message.textContent = "Captcha verified successfully!";
    } else {
        message.style.color = "red";
        message.textContent = "Captcha verification failed. Try again.";
    }
}

window.onload = generateCaptcha;