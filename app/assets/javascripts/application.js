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

  function ValidateEmail(email) {
        var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return expr.test(email);
    };

$( "#post_email" ).keypress(function() {
    $('#input-form').one('submit', function(e){

        if (!ValidateEmail($("#post_email").val())) {
          e.preventDefault();
          $('#input-msg').text("Please Enter Valid Email");
          $( "#post_email" ).val("");
        }
        else {
          $('#input-feedback').text('Thanks!');
          var inputq1 = encodeURIComponent($('#post_email').val());
          var q1ID = "entry.1071338004"

          var baseURL = "https://docs.google.com/forms/d/e/1FAIpQLScBKiY7ahI2ll2gzw8DrQHh52jn9bPXXhAUKzrEcuZaDIQZ-A/formResponse?";
          var submitRef = "&submit=2067469646452175571"
          var submitURL = (baseURL + q1ID + "=" + inputq1 + submitRef);
          $(this)[0].action = submitURL;
          $('#input-msg').fadeOut();
          $('#input-form').fadeOut();
        }

    });
  });

  $("p.sign-up").click(function () {
      $('#overlay').fadeIn(400);
      $('.pop-up').fadeIn(400);

    });

  $(".close").click(function () {
    $('#overlay').fadeOut(200);
    $('.pop-up').fadeOut(200);
  });

});
