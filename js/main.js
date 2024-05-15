document.addEventListener('DOMContentLoaded', function() {
    $('#carouselExampleFade').carousel({
        interval: 1000  // Intervalo em milissegundos
    });

    var link = document.getElementById('link-whatsapp');
    var encodedPhoneNumber = link.getAttribute('data-encoded-phone');
    var phoneNumber = atob(encodedPhoneNumber);
    var whatsappLink = 'https://wa.me/' + phoneNumber;
    link.setAttribute('href', whatsappLink);
});

function verBolsa() {
    window.location.href = './colecao.html';
}

function burger() {
    const menuBurger = document.getElementById('menu-visible');
    const burgerCheckbox = document.getElementById('burger');

    if (burgerCheckbox.checked) {
        menuBurger.style.display = 'block';       
    } else {
        menuBurger.style.display = 'none';
    }
}
