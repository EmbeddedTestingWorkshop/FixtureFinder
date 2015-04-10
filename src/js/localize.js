FixtureFinder.localize = function(lang){
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

    $($('.dateSelectNav').children()[0]).text(translator.firstNavBtn);
    $($('.dateSelectNav').children()[1]).text(translator.secondNavBtn);
    $($('.dateSelectNav').children()[2]).text(translator.thirdNavBtn);
    $($('.dateSelectNav').children()[3]).text(translator.fourthNavBtn);
    $($('.dateSelectNav').children()[4]).text(translator.fifthNavBtn);
}
