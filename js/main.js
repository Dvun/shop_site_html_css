$(function () {
  $('.banner-section__slider').slick({
    dots: true,
    prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/content/arrow-left.svg" alt="" width="15px" height="15px">',
    nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/content/arrow-right.svg" alt="" width="15px" height="15px">',
    autoplay: true,
    autoplaySpeed: 3000,
  })

  $('.tab').on('click', function (e) {
    e.preventDefault()

    $($(this).siblings()).removeClass('tab--active')
    $($(this).parent().siblings().find('div')).removeClass('tabs-content--active')

    $(this).addClass('tab--active')
    $($(this).attr('href')).addClass('tabs-content--active')
  })

  $('.product-item__favorite').on('click', function () {
    $(this).toggleClass('product-item__favorite--active')
  })

  $('.product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev">' +
      '<img src="images/content/arrow-left.svg" alt="" width="15px" height="15px">',
    nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext">' +
      '<img src="images/content/arrow-right.svg" alt="" width="15px" height="15px">',
  })
})