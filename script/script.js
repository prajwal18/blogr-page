const toggle = document.querySelectorAll('.nav-item');

toggle.forEach(tog => {
    tog.addEventListener('click', () => {
        tog.parentElement.classList.toggle('clicked');
    })
})