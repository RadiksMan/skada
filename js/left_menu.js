$(document).ready(function (){
    // $('header .catalog_menu a').click(function (e){
    //     e.preventDefault();
    //     var parent= $(this).parent();
    //     if(!$(parent).hasClass('active')){
    //         $('.catalog_popup_menu').animate({
    //             width: 225
    //         }, 500, function() {
    //             $(parent).addClass('active');
    //         });
    //     }else{
    //         $('.catalog_popup_menu').animate({
    //             width: 0
    //         }, 500, function() {
    //             $(parent).removeClass('active');
    //         });
    //     }
    // });

    $('header .catalog_menu a,header .catalog_menu span').click(function (e){
        if($(window).width() > 1024 ){
            //e.preventDefault();
        }
        var parent= $(this).parent();
        if(!$(parent).hasClass('active')){
            $('.catalog_popup_menu').addClass('active');
            $(parent).addClass('active');
        }else{
            $('.catalog_popup_menu').removeClass('active');
            $(parent).removeClass('active');
        }
    });
});