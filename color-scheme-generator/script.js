const colorDivs = document.querySelectorAll(".color-div")
const colorHexNameDivs = document.querySelectorAll(".color-hex-name-div")
const form = document.getElementById('form-el')

form.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent page refresh

    const formData = new FormData(form)

    // Get values by field name
    let color = formData.get('color-input')
    color = color.slice(1, color.length)
    const scheme = formData.get('schemes')

    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${scheme}&count=5`)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < colorDivs.length; i++) {
                colorDivs[i].style.backgroundColor = data.colors[i].hex.value
                colorHexNameDivs[i].textContent = data.colors[i].hex.value
            }
        })
})

for(let i = 0; i < colorHexNameDivs.length; i++){
    colorHexNameDivs[i].addEventListener("click", () => copyHexVal(colorHexNameDivs[i].textContent))
}

function copyHexVal(copyText) {
    // Select the text field
    //copyText.select();
    //copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText);

    // Alert the copied text
    alert("Copied the text: " + copyText);
}
