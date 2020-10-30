# Beep Boop Machine
<img src="https://github.com/Dave-Sterry.png" width="200px" height="auto">

### A website by David Sterry updated on 10/30/20
## Description

_A simple website that will take a users numerical input and return words. Input of 1 is replaced with Beep, input of 2 is replaced with Boop and an input of 3 is replaced with "wont you be my neighbor?"_

The site can be viewed [here](insert gh pages link)

## Setup Instructions
1. User will need to have an up to date browser installed such as Chrome of Firefox
2. Using the browser navigate to the [gh-pages](gh pages link) for this project
2. Alternatively use the browser navigate to my GitHub page [respository](portfolio link for this site
3. Click the Green **Code** button and select **Download Zip**
4. Unzip the downloaded folder
5. Open the _index.html_ file to view the site locally

## Specs

Describe: beepBoop()

Test: It returns an array with 0 if the user inputs 0
Expect:(beepBoop(0)).toEqual([0]);

Test: It replaces all digits  with "Beep!" in any number that contains the digit 1
Expect:(beepBoop(1)).toEqual("Beep!");

Test: It replaces all digits  with "Boop!" in any number that contains the digit 2
Expect:(beepBoop(2)).toEqual("Boop!");

Test: It replaces all digits  with "Won't you be my neighbor?" for any number that contains the digit 3
Expect(beepBoop(3)).toEqual("Won't you be my neighbor?")

Test: It replaces all digits with first or second exception when a 2 or 3 is present in input
Expect(beepBoop(21)).toEqual(Boop) 
Expect (beepBoop(13)).toEqual(Won't you be my neigbor?)

## Known Bugs
Currently only works for single digit numbers. Double digit numbers return whole array

## Contact and Support details

_Please contact me at sterry.david@gmail.com in regards to this website_

## Techknowlogies Used

* HTML
* CSS
* Git
* Bootstrap
* Visual Studios Code

# License

This project is licensed under **MIT 2.0**

Copyright (c) 2020 **David Sterry**