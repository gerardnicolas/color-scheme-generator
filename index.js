const input = document.getElementById('color-picker');
const colorSchemeSelector = document.getElementById('schemes')
const colorSchemeBtn = document.getElementById('color-scheme-btn')
const middleContainerEl = document.getElementById('middle-container')
const lowerContainerEl = document.getElementById('lower-container')

function renderDefault(){
    middleContainerEl.innerHTML = `
        <img class="color" src="https://www.thecolorapi.com/id?format=svg&named=false&hex=000000">
        <img class="color" src="https://www.thecolorapi.com/id?format=svg&named=false&hex=1A1919">
        <img class="color" src="https://www.thecolorapi.com/id?format=svg&named=false&hex=343232">
        <img class="color" src="https://www.thecolorapi.com/id?format=svg&named=false&hex=4F4A4A">
        <img class="color" src="https://www.thecolorapi.com/id?format=svg&named=false&hex=6A6262">
    `

    lowerContainerEl.innerHTML = `
        <div class="hexcode">#000000</div>
        <div class="hexcode">#1A1919</div>
        <div class="hexcode">#343232</div>
        <div class="hexcode">#4F4A4A</div>
        <div class="hexcode">#6A6262</div>
    `
}

renderDefault()

colorSchemeBtn.addEventListener('click', function(e) {
    const selectedSeedHexValue = input.value.slice(1)
    const selectedColorSchemeMode = colorSchemeSelector.value

    fetch(`https://www.thecolorapi.com/scheme?hex=${selectedSeedHexValue}&format=json&mode=${selectedColorSchemeMode}&count=5`)
        .then(res => res.json())
        .then(data => {

            middleContainerEl.innerHTML = `
                <img class="color" src="${data.colors[0].image.bare}">
                <img class="color" src="${data.colors[1].image.bare}">
                <img class="color" src="${data.colors[2].image.bare}">
                <img class="color" src="${data.colors[3].image.bare}">
                <img class="color" src="${data.colors[4].image.bare}">
            `

            lowerContainerEl.innerHTML = `
                <div class="hexcode">${data.colors[0].hex.value}</div>
                <div class="hexcode">${data.colors[1].hex.value}</div>
                <div class="hexcode">${data.colors[2].hex.value}</div>
                <div class="hexcode">${data.colors[3].hex.value}</div>
                <div class="hexcode">${data.colors[4].hex.value}</div>
            `
        })
})
