$(document).ready(function() {
  var btn = $('.btn-login');
  var login = $('.login');
  btn.click(function() {
    var attrVal = login.attr('aria-hidden')
    if(attrVal == 'true') {
      login.attr('aria-hidden', 'false');
      btn.attr('aria-expanded', 'true');
    } else {
      login.attr('aria-hidden', 'true');
      btn.attr('aria-expanded', 'false');
    }
  });
});
