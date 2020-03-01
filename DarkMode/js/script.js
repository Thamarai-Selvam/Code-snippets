var checkbox = document.querySelector('input[name=toggler]')

checkbox.addEventListener('change', function() {
    if (this.checked) {
        transform()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        transform()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let transform = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}