var FixtureRetriever = function(){
    var resortByColumn = function(){
        var sortedClass = 'sorttable_sorted';
        var sorted = $('.'+sortedClass);
        sorted.removeClass(sortedClass);
        $('#sorttable_sortfwdind').remove();
        sorted.click();
    };
    
    var fixtures = [];
    FixtureFinder.FixtureRetriever = {
        getRetrievedFixtures: function(filter) {
            FixtureParser.parseFixtures(fixtures, filter);
            resortByColumn();
        },
        getFixturesByDate: function(date, filter){
            var url = 'http://rest-accachallenge.rhcloud.com/fixtures/'+date+'?callback=?';
            $('.spinner').fadeIn(1);
            FixtureFinder.setDateWithCurrentLanguage(date);
            $('.fixtures .noOf').empty();
            $('.fixtures .fixture').remove();
            $.ajax({
               type: 'GET',
               url: url,
               async: false,
               jsonpCallback: 'jsonCallback',
               contentType: "application/json",
               dataType: 'jsonp',
               success: function(json) {
                   fixtures = json.fixtures;
                   FixtureParser.parseFixtures(fixtures, filter, date);
               },
               error: function(json) {
                   console.log(json.messages);
               }
           }).done(function () {
              $('.spinner').fadeOut(1);
           }).always(function(){
               resortByColumn();
           });
        }
    }
}();