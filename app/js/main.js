$('.lang-menu__btn').on('click', function () {
  $('.lang-menu__btn').removeClass('lang-menu__btn--active')
  $(this).addClass('lang-menu__btn--active')
})

$('.projects__link').on('click', function () {
  $('.projects__link').removeClass('projects__link--active')
  $(this).addClass('projects__link--active')
})

$('.projects__menu-btn, .projects__menu-submit').on('click', function () {
  $('.projects__menu-btn').toggleClass('projects__menu-btn--active');
})

$('.aid-cards__more-btn').on('click', function () {
  $('.aid-cards__more-btn').toggleClass('aid-cards__more-btn--active');
})

$('.donate__btn').on('click', function () {
  $('.donate__btn').removeClass('donate__btn--active')
  $(this).addClass('donate__btn--active')
})


$('.donate__service-btn').on('click', function () {
  $('.donate__service-btn').removeClass('donate__service-btn--active')
  $(this).addClass('donate__service-btn--active')
})



$('.donate__card-number').on('keyup change', function () {

  if ($(this).val().length > 3) {
    $(this).next().focus();
  }
})


document.addEventListener('DOMContentLoaded', () => {

  const inputElement = document.querySelector('#card-exp')
  const maskOptions = {
    mask: '00/00' 
  }
  IMask(inputElement, maskOptions)

})

let popupTabs = document.querySelectorAll('.popup-form__tab')
let formItems = document.querySelectorAll('.popup-form__form--hide')
let btnHide = document.querySelectorAll('.donate__service--hide')

popupTabs.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentTab = item;
    let tabId = currentTab.getAttribute('data-tab')
    let currentForm = document.querySelector(tabId)
    let btnId = currentTab.getAttribute('data-btn')
    let currentBtn = document.querySelector(btnId)

    popupTabs.forEach(function (item) {
      item.classList.remove('popup-form__tab--active')
    })

    formItems.forEach(function (item) {
      item.classList.add('popup-form__form--hide')
    })

    btnHide.forEach(function (item) {
      item.classList.add('donate__service--hide')
    })


    currentTab.classList.add('popup-form__tab--active')
    currentForm.classList.remove('popup-form__form--hide')
    currentBtn.classList.remove('donate__service--hide')
  })
})

document.querySelector('#card-ccv').addEventListener('input',
function(e){
  this.value = this.value.replace(/[^\d.]/g, '')
})