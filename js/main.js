var one_scroll_el=null;
$(document).ready(function (){

    var onePagePagination = true;
    if($('.main_page_one_screen.project_content_block').length >0){
        onePagePagination = false;
    }

    /**/
    var res_width=parseFloat(($(window).width()/300)-0.5);
    res_width=(res_width).toFixed(0);
    $('.works_slider_wrapper').css('width',($(window).width())+'px');
    if(!$('.main_content_block').hasClass('non_scroll')){
        one_scroll_el=$(".main_page_one_screen").onepage_scroll({pagination: onePagePagination});
        $('.main_page_one_screen').css('height',$(window).height());
    }

    var owl = $('.slider_wrapper .horis_slider_services').owlCarousel({
        margin:0,
        loop:true,
        autoWidth:true,
        items:5
    });
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
    $('.wrapper_services_inputs .slider_wrapper .prev').click(function(){
        owl.trigger('prev.owl');
    });
    $('.wrapper_services_inputs .slider_wrapper .next').click(function(){
        owl.trigger('next.owl');
    });
    $('.services_colection').freetile();
    var works_owl= $('.works_slider_wrapper').owlCarousel({
        margin:0,
        loop:true,
        autoWidth:true,
        items:res_width
    });
    works_owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            works_owl.trigger('next.owl');
        } else {
            works_owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
    $('.navigation > div.prev').click(function(){
        works_owl.trigger('prev.owl');
    });
    $('.navigation > div.next').click(function(){
        works_owl.trigger('next.owl');
    });
});
$(window).resize(function (){
    if(!$('.main_content_block').hasClass('non_scroll')){
        $('.onepage-wrapper').css('height',$(window).height());
    }
});
$('.next_slide_wrapper .next_slide').click(function (){
    var page_index = $(this).data("index");
    $(one_scroll_el).moveTo(page_index);
});