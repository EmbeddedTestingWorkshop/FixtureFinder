describe("A Localizer", function() {

  describe("#localizePage to German", function() {
    beforeEach(function() {
      FixtureFinder.localizePage("de");
    });
    
    it("will translate the nav buttons to German", function() {
      expect($($('.dateSelectNav').children()[0]).text()).toEqual("Vorige Woche");
      expect($($('.dateSelectNav').children()[1]).text()).toEqual("Vorheriger Tag");
      expect($($('.dateSelectNav').children()[2]).text()).toEqual("Heute");
      expect($($('.dateSelectNav').children()[3]).text()).toEqual("Nächster Tag");
      expect($($('.dateSelectNav').children()[4]).text()).toEqual("Nächste Woche");
    });

    it("will translate the table headers to German", function() {
      var headersClass = '.table .headers'
      expect($(headersClass+' .competition .txt').text()).toEqual("Wettbewerb");
      expect($(headersClass+' .kickOffDate .txt').text()).toEqual("Anstoß");
      expect($(headersClass+' .home .txt').text()).toEqual("Heim Mannschaft");
      expect($(headersClass+' .score .txt').text()).toEqual("Ergebnis");
      expect($(headersClass+' .away .txt').text()).toEqual("Auswärts Mannschaft");
    });

    it("will translate the date to German format", function() {
      expect($('.fixtures .date strong').text()).toEqual("Mo. 9. März 2015");
    });

    it("will translate the word results to German", function() {
      expect($('.fixtures .noOf').text()).toEqual("5 Spiele");
    });

    it("will translate the all country names, inc 'All Countries' to German", function() {
       expect($('.all-txt')[0].innerHTML).toEqual('Alle Staaten');
       expect($('.all-txt')[1].innerHTML).toEqual('Alle Staaten');
       expect($('.en-txt').text()).toEqual('England');
       expect($('.de-txt').text()).toEqual('Deutschland');
       expect($('.sv-txt').text()).toEqual('Schweden');
    });

    it("will translate the word 'Team' to German", function() {
      expect($('.fixtures .team-filter').attr('placeholder')).toEqual("Mannschaft");
    });

    it("will translate the word 'Filter' to German", function() {
      expect($('.fixtures .navbar-brand').text()).toEqual("Filtern");
    });
  });

describe("#localizePage to English", function() {
    beforeEach(function() {
      FixtureFinder.localizePage("en");
    });

    it("will translate the nav buttons to English", function() {
      expect($($('.dateSelectNav').children()[0]).text()).toEqual("Previous Week");
      expect($($('.dateSelectNav').children()[1]).text()).toEqual("Previous Day");
      expect($($('.dateSelectNav').children()[2]).text()).toEqual("Today");
      expect($($('.dateSelectNav').children()[3]).text()).toEqual("Next Day");
      expect($($('.dateSelectNav').children()[4]).text()).toEqual("Next Week");
    });

    it("will translate the table headers to English", function() {
      var headersClass = '.table .headers'
      expect($(headersClass+' .competition .txt').text()).toEqual("Competition");
      expect($(headersClass+' .kickOffDate .txt').text()).toEqual("Kick Off");
      expect($(headersClass+' .home .txt').text()).toEqual("Home Team");
      expect($(headersClass+' .score .txt').text()).toEqual("Score");
      expect($(headersClass+' .away .txt').text()).toEqual("Away Team");
    });

    it("will translate the date to English format", function() {
      expect($('.fixtures .date strong').text()).toEqual("Mon 9th March 2015");
    });

    it("will translate the word results to English", function() {
      expect($('.fixtures .noOf').text()).toEqual("5 fixtures");
    });

    it("will translate the all country names, inc 'All Countries' to English", function() {
       expect($('.all-txt')[0].innerHTML).toEqual('All Countries');
       expect($('.all-txt')[1].innerHTML).toEqual('All Countries');
       expect($('.en-txt').text()).toEqual('England');
       expect($('.de-txt').text()).toEqual('Germany');
       expect($('.sv-txt').text()).toEqual('Sweden');
    });

    it("will translate the word 'Team' to English", function() {
      expect($('.fixtures .team-filter').attr('placeholder')).toEqual("Team");
    });
    
    it("will translate the word 'Filter' to English", function() {
      expect($('.fixtures .navbar-brand').text()).toEqual("Filter");
    });
  });

  describe("#setDateWithCurrentLanguage", function() {
    describe("given locale is set to English", function() {

      beforeEach(function() {
        FixtureFinder.localizePage("en");
      });

      describe("when setDateWithCurrentLanguage with '2015-01-01'", function() {
        it("will set date field to Thu 1st January 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-01-01");

          expect($('.fixtures .date strong').text()).toEqual("Thu 1st January 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-22-04'", function() {
        it("will set date field to Wed 22nd April 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-04-22");

          expect($('.fixtures .date strong').text()).toEqual("Wed 22nd April 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-03-03'", function() {
        it("will set date field to Tue 3rd March 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-03-03");

          expect($('.fixtures .date strong').text()).toEqual("Tue 3rd March 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-05-13'", function() {
        it("will set date field to Mon 11th May 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-05-11");

          expect($('.fixtures .date strong').text()).toEqual("Mon 11th May 2015");
        });
      });
    });  
  }); 
  describe("#setDateWithCurrentLanguage", function() {
    describe("given locale is set to German", function() {   
      beforeEach(function() {
        FixtureFinder.localizePage("de");
      });

      describe("when setDateWithCurrentLanguage with '2015-04-22'", function() {
        it("will set date field to Mi. 22. April 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-04-22");

          expect($('.fixtures .date strong').text()).toEqual("Mi. 22. April 2015");
        });
      });

      describe("when setDateWithCurrentLanguage with '2015-12-01'", function() {
        it("will set date field to Di. 01. Dezember 2015", function() {
          FixtureFinder.setDateWithCurrentLanguage("2015-12-01");

          expect($('.fixtures .date strong').text()).toEqual("Di. 1. Dezember 2015");
        });
      });
    });  
  });  
});
