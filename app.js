AOS.init()

particlesJS.load('particles-js', 'assets/particle-cfg.json', function() {
        console.log('callback - particles.js config loaded');
        });

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
