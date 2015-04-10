FixtureFinder.localize = function(lang){
    var updateDateSelectNav = function(translator){
        var dateSelectNav = $('.dateSelectNav').children()
        $(dateSelectNav[0]).text(translator.firstNavBtn);
        $(dateSelectNav[1]).text(translator.secondNavBtn);
        $(dateSelectNav[2]).text(translator.thirdNavBtn);
        $(dateSelectNav[3]).text(translator.fourthNavBtn);
        $(dateSelectNav[4]).text(translator.fifthNavBtn);
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
                    fifthNavBtn: "Nächste Woche"
                }
            case "en":
            case "english":
            default:
                return {
                    firstNavBtn: "Previous Week",
                    secondNavBtn: "Previous Day",
                    thirdNavBtn: "Today",
                    fourthNavBtn: "Next Day",
                    fifthNavBtn: "Next Week"
                }
        }
    }();
    updateDateSelectNav(translator);   
}
