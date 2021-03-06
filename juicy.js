'use strict';

/* Greets user, and asks their name. 
Prompts user to answer 5 yes/no questions about my interests, and creates alerts to tell
them if they've answered correctly. 

Generates a random number of "hacker duels" I have supposedly won between 20 and 100, then prompts
 user to guess the number of hacker duels I've supposedly won. If user guesses incorrectly, will
create an alert telling them if they have guessed high or low, and allows them to guess three more times.

Prompts user to guess which weapons I am supposedly proficient with. Allows the user to guess
up to six times. If user guesses correctly, or guesses more than six times, gives the user
a message stating all possible correct answers.

Records the number of correct answers and sends a final alert telling the user how 
many questions they have guessed correctly. 
*/

// Creates a counter for correct answers
var correctCount = 0;
console.log('guessCount is ' + correctCount);

// Greeting message 
alert('Hey there! I\'m Rick. You don\'t know me - yet. See if you can guess a little about who I am!');

var name = prompt('But first - what is YOUR name?');
console.log('User entered their name as ' + name);

alert('Nice to meet you, ' + name + '. Let\'s test your guessing abilities.');

// Creates array variables that dictate the questions, answers, and responses to the yes/no questions
var aboutMeYN = ['Do I like repetitive music?', 
                'Here\'s an easy one: Do I love kitties?',
                'Next question, ' + name + '. Do I hate pineapple on pizza?', 
                'Am I an extraterrestrial life form?',
                'Do I like science fiction?'
                ];

var aboutMeYNAnswers = ['y', 'y', 'n', 'y', 'y'];

var aboutMeCorrect = ['Boots and cats and boots and cats and boots and cats and boots and cats and',
                 'I love kitties, and they love me.',
                 'Correct. I\'m glad you think so highly of me, ' + name + '.',
                 'Don\'t blow my cover, I still have some more pranks to play on NASA.',
                 'Asimov is bae.',          
                 ];

var aboutMeIncorrect = ['Utterly wrong. Looping is love.', 
                    'What, do I look like some kind of monster?',
                    'Wrong. Pineapple pizza is the one true pizza.',
                    'Haha, yes, that\'s right. Wanna go make some crop circles?',
                    'How would that even be possible?',
                    ];

// Checks whether the arrays given to the yNQuestion() function have matching questions, answers, and responses
function checkYN(){
    if (aboutMeYN.length === aboutMeYNAnswers.length) {
        console.log('y/n questions have answers.');
    } else {
        console.log('error: unequal numbers of y/n questions and answers');
    }

    if (aboutMeYN.length === aboutMeCorrect.length) {
        console.log('y/n questions have "correct" responses.');
    } else {
        console.log('error: unequal numbers of y/n questions and "correct" responses');
    }

    if (aboutMeYN.length == aboutMeIncorrect.length) {
        console.log('y/n questions have "incorrect" responses');
    } else {
        console.log('error: unequal numbers of y/n questions and "incorrect" responses');
    }
}


// holds error messages for bad user inputs
var badYNAnswer = 'You didn\'t answer yes or no!';
var badIntAnswer = 'Integers only, please!';

// Initializes user "guess" variable
var userGuess = '';

// Determines user prompt and alert text, and generates a random value to be used in the "hacker duel" numerical guessing game.
var hackerDuels = Math.floor(Math.random() * 81) + 20;
console.log('I have supposedly won ' + hackerDuels + ' hacker duels.');

var guessCount = 0;
var duelPrompt = 'Alright, now for the cool questions. How many hacker duels do you think I\'ve won? You have 4 tries to guess.';
var duelResp = 'Nice try... I have defeated ' + hackerDuels + ' foolish hackers. Cross me and you\'ll be the ' + hackerDuels + 'th, ' + name + '.';

// Determines prompt and alert text, as well as correct answer values, for the "weapons I am proficient with" guessing game.
var wepProfs = ['batlith', 'crysknife', 'phaser', 'nuclear icbm', 'reason', 'mediocre humor'];
var wepPrompt = 'Alright, last question. I am proficient with a number of weapons. Try and guess one of them; you have six tries.';
var wepResp = 'Okay, stop, I\'ll just tell you.';
var wepAll = 'I have mastered the batlith, crysknife, phaser, nuclear ICBM, Reason, and mediocre humor.';

