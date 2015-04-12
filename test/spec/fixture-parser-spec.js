describe("A FixtureParser", function() {
  var testFixtures;

  describe("#parseFixtures", function() {
    describe("given locale is set to English", function() { 
      beforeEach(function() {
        testFixtures = testFixtureData;
        FixtureFinder.currentLanguage = 'en';
      });

      describe("and the full test data list of fixtures", function() {
        beforeEach(function() {
          FixtureParser.parseFixtures(testFixtures);    
        });

        it("will set the number of fixtures to 5", function() {
          expect($('.fixtures .noOf').text()).toEqual("5 fixtures");
        });

        it("will add 5 fixtures to the table", function() {
          expect($('.table .fixture').length).toEqual(5);
        });
      });

      describe("and an array with only one element", function() {
        beforeEach(function() {
          FixtureParser.parseFixtures(testFixtures.slice(0, 1));    
        });

        it("will set the correct number of fixtures to 1", function() {
          expect($('.fixtures .noOf').text()).toEqual("1 fixtures");
        });

        it("will add 1 fixture to the table", function() {
          expect($('.table .fixture').length).toEqual(1);
        });

        it("will have the expected fixture data in the table", function() {
          expect($('.table .fixture .competition').text()).toEqual("FA Cup");
          expect($('.table .fixture .home').text()).toEqual("Manchester United");
          expect($('.table .fixture .kickOffDate').text()).toEqual("01:00");
          expect($('.table .fixture .score').text()).toEqual("1:2");
          expect($('.table .fixture .away').text()).toEqual("Arsenal");
        });
      });
    });

    describe("given locale is set to German", function() {
      beforeEach(function() {
        testFixtures = testFixtureData;
        FixtureFinder.currentLanguage = 'de';
        FixtureParser.parseFixtures(testFixtures);
      });

      it("will update the no of fixtures with german text", function() {
        expect( $('.fixtures .noOf').text()).toEqual("5 Spiele");
      });
    });
  });
});
