String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

FixtureFinder.FixtureFilter = function(country, team){
    var byCountry = function(fixture){
        return fixture.country === country || country === 'all' ;
    };

    team = team.trim();
    var byTeam = function(fixture){
        return fixture.homeTeam.toLowerCase().contains(team.toLowerCase())
               || fixture.awayTeam.toLowerCase().contains(team.toLowerCase());
    };

    return function(fixtures) {
        fixtures = fixtures.filter(byCountry);
        return fixtures.filter(byTeam);
    }
};