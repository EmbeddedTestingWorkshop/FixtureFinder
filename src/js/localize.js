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
                    fifthNavBtn: "Naechste Woche",
                    competition: "Wetlbewerb",
                    kickOffDate: "Anstoß",
                    home: "Home",
                    score: "Ergebnis",
                    away: "Auswärts",
                    team: "Mannschaft",
                    fixtures: "Spiele",
                    all: "Alle",
                    countries: "Staaten",
                    england: "England",
                    germany: "Deutschland",
                    sweden: "Schweden",
                    filter: "Filtern"
            }
            
            case "en":
            case "english":
            default:
                return {
                    firstNavBtn: "Previous Week",
                    secondNavBtn: "Previous day",
                    thirdNavBtn: "Today",
                    fourthNavBtn: "Next Day",
                    fifthNavBtn: "Next Week",
                    competition: "Competition",
                    kickOffDate: "Kick Off",
                    home: "Home",
                    score: "score",
                    away: "Home",
                    team: "Team",
                    fixtures: "fixtures",
                    all: "All",
                    countries: "Countries",
                    england: "England",
                    germany: "Germany",
                    sweden: "Sweden",
                    filter: "Filter"
                }
        }
    };

    var updateNavBarBrand = function(translator){
        $('.fixtures .navbar-brand').text(translator.filter);
    };

    var updateTeamFilter = function(translator){
        $('.fixtures .team-filter').attr('placeholder', translator.team);
    };

    var updateCountryNames = function(translator){
        $('.all-txt').text(translator.all + " " +translator.countries);
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
        $(headersClass+' .home .txt').text(translator.home + " " + translator.team);
        $(headersClass+' .score .txt').text(translator.score);
        $(headersClass+' .away .txt').text(translator.away + " " + translator.team);
    };

    var updateDate = function(lang, date){
        var dateElement = $('.fixtures .date strong');
        dateElement.text(
            moment(date || dateElement.attr('data-date'))
            .locale(lang)
            .format('ddd Do MMMM YYYY')
        );
    };

    var updateNoOfFixtures = function(translator){
        var originalAsArray = $('.fixtures .noOf').text().split(" ");
        $('.fixtures .noOf').text(originalAsArray[0] +" "+translator.fixtures);
    }

    FixtureFinder.localizePage = function(lang){ 
        FixtureFinder.currentLanguage = lang;
        var localizer = translator(lang);
        updateNavBarBrand(localizer);
        updateTeamFilter(localizer);
        updateCountryNames(localizer);
        updateDateSelectNav(localizer); 
        updateHeaders(localizer); 
        updateDate(lang);
        updateNoOfFixtures(localizer);
    };

    FixtureFinder.localizeString = function(value){
        return translator(FixtureFinder.currentLanguage)[value];
    };

    FixtureFinder.setDateWithCurrentLanguage = function(date){
        updateDate(FixtureFinder.currentLanguage, date);
    }
}()
