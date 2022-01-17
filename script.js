// Attach to HTML elements necessary to get this to function
const results = document.getElementById("results");
const submitBtn = document.getElementById("submitbtn");
const frontSide = document.getElementById("frontside");
const backSide = document.getElementById("backside");

// This counter was included because I decided to add a feature where, every time a user asks their 5th question, the Magic 8 Ball gets a little cranky and refuses to answer the question. The counter lets the program know what question the user is on.
let counter = 0;

// When the Submit button is clicked, run the magicBall function.
submitBtn.addEventListener('click', magicBall);

// The Magic 8 Ball's inner workings. 
function magicBall() {  
    results.textContent = ""; 
    frontSide.classList.add("fade-out");
    setTimeout(function(){ 
        backSide.classList.remove('backside');
        backSide.classList.add("fade-in")
    }, 500);
    // The ball's options every 5 questions (on the 5th question, not after).
    const meanBall = ["You're still bugging me?", "Leave me alone.", "I'm tired. I need to rest.", "Why are you asking me so many questions?", "Stop bothering me and ask someone else.", "Give someone else a turn.", "I'm not magical. Go outside."];

    // The ball's "regular" options. (7 yes, 7 no, 7 maybe/neutral)
    const regularAnswer = ["No.", "The cards aren't in your favor.", "Absolutely not.", "Perhaps not.", "Sorry, no go.", "Negative.", "That's a no from me.", "Yes.", "Absolutely.", "Affirmative.", "Your outlook is positive.", "It would seem so.", "I'm thinking yes.", "All signs point to yes.", "I don't know.", "I'm not sure.", "Perhaps.", "Maybe.", "Can't say yes, can't say no.", "I don't have an answer for you.", "Look within yourself."];

    // This conditional was implemented so that, if the user types nothing into the input box, it tells them to please ask their question. Otherwise, it goes forward with its normal function.
    if (document.getElementById('userquestion').value != "" && document.getElementById('userquestion').value != 0) { 
        // Adds 1 to the counter (but only if an actual question has been asked)
        counter++;

        // If it's the 5th question, give a "mean" answer. If not, give a regular answer. Choose randomly from the available options and display the result.
        if (counter % 5 === 0) {
            const computerSelection = meanBall[Math.floor(Math.random() * meanBall.length)];
            results.textContent = computerSelection;
        } else {
            const computerSelection = regularAnswer[Math.floor(Math.random() * regularAnswer.length)];
            results.textContent = computerSelection;
        }
    } else {

        results.textContent = "Please ask your question.";
    }
    results.classList.remove("text-before")
    results.classList.add("text-fade-in");
    // Resets the input box back to have no text, and focuses on it again so the user can immediately type another quesetion without having to click on it.
    document.getElementById('userquestion').value = "";
    document.getElementById('userquestion').focus();
}

// Enables the Enter button so the user can press Enter instead of clicking Submit if they want.
document.addEventListener('keyup', function(event) {
    if(event.key === "Enter") {
        submitBtn.click();
    }
});