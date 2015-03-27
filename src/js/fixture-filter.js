String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

FixtureFinder.FixtureFilter = function(country, team){
    if(country == undefined){
        country = 'all';
    };
    if(team == undefined){
        team = 'all';
    };
    return {
        include: function(fixture){
            if(country === 'all' || fixture.country === country){
                 if(team === 'all'
                    || fixture.homeTeam.toLowerCase().contains(team.toLowerCase())
                    || fixture.awayTeam.toLowerCase().contains(team.toLowerCase())){
                        return true;
                 }
            }
        }
    }
};