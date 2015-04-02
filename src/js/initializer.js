var FixtureFinder = {};

FixtureFinder.initializer = function() {
    var dateFormat = "YYYY-MM-DD";
    var currentDateSelected = moment().format(dateFormat);
    var countryFilterSelector = '.fixtures input[name=country]';
    var teamFilterInput = $('.fixtures .team-filter');
    var dateSelectButtons = $('.fixtures .dateSelect');
    
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

    var filterFixturesOfCurrentDate = function(){
        FixtureFinder.FixtureRetriever.getRetrievedFixtures(
            currentDateSelected,
            filterFixtures() 
        );
    };

    var addGetFixturesListener = function(selector, listenerType, handler) {
        $(selector)[listenerType](handler);
    };

    var getFixturesForCurrentDate = function(){
        getFixturesByDate(currentDateSelected)
    };
    
    var addListeners = function() {
        addGetFixturesListener(teamFilterInput, 'keyup', filterFixturesOfCurrentDate);
        addGetFixturesListener(countryFilterSelector, 'click', filterFixturesOfCurrentDate);
        addGetFixturesListener(dateSelectButtons, 'click',
            function(){
                var offset = this.getAttribute('data-offset');
                if(offset === "0"){
                    currentDateSelected = moment().format(dateFormat);
                }else{
                    currentDateSelected = moment(currentDateSelected).add(parseInt(offset), 'days').format("YYYY-MM-DD");
                }
                getFixturesForCurrentDate();
            }
        );
    };

    return {
        init: function() {
            getFixturesForCurrentDate();
            addListeners();
        }
    }
}();
