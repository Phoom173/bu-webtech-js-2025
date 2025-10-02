function checkNumber() {
    const inputElement = document.getElementById('numberInput');
    const resultElement =document.getElementById('result');
    const number = parseInt(inputElement.value);

    if (isNaN(number) || inputElement.value.trim() == ""){
        resultElement.textContent = "กรุณากรอกตัวเลขที่ถูกต้อง" ;
        resultElement.style.color = "red" ;
        return;
    }
    let message = "";
    if (number === 0) {
        message = "ตัวเลขนี้เป็น 0"
    } else if (number % 2 === 0) {
        message = `ตัวเลข ${number} คือ: เลขคู่`; 
    } else {
        message = `ตัวเลข ${number} คือ: เลขคี่`;
    }

    resultElement.textContent = message;
    resultElement.style.color = "green";
}