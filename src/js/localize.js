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
                    away: "Auswärts Mannschaft"
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
                    away: "Away Team"
                }
        }
    }();
    updateDateSelectNav(translator); 
    updateHeaders(translator);  
}
