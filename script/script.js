const toggle = document.querySelectorAll('.nav-item');
const modal = document.querySelector('img.modal');
const navMobilePart = document.querySelector('div.inner-container');

toggle.forEach(tog => {
    tog.addEventListener('click', () => {
        tog.parentElement.classList.toggle('clicked');
    })
})

modal.addEventListener('click', () => {
    //Only apply to smaller screen below 800px width
    if(modal.getAttribute('src') == 'images/icon-close.svg'){
        modal.setAttribute('src', 'images/icon-hamburger.svg');
        navMobilePart.setAttribute('style', 'display: none;');
    } else {
        modal.setAttribute('src', 'images/icon-close.svg');
        navMobilePart.setAttribute('style', 'display: grid;');
    }

});


//Every time screen size changes
const onResize = () => {
    const screenSizeOk = window.matchMedia("(max-width: 800px)");
    if(!screenSizeOk.matches){
        navMobilePart.setAttribute('style', 'display: grid;');
    }
};

window.onresize = onResize;