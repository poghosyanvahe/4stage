/**
 * Created by User on 29.03.2016.
 */
$(document).ready(function () {
    $("#owl-demo").owlCarousel({

        slideSpeed: 300,
        singleItem: true,
        pagination: false,
        navigation: false,
        autoPlay: true,
        stopOnHover: true

        // "singleItem:true" is a shortcut for:
        // items : 1,
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });

    $("#owl-recom").owlCarousel({

        // autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: false,
        navigation: true,
        stopOnHover: true,
        navigationText: ['', ''],

    })
    ;
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
            $('body').css('overflow-y', 'scroll')
        }

    } else if (!$('.login').is(':visible') && $(e.target).closest(".user-login").length != 0) {
        $('.login').fadeIn();
        if (!$('.all').hasClass('black-overlay')) {
            $('.all').addClass('black-overlay');
            $('body').css('overflow-y', 'hidden');
            $('.drop-menu.active').hide();
        }

    }


    if ($('.subtotal').is(':visible') && $(e.target).closest(".subtotal").length == 0) {
        $('.subtotal').fadeOut();
        if ($('.all').hasClass('black-overlay')) {
            $('.all').removeClass('black-overlay');
            $('body').css('overflow-y', 'scroll')
        }
    } else if (!$('.subtotal').is(':visible') && $(e.target).closest(".bucket").length != 0) {
        $('.subtotal').fadeIn();
        if (!$('.all').hasClass('black-overlay')) {
            $('.all').addClass('black-overlay');
            $('body').css('overflow-y', 'hidden')
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

$('.add').on('click', function (e) {
    $('.bucket + li').text($('.subtotal').find('li').length + 1);
    src = $(this).parents().eq(2).find('a img').attr('src');
    $('.subtotal').find('ul').append('<li class="clearfix">' +
        '<div class="pic"><img src="' + src + '" alt=""></div>' +
        '<div>' +
        '<h4><a href="#">D400-Dante</a></h4>' +
        '<p>Yamaha</p><p>Qty: <span>1</span></p>' +
        '</div><div><a class="close"></a><p>$250</p></div>' +
        '</li>');

    $(this).fadeOut(100, function () {
        $(this).find('+ .added').fadeIn()
    });

});