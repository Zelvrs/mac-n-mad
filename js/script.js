// .Toggle class active  
const nav = document.querySelector('.nav')
const hamburger = document.querySelector('#hamburger-menu')

// .ketika hamburger menu di klik
hamburger.onclick = (e) => {
    e.preventDefault();
    nav.classList.toggle('active');
}

// .klik diluar sidebar untuk menghilangkan nav active
document.addEventListener('click' ,(e) =>{
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active')
    }
})