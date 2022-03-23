const sections = document.querySelectorAll('.section')
const sectionBtns = document.querySelectorAll('.controls')
const sectionBtn = document.querySelectorAll('.control')
const allSections = document.querySelectorAll('.main-content')

function pageTransition() {
    //Button click active class
    for (let i = 0; i < sectionBtn.length; i++) {
        sectionBtn[i].addEventListener('click', (ev) =>{
            const btn = ev.target;
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','');
            btn.className += ' active-btn';
        })
    }
}
pageTransition();