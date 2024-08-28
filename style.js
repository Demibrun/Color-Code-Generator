function generateColors(colorType, amount) {
    if (colorType === 'hexa') {
        let hexaColors = []
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f']

        for (let index = 0; index < amount; index++) {
            let hexa = '#'
            for (let i = 0; i < 6; i++) {
                let randomNum = Math.floor(Math.random() * 16)
                hexa += arr[randomNum]
            }
            hexaColors.push(hexa)
        }

        return amount > 1 ? hexaColors : hexaColors[0]
    } else if (colorType === 'rgb') {
        let rgbColors = []

        for (let index = 0; index < amount; index++) {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
            rgbColors.push(`rgb(${r},${g},${b})`)
        }

        return amount > 1 ? rgbColors : rgbColors[0]
    } else {
        return "Invalid color type. Please use 'hexa' or 'rgb'."
    }
}

function generateAndDisplayColors() {
    const colorType = document.getElementById('colorType').value;
    const amount = parseInt(document.getElementById('amount').value);
    const result = generateColors(colorType, amount);
    const resultDiv = document.getElementById('result');
    
    if (Array.isArray(result)) {
        resultDiv.innerHTML = result.join('<br>');
    } else {
        resultDiv.innerHTML = result;
    }
}
