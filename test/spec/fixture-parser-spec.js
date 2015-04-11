describe("A FixtureParser", function() {
  var testFixtures;
 
  beforeEach(function() {
    testFixtures = testFixtureData;
    FixtureFinder.currentLanguage = 'en';
  });

  describe("given a list of fixtures and no filter", function() {
    beforeEach(function() {
      FixtureParser.parseFixtures(testFixtures, "2015-03-09", FixtureFinder.FixtureFilter());    
    });

    it("will set the number of fixtures", function() {
      expect($('.fixtures .noOf').text()).toEqual("5 fixtures");
    });

    it("will set the correct date", function() {
      expect($('.fixtures .date strong').text()).toEqual("9th March 2015");
    });

    it("will add the correct number of fixtures in the table", function() {
      expect($('.table .fixture').length).toEqual(5);
    });
  });
  
  describe("given a list of fixtures with a filter for Arsenal", function() {
    beforeEach(function() {
      filter = FixtureFinder.FixtureFilter("all", "arsenal");
      FixtureParser.parseFixtures(testFixtures, "2015-03-09", filter);    
    });
    
    // seems to be necessary to avoid side effects
    afterEach(function() {
      filter = FixtureFinder.FixtureFilter();
      FixtureParser.parseFixtures(testFixtures, "2015-03-09", filter);    
    });

    it("will set the correct number of filtered fixtures", function() {
      expect($('.fixtures .noOf').text()).toEqual("1 fixtures");
    });

    it("will add the correct number of filtered fixtures in the table", function() {
      expect($('.table .fixture').length).toEqual(1);
    });


  });
});
