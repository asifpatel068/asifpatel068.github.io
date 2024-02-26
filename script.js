
// new GitHubCalendar(".calendar", "asifpatel068");

GitHubCalendar(".calendar", "asifpatel068");

// or enable responsive functionality:
GitHubCalendar(".calendar", "asifpatel068", { responsive: true });

// Use a proxy
GitHubCalendar(".calendar", "asifpatel068", {
   proxy (username) {
     return fetch(`https://your-proxy.com/github?user=${username}`)
   }
}).then(r => r.text())

function resume(){
  window.open("https://drive.google.com/file/d/17IAPamudP8UhGqDUfI3wpcyEFqwex7IU/view?usp=sharing","_blank")
}


$(document).ready(function(){

    $('#menu').click(function(){
      $(this).toggleClass('fa-times');
      $('header').toggleClass('toggle');
    });
  
    $(window).on('scroll load',function(){
  
      $('#menu').removeClass('fa-times');
      $('header').removeClass('toggle');
  
      if($(window).scrollTop() > 0){
        $('.top').show();
      }else{
        $('.top').hide();
      }
  
    });
  
    // smooth scrolling 
  
    $('a[href*="#"]').on('click',function(e){
  
      e.preventDefault();
  
      $('html, body').animate({
  
        scrollTop : $($(this).attr('href')).offset().top,
  
      },
        500, 
        'linear'
      );
  
    });
  
  });