FixtureFinder.FixtureFilter = function(country){
    if(country == undefined){
        country = 'all';
    }
    return {
        include: function(fixture){
            if(country === 'all' || fixture.country === country){
                return true;
            }
        }
    }
};

var FixtureRetriever = {
    getFixturesByDate: function(date, filter){
        var url = 'http://localhost:8080/fixtures?callback=?';
        $.ajax({
           type: 'GET',
           data: { "date": date },
           url: url,
           async: false,
           jsonpCallback: 'jsonCallback',
           contentType: "application/json",
           dataType: 'jsonp',
           success: function(json) {
               FixtureParser.parseFixtures(json.fixtures, date, filter);
           },
           error: function(json) {
               console.log(json.messages);
           }
       });
    }
};
var FixtureParser = {  
    parseFixtures: function(fixtures, date, filter){
        $('.fixtures .fixture').remove();
        $('.fixtures .date strong').text(date);
        $.each(fixtures, function(index, fixture ) {
            if(filter.include(fixture)){
                $('.fixtures .table').append(FixtureParser.getFixtureAsHTMLElement(fixture, index));
            }
        });
    },
    getFixtureAsHTMLElement: function(fixture, index){
        var listElement = '<tr class="fixture">';
            listElement = listElement + '<td class="kickOffDate"> [' +  fixture.country + "] - " + fixture.competition + '</td>';
            listElement = listElement + '<td class="kickOffDate"><small>' +  fixture.kickOff.time + '</small></td>';
            listElement = listElement + '<td class="home team"><strong>' + fixture.homeTeam +'</strong></td>';
            listElement = listElement + '<td class="score">' + fixture.score.homeGoals + ':' + fixture.score.awayGoals + '</td>';
            listElement = listElement + '<td class="away team"><strong>' + fixture.awayTeam + '</strong></td>';
            listElement = listElement + '</tr>';
        return listElement;
    },
    initialize: function(){
        var currentDateSelected = new Date();

        $('.country-filter li input').click(function () {
          FixtureRetriever.getFixturesByDate(
            FixtureFinder.dateFormatter.formatDate(currentDateSelected),
            FixtureFinder.FixtureFilter(this.getAttribute('id'))
          );
        });


        $('.fixtures .dateSelect').click(
           function(){
               var offset = this.getAttribute('data-offset');
               var dateString;
               if(offset === "0"){
                   dateString = FixtureFinder.dateFormatter.today();
                   currentDateSelected = new Date();
               }else{
                   dateString = FixtureFinder.dateFormatter.formatDateWithOffset(currentDateSelected, offset);
                   currentDateSelected = new Date(dateString);
               }

               var country = $('input[name=country]:checked')[0].id;
               FixtureRetriever.getFixturesByDate(dateString, FixtureFinder.FixtureFilter(country));
           }
        );

        FixtureRetriever.getFixturesByDate( FixtureFinder.dateFormatter.today(), FixtureFinder.FixtureFilter());
    },
    today: function(){
        return new Date().getFullYear()
        + "-" + (new Date().getMonth() + 1)
        + "-" + (new Date().getDate() )
    }
};
