describe("A Localizer", function() {

  describe("when localize to German", function() {
    it("will translate the nav buttons to german", function() {
      FixtureFinder.localize("de");

      expect($($('.dateSelectNav').children()[0]).text()).toEqual("Vorige Woche");
      expect($($('.dateSelectNav').children()[1]).text()).toEqual("Vorheriger Tag");
      expect($($('.dateSelectNav').children()[2]).text()).toEqual("Heute");
      expect($($('.dateSelectNav').children()[3]).text()).toEqual("Nächster Tag");
      expect($($('.dateSelectNav').children()[4]).text()).toEqual("Nächste Woche");
    });

    it("will translate the table headers to german", function() {
      FixtureFinder.localize("de");

      var headersClass = '.table .headers'
      expect($(headersClass+' .competition .txt').text()).toEqual("Wettbewerb");
      expect($(headersClass+' .kickOffDate .txt').text()).toEqual("Anstoß");
      expect($(headersClass+' .home .txt').text()).toEqual("Heim Mannschaft");
      expect($(headersClass+' .score .txt').text()).toEqual("Ergebnis");
      expect($(headersClass+' .away .txt').text()).toEqual("Auswärts Mannschaft");
    });

    it("will translate the date to german format", function() {
      FixtureFinder.localize("de");

      expect($('.fixtures .date strong').text()).toEqual("10. April 2015");
    });
  });

  describe("when localize to English", function() {
    it("will translate the nav buttons to english", function() {
      FixtureFinder.localize("en");

      expect($($('.dateSelectNav').children()[0]).text()).toEqual("Previous Week");
      expect($($('.dateSelectNav').children()[1]).text()).toEqual("Previous Day");
      expect($($('.dateSelectNav').children()[2]).text()).toEqual("Today");
      expect($($('.dateSelectNav').children()[3]).text()).toEqual("Next Day");
      expect($($('.dateSelectNav').children()[4]).text()).toEqual("Next Week");
    });

    it("will translate the table headers to english", function() {
      FixtureFinder.localize("en");

      var headersClass = '.table .headers'
      expect($(headersClass+' .competition .txt').text()).toEqual("Competition");
      expect($(headersClass+' .kickOffDate .txt').text()).toEqual("Kick Off");
      expect($(headersClass+' .home .txt').text()).toEqual("Home Team");
      expect($(headersClass+' .score .txt').text()).toEqual("Score");
      expect($(headersClass+' .away .txt').text()).toEqual("Away Team");
    });

    it("will translate the date to german format", function() {
      FixtureFinder.localize("en");

      expect($('.fixtures .date strong').text()).toEqual("10th April 2015");
    });
  });

});
