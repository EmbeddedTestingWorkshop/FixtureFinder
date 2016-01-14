String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

FixtureFinder.FixtureFilter = function(country, team){
		var allCountries = 'All Countries';
		if(!country) country = allCountries;
    if(!team) team = '';

    var byCountry = function(fixture){
        return fixture.country === country || country === allCountries;
    };

    team = team.trim();
    var byTeam = function(fixture){
        return fixture.homeTeam.toLowerCase().contains(team)
               || fixture.awayTeam.contains(team);
    };

    var noCompetition = function(fixture){
        return !fixture.competition.toLowerCase().contains('no_competition') &&
               !fixture.competition.toLowerCase().contains('no competition') 
    };

    return function(fixtures) {
       return fixtures.filter(byCountry).filter(byTeam).filter(noCompetition);
    }
};