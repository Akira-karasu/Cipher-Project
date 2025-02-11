// Function to perform Caesar Cipher encryption or decryption
function caesarCipher(text, shift, decrypt = false) {
    const lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lettersLower = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";

    let noShift = shift % 26; // Wrap shift within 26 for letters
    let numShift = shift % 10; // Wrap shift within 10 for numbers

    // Reverse shift for decryption (move backward)
    if (decrypt) {
        noShift = -noShift;
        numShift = -numShift;
    }

    let cipherText = "";

    for (let char of text) {
        if (lettersUpper.includes(char)) {
            let newIndex = (lettersUpper.indexOf(char) + noShift + 26) % 26;
            cipherText += lettersUpper[newIndex];
        } else if (lettersLower.includes(char)) {
            let newIndex = (lettersLower.indexOf(char) + noShift + 26) % 26;
            cipherText += lettersLower[newIndex];
        } else if (numbers.includes(char)) {
            let newIndex = (numbers.indexOf(char) + numShift + 10) % 10;
            cipherText += numbers[newIndex];
        } else {
            cipherText += char; // Keep spaces and special characters unchanged
        }
    }

    return cipherText;
}

// Function to update the cipher text display
function updateCipherText(result) {
    const outputArea = document.getElementById("ciphered_text_area");
    outputArea.textContent = result || "Ciphered text will appear here...";
}

// Encrypt Button Click Event
document.getElementById("encryptBtn").addEventListener("click", function() {
    const text = document.getElementById("text").value;
    const shift = parseInt(document.getElementById("shift").value);
    
    if (text.trim() === "") {
        updateCipherText("Please enter some text to encrypt.");
        return;
    }

    const encryptedText = caesarCipher(text, shift);
    updateCipherText(encryptedText);
});

// Decrypt Button Click Event
document.getElementById("decryptBtn").addEventListener("click", function() {
    const text = document.getElementById("text").value;
    const shift = parseInt(document.getElementById("shift").value);
    
    if (text.trim() === "") {
        updateCipherText("Please enter some text to decrypt.");
        return;
    }

    const decryptedText = caesarCipher(text, shift, true);
    updateCipherText(decryptedText);
});
