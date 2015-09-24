$(document).ready(function (){
    $('header .catalog_menu a').click(function (e){
        e.preventDefault();
        var parent= $(this).parent();
        if(!$(parent).hasClass('active')){
            $('.catalog_popup_menu').animate({
                width: 225
            }, 500, function() {
                $(parent).addClass('active');
            });
        }else{
            $('.catalog_popup_menu').animate({
                width: 0
            }, 500, function() {
                $(parent).removeClass('active');
            });
        }
    });
});