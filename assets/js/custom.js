(function($) {
    'use strict';

    // =========================
    // Activa el menú responsive con MeanMenu cuando el ancho de pantalla es menor a 991px
    jQuery('.mean-menu').meanmenu({ 
        meanScreenWidth: "991"
    });

    // =========================
    // Hace que la barra de navegación se vuelva fija (sticky) al hacer scroll hacia abajo
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 150){  
            $('.navbar-area').addClass("sticky-nav"); // Agrega clase sticky
        } else {
            $('.navbar-area').removeClass("sticky-nav"); // La quita si vuelve arriba
        }
    });

    // =========================
    // Funcionalidad de botón de búsqueda: abrir y cerrar overlay de búsqueda
    $('.close-btn').on('click',function() {
        $('.search-overlay').fadeOut();        // Oculta el overlay
        $('.search-btn').show();               // Muestra botón de buscar
        $('.close-btn').removeClass('active'); // Quita clase activa al botón de cerrar
    });
    $('.search-btn').on('click',function() {
        $(this).hide();                        // Oculta botón de buscar
        $('.search-overlay').fadeIn();         // Muestra el overlay
        $('.close-btn').addClass('active');    // Activa el botón de cerrar
    });

    // =========================
    // Carrusel principal (home): slider de bienvenida o presentación
    $('.slider-area').owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        mouseDrag: true,
        items: 1,
        dots: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayHoverPause: true,
    });

    // =========================
    // PRUEBA Carrusel de marcas o aliados (logos de empresas)
    $('.brand-slider').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: { items: 2 },
            568: { items: 3 },
            768: { items: 5 },
            1000: { items: 5 }
        }
    });

    // =========================
    // Reproductor de video en popup (YouTube, Vimeo, etc.)
    $('.play-btn').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // =========================
    // PRUEBA Carrusel de servicios destacados (ej: clases de guitarra, piano, etc.)
    $('.service-item-area').owlCarousel({
        center: true,
        items: 3,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: [
            "<i class='fas fa-chevron-left'></i>",
            "<i class='fas fa-chevron-right'></i>"
        ],
        responsive: {
            0: { items: 1 },
            600: { items: 1 },
            768: { items: 2 },
            1000: { items: 3 }
        }
    });

    // =========================
    // PRUEBA Galería de imágenes con popup (tipo lightbox)
    $('.gallery-view').magnificPopup({
        delegate: 'a',                // Activa en los enlaces dentro del contenedor
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,           // Galería activa (puede navegar entre imágenes)
            navigateByImgClick: true,
            preload: [0, 1]          // Precarga imágenes adyacentes
        }
    });

    // =========================
    // Carrusel de testimonios o comentarios de clientes/alumnos
    $('.testimonial-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-right-arrow'></i>"
        ],
    });

    // =========================
    // PRUEBA Tabs de contenido en una sola página (por ejemplo: descripción, profesores, preguntas)
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current'); // Activa el primer tab
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'), 
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');         // Quita clase actual
            $(this).closest('li').addClass('current');               // Agrega clase actual al clickeado

            tab.find('.tab_content')
                .find('div.tabs_item')
                .not('div.tabs_item:eq(' + index + ')').slideUp();   // Oculta los demás
            tab.find('.tab_content')
                .find('div.tabs_item:eq(' + index + ')').slideDown();// Muestra el tab actual

            g.preventDefault(); // Previene comportamiento por defecto del enlace
        });
    })(jQuery);

    // =========================
    // PRUEBA Controles para sumar y restar cantidades en inputs (ej: unidades al comprar)
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');
        
        // Botón de sumar
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            var newVal = (oldValue >= max) ? oldValue : oldValue + 1;
            spinner.find("input").val(newVal).trigger("change");
        });

        // Botón de restar
        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            var newVal = (oldValue <= min) ? oldValue : oldValue - 1;
            spinner.find("input").val(newVal).trigger("change");
        });
    });

    // =========================
    // Botón "volver arriba" que aparece al hacer scroll
    $('body').append('<div id="toTop" class="top-btn"><i class="fas fa-chevron-up"></i></div>');

    // Muestra u oculta el botón según posición del scroll
    $(window).on('scroll', function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });

    // Al hacer clic, hace scroll suave hasta el top de la página
    $('#toTop').on('click', function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    // =========================
    // Inicializa animaciones cuando los elementos entran en pantalla (requiere librería WOW.js)
    new WOW().init();

})(jQuery);
