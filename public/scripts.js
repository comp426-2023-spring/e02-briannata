// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver

function toggleRPSLS() {
    var lizard = document.getElementsByClassName("rpsls")[0];
    var spock = document.getElementsByClassName("rpsls")[1];

    if(lizard.style.display == 'inline') {
        lizard.style.display = 'none';
        spock.style.display = 'none';
    }
    else {
        lizard.style.display = 'inline';
        spock.style.display = 'inline';
    }
}

function toggleDropDown() {
    var dropdown = document.getElementsByClassName("dropdown")[0];

    if(dropdown.style.display == 'inline') {
        dropdown.style.display = 'none';
    }
    else {
        dropdown.style.display = 'inline';
    }
}

function togglePopUp() {
    var popup = document.getElementsByClassName("popup")[0];

    if(popup.style.display == 'inline') {
        popup.style.display = 'none';
    }
    else {
        popup.style.display = 'inline';
    }
}