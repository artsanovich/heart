$('.lang-menu__btn').on('click', function(){
  $('.lang-menu__btn').removeClass('lang-menu__btn--active')
  $(this).addClass('lang-menu__btn--active')
})

$('.projects__link').on('click', function(){
  $('.projects__link').removeClass('projects__link--active')
  $(this).addClass('projects__link--active')
})