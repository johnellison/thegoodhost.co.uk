import $ from 'jquery';
import 'what-input';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';

$(document).foundation();

$(document).ready(function(){

  $('[data-event="contact-button"]').on('click', function(){
    gtag('event', 'Clicked', {
      'event_category': 'Contact',
      'event_label': $(this).text(),
      'value': 10
    });
  });

  $('[data-event="connect-social"]').on('click', function(){
    gtag('event', 'Clicked', {
      'event_category': 'Connect Social',
      'event_label': $(this).attr('href'),
      'value': 2
    });
  });

  $('.earningsEstimate').submit(function(e){
    e.preventDefault();

    $.ajax({
      url: 'https://hooks.zapier.com/hooks/catch/4776817/7qz5do/silent/',
      type: 'post',
      data: $(this).serialize(),
      success: function() {
        $('.earningsHeader').hide();
        $('.earningsEstimate').hide(function(){
          $('.successMessage').show();
        });
        gtag('event', 'Request', {
          'event_category': 'Earnings Form',
          'event_label': 'Submit',
          'value': 50
        });
      }
    });
  });

});
