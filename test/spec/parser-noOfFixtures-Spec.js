describe("A Fxiture Parser", function() {
  var testFixtures;

  beforeEach(function() {
    testFixtures = testFixtureData;
    FixtureFinder.currentLanguage = 'de';
  });

  describe("when locale is set to German", function() {
    
    it("will update the .fixtures .noOf with german text", function() {
      FixtureParser.parseFixtures(testFixtures, "2015-03-09", FixtureFinder.FixtureFilter());
         
      expect( $('.fixtures .noOf').text()).toEqual("5 Spielpaarungen");
    });
  });
});