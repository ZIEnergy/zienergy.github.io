$(document).ready(function() {  
  
  $('[data-modal]').fancybox();
  
  $("input[name='phone']").mask("7 (999) 999-99-99");
  
  $('[data-catalog-btn]').click(function(e) {
    e.preventDefault();
    $('.item:nth-child(n+16)').fadeIn('fast');
    $('.items-bottom').css("display", "flex");
    $(this).hide();
  });
  
  $('[data-size-popup]').click(function(e) {
    e.preventDefault();
    $('.size-question__popup').fadeToggle('fast');
  });
  
  $('.size-question__table-btn').click(function(e) {
    $('.size-question__table-btn').toggleClass('size-question__table-btn--active');
  });
  
  $('.size-question__table-btn--man').click(function(e) {
    $('.size-question__table--woman').hide();
    $('.size-question__table--man').fadeIn('fast');
  });
  
  $('.size-question__table-btn--woman').click(function(e) {
    $('.size-question__table--man').hide();
    $('.size-question__table--woman').fadeIn('fast');
  });
  
  $("img.lazy").lazyload();
  
  $('.product__thumbnail').click(function() {
    $('.product__thumbnail').removeClass('product__thumbnail--active');
    $(this).addClass('product__thumbnail--active');
  });
  
  $('.other-colors__slider').slick({arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true
  });
  
  $('.section-dropdown__button').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('section-dropdown__button--active');
    $(this).parents('.section-dropdown').find('.section-dropdown__content').toggleClass('section-dropdown__content--active');
  });
  
  $('.info-menu').click(function(e) {
    e.preventDefault();
    $('.info__text').hide().fadeIn('fast');
  });
  
});