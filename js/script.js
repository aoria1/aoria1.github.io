//Opening and clsoing overlays
function openNav() {
    document.getElementById("jipa").style.width = "100%";
}

function closeNav() {
    document.getElementById("jipa").style.width = "0%";
}

function openNavT() {
    document.getElementById("truevalue").style.width = "100%";
}

function closeNavT() {
    document.getElementById("truevalue").style.width = "0%";
}
//Skill bar animation
jQuery('.skillbar').each(function(){
	jQuery(this).find('.skillbar-bar').animate({
		width:jQuery(this).attr('data-percent')
	},2000);
});
//Carsousel animations
$(document).ready(function(){
    // Activate Carousel
   $("#myCarousel").carousel({interval: false});
    
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel").carousel(3);
    });
     $(".item5").click(function(){
        $("#myCarousel").carousel(4);
    });
	 $(".item6").click(function(){
        $("#myCarousel").carousel(5);
    });
	 $(".item7").click(function(){
        $("#myCarousel").carousel(6);
    });
	 $(".item8").click(function(){
        $("#myCarousel").carousel(7);
    });
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
});

$(document).ready(function(){
    // Activate Carousel
   $("#myCarousel2").carousel({interval: false});
    
    
    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel2").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel2").carousel(1);
    });
    $(".item3").click(function(){
        $("#myCarousel2").carousel(2);
    });
    $(".item4").click(function(){
        $("#myCarousel2").carousel(3);
    });
     $(".item5").click(function(){
        $("#myCarousel2").carousel(4);
    });
	 $(".item6").click(function(){
        $("#myCarousel2").carousel(5);
    });
	 $(".item7").click(function(){
        $("#myCarousel2").carousel(6);
    });
	 $(".item8").click(function(){
        $("#myCarousel2").carousel(7);
    });
    // Enable Carousel Controls
    $(".left").click(function(){
        $("#myCarousel2").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel2").carousel("next");
    });
});

$(document).ready(function(){
  // Add scrollspy to <body>
  $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });
});

$(function () {

    $('#contact-form').validator();

    $('#contact-form').on('submit', function (e) {
        if (!e.isDefaultPrevented()) {
            var url = "contact.php";

            $.ajax({
                type: "POST",
                url: url,
                data: $(this).serialize(),
                success: function (data)
                {
                    var messageAlert = 'alert-' + data.type;
                    var messageText = data.message;

                    var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                    if (messageAlert && messageText) {
                        $('#contact-form').find('.messages').html(alertBox);
                        $('#contact-form')[0].reset();
                    }
                }
            });
            return false;
        }
    })
});