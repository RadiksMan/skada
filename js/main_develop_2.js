function owl_portfolio(){
    var portfolio_owl= $('.portfolio_slider_wrapper');

    portfolio_owl.owlCarousel({
        margin:0,
        loop:true,
        autoWidth:true,
        items:1
    });

    $(".portfolio_slider_button .next").click(function(){
        console.log('123');
      portfolio_owl.trigger('next.owl');
    })
    $(".portfolio_slider_button .prev").click(function(){
      portfolio_owl.trigger('prev.owl');
    })
};

function headerNav(){
    if($(window).width() <= 1024 ){
         console.log('mobile');

        $('header.wrapper').prepend('<div class="nav_mobile"></div>');
        var nav = $('.nav_mobile');

        var navCopy = $('header .main_menu').clone().addClass('menu_copied').height($(window).height());
        nav.append(navCopy);

        var menu2 = $('.catalog_menu').clone().removeClass('left');
        nav.find('.main_menu').prepend(menu2);
    }else{
        console.log('qweqweqweq');
    }
}

$(document).ready(function (){
    headerNav();
    owl_portfolio();
});