// Gives user an alert telling them how many guesses they got right
var knowMe = '';

// Runs the guessing games. 
checkYN();
yNQuestion(aboutMeYN, aboutMeYNAnswers, aboutMeCorrect, aboutMeIncorrect);
numGuess();
wepGuess();
userGuessScore();


// Plays a yes/no guessing game with the user with arrays containing questions, answers, and responses
// for correct and incorrect guesses as parameters.
function yNQuestion(questions, answer, respCorrect, respIncorrect){
    for (var i = 0; i < questions.length; i++) {
        userGuess = prompt(questions[i]).charAt(0).toLowerCase();
        console.log('user guessed ' + userGuess);
        if (userGuess === answer[i]) {
            alert(respCorrect[i]);
            correctCount++;
            console.log('user guessed correctly. guessCount is ' + correctCount);
        } else if (userGuess != 'n' && userGuess != 'y') {
            alert(badYNAnswer);
            console.log('user gave bad y/n answer');
        } else {
            alert(respIncorrect[i]);
            console.log('user guessed incorrectly');
        }
    }
};


// Prompts user to play a numerical guessing game; user must guess a randomized integer value representing the 
// number of of "hacker duels" I have supposedly won, between 20 and 100. 
// If the user guesses incorrectly, informs the user whether their guess was high or low, 
// Continues prompting the user for up to four guesses, or until user guesses correctly
function numGuess(){
    while (guessCount < 4) {
        userGuess = prompt(duelPrompt);
        guessCount++;
        duelPrompt = 'Ok, you have ' + (4 - guessCount) + ' more tries. How many hacker duels have I won?';

        if (userGuess == hackerDuels) {
            guessCount = 4;
            duelResp = 'That\'s right. And not a one of em stood a chance, except for Marlene... *wipes away single tear*';
            correctCount++;
            console.log('User guessed duels correctly');
        } else if (userGuess > hackerDuels) {
            alert('Wow, you must really think I\'m somethin\'... guess again.');
            console.log('User guessed high');
        } else if (userGuess < hackerDuels) {
            alert('You underestimate my power!');
            console.log('User guessed low');
        } else if (typeof userGuess != 'number') {
            alert('Try guessing a number this time.');
            console.log('User may have put in some bad input.');
        } else {
            alert('Uh....');
            console.log('Not sure how we got here...');
        }
    }

    alert(duelResp);
}

// Prompts user to guess which fantasy/scifi weapons I am supposedly proficient with, from an array of potential answers.
// Allows the user six attempts to guess correctly, and informs user how many guesses they have left if they guess incorrectly.
function wepGuess(){
    guessCount = 0;
    var guessRight = false;
    while (guessCount < 6 && !guessRight) {
    userGuess = prompt(wepPrompt).toLowerCase();
    console.log('user guessed ' + userGuess);
    guessCount++;
    wepPrompt = 'Still training on that one... You have ' + (wepProfs.length - guessCount) + ' tries left.';
    for (var i = 0; i < wepProfs.length; i++) {
        switch (wepProfs[i]) {
            case userGuess:
                guessRight = true;
                wepResp = 'Nice! I see you too are a weaponmaster of taste.';
                console.log('user guessed a weapon right');
                correctCount++;
                break;
            default:
                console.log('user didn\'t guess a wep.');
        }
    }
    }
    alert(wepResp + ' ' + wepAll);
}

// Displays message informing user of the number of questions they have answered correctly.
function userGuessScore(){
    if (correctCount === 7) {
        knowMe = ' NICE! NICE! YOU ARE ABSOLUTE PERFECTION!';
        console.log('user clearly looked at my source code');
    } else if (correctCount >= 4) {
        knowMe = ' It\'s almost like these questions are primarily based on ancient cheesy jokes.';
        console.log('user is alright.');
    } else {
        knowMe = ' Weak. Just... weak. It won\'t be long before you are devoured by a stray raccoon or something.';
        console.log('user is a weakling who guessed less than three correctly.');
    }

    alert('You guessed ' + correctCount + ' out of 7 questions right!' + knowMe);
}