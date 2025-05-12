let balanceAmount = 5000;  // Bankamatdagi balans

function checkCard() {
    const cardNumber = document.getElementById('cardNumber').value;
    const statusMessage = document.getElementById('status');

    if (cardNumber.length === 16) {
        statusMessage.textContent = "Karta tasdiqlandi. Iltimos, amallarni tanlang.";
    } else {
        statusMessage.textContent = "Noto'g'ri karta raqami. Iltimos, qayta urunib ko'ring.";
    }
}

function withdraw() {
    const amount = prompt("Pul yechish miqdorini kiriting:");
    if (amount > 0 && amount <= balanceAmount) {
        balanceAmount -= amount;
        alert(`Pul yechildi: ${amount} so'm. Yangi balans: ${balanceAmount} so'm.`);
    } else {
        alert("Noto'g'ri miqdor yoki balans etarli emas.");
    }
}

function balance() {
    alert(`Sizning balansingiz: ${balanceAmount} so'm.`);
}

function exitATM() {
    alert("Bankamatdan chiqish...");
    window.location.reload();  // Sahifani yangilash
}
