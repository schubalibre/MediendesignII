$(document).ready(function(){
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      _self = $(this);
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          $('a[href*=#]:not([href=#])').parent().removeClass("active");
          _self.parent().addClass("active");
          return false;
        }
      }
    });
  });
});
