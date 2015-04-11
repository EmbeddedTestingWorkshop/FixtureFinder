describe("A FixtureParser", function() {
  var testFixtures;
 
  beforeEach(function() {
    testFixtures = testFixtureData;
    FixtureFinder.currentLanguage = 'en';
    FixtureParser.parseFixtures(testFixtures, "2015-03-09", FixtureFinder.FixtureFilter());    
  });

  describe("given a list of fixtures and no filter", function() {
    it("will set the correct text for the number of fixtures", function() {
      expect($('.fixtures .noOf').text()).toEqual("5 fixtures");
    });

    it("will set the correct date", function() {
      expect($('.fixtures .date strong').text()).toEqual("9th March 2015");
    });

    it("will add the correct number of fixtures in the table", function() {
      expect($('.table .fixture').length).toEqual(5);
    });
  });
});
