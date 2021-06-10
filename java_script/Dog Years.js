const myAge = 35;

// This variable will change, this is why I used let instead of const
let earlyYears = 2;

earlyYears *= 10.5;

// I'm substracting 2 (earlyYears) from myAge to calculate the laterYears variable
let laterYears = myAge - 2;

// Now I'm multiplicating my laterYears by four to calculate the number of dog years accounted by my later years
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

// The sum of earlyYears and laterYears is my age in dog age
let myAgeInDogYears = earlyYears + laterYears;

//Using LowerCase to print my name
let myName = ('Marina').toLowerCase();

console.log('My name is '+ myName + '. I am '+ myAge + ' years old in human years which is ' + myAgeInDogYears + ' years old in dog years.');
