function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}

// Ocultar el menú al hacer clic en cualquier enlace
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('nav-links').classList.remove('active');
    });
});


/* aqui voy a poner la animacion del carrucel no se me vaya olvidar*/

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');

    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        indicators[i].classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
            indicators[i].classList.add('active');
        }
    });
}

function moveCarousel(direction) {
    const slides = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex + direction + slides.length) % slides.length;
    showSlide(currentIndex);
}

function moveToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
}

// Mostrar el primer proyecto inicialmente
showSlide(currentIndex);


/*animacion para certificados */
function setModalImage(imageSrc) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImage");
    modal.style.display = "flex"; // Asegura que el modal se muestre como un flexbox
    modalImg.src = imageSrc;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}
                                                /* animacion para la parte de formacion */
function toggleInfo(sectionId) {
    // Obtén la sección que quieres mostrar/ocultar
    var selectedSection = document.getElementById(sectionId);
    
    // Revisa si la sección está visible
    if (selectedSection.style.display === 'block') {
        // Si está visible, ocúltala
        selectedSection.style.display = 'none';
    } else {
        // Si está oculta, oculta todas las demás y muestra solo la seleccionada
        var sections = document.getElementsByClassName('formacion-info');
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
        }
        selectedSection.style.display = 'block';
    }
}

