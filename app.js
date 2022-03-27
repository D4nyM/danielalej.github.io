const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

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

    //Sections Active Class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if (id) {
            // remove selected from other btns
            //sectionBtns.forEach((btn) => {
            //    btn.classList.remove('active')
            //})
            const btns = sectionBtn[0].children;
            for (let b of btns){
                b.classList.remove('active')
            }
            e.target.classList.add('active')

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
pageTransition();