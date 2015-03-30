String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

FixtureFinder.FixtureFilter = function(country, team){
    return {
        byCountry: function(fixture){
            return fixture.country === country || country === 'all' ;
        },

        byTeam: function(fixture){
            return fixture.homeTeam.toLowerCase().contains(team.toLowerCase())
                   || fixture.awayTeam.toLowerCase().contains(team.toLowerCase());
        }
    }
};