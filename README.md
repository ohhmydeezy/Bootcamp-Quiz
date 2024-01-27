# Bootcamp-Quiz

## Table of Contents: 
* [sources](#soueces)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

Sources for the questions: 

Sources for questions: https://www.proprofs.com/quiz-school/story.php?title=do-u-know-java-script

https://www.tutorialspoint.com/javascript/javascript_online_quiz.htm


Installation: 

For this task, 2 HTML files were provided in the starter pack with with the CSS also completed.

The focus was the Javascript pages, however the completed files needed to be transferred to a new Repo.

Step 1: Creating a Repo. 

In this step, Create a Repo which also has a readMe file attached.

Step 2: creating the folders and files for the repo:

Since the HTML file and CSS files were already completed, This step required creating a blank HTML pages CSS pages to 
copy the code onto using "touch<file name>".css & "touch<file name>.HTML". 

Step 3: Creating the code: 

starting with the base code HTML Code:

![Index HTML starter code](./assets/Images/index%20starter.png)
![highscore HTML starter code](./assets/Images/Highscore%20starter.png)
![CSS starter code](./assets/Images/CSS%20starter.png)

Step 4: Creating the prompts

Since the task was to create a Quiz related to coding questions, the first step was to  create an array of questions with both the questions, the options and the correct answer. the questions were sourced from the internet.

![Questions array](./assets/Images/Questions%20array.png)

Once the questions were complete the logic for how the page would start the quiz and interate through the questions displaying one question at a time and proceeding to the next question when an option has been selected, also playing a sound depending on whether or not the correct option was selected and dispalying correct or incorrect on the screen.

![start and question function](./assets/Images/Start%20function.png)

Following this, the next step was to create a function the checks the selected option and compares it to the correct option in the array, adding points to the tally if the correct and decucting time if the selection was wrong as per the brief. Also to do this, a timer function was required that starts at the beginning of the quiz, removes 5 seconds everytime the inccorect option is selected and ends the quiz when the timer runs to 0.

![check answer and timer function](./assets/Images/check%20answer%20and%20start%20timer%20function%20.png)


Following this an if statement was utilised to check the average change from month to month and logged using by taking the net total change x the total number of months - 1 (the first month is not included in this calculation) following this, math.round function was used to ensure that the final number produced was to 2 decimal places as per the guidelines requested.

![average change](./assets/images/Average.png)

Following this, two if statements were utilised to check the singles greatest increase from month to month and the single greatest loss from month to month.

![]()

Final step: logging the score to a highscore page: 

The final product: 
![final product]()

Deployed link: 

Usage: 

    the page can be used to check the net profits and losses for any given finances array manually added to the JS file.

Credits: 

    Repo is made by myself, initial fiannce array and basic HTML file was provided by the university and the code thereafter was created with the help of my colleagues in the a study group, the help of teaching assistants and research completed on mdn web docs and stack overflow.



License:

    See License in Repo