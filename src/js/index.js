window.addEventListener('DOMContentLoaded', () => {
    const element = {
        input: document.getElementById('input'),
        output: document.getElementById('label'),
        convertBtn: document.getElementById('convert')
    }

    element.convertBtn.addEventListener('click', () => {
        if (element.input.value.trim() !== '') {
            let text = element.input.value
            let ascii = ''
            
            for (let i = 0; i < text.length; i++) {
                ascii += ('ALT-' + text.charCodeAt(i) + ' + ')
            }

            ascii = ascii.slice(0, ascii.length - 3)
            
            if (ascii) {
                element.output.innerText = ascii
            }
        }
    })
})