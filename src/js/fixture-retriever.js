FixtureFinder.FixtureRetriever = {
    fixtures: [],

    getRetrievedFixtures: function(date, filter) {
        FixtureParser.parseFixtures(fixtures, date, filter);
    },

    getFixturesByDate: function(date, filter){
        var url = 'http://rest-accachallenge.rhcloud.com/fixtures?callback=?';
        $.ajax({
           type: 'GET',
           data: { "date": date },
           url: url,
           async: false,
           jsonpCallback: 'jsonCallback',
           contentType: "application/json",
           dataType: 'jsonp',
           success: function(json) {
               fixtures = json.fixtures;
               FixtureParser.parseFixtures(fixtures, date, filter);
           },
           error: function(json) {
               console.log(json.messages);
           }
       });
    }
};