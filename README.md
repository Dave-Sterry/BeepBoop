# Beep Boop Machine
<img src="https://github.com/Dave-Sterry.png" width="200px" height="auto">

### A website by David Sterry updated on 10/30/20
## Description

_A simple website that will take a users numerical input and return words. Any input with a "1" all digits of input are replaced with Beep. Any input with a "2" all digits of input are replaced with "Boop". Any input with a "3" all digits are replaced with  "wont you be my neighbor?"_

The site can be viewed [here](https://dave-sterry.github.io/BeepBoop/)

## Setup Instructions
 User will need to have an up to date browser installed such as Chrome of Firefox
 # View online :
1. Using the browser navigate to the [gh-pages](https://dave-sterry.github.io/BeepBoop/) for this project
## Download via Github:
1. Alternatively use the browser navigate to my GitHub page [respository](https://github.com/Dave-Sterry/BeepBoop)
2. Click the Green **Code** button and select **Download Zip**
3. Unzip the downloaded folder
4. Open the _index.html_ file to view the site locally
## Clone from Github via Gitbash:
1. Clone this repo to your personal computer using "git clone (rhttps://github.com/Dave-Sterry/BeepBoop)
2. Next navigate to the directory on your computer with the same name, and open via VScode or other code editor of your choice
3. Open index.html in your browser of choice. 
## How to use site
1. Enter a number of your choice
2. view the results of the Beep Boop machine. 

## Specs

**Describe**: beepBoop()

**Test**: It returns an array with 0 if the user inputs 0  
**Expect**:(beepBoop(0)).toEqual([0]);

**Test**: It replaces all digits  with "Beep!" in any number that contains the digit 1  
**Expect**:(beepBoop(1)).toEqual("Beep!");

**Test**: It replaces all digits  with "Boop!" in any number that contains the digit 2  
**Expect**:(beepBoop(2)).toEqual("Boop!");

**Test**: It replaces all digits  with "Won't you be my neighbor?" for any number that contains the digit 3  
**Expect**(beepBoop(3)).toEqual("Won't you be my neighbor?")

**Test**: It replaces all digits with second or third exception when a 2 or 3 is present in input with two digits    
**Expect**(beepBoop(21)).toEqual(Boop)   
**Expect** (beepBoop(13)).toEqual(Won't you be my neigbor?)

## Known Bugs
no know bugs at this time

## Contact and Support details

_Please contact me at sterry.david@gmail.com in regards to this website_

## Techknowlogies Used

* HTML
* CSS
* Git
* Bootstrap
* Visual Studios Code
* Javascript/jQuery

# License

This project is licensed under **MIT 2.0**

Copyright (c) 2020 **David Sterry**