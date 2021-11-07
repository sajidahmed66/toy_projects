show_Result = document.getElementById("result");
console.log(show_Result)

document.getElementById("start-game").addEventListener("click", startGame);

function startGame() {
    function getRandomArbitrary(min, max) {
        randi = Math.random() * (max - min) + min;
        randi_floor = Math.floor(randi)
        return randi_floor
    }

    rand_number = getRandomArbitrary(1, 10)
    console.log(rand_number)

    //if it's a number
    // if it's within the range
    function isOkNumber(user_in) {
        if (isNaN(user_in)) {

            return false
        }
        else {
            if (user_in >= 1 && user_in <= 10) {
                return true
            } else {
                return false
            }
        }
    }

    win = false; // flag variable

    for (let i = 1; i < 4; i++) {
        guess_number = prompt("Guess a number between 1-10")
        guess_number_int = parseInt(guess_number);

        if (isOkNumber(guess_number_int)) {
            console.log("it's on!")
            let mesg;
            if (guess_number_int < rand_number) {
                console.log("Guess Higher");
                // mesg = document.createTextNode("Guess Higher");
                // show_Result.appendChild(mesg)
                // console.log(show_Result)
                alert("Guess Higher")
            } else if (guess_number_int > rand_number) {
                console.log("Guess Lower");
                alert("Guess Lower");
            } else {
                console.log("Matched");
                alert("Matched");
                win = true;
                break
            }
        } else {
            console.log("Failed input was not a  valid number");
            alert("Failed input was not a  valid number")
        }
    }

    if (win) {
        console.log("jitso")
        alert("YOU WIN!")
    } else {
        console.log("harso")
        alert("YOU LOOSE!")
    }

}

