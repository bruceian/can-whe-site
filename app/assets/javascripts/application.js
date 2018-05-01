// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require turbolinks
//= require_tree .

$(function() {

    // Send Form to Google Sheet
    $('#input-form #form-submit').click(function(event){

      var inputq1 = encodeURIComponent($('#post_email').val());
      var inputq2 = encodeURIComponent($('#post_first_name').val());
      var inputq3 = encodeURIComponent($('#post_last_name').val());
      var inputq4 = encodeURIComponent($('#post_age').val());
      var q1ID = "entry.1071338004"
      var q2ID = "entry.1151944256"
      var q3ID = "entry.1324870118"
      var q4ID = "entry.253641071"

      var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLScBKiY7ahI2ll2gzw8DrQHh52jn9bPXXhAUKzrEcuZaDIQZ-A/formResponse?";
      var submitRef = "&submit=1111395812031556201"
      var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + "&" + q3ID + "=" + inputq3 + "&" + q4ID + "=" + inputq4 + submitRef);
      $('#input-form')[0].action = submitURL;

       //Check If Input Blank
        if ( inputq1 == '' || inputq2 == '' || inputq3 == '' || inputq4 == '') {
          event.preventDefault();
          $('#input-msg').text('Fields cannot be blank');
        } else if ($('#post_email').hasClass('invalid')) {
          event.preventDefault();
          $('#input-msg').text('Please provide valid email');
        } else {
          $('#input-feedback').text('Thanks!');
          $('#input-msg').fadeOut(100);
          $('#input-form').fadeOut(100);
        }

    });

    // Check If Email Valid
    $('#post_email').on('input', function() {
      var input = $(this);
      var re = /^([A-Za-z0-9_\-\.])+\@(?!(?:[A-Za-z0-9_\-\.]+\.)?([A-Za-z]{2,4})\.\2)([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var is_email = re.test(input.val());

      if(is_email) {
        $(this).removeClass('invalid');
      } else {
        $(this).addClass('invalid');
      }
    });

// Open and Close Pop-Up
  $("p.sign-up").click(function () {
      $('#overlay').fadeIn(400);
      $('.pop-up').fadeIn(400);
    });

  $(".close").click(function () {
    $( "#post_email" ).val("");
    $('#overlay').fadeOut(200);
    $('.pop-up').fadeOut(200);
  });

});
