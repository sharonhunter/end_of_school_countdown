function totalDays() {
   
    var today = new Date();
    //end date hard-coded for my particular use case
    var end_of_school = new Date(2015, 5, 2);
    
    if (today > end_of_school){
        alert("Yay, school is already out!");
        return;
    }
    
    var ms_per_day = 24 * 60 * 60 * 1000;
    var time_left_ms = (end_of_school.getTime() - today.getTime());
    
    // + 1 at end makes today inclusive in span
    var days_left = Math.ceil(time_left_ms / ms_per_day) + 1;
    document.getElementById("display_date").innerHTML = days_left;

    function totalWeeks() {
        var weeks = Math.floor(days_left / 7);
        document.getElementById("weeks").innerHTML = weeks;

        function weekdays() {
            //subtract 2 weekend days from each week remaining
            var actual_days = days_left - (weeks * 2);
            
            // Subtract weekend contained in an overlap with week == 0   
            if (today.getDay() - end_of_school.getDay() > 1) {
                actual_days -= 2;
            }

            // Remove today if today is Sunday and end_of_school is before Saturday
            if (today.getDay() == 0 && end_of_school.getDay() != 6) {
                actual_days -= 1;
            }

			document.getElementById("actual_days").innerHTML = actual_days;
        }
        weekdays();
    }
    totalWeeks();
}
totalDays();