      // Look for .hamburger
      var hamburger = document.querySelector(".hamburger");
      // On click
      hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        // Do something else, like open/close menu
      });

      $(".bar").each(function(){
        $(this).find(".bar-inner").animate({
          width: $(this).attr("data-width")
        },2000)
      });

      var percentage = 80;
      $("#progressbar")
        .animate({
          "value": percent + "%"
        }, {
          duration: 600,
          easing: 'linear'
        });

        AOS.init();


        
        // ini typewrite ya//