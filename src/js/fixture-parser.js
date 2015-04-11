String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

var FixtureParser = function(){
    var getLocalKickOffTime = function(date, utcTime){
        if(utcTime.indexOf(":") > -1){
            var utcKOTime  = moment.utc(moment.utc(date + "T" + utcTime).format('YYYY-MM-DD HH:mm:ss')).toDate();
            localKOTime = moment(utcKOTime).format("HH:mm");
        } else{
           localKOTime = utcTime;
        }
        return localKOTime;
    };

    var getFixtureAsHTMLElement = function(fixture, index){

        var listElement = '<tr class="fixture">';
            listElement = listElement + '<td class="competition"> <div class="flag flag-'+fixture.country+'"></div>' + fixture.competition + '</td>';
            listElement = listElement + '<td class="kickOffDate" ><small>' + getLocalKickOffTime(fixture.kickOff.date, fixture.kickOff.time) + '</small></td>';
            listElement = listElement + '<td class="home team"><strong>' + fixture.homeTeam +'</strong></td>';
            listElement = listElement + '<td class="score">' + fixture.score.homeGoals + ':' + fixture.score.awayGoals + '</td>';
            listElement = listElement + '<td class="away team"><strong>' + fixture.awayTeam + '</strong></td>';
            listElement = listElement + '</tr>';
        return listElement;
    };

    return {
        parseFixtures: function(fixtures, filter, date){
            if(date) {
                $('.fixtures .date strong').attr("data-date", date);
                $('.fixtures .date strong').text(moment(date).locale(FixtureFinder.currentLanguage).format('Do MMMM YYYY').toString());
            }

            $('.fixtures .fixture').remove();
            var filtered = filter(fixtures);
            
            var localString = FixtureFinder.localizeString("fixtures");

            $('.fixtures .noOf').text(filtered.length +' '+localString);
            $.each(filtered, function(index, fixture ) {
               $('.fixtures .table').append(getFixtureAsHTMLElement(fixture, index));
            });
        }
    }
}();
