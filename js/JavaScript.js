//捐款
$(function () {
    $('.help').click(function (e) {
        e.preventDefault();
        $('.check-box').toggleClass('testtt')
    })

    $('.check-close').click(function () {
        $('.check-box').toggleClass('testtt');
    })

    $('.ibon-index').click(function (e) {
        e.preventDefault();
        let open = false;
        if (open == false) {
            $('.ibon').css({ display: 'inline' })
        } else {
            $('.ibon').css({ display: 'none' })
        }

        $('.ibon-close').click(function () {
            $('.ibon').css({ display: 'none' })
        })

        $('.check-box').toggleClass('testtt');
    })

})

// $(window).scroll(function () {
//     let object = $('.help');
//     let objectOffset = object.offset();
//     let objectWidth = object.outerWidth();
//     let windowHeight = $(window).height();
//     let scrollY = $(window).scrollTop();

//     object.css({
//         position: 'fixed',
//         top: '50%',
//         right: 0,
//         transform: 'translateY(-50%)',
//         // display: 'block'
//     })

//     if (objectOffset.top + objectWidth / 2 > scrollY + windowHeight) {
//         object.css({
//             top: scrollY + windowHeight - objectWidth / 2,
//             transform: 'translateY(-50%)'
//         });
//     } else if (objectOffset.top + objectWidth / 2 < scrollY) {
//         object.css({
//             top: scrollY + objectWidth / 2,
//             transform: 'translateY(-50%)'
//         });
//     }
// })

// $(window).scroll(function () {
//     if($('.check').css('display')!="none"){
//     let object = $('.check');
//     let objectOffset = object.offset();
//     let objectWidth = object.outerWidth();
//     let windowHeight = $(window).height();
//     let scrollY = $(window).scrollTop();

//     object.css({
//         position: 'fixed',
//         top: '50%',
//         right: 0,
//         left: 0,
//         transform: 'translateY(-50%)',
//         // display: 'none'
//     })

//     if (objectOffset.top + objectWidth / 2 > scrollY + windowHeight) {
//         object.css({
//             top: scrollY + windowHeight - objectWidth / 2,
//             transform: 'translateY(-50%)'
//         });
//     } else if (objectOffset.top + objectWidth / 2 < scrollY) {
//         object.css({
//             top: scrollY + objectWidth / 2,
//             transform: 'translateY(-50%)'
//         });
//     }
// }
// })

//========================================================================
//圖片跑馬燈
$(window).on("load", function () {
    $('.test').addClass('run')
    $('.test2').addClass('run2')
    $('.test3').addClass('run3')
    $('.test4').addClass('run4')
})

//=======================================================================
$(function () {
    $('.gg-close').click(function () {
        $('.gg-box').css({ display: 'none' });
    })
})
// ===================================
$(function () {
    $('.wrong').click(function (e) {
        e.preventDefault();
        $('.gg-box').css({ display: 'inline' });
    })
})

$(function () {
    $('.fa-bars').click(function () {
        if ($('.title').css('display') == "none") {
            $('.title').css({ display: 'inline' })
        } else {
            $('.title').css({ display: 'none' })
        }

    })
})
//=======================================================================

let my_text2_el = document.querySelectorAll(".my_text");
my_text2_el.forEach(function (element) {
  element.addEventListener("keydown", function (e) {
    if ((e.which >= 48 && e.which <= 57) || e.which == 8) {
      // 如果輸入的是數字或者是退格鍵，則不做任何處理
    } else {
      e.preventDefault();
      alert("請輸入數字");
    }
  });
});
