var FixtureParser = function(){
    var getFixtureAsHTMLElement = function(fixture, index){
        var listElement = '<tr class="fixture">';
            listElement = listElement + '<td class="competition"> <div class="flag flag-'+fixture.country+'"></div>' + fixture.competition + '</td>';
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
        }
    }
}();
