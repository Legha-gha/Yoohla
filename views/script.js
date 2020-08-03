    /*-----------------------
        Categories Slider
    ------------------------*/
    $(".categories__slider.deals").owlCarousel({
        loop: true,
        margin: 0,
        items: 1.05,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        responsive: {

            0: {
                 items: 1.05,
             },

             480: {
                 items: 1.05,
             },

             768: {
                 items: 1.05,
             },

             992: {
                 items: 1.05,
             }
        }
    });

    $(".categories__slider.features").owlCarousel({
        loop: true,
        margin: 0,
        items: 7,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        responsive: {

             0: {
                 items: 2,
             },

             480: {
                 items: 3.5,
             },

             768: {
                 items: 6,
             },

             992: {
                 items: 7,
             }
        }
    });

    $(".categories__slider.cat-1").owlCarousel({
        loop: true,
        margin: 0,
        items: 5.5,
        dots: false,
        nav: true,
        navText: ["<span class='fa fa-angle-left'><span/>", "<span class='fa fa-angle-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 500,
        autoHeight: false,
        autoplay: true,
        responsive: {

             0: {
                 items: 1.5,
             },

             480: {
                 items: 2.5,
             },

             768: {
                 items: 4.5,
             },

             992: {
                 items: 5.5,
             }
        }
    });