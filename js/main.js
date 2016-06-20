/**
 * Created by User on 29.03.2016.
 */
$(document).ready(function () {

    $(window).scroll(function () {

    });

    $('.navbar-nav').find('li').on('click',function (e) {
        e.preventDefault();
        $(this).parent().find('li a').css('color','#333');
        $(this).find('a').css('color','#999');

        
    });


});