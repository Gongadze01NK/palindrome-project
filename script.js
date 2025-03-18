const checkButton = document.getElementById('check-btn');
checkButton.addEventListener("click", function () {
    const textInput = document.getElementById("text-input").value.trim();
    const resultText = document.getElementById("result");

    if (textInput === "") {
        alert("Please input a value");
    } else {
        result(textInput);  // Call result function with the input
    }
});

function normalizeString(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    return str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
}

function isPalindrome(str) {
    // Normalize the string and check if it's the same forwards and backwards
    const normalized = normalizeString(str);
    return normalized === normalized.split('').reverse().join('');
}

function result(textInput) {
    const resultText = document.getElementById("result");

    // Check if the input is a palindrome after normalization
    if (isPalindrome(textInput)) {
        resultText.innerText = `${textInput} is a palindrome`;
    } else {
        resultText.innerText = `${textInput} is not a palindrome`;
    }
}
