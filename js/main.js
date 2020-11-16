$(document).ready(function() {
    var designContainer = document.querySelector('.designs__content');
    const progressBarBox = document.querySelector(".designs__indicator__box");
    progressBarBox.style.width = '800px';

    designContainer.addEventListener('scroll',function() {
        progressBarBox.style.width = designContainer.scrollLeft + 800 + 'px';
    });



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