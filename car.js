const sr = ScrollReveal({
    distance:'60px',
    duration: 2500,
    delay: 400,
    reset: true 
})

sr.reveal('.text', {delay: 200, origin: 'top'})
sr.reveal('.form-container form', {delay: 800, origin: 'left'})
sr.reveal('.heading', {delay: 200, origin: 'top'})
sr.reveal('.ride-container .box', {delay: 200, origin: 'top'})
sr.reveal('.services-container .box', {delay: 200, origin: 'left'})
sr.reveal('.about-container .about-img', {delay: 200, origin: 'left'})
sr.reveal('.about-container .about-text', {delay: 200, origin: 'right'})
sr.reveal('.reviews-container .box', {delay: 200, origin: 'top'})
sr.reveal('.newletter .box', {delay: 200, origin: 'bottom'})