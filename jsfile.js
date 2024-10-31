// Take the total lengths of the password
const display = document.querySelector("#displayCharCounts");
const charCounts = document.querySelector("#charCounts");
display.textContent = charCounts.value;
charCounts.addEventListener("input", (event) => {
    display.textContent = event.target.value;
    const password = generatePassword();
    document.getElementById("displayPass").textContent = password;
});

// For generating password
function generatePassword(){
    const NumbersAndSymbols = document.getElementById("NumbersAndSymbols").checked;
    const capLetters = document.getElementById("capLetters").checked;
    const fullWords = document.getElementById("fullWords").checked;
    const onlyNumbers = document.getElementById("onlyNumbers").checked;

    const length = parseInt(document.getElementById("charCounts").value) || 8;

    // Generate password based on selected options
    if(NumbersAndSymbols && fullWords && capLetters){
        let password = randomPassword(Math.floor(length / 2)) + smallLetters(Math.round(length / 2)) + capitalLetters(Math.ceil(length / 2));
        return shuffleString(password);
    }else if (NumbersAndSymbols && fullWords) {
        let password = randomPassword(Math.floor(length / 2)) + smallLetters(Math.ceil(length / 2));
        return shuffleString(password);
    }else if (capLetters && NumbersAndSymbols) {
        let password = capitalLetters(Math.floor(length / 2)) + randomPassword(Math.ceil(length / 2));
        return shuffleString(password);
    }else if (fullWords) {
        return smallLetters(length);
    } else if (onlyNumbers) {
        document.getElementById("NumbersAndSymbols").disabled = false;
        document.getElementById("capLetters").disabled = false;
        document.getElementById("fullWords").disabled = false;
        return numbersOnly(length);
    } else{
        return randomPassword(length)
    }

    function randomPassword(length){
        let password = '';
        const ranges = [
            {min: 33, max: 47},
            {min: 58, max: 64},
            {min: 91, max: 96},
            {min: 123, max: 126}
        ];

        for (let i = 0; i < length; i++) {
            const randomRange = ranges[Math.floor(Math.random() * ranges.length)];
            const randomCharCode = getRandomNumber(randomRange.min, randomRange.max);
            password += String.fromCharCode(randomCharCode);
        }
        return password;
    }

    function capitalLetters(length){
        let min = 65;
        let max = 90;
        let password = '';
        for (let i = 0; i < length; i++) {
            password += String.fromCharCode(getRandomNumber(min, max));
        }
        return password;
    }

    function smallLetters(length){
        let min = 97;
        let max = 122;
        let password = '';
        for (let i = 0; i < length; i++) {
            password += String.fromCharCode(getRandomNumber(min, max));
        }
        return password;
    }

    function numbersOnly(length){
        let min = 48;
        let max = 57;
        let password = '';
        for (let i = 0; i < length; i++) {
            password += String.fromCharCode(getRandomNumber(min, max));
        }
        return password;
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// To shuffle a string
function shuffleString(str) {
    const arr = str.split('');
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr.join(''); 
}

function disableOtherOptions() {
    document.getElementById("NumbersAndSymbols").disabled = true;
    document.getElementById("capLetters").disabled = true;
    document.getElementById("fullWords").disabled = true;
}

// Function to enable all checkboxes
function enableOtherOptions() {
    document.getElementById("NumbersAndSymbols").disabled = false;
    document.getElementById("capLetters").disabled = false;
    document.getElementById("fullWords").disabled = false;
}