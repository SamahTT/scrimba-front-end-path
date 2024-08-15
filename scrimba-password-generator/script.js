let btnEl = document.getElementById('btn-el');
let passLength = document.getElementById('password-length');
let output1 = document.getElementById('output-1');
let output2 = document.getElementById('output-2');
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W",
                    "X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x",
                    "y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
                    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

btnEl.addEventListener('click', displayPasswords);

function displayPasswords(){
    output1.textContent = generatePasswords();
    output2.textContent = generatePasswords();
}

function generatePasswords(){
    let password = "";
    for(let i = 0; i < parseInt(passLength.value); i++){
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}
