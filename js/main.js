/**
 * Created by User on 29.03.2016.
 */
$(document).ready(function () {

    $(window).scroll(function () {

    });
    

});

///drop menu show hide

$(document).on('click', function (e) {
    if ($('.drop-menu').is(':visible') && $(e.target).closest(".drop-menu").length == 0 && $(e.target).closest(".navbar-nav").length == 0) {
        $('.drop-menu').removeClass('active');
        $('.navbar-nav').find('li').removeClass('active')
    }

    if ($('.login').is(':visible') && $(e.target).closest(".login").length == 0) {
        $('.login').fadeOut();
        if ($('.all').hasClass('black-overlay')) {
            $('.all').removeClass('black-overlay');
            $('body').css('overflow-y','scroll')
        }

    } else if (!$('.login').is(':visible') && $(e.target).closest(".user-login").length != 0) {
        $('.login').fadeIn();
        if (!$('.all').hasClass('black-overlay')) {
            $('.all').addClass('black-overlay');
            $('body').css('overflow-y','hidden');
            $('.drop-menu.active').hide();
        }

    }


    if ($('.subtotal').is(':visible') && $(e.target).closest(".subtotal").length == 0) {
        $('.subtotal').fadeOut();
        if ($('.all').hasClass('black-overlay')) {
            $('.all').removeClass('black-overlay');
            $('body').css('overflow-y','scroll')
        }
    } else if (!$('.subtotal').is(':visible') && $(e.target).closest(".bucket").length != 0) {
        $('.subtotal').fadeIn();
        if (!$('.all').hasClass('black-overlay')) {
            $('.all').addClass('black-overlay');
            $('body').css('overflow-y','hidden')
        }
    }

});

/// END drop menu show hide


$('.bucket + li').text($('.subtotal').find('li').length);
$('.close').on('click', function (e) {
    console.log(123);
    $(this).parents().eq(1).fadeOut(200, function (e) {
        $(this).remove();
        $('.bucket + li').text($('.subtotal').find('li').length)
    });

});