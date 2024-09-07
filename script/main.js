const openPopup = () => {
  const popup = document.querySelector('.popup');

  popup.classList.add('open');
};

const closePopup = () => {
  const popup = document.querySelector('.popup');

  popup.classList.remove('open');
};

const detectBrowserAgent = browserName => {
  return navigator.userAgent.indexOf(browserName) !== -1;
};

document.addEventListener('DOMContentLoaded', () => {
  const videoBtn = document.querySelector('.video-btn');
  if (videoBtn) {
    videoBtn.addEventListener('click', e => {
      e.preventDefault();
      const video = videoBtn.closest('.video-block').querySelector('.video-item');

      videoBtn.classList.add('hidden');
      video.play();
    });
  }
  const popupTrigger = document.querySelectorAll('.popup-trigger'),
    popupClose = document.querySelectorAll('.popup-close'),
    heroImgItems = document.querySelectorAll('.stock__img-item'),
    heroImgItemVideo = document.querySelector('.stock__img-item_video'),
    heroImgItemImg = document.querySelector('.stock__img-item_img');

  if (popupTrigger) {
    popupTrigger.forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();

        openPopup();
      });
    });
  }

  if (popupClose) {
    popupClose.forEach(el => {
      el.addEventListener('click', e => {
        e.preventDefault();

        closePopup();
      });
    });
  }

  if (heroImgItems) {
    heroImgItems.forEach(el => {
      console.log(detectBrowserAgent('Safari'));
      !detectBrowserAgent('Chrome') || !detectBrowserAgent('Safari')
        ? heroImgItemVideo.classList.add('hidden')
        : heroImgItemImg.classList.add('hidden');
    });
  }
});

$(function () {
  if($('.qr-bts-slider').length) {
    $('.qr-bts-slider').slick({
      prevArrow:
        '<button class="arrow-left"><img src="images/autumn2024/arrow-left.svg" alt=""></button>',
      nextArrow:
        '<button class="arrow-right"><img src="images/autumn2024/arrow-right.svg" alt=""></button>',
      dots: false,
      speed: 500,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 741,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    });
  }
  if($('.ny-slider').length) {
    $('.ny-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: false,
      dots: false,
      speed: 500,
      infinite: true,
    });
  }
});


$(function () {
  if($('.where-slider').length) {
    $('.where-slider').slick({
      prevArrow:
        '<button class="arrow-left"><img src="images/where/arrow-l.svg" class="arrow-left_w" alt=""><img src="images/where/left-b.svg"  class="arrow-left_y" alt=""></button>',
      nextArrow:
        '<button class="arrow-right"><img src="images/where/arrow-r.svg" class="arrow-right_w" alt=""><img src="images/where/right-b.svg"  class="arrow-right_y" alt=""></button>',
      slidesToShow: 1,
      slidesToScroll: 1,
    dots: false,
      speed: 500,
      infinite: true,
    asNavFor: '.where-slider-for'
    });
  }
  if($('.where-slider').length) {
    $('.where-slider-for').slick({
      slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.where-slider',
    dots: false,
    arrows: false,
      speed: 500,
      infinite: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 767,
        settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.where-slider',
      dots: true,
      arrows: false,
      speed: 500,
      infinite: true,
      focusOnSelect: true,
        }
      },
    {
        breakpoint: 594,
        settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.where-slider',
      dots: true,
      arrows: false,
      speed: 500,
      infinite: true,
      focusOnSelect: true,
      centerMode: true,
      variableWidth: true
        }
      }
    ]
    });
  }
});
