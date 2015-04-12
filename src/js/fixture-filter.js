String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

FixtureFinder.FixtureFilter = function(country, team){
    if(!country) country = 'all';
    if(!team) team = '';

    var byCountry = function(fixture){
        return fixture.country === country || country === 'all';
    };

    team = team.trim();
    var byTeam = function(fixture){
        return fixture.homeTeam.toLowerCase().contains(team.toLowerCase())
               || fixture.awayTeam.toLowerCase().contains(team.toLowerCase());
    };

    return function(fixtures) {
        return fixtures.filter(byCountry).filter(byTeam);
    }
};