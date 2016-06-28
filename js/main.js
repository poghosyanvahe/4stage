/**
 * Created by User on 29.03.2016.
 */


function CalculateTotalPrice() {
    var totalPrice = 0;
    for (i = 0; i < $('.subtotal').find('li').length; i++) {
        var aaa = $('.subtotal').find('li').eq(i).find(".price-bucket");
        var singlePrice = parseInt(aaa.text().slice(1));
        console.log(singlePrice);
        totalPrice += singlePrice;
    }
    console.log(totalPrice);
    $(".total-price").text("$" + totalPrice);
    return totalPrice;
}


$(document).ready(function () {

    $(window).scroll(function () {

    });

    // // part 2 grid
    //
    // $('.grid').isotope({
    //     itemSelector: '.grid-item',
    //     masonry: {
    //         columnWidth: 100,
    //         gutter: 20
    //     }
    // });
    //
    // // End

    // Slider caver

    $("#owl-demo").owlCarousel({

        slideSpeed: 300,
        singleItem: true,
        pagination: false,
        navigation: false,
        // autoPlay: true,
        stopOnHover: true
        

    });

    // End

    // Slider recomendation

    $("#owl-recom").owlCarousel({

        // autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 4,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        pagination: false,
        navigation: true,
        stopOnHover: true,
        navigationText: ['', '']

    });

    //End

    // Slider list

    $("#owl-list").owlCarousel({

        slideSpeed: 300,
        singleItem: true,
        pagination: false,
        navigation: false,
        // autoPlay: true,
        stopOnHover: true


    });

    // End

    // Logos show hide

    $(".part5 div > .logos:gt(0)").hide();

    setInterval(function () {
        $('.part5 div > .logos:first')
            .fadeOut(1000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo('.part5 div');
    }, 7000);

    // End
    CalculateTotalPrice();

});

$('.subtotal ul').css('max-height', $(window).height() - 160);

///drop menu show hide

$(document).on('click', function (e) {
    if ($('.drop-menu').is(':visible') && $(e.target).closest(".drop-menu").length == 0 && $(e.target).closest(".navbar-nav").length == 0) {
        $('.drop-menu').removeClass('active');
        $('.navbar-nav').find('li').removeClass('active')
    }

    if ($('.login').is(':visible') && $(e.target).closest(".login").length == 0) {
        $('.login').css('z-index', '-1');
        $('.login').fadeOut();
        if ($('.all').hasClass('black-overlay')) {
            $('.all').removeClass('black-overlay');
            $('body').css('overflow-y', 'scroll')
        }

    } else if (!$('.login').is(':visible') && $(e.target).closest(".user-login").length != 0) {
        $('.login').fadeIn();
        $('.login').css('z-index', '1');
        if (!$('.all').hasClass('black-overlay')) {
            $('.all').addClass('black-overlay');
            $('body').css('overflow-y', 'hidden');
            $('.drop-menu.active').hide();
        }

    }


    if ($('.subtotal').is(':visible') && $(e.target).closest(".subtotal").length == 0) {
        $('.subtotal').css('z-index', '-1');
        $('.subtotal').fadeOut();
        if ($('.all').hasClass('black-overlay')) {
            $('.all').removeClass('black-overlay');
            $('body').css('overflow-y', 'scroll')
        }
    } else if (!$('.subtotal').is(':visible') && $(e.target).closest(".bucket").length != 0) {
        $('.subtotal').fadeIn();
        $('.subtotal').css('z-index', '1');
        if (!$('.all').hasClass('black-overlay')) {
            $('.all').addClass('black-overlay');
            $('body').css('overflow-y', 'hidden')
        }
        if ($('.subtotal').find('li').length == 0) {
            $('.subtotal').find('li').hide();
            $('.subtotal').find('.checkout').hide();
            $('.subtotal').find('.bucket-empty').show()
        } else {
            $('.subtotal').find('li').show();
            $('.subtotal').find('.checkout').show();
            $('.subtotal').find('.bucket-empty').hide()
        }
    }

    if ($('.find').is(':visible') && $(e.target).closest(".find").length == 0) {
        $('.find').css('z-index', '-1');
        $('.find').fadeOut();
        if ($('.all').hasClass('black-overlay')) {
            $('.all').removeClass('black-overlay');
            $('body').css('overflow-y', 'scroll')
        }
    } else if (!$('.find').is(':visible') && $(e.target).closest(".search").length != 0) {
        $('.find').fadeIn();
        $('.find').css('z-index', '1');
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
        CalculateTotalPrice();
        $('.bucket + li').text($('.subtotal').find('li').length);
        if ($('.subtotal').find('li').length == 0) {
            $('.subtotal').find('li').hide();
            $('.subtotal').find('.checkout').hide();
            $('.subtotal').find('.bucket-empty').show()
        } else {
            $('.subtotal').find('li').show();
            $('.subtotal').find('.checkout').show();
            $('.subtotal').find('.bucket-empty').hide()
        }
    });


});

$('.add').on('click', function (e) {
    $('.bucket + li').text($('.subtotal').find('li').length + 1);
    priceRec = $(this).parent().find('.price-rec').text();


    // total = price + parseInt($('.total-price').text().slice(1));
    // $('.total-price').text('$' + total);
    imgSrc = $(this).parents().eq(2).find('a img').attr('src');
    $('.subtotal').find('ul').append('<li class="clearfix">' +
        '<div class="pic"><img src="' + imgSrc + '" alt=""></div>' +
        '<div>' +
        '<h4><a href="#">D400-Dante</a></h4>' +
        '<p>Yamaha</p><p>Qty: <span>1</span></p>' +
        '</div><div><a class="close"></a><p class="price-bucket">' + priceRec + '</p></div>' +
        '</li>');

    $(this).fadeOut(100, function () {
        $(this).find('+ .added').fadeIn()
    });

    CalculateTotalPrice();
});



