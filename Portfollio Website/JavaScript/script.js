// Header Toggle

const toggleButton = document.getElementById('MenuBtn')

toggleButton.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('mobile-nav-active');
})

function myFunction(x) {
    x.classList.toggle("fa-xmark");
}

// Typed.JS File (For Typing Effect (Replace It))

let typed = new Typed('.auto-input', {
    strings: ['Front-End Developer!', 'Freelancer!', 'SEO Executive!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 2000,
    loop:true
})
