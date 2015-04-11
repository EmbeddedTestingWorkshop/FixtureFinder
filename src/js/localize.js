FixtureFinder.localize = function(lang){
    FixtureFinder.currentLanguage = lang;
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

    var updateDate = function(translator){
        var dateElement = $('.fixtures .date strong');
        dateElement.text(
            moment(
                dateElement.attr('data-date')
            ).locale(FixtureFinder.currentLanguage)
             .format('Do MMMM YYYY')
        );
        
    };

    var updateNoOfFixtures = function(translator){
        var originalAsArray = $('.fixtures .noOf').text().split(" ");
        $('.fixtures .noOf').text(originalAsArray[0] +" "+translator.fixtures);
    }

    var translator = function(){
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
                    fixtures: "Spielpaarungen"
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
                    fixtures: "fixtures"
                }
        }
    }();
    updateDateSelectNav(translator); 
    updateHeaders(translator); 
    updateDate(translator);
    updateNoOfFixtures(translator);

    
}
