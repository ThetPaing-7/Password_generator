// Take the total lengths of the password
const display = document.querySelector("#displayCharCounts");
const charCounts = document.querySelector("#charCounts");
display.textContent = charCounts.value;
charCounts.addEventListener("input",(event) => {
    display.textContent = event.target.value;
})

// For generating pasword

function generatePassword(){

    document.getElementById("#generatePassword").addEventListener("click", function(){
    const NumbersAndSymbols = document.getElementById("#NumbersAndSymbols").checked;
    const capLetters = document.getElementById("#capLetters").checked;
    const fullWords = document.getElementById("#fullWords").checked;
    const onlyNumbers = document.getElementById("#onlyNumbers").checked;

    function randomPassword(length){
        let password = '';
        const ranges = [
            {min: 33, max: 47},
            {min: 58, max: 64},
            {min: 91, max: 96},
            {min: 123, max: 126}
        ];

        for(let i = 0; i < length; i++){
            // Randomly select a range
            const randomRange = ranges[Math.floor(Math.random() * ranges.length)];
            const randomCharCode = getRandomNumber(randomRange.min, randomRange.max);
            password += String.fromCharCode(randomCharCode)
        }
        return password;
    }

    function capitalLetters(length){
        let min = 65;
        let max = 90;
        let password = '';
        for(let i = 0; i < length; i++){
            password += String.fromCharCode(getRandomNumber(min,max))
        }
        return password;
    }

    function smallLetters(length){
        let min = 92;
        let max = 122;
        let password = '';
        for(let i = 0; i < length; i++){
            password += String.fromCharCode(getRandomNumber(min,max))
        }
        return password;
    }

    function numbersOnly(length){
        let min = 48;
        let max = 57;
        let password = '';
        for(let i = 0; i < length; i++){
            password += String.fromCharCode(getRandomNumber(min,max))
        }
        return password;
    }
})
}

function getRandomNumber(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
