$('.menu__btn').on('click', function () {
  $('.menu__list').toggleClass('menu__list--active');
});

$('.left__btn').on('click', function () {
  $('.left__backround').addClass('left__backround--active');
});

$('.left__close').on('click', function () {
  $('.left__backround').removeClass('left__backround--active');
});

$('.left__link').on('click', function () {
  $('.left__backround').removeClass('left__backround--active');
});

$('.projects__items').slick({
  centerMode: true,
  slidesToShow: 4,
  arrows: false,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
});

$('.about__box').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
});

$('.shaping__box').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 1500,
});

$('#my_form input').each(function (i) {
  var name1;
  if ($(this).is(':checked')) {

    name1 = $(this).attr('name');

    console.log(name1);
  }
});


let result = document.getElementById('result');

$('#my_form').submit(function (e) {
  e.preventDefault();
  let sum = 0;
  $('#my_form input').each(function (i) {

    if ($(this).is(':checked')) {
      sum = sum + +($(this).val());
      console.log(sum);

    }
    if (sum > 0) {
      result.textContent = sum + ' $ ';
    } else {
      result.textContent = 'Выберите услугу';
    }



  });

});


