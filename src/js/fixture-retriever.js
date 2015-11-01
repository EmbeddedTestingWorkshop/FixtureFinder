// Admin password service server: PtmKbnhBzA_Yc8Wu
var FixtureRetriever = function(){
    var resortByColumn = function(){
        var sortedClass = 'sorttable_sorted';
        var sorted = $('.'+sortedClass);
        sorted.removeClass(sortedClass);
        $('#sorttable_sortfwdind').remove();
        sorted.click();
    };

    var clearOldData = function(){
        $('.fixtures .noOf').empty();
        $('.fixtures .fixture').remove();
    };
    
    var fixtures = [];
    FixtureFinder.FixtureRetriever = {
        getRetrievedFixtures: function(filter) {
            FixtureParser.parseFixtures(filter(fixtures));
            resortByColumn();
        },
        getFixturesByDate: function(date, filter){
            var url = 'http://rest-accachallenge.rhcloud.com/fixtures/'+date+'?callback=?';
            $('.spinner').fadeIn(1000);
            
            FixtureFinder.setDateWithCurrentLanguage(date);
            clearOldData();

            $.ajax({
               type: 'GET',
               url: url,
               async: false,
               jsonpCallback: 'jsonCallback',
               contentType: "application/json",
               dataType: 'jsonp',
               success: function(json) {
                   fixtures = json.fixtures;
                   FixtureParser.parseFixtures(filter(fixtures), filter, date);
               },
               error: function(json) {
                   console.log(json.messages);
               }
           }).done(function () {
              $('.spinner').fadeOut(1000);
           }).always(function(){
               resortByColumn();
           });
        }
    }
}();