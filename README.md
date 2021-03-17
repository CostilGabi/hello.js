# Hello.js - a useless library! (jQuery supported)
This library will output into a console or DOM a greeting (formal or not) based on the values given in a variable.

To store in Hello.js all the values, just use the `hi$` ( example: `hi$(fn, ln, lang, gender);` )
After you set the values, you can use any methods you need. 

# liveGreet()
Outputs the greet in a selector (jQuery selector)

`let user = hi$(fn, ln, lang, gender);
user.liveGreet( 'h1.greeting', true );`

**Methods available**
 * fullName
 * getType
 * validate
 * greeting
 * formalGreeting
 * greet
 * setLang
 * liveGreet
