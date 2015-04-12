var FixtureFinder = {
    currentLanguage : 'en'
};

FixtureFinder.initializer = function() {
    var dateFormat = "YYYY-MM-DD";
    var currentDateSelected = moment();
    var countryFilterSelector = '.fixtures input[name=country]';
    var teamFilterInput = $('.fixtures .team-filter');
    var dateSelectButtons = $('.fixtures .dateSelect');
    var localizeButtons = $('.localize input[type="radio"]');
    
    var filterFixtures = function() {
        return FixtureFinder.FixtureFilter(
                $(countryFilterSelector + ':checked')[0].id,
                teamFilterInput[0].value
            )
    };

    var getFixturesByDate = function(date) {
        FixtureFinder.FixtureRetriever.getFixturesByDate(
            date || moment().format(dateFormat),
            filterFixtures()
        );
    };

    var getFixturesForCurrentDate = function(){
        getFixturesByDate(currentDateSelected.format(dateFormat));
    };

    var filterCurrentFixtureList = function(){
        FixtureFinder.FixtureRetriever.getRetrievedFixtures(
            filterFixtures() 
        );
    };

    var addGetFixturesListener = function(selector, listenerType, handler) {
        $(selector)[listenerType](handler);
    };
    
    var addListeners = function() {
        addGetFixturesListener(teamFilterInput, 'keyup', filterCurrentFixtureList);
        addGetFixturesListener(countryFilterSelector, 'click', filterCurrentFixtureList);
        addGetFixturesListener(dateSelectButtons, 'click',
            function(){
                var offset = this.getAttribute('data-offset');
                if(offset === "0"){
                    currentDateSelected = moment();
                }else{
                    var offSetInMillis = offset*22*60*60*1000; //add method takes milliseconds
                    currentDateSelected = moment(currentDateSelected).add(parseInt(offSetInMillis));
                }
                getFixturesForCurrentDate();
            }
        );
        addGetFixturesListener(localizeButtons, 'click',
            function(){ FixtureFinder.localizePage(this.value) }
        );
    };

    return {
        init: function() {
            getFixturesForCurrentDate();
            addListeners();
        }
    }
}();
