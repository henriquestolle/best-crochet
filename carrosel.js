$(document).ready(function() {
    var startX;

    $('.carousel-item img').on('dragstart', function(event) {
        // Salva a posição inicial do arraste
        startX = event.originalEvent.pageX;
    });

    $('.carousel-item img').on('dragend', function(event) {
        var endX = event.originalEvent.pageX;
        var threshold = 50; // Limite mínimo de arraste para considerar uma ação

        if (startX - endX > threshold) {
            // Arraste para a esquerda (avançar slide)
            $('.carousel').carousel('next');
        } else if (endX - startX > threshold) {
            // Arraste para a direita (retroceder slide)
            $('.carousel').carousel('prev');
        }
    });
});



