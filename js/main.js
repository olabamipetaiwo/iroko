$(document).ready(function() {
    var designContainer = document.querySelector('.designs__content');
    const progressBarBox = document.querySelector(".designs__indicator__box");
    progressBarBox.style.width = '800px';

    designContainer.addEventListener('scroll',function() {
        progressBarBox.style.width = designContainer.scrollLeft + 800 + 'px';
    });

    // Gallery/modal
    $('.closeModal').on('click',function() {
         $('.modal').removeClass('show');
    });


    $('.next').on('click',function() {
        var activeImg =  $('.modal__content__footer img.active');
        activeImg.removeClass('active');
        if(activeImg.next().length > 0) {
            activeImg.next().addClass('active');
            $('.modalMainImg').attr('src',activeImg.next().attr('src'));
        }else {
            var firstChild = $('.modal__content__footer img');
            firstChild.first().addClass('active');
            $('.modalMainImg').attr('src',firstChild.first().attr('src'));
        }
     });

     $('.previous').on('click',function() {
        var activeImg =  $('.modal__content__footer img.active');
        activeImg.removeClass('active');
        if(activeImg.prev().length > 0) {
            activeImg.prev().addClass('active');
            $('.modalMainImg').attr('src',activeImg.prev().attr('src'));
        }else {
            var lastChild = $('.modal__content__footer img');
            lastChild.last().addClass('active');
            $('.modalMainImg').attr('src',lastChild.last().attr('src'));
        }
     });

     $('.gallery__item figure img').on('click',function() {
         $('.modal').addClass('show');
         $('.modalMainImg').attr('src',$(this).attr('src'));
         var newImgList = [];
         var imgList = Array.from($('.gallery__item figure img'));
         imgList.map((image) => {
             newImgList.push($(image).attr('src'));
         });

        var children = document.querySelector("#imgList").childNodes;
        Object.values(children).forEach((child) => {
          document.querySelector("#imgList").removeChild(child);
        });    
        newImgList.forEach((tempurl) => {
          var newimg = new Image();
          newimg.src = tempurl;
          document.getElementById("imgList").appendChild(newimg);
        });
        $('.modal__content__footer img').first().addClass('active');

        $('.modal__content__footer img').on('click',function() {
            var activeImg =  $('.modal__content__footer img.active')
            $(this).addClass('active');
            activeImg.removeClass('active');
            var newSrc = $(this).attr('src');
            $('.modalMainImg').attr('src',newSrc);
        });
     });

    //Gallery


    var $container = $('.features__container');
    var cards = Array.from(document.querySelectorAll('.features__container-item'));


    $('.features__selector button').click(function(){
      $('.features__selector button.active').removeClass('active');
        $(this).addClass('active');
        var selector = $(this).attr('data-filter');

        if(selector === "*") {    
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        }else {
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
        }
        cards.forEach((card) => {
            card.style.position = '';
            card.style.left=0;
            card.style.top = 0;
        });
       
        return false;
    });

});