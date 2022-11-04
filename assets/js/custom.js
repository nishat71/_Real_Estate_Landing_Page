let config = {
    type:'loop',
    arrows:true,
    pagination:false,
    perPage: 3,
    perMove:1,
    gap:30,
    easing:'ease',
    breakpoints:{
    991:{
            perPage:2,
           
        },
        420:{
            perPage:1,
        }
    }
};
new Splide( '._real_estate_property_slider',config ).mount();

let config1 = {
    type:'loop',
    arrows:false,
    pagination:true,
    perPage: 1,
    perMove:1,
    easing:'ease',
};
new Splide( '._real_estate_testimonial_slider',config1).mount();

