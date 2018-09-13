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
var questions = ['Do I like repetitive music?', 
                'Here\'s an easy one: Do I love kitties?',
                'Next question, ' + name + '. Do I hate pineapple on pizza?', 
                'Am I an extraterrestrial life form?',
                'Do I like science fiction?'
                ];

var answer = ['y', 'y', 'n', 'y', 'y'];

var respCorrect = ['Boots and cats and boots and cats and boots and cats and boots and cats and',
                 'I love kitties, and they love me.',
                 'Correct. I\'m glad you think so highly of me, ' + name + '.',
                 'Don\'t blow my cover, I still have some more pranks to play on NASA.',
                 'Asimov is bae.',          
                 ];

var respIncorrect = ['Utterly wrong. Looping is love.', 
                    'What, do I look like some kind of monster?',
                    'Wrong. Pineapple pizza is the one true pizza.',
                    'Haha, yes, that\'s right. Wanna go make some crop circles?',
                    'How would that even be possible?',
                    ];

// Sends console prompts to check that y/n questions have answers and responses
if (questions.length === answer.length) {
    console.log('y/n questions have answers.');
} else {
    console.log('error: unequal numbers of y/n questions and answers');
}

if (questions.length === respCorrect.length) {
    console.log('y/n questions have "correct" responses.');
} else {
    console.log('error: unequal numbers of y/n questions and "correct" responses');
}

if (questions.length == respIncorrect.length) {
    console.log('y/n questions have "incorrect" responses');
} else {
    console.log('error: unequal numbers of y/n questions and "incorrect" responses');
}


// holds error messages for bad user inputs
var badYNAnswer = 'You didn\'t answer yes or no!';
var badIntAnswer = 'Integers only, please!';

// Loop that prompts the user to answer y/n questions, records correct guesses, 
// and sends an alert that responds to their answers.
var userGuess = '';

// Generates a random number between 20 and 100 and stores as the number of hacker duels I have supposedly won,
// then prompts the user to guess that number until they have guessed four times or guessed correctly.
// Gives the user an alert each time they guess telling them if their guess is high, low, or correct.
var hackerDuels = Math.floor(Math.random() * 81) + 20;
console.log('I have supposedly won ' + hackerDuels + ' hacker duels.');

var guessCount = 0;
var duelPrompt = 'Alright, now for the cool questions. How many hacker duels do you think I\'ve won? You have 4 tries to guess.';
var duelResp = 'Nice try... I have defeated ' + hackerDuels + ' foolish hackers. Cross me and you\'ll be the ' + hackerDuels + 'th, ' + name + '.';

// Prompts user to guess what science fiction / fantasy weapons I am proficient with. 
// User answers will be compared with an array containing the weapons I can use effectively.
// When a user guesses correctly, they will be congratulated; if not, they will be asked five more 
// times to guess correctly. 
var wepProfs = ['batlith', 'crysknife', 'phaser', 'nuclear icbm', 'reason', 'mediocre humor'];
var guessRight = false;
var wepPrompt = 'Alright, last question. I am proficient with a number of weapons. Try and guess one of them; you have six tries.';
var wepResp = 'Okay, stop, I\'ll just tell you.';
var wepAll = 'I have mastered the batlith, crysknife, phaser, nuclear ICBM, Reason, and mediocre humor.';


// run functions
yNQuestion();
numGuess();
wepGuess();


function yNQuestion(){
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
            alert();
            console.log('User may have put in some bad input.');
        } else {
            console.log('Not sure how we got here...');
        }
    }

    alert(duelResp);
}

function wepGuess(){
    guessCount = 0;
    while (guessCount < 6 && !guessRight) {
    userGuess = prompt(wepPrompt).toLowerCase();
    console.log('user guessed ' + userGuess);
    guessCount++;
    wepPrompt = 'Still working on that one... You have ' + (6 - guessCount) + ' tries left.';
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






// Gives user an alert telling them how many guesses they got right
var knowMe = '';

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
