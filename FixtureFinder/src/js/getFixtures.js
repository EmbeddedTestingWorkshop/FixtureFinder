var FixtureRetriever = {
    getFixturesByDate: function(date){ 
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
               FixtureParser.parseFixtures(json.fixtures, date);
           },
           error: function(json) {
               console.log(json.messages);
           }
       });
    }
};
var FixtureParser = {  
    parseFixtures: function(fixtures, date){
        $('.fixtures .fixture').remove();
        $('.fixtures .date strong').text(date);
        $.each(fixtures, function(index, fixture ) {
            $('.fixtures .table').append(FixtureParser.getFixtureAsHTMLElement(fixture, index));
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
               FixtureRetriever.getFixturesByDate(dateString);
           }
        );
        FixtureRetriever.getFixturesByDate( FixtureFinder.dateFormatter.today() );
    },
    today: function(){
        return new Date().getFullYear()
        + "-" + (new Date().getMonth() + 1)
        + "-" + (new Date().getDate() )
    }
};
