var AccaCoupon = function(){
    var count = -1;
    return {
        getNextFixture: function(){
            count = count + 1;
            if(count === 5){
                count = 0;
            }
            return count;
        }
      }
}();

function getFixturesByDate(date) {
    $.ajax({
        url: "http://localhost:8080/fixtures/byDate",
        data: { "date": date },
        crossDomain: true,
        dataType: 'jsonp'
    }).then(function(data) {

        $('.fixtures > .dates').append('<input class="dateElem" type="submit" value="'+today()+'" />');

        $.each(data.fixtures, function(index, fixture ) {
            $('.fixtures > .elements').append(getFixture(fixture));
        });
        $( ".addToCpn" ).click(
            function() {
                $('.nextCoupon .fixture')[AccaCoupon.getNextFixture()].value = this.getAttribute('data-fixture');
                this.value = "selected";
            }
        )
    });
}

function getFixture(fixture){
    var listElement = '<li class="fixture">';
    listElement = listElement + '<span class="kickOffDate">' + fixture.kickOff.date + '</span>';
    listElement = listElement + '<span class="kickOffTime">' + fixture.kickOff.time + '</span>';
    listElement = listElement + '<span class="home team">' + fixture.homeTeam +'</span>';
    listElement = listElement + '<span class="vs">'+fixture.score+'</span>';
    listElement = listElement + '<span class="away team">' + fixture.awayTeam +'</span>';
    listElement = listElement + '<input data-fixture="'+fixture.homeTeam+' vs '+fixture.awayTeam +'" class="addToCpn" type="submit" value="add" />';
    listElement = listElement + '</li>';
    return listElement;
}

function initialize(){
    getFixturesByDate(today());
}

function today(){
    return new Date().getFullYear()
             + "-" + (new Date().getMonth() + 1)
             + "-" + (new Date().getDate() )
}

$(document).ready( initialize() );