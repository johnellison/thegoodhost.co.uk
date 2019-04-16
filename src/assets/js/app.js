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
    ga('send', {
      'hitType': 'event',
      'eventCategory': 'Contact',
      'eventAction': 'clicked',
      'eventLabel': $(this).text(),
      'eventValue': 10
    });
  });

  $('[data-event="connect-social"]').on('click', function(){
    ga('send', {
      'hitType': 'event',
      'eventCategory': 'Connect Social',
      'eventAction': 'clicked',
      'eventLabel': $(this).attr('href'),
      'eventValue': 5
    });
  });

  $('.earningsEstimateSubmit').click(function(e){
    e.preventDefault();
    $('.earningsHeader').hide();
    $('.earningsEstimate').hide(function(){
      $('.successMessage').show();
    });
    ga('send', {
      'hitType': 'event',
      'eventCategory': 'EarningsForm',
      'eventAction': 'Request',
      'eventLabel': 'Submit',
      'eventValue': 50
    });
  });
});
