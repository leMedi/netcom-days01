var $days = $("#days h1"),
    $hours = $("#hours h1"),
    $minutes = $("#minutes h1"),
    $seconds = $("#seconds h1");

function formatDigit(digit) {
    return (digit < 10) ? '0' + digit : digit;
}

// Set the date we're counting down to
var event = new Date("Nov 29, 2017 09:00:00").getTime();

function counter() {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = event - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Display the result
    $days.html(formatDigit(days));
    $hours.html(formatDigit(hours));
    $minutes.html(formatDigit(minutes));
    $seconds.html(formatDigit(seconds));
}

counter();

// Update the count down every 1 second
setInterval(counter, 1000);