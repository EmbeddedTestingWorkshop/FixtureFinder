describe("A FixtureParser", function() {
  var testFixtures;

  describe("given locale is set to English", function() { 
    beforeEach(function() {
      testFixtures = testFixtureData;
      FixtureFinder.currentLanguage = 'en';
    });


    describe("given a list of fixtures and no filter", function() {
      beforeEach(function() {
        FixtureParser.parseFixtures(testFixtures);    
      });

      it("will set the number of fixtures", function() {
        expect($('.fixtures .noOf').text()).toEqual("5 fixtures");
      });

      it("will add the correct number of fixtures in the table", function() {
        expect($('.table .fixture').length).toEqual(5);
      });
    });

    describe("given a list of fixtures with a filter for Arsenal", function() {
      beforeEach(function() {
        var filtered = FixtureFinder.FixtureFilter("all", "arsenal")(testFixtures);
        FixtureParser.parseFixtures(filtered);    
      });

      it("will set the correct number of filtered fixtures", function() {
        expect($('.fixtures .noOf').text()).toEqual("1 fixtures");
      });

      it("will add the correct number of filtered fixtures in the table", function() {
        expect($('.table .fixture').length).toEqual(1);
      });
    });
  });

  describe("given locale is set to German", function() {
    beforeEach(function() {
      testFixtures = testFixtureData;
      FixtureFinder.currentLanguage = 'de';
      FixtureParser.parseFixtures(testFixtures);
    });
    
    it("will update the .fixtures .noOf with german text", function() {
      expect( $('.fixtures .noOf').text()).toEqual("5 Spiele");
    });
  });
});
