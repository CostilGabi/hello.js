
// HOW TO USE IT!

let self = $(this);

// just to mimic the functionality of an app!
$('h1').hide();

$( '.sendButton' ).on('click', function() {

    // just to mimic the functionality of an app!
    $('.form').hide('slow');

    let fn = $('input.fn').val();
    let ln = $('input.ln').val();
    let lang = $( 'select#lang' ).val();
    let gender = $( 'select#gender' ).val();
    
    // initialize the variable with all the values in hi$.
    let user = hi$(fn, ln, lang, gender);

    // use the values in  $(selector) and chose between formal or not (true/false)
    user.liveGreet( 'h1.greeting', true );

    // just to mimic the functionality of an app!
    $( 'h1.greeting' ).show('slow');

});