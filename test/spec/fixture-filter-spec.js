describe("A Fixture Filter", function() {
  var testFixtures;
  var filtered;

  beforeEach(function() {
    testFixtures = testFixtureData;
  });

  describe("given undefined country and team", function() {
    it("returns the identity for the given array", function() {
        filter = FixtureFinder.FixtureFilter();

        filtered = filter(testFixtures);

        expect(filtered).toEqual(testFixtures);
    });
  });

  

  describe("given all countries and blank team", function() {
    var filter;

    it("returns the identity for the given array", function() {
        filter = FixtureFinder.FixtureFilter("all", "");

        filtered = filter(testFixtures);

        expect(filtered).toEqual(testFixtures);
    });

    it("returns the identity for the given array", function() {
            filter = FixtureFinder.FixtureFilter("all", "   ");

            filtered = filter(testFixtures);

            expect(filtered).toEqual(testFixtures);
    });
  });

  describe("given 'Italy' as country filter and blank team", function() {
    var filter;

    it("returns the subset with only Italian fixtures", function() {
      filter = FixtureFinder.FixtureFilter("Italy", "");

      filtered = filter(testFixtures);

      expect(filtered).toEqual(testFixtures.slice(3, 5));
    });
  });

  describe("given all countries filter", function() {

    describe("and team Filter is 'A'", function() {
        var filter;

        it("then the subset with only Teams with 'A' or 'a' are returned (in this case all)", function() {
            filter = FixtureFinder.FixtureFilter("all", "A");

            filtered = filter(testFixtures);

            expect(filtered).toEqual(testFixtures);
        });
    });

    describe("and team Filter is 'al'", function() {
        var filter;

        it("then the subset with only Teams with 'Al'(case insensitive) are returned", function() {
            filter = FixtureFinder.FixtureFilter("all", "Al");

            filtered = filter(testFixtures);

            var expected = [ testFixtures[0], testFixtures[2]];
            expect(filtered).toEqual(expected);
        });
    });

    describe("and team Filter is 'arsenal'", function() {
         var filter;

        it("then the subset with only Teams with 'arsenal'(case insensitive) are returned", function() {
            filter = FixtureFinder.FixtureFilter("all", "arsenal");

            filtered = filter(testFixtures);

            var expected = [ testFixtures[0]];
            expect(filtered).toEqual(expected);
        });

        it("then the subset with only Teams with 'ARSENAL'(case insensitive) are returned", function() {
            filter = FixtureFinder.FixtureFilter("all", "ARsEnAL");

            filtered = filter(testFixtures);

            var expected = [ testFixtures[0]];
            expect(filtered).toEqual(expected);
        });
    });

    describe("and team Filter is 'zyzz'", function() {
        var filter;

        it("then the subset with only Teams with 'Al'(case insensitive) are returned", function() {
            filter = FixtureFinder.FixtureFilter("all", "zyzz");

            filtered = filter(testFixtures);

            var expected = [];
            expect(filtered).toEqual(expected);
        });
    });
  });
});
