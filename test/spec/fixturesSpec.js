describe("FixturePopulator", function() {
  var testFixture = {
        "competition": "England - FA Cup",
        "kickOff": {
          "date": "2015-03-09",
          "time": "15:00"
        },
        "homeTeam": "Manchester United",
        "awayTeam": "Arsenal",
        "score": "1 - 2"
      };
  
  beforeEach(function() {
    
  });

  describe("given a test fixture object", function() {
    it("returns the appropriate li html element", function() {
      var fixtureHTHMlElement = FixtureParser.getFixtureAsHTMLElement(testFixture);

      var expectedHTML = '<li class="fixture">'
        + '<span class="kickOffDate"><small>' + testFixture.kickOff.date + '</small></span>'
        + '<span class="kickOffTime"><small>' + testFixture.kickOff.time + '</small></span>'
        + '<span class="home team"><strong>' + testFixture.homeTeam + '</strong></span>'
        + '<span class="vs">' + testFixture.score + '</span>'
        + '<span class="away team"><strong>' + testFixture.awayTeam + '</strong></span></li>';
      expect(fixtureHTHMlElement).toEqual(expectedHTML);
    });
  });
});
