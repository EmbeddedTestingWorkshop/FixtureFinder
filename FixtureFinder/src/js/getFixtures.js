var FixtureParser = function(){
    var currentDateSelected = new Date();

    var getFixturesByDate = function(){
        FixtureFinder.FixtureRetriever.getFixturesByDate(
            FixtureFinder.dateFormatter.formatDate(currentDateSelected), // date
            FixtureFinder.FixtureFilter(
                $('input[name=country]:checked')[0].id, // country
                $('.team-filter')[0].value //team
            )
        );
    }

    var addGetFixturesListener = function(selector, listenerType){
        $(selector)[listenerType](
            function() {
                getFixturesByDate();
            }
        );
    };

    var getFixtureAsHTMLElement = function(fixture, index){
        var listElement = '<tr class="fixture">';
            listElement = listElement + '<td class="kickOffDate"> [' +  fixture.country + "] - " + fixture.competition + '</td>';
            listElement = listElement + '<td class="kickOffDate"><small>' +  fixture.kickOff.time + '</small></td>';
            listElement = listElement + '<td class="home team"><strong>' + fixture.homeTeam +'</strong></td>';
            listElement = listElement + '<td class="score">' + fixture.score.homeGoals + ':' + fixture.score.awayGoals + '</td>';
            listElement = listElement + '<td class="away team"><strong>' + fixture.awayTeam + '</strong></td>';
            listElement = listElement + '</tr>';
        return listElement;
    };

    return {
        parseFixtures: function(fixtures, date, filter){
            $('.fixtures .fixture').remove();
            $('.fixtures .date strong').text(date);
            $.each(fixtures, function(index, fixture ) {
                if(filter.include(fixture)){
                    $('.fixtures .table').append(getFixtureAsHTMLElement(fixture, index));
                }
            });
        },
        getFixtureAsHTMLElement: getFixtureAsHTMLElement,
        initialize: function(){
            addGetFixturesListener('.team-filter', 'keyup');
            addGetFixturesListener('.country-filter li input', 'click');

            $('.fixtures .dateSelect').click(
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

            FixtureFinder.FixtureRetriever.getFixturesByDate( FixtureFinder.dateFormatter.today(), FixtureFinder.FixtureFilter());
        }
    }
}();
