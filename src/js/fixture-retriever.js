FixtureFinder.FixtureRetriever = {
    fixtures: [],

    getRetrievedFixtures: function(date, filter) {
        FixtureParser.parseFixtures(fixtures, date, filter);
    },

    getFixturesByDate: function(date, filter){
        var url = 'http://rest-accachallenge.rhcloud.com/fixtures/'+date+'?callback=?';
        $('.spinner').show();
        $.ajax({
           type: 'GET',
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
       }).done(function () {
          $('.spinner').hide();
      });
    }
};