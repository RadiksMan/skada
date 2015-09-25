function owl_portfolio(){
    var portfolio_owl= $('.portfolio_slider_wrapper');

    portfolio_owl.owlCarousel({
        margin:0,
        loop:true,
        // autoWidth:true,
        items:1
    });

    $(".portfolio_slider_button .next").click(function(){
      portfolio_owl.trigger('next.owl');
    })
    $(".portfolio_slider_button .prev").click(function(){
      portfolio_owl.trigger('prev.owl');
    })
};

function headerNav(){
    if($(window).width() <= 1024 ){

        $('.nav-button').click(function(){
            $('header .main_menu.menu_copied').toggleClass('active');
            $(this).toggleClass('active');
            $('.catalog_popup_menu').removeClass('active');
        });
        $('.remov_li').click(function(){
            $('.catalog_popup_menu').removeClass('active');
        });

        $('header .main_menu.menu_copied').height($(window).height());
    }else{

    }
}

function projectImage(){
    if($(window).width() <= 768 ){
        var imgIpad = $('.project_main_img').data('ipad');
        $('.project_main_img').attr('style',imgIpad);
    }
    if($(window).width() <= 320 ){
        var imgIphone = $('.project_main_img').data('iphone');
        $('.project_main_img').attr('style',imgIphone);
    }
}
function indexCarousel(){
    if($(window).width() <= 320 ){
        var works_owl= $('.elements_preim').owlCarousel({
            margin:0,
            loop:true,
            autoWidth:false,
            items:1
        });
        $('.elements_preim_nav > .nav_prev').click(function(){
            works_owl.trigger('prev.owl');
        });
        $('.elements_preim_nav > .nav_next').click(function(){
            works_owl.trigger('next.owl');
        });
    }
}

function smoothScroll(){
    if($('.main_content_block').hasClass('non_scroll')){
        console.log('soom');
        try {
            $.browserSelector();
            if($("html").hasClass("chrome")) {
                $.smoothScroll();
            }
        } catch(err) {
        };
    }
}


$(document).ready(function (){
    smoothScroll();
    indexCarousel();
    projectImage();
    headerNav();
    owl_portfolio();
});