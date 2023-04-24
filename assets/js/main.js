/* menu show */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click' , ()=>{
            nav.classList.toggle('show')
        })
    }
}

showMenu('nav-toggle','nav-menu')


/* active and remove menu */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){

    //active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //remove menu mobile 
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener ('click',linkAction))

/* scroll reveal animation */
const sr = ScrollReveal ({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/* Scroll Home */
sr.reveal('.home__title',{})
sr.reveal('.button',{delay: 200})
sr.reveal('.home__img',{delay: 400})
sr.reveal('.home__social-icon',{interval: 200})

/* Scroll About */
sr.reveal('.about__img',{})
sr.reveal('.about__subtitle',{delay: 200})
sr.reveal('.about__text',{delay: 400})

/* Scroll Skills */
sr.reveal('.skills__subtitle',{})
sr.reveal('.skills__text',{delay: 200})
sr.reveal('.skills__data',{interval: 200})
sr.reveal('.skills__img',{delay: 400})

/* Scroll Work */
sr.reveal('.work__img',{interval: 200})

/* Scroll Contact */
sr.reveal('.contact__input',{interval: 200})

/* Contact Form Sending Mail to me */
function sendMail(){
    var params = {
        name: document.getElementById("name").value ,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    const serviceID = "service_3vqdk4d";
    const templateID = "template_34guh9e";
    emailjs
    .send(serviceID,templateID, params)
    .then((res) => {
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully")
    })
    .catch((err) => console.log(err));
 
}
