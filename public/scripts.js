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

async function play() {
    var dropdown = document.getElementsByClassName("dropdown")[0];
    var lizard = document.getElementsByClassName("rpsls")[0];
    var popup = document.getElementsByClassName("resultPopup")[0];

    var opponent = dropdown.style.display == 'inline';
    var rps = lizard.style.display != 'inline';

    var result = document.getElementById("result");
    var player = document.getElementById("player");
    var opponentText = document.getElementById("opponent");

    var select = document.getElementById("options");
    var value = select.value;

        if(rps) {
            if(opponent) {
                if(value.length > 0) {
                    const response = await fetch(`/app/rps/play/${value}`);
                    const jsonData = await response.json();
                    console.log(jsonData);
                    result.innerHTML = jsonData.result.toUpperCase();
                    player.innerHTML = "You: " + jsonData.player;
                    opponentText.innerHTML = "Opponent: " + jsonData.opponent;
                    popup.style.display = 'inline';
                }
            }
            else {
                const response = await fetch("./app/rps");
                const jsonData = await response.json();
                console.log(jsonData);
                result.innerHTML = jsonData.player.toUpperCase();
                popup.style.display = 'inline';
            }
        }
        else {
            if(opponent) {
                if(value.length > 0) {
                    const response = await fetch(`/app/rpsls/play/${value}`);
                    const jsonData = await response.json();
                    console.log(jsonData);
                    result.innerHTML = jsonData.result.toUpperCase();
                    player.innerHTML = "You: " + jsonData.player;
                    opponentText.innerHTML = "Opponent: " + jsonData.opponent;
                    popup.style.display = 'inline';
                }
            }
            else {
                const response = await fetch("./app/rpsls");
                const jsonData = await response.json();
                console.log(jsonData);
                result.innerHTML = jsonData.player.toUpperCase();
                popup.style.display = 'inline';
            }

    }
    
}

function reset() {
    location.reload();
}

function startOver() {
    var popup = document.getElementsByClassName("resultPopup")[0];
    popup.style.display = 'none';
    location.reload();
}