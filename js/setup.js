$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsive:{
        0:{
            items:3
        },
        450:{
            items:3.5
        },
        650: {
            items:4.5
        },
        1000:{
            items:5
        }
    }
})