var localizer = function (){
    var translator = function(lang){
        switch(lang){
            case "de":
            case "german":
                return {
                    firstNavBtn: "Vorige Woche",
                    secondNavBtn: "Vorheriger Tag",
                    thirdNavBtn: "Heute",
                    fourthNavBtn: "Nächster Tag",
                    fifthNavBtn: "Nächste Woche",
                    competition: "Wettbewerb",
                    kickOffDate: "Anstoß",
                    home: "Heim Mannschaft",
                    score: "Ergebnis",
                    away: "Auswärts Mannschaft",
                    fixtures: "Spielpaarungen",
                    allCountries: "Alle Staaten",
                    england: "England",
                    germany: "Deutschland",
                    sweden: "Schweden"

                }
            case "en":
            case "english":
            default:
                return {
                    firstNavBtn: "Previous Week",
                    secondNavBtn: "Previous Day",
                    thirdNavBtn: "Today",
                    fourthNavBtn: "Next Day",
                    fifthNavBtn: "Next Week",
                    competition: "Competition",
                    kickOffDate: "Kick Off",
                    home: "Home Team",
                    score: "Score",
                    away: "Away Team",
                    fixtures: "fixtures",
                    allCountries: "All Countries",
                    england: "England",
                    germany: "Germany",
                    sweden: "Sweden"
                }
        }
    };

    var updateCountryNames = function(translator){
        $('.all-txt').text(translator.allCountries);
        $('.en-txt').text(translator.england);
        $('.de-txt').text(translator.germany);
        $('.sv-txt').text(translator.sweden);
    };

    var updateDateSelectNav = function(translator){
        var dateSelectNav = $('.dateSelectNav').children()
        $(dateSelectNav[0]).text(translator.firstNavBtn);
        $(dateSelectNav[1]).text(translator.secondNavBtn);
        $(dateSelectNav[2]).text(translator.thirdNavBtn);
        $(dateSelectNav[3]).text(translator.fourthNavBtn);
        $(dateSelectNav[4]).text(translator.fifthNavBtn);
    };
      
    var updateHeaders = function(translator){
        var headersClass = '.table .headers'
        $(headersClass+' .competition .txt').text(translator.competition);
        $(headersClass+' .kickOffDate .txt').text(translator.kickOffDate);
        $(headersClass+' .home .txt').text(translator.home);
        $(headersClass+' .score .txt').text(translator.score);
        $(headersClass+' .away .txt').text(translator.away);
    };

    var updateDate = function(lang){
        var dateElement = $('.fixtures .date strong');
        dateElement.text(
            moment(
                dateElement.attr('data-date')
            ).locale(lang)
             .format('Do MMMM YYYY')
        );
        
    };

    var updateNoOfFixtures = function(translator){
        var originalAsArray = $('.fixtures .noOf').text().split(" ");
        $('.fixtures .noOf').text(originalAsArray[0] +" "+translator.fixtures);
    }

    FixtureFinder.localize = function(lang){ 
        FixtureFinder.currentLanguage = lang;
        var localizer = translator(lang);
        updateCountryNames(localizer);
        updateDateSelectNav(localizer); 
        updateHeaders(localizer); 
        updateDate(lang);
        updateNoOfFixtures(localizer);
    };

    FixtureFinder.localizeString = function(value){
        return translator(FixtureFinder.currentLanguage)[value];
    };
}()
