const timer = document.getElementById('timer');

var hr = 0;
var min = 0;
var sec = 10;
var stoptime = true;

function startTimer() {
    if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timerCycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);

        sec = sec - 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }
        if (min == 60) {
            hr = hr + 1;
            min = 0;
            sec = 0;
        }

        if (sec < 10 || sec == 0) {
            sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
            min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
            hr = '0' + hr;
        }

        timer.innerHTML = hr + ':' + min + ':' + sec;

        setTimeout("timerCycle()", 1000);
    }
}





var a = 0;
var displayValue = document.getElementById('displayCount');

var updateValue = function() {
    displayValue.innerHTML = a;
};




function resetTimer() {
    timer.innerHTML = "00:00:10";
    stoptime = true;
    hr = 0;
    sec = 10;
    min = 0;

    a = 0;
    updateValue();

}

if (timer == 0) {
    timer.innerHTML = "00:00:10";
    stoptime = true;
    hr = 0;
    sec = 10;
    min = 0;

}

var count = 0;
var button = document.getElementById("countButton");
var display = document.getElementById("displayCount");

button.onclick = function() {
        a++
        updateValue();

        // count++
        // display.innerHTML = displayCount;