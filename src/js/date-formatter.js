FixtureFinder.dateFormatter = function(){
    var formatDateWithOffset = function (date, dayOffset) {
        var result = new Date(date.getTime() + dayOffset*24*60*60*1000)
        return result.getFullYear()
           + "-" + (result.getMonth() + 1)
           + "-" + (result.getDate() );
    };

    var formatDate = function(date){
        return formatDateWithOffset(date, 0);
    };

    return {
        today: function(){
            return formatDate(new Date());
        },

        formatDate: formatDate,
        formatDateWithOffset: formatDateWithOffset
    }
}();