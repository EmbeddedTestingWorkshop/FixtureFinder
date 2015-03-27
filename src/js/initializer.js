var FixtureFinder = {};

FixtureFinder.initializer = function() {
    var currentDateSelected = new Date();
    var countryFilterSelector = '.fixtures input[name=country]';
    var teamFilterInput = $('.fixtures .team-filter');
    var dateSelectButtons = $('.fixtures .dateSelect');

    var getFixturesByDate = function() {
        FixtureFinder.FixtureRetriever.getFixturesByDate(
            FixtureFinder.dateFormatter.formatDate(currentDateSelected),
            FixtureFinder.FixtureFilter(
                $(countryFilterSelector + ':checked')[0].id,
                teamFilterInput[0].value
            )
        );
    };

    var addGetFixturesListener = function(selector, listenerType, handler) {
        $(selector)[listenerType](handler);
    };

    var addListeners = function() {
        addGetFixturesListener(teamFilterInput, 'keyup', getFixturesByDate);
        addGetFixturesListener(countryFilterSelector, 'click', getFixturesByDate);
        addGetFixturesListener(dateSelectButtons, 'click',
            function(){
                var offset = this.getAttribute('data-offset');
                if(offset === "0"){
                    currentDateSelected = new Date();
                }else{
                    var dateString = FixtureFinder.dateFormatter.formatDateWithOffset(currentDateSelected, offset);
                    currentDateSelected = new Date(dateString);
                }
                getFixturesByDate()
            }
        );
    };

    return {
        init: function() {
            getFixturesByDate();
            addListeners();
        }
    }
}();
