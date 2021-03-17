// Made by Gabi Costil

(function(global,$) {

    // Add as many parameters as you need
    var Hello = function(firstName, lastName, lang, gender) {
        
        // Update the paramets here as well if you change them
        return new Hello.init(firstName, lastName, lang, gender);

    }

    //supported languages
    var supportedLangs = ['en', 'ro'];

    var typeGreetingEn = {
        male: 'Mister',
        female: 'Misses'
    }

    var typeGreetingRO = {
        male: 'Domnul',
        female: 'Doamna'
    }

    var greetings = {
        en: 'Hello',
        ro: 'Salut'
    };

    var formalGreetings = {
        en: 'Greetings',
        ro: 'Buna'
    };

    // The prototype - add here more methods if needed!
    Hello.prototype = {

        fullName: function() {
            return this.firstName + ' ' + this.lastName;
        },

        getType: function(lang) {

            if ( this.lang === 'ro' ) {
                return typeGreetingRO[this.gender];
            }

            if ( this.lang === 'en' ) {
                return typeGreetingEn[this.gender];
            }

        },

        validate: function() {

            if ( supportedLangs.indexOf(this.lang) === -1 ) {
                throw "Not supported language";
            }

        },

        greeting: function() {
            return greetings[this.lang] + ' ' + this.firstName;
        },

        formalGreeting: function() {
            return formalGreetings[this.lang] + ', ' + this.getType(this.lang) + ' ' + this.fullName();
        },

        greet: function(formal) {
            
            var msg;

            if ( formal ) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            if ( console ) {

                console.log(msg);

            }

            return this;

        },

        setLang: function(lang) {

            this.lang = lang;

            this.validate();
            
            return this;

        },

        liveGreet: function(selector, formal) {

            if( !$ ) {
                throw 'jQuery is not loaded';
            }
            
            if ( !selector ) {
                throw 'Selector not defined';
            }

            var msg;

            if ( formal ) {
                msg = this.formalGreeting();
            } else {
                msg = this.greeting();
            }

            $(selector).html(msg);

            return this;

        }

    };

    // Update the paramets here as well if you change them
    Hello.init = function(firstName, lastName, lang, gender) {
        
        var self = this;

        // default value if it's not set
        self.firstName = firstName || 'Unset';
        self.lastName = lastName || 'Unset';
        self.gender = gender || 'male';
        self.lang = lang || 'en';
        
    }

    Hello.init.prototype = Hello.prototype;

    global.Hello = global.hi$ = Hello;

}(window,$));