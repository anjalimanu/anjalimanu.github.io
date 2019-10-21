$(function(){
  closeMobileNavOnClick();

  function closeMobileNavOnClick() {
    $('a.nav-link').click(function() {
      $(this).closest('.navbar-collapse').removeClass('show')
    })
  }
});