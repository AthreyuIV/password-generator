const generateBtn = document.getElementById("generate-password");
const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
    "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
     "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
     "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

const generatePassword = () => {
    firstPassword.textContent = "";
    secondPassword.textContent = "";

    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * 90) + 1;
        firstPassword.textContent += characters[randomIndex];
    }

    for (let i = 0; i < 16; i++) {
        let randomIndex = Math.floor(Math.random() * 90) + 1;
        secondPassword.textContent += characters[randomIndex];
    }
}

generateBtn.addEventListener("click", generatePassword);

firstPassword.addEventListener("click", () => {
    let password = firstPassword.textContent;
    navigator.clipboard.writeText(password);
})

secondPassword.addEventListener("click", () => {
    let password = secondPassword.textContent;
    navigator.clipboard.writeText(password);
})


