// 1. Returnează un boolean dacă un număr este divizibil cu 10

// Veți crea o funcție care vă va returna un boolean „adevărat” sau „fals” ca rezultat.

// Numărul introdus ar trebui să returneze un „adevărat” doar dacă este divizibil cu 10.

// În caz contrar, programul dvs. ar trebui să returneze un răspuns „fals”.


let number = 100;

let division = (number) => {
  if (number % 10 === 0) {
    console.log("Adevarat");
  } else {
    console.log("Fals");
  }
}

let result = division(number);



// 2. Scrieți o funcție numită tellFortune care:

// primește 4 argumente: numărul de copii (N), numele partenerului (Z), locația geografică (Y), locul de muncă (X).
// afișează pe ecran viitorul dvs. în felul următor: "Vei fi un X în Y, căsătorit cu Z și vei avea N copii."
// În rezolvarea problemei, vom încerca să abordăm șirurile templetizate (${variabila} este o variabila.).

let NumarCopii = (3);
let NumePartener = ("Andreea");
let LocatiaGeografica = ("Norvegia");
let LocMunca = ("Programator");

const tellFortune = (n, z, y, x) => {
  return "Vei fi un " + x + " in " + y + ", casatorit cu " + z + " si vei avea " + n + " copii !!";
}

console.log(tellFortune(NumarCopii, NumePartener, LocatiaGeografica, LocMunca));


// 3. Folosind instrucțiunea JavaScript switch se va obține ziua săptămânii

// Veți crea o funcție care va returna un șir de caractere (string) care va reprezenta numele unei zile a săptămânii în raport cu numărul acesteia pe parcursul unei săptămâni.

let day = "5";
let days;

switch (day) {
  case "1":
    days = "Luni";
    break;
  case "2":
    days = "Marti";
    break;
  case "3":
    days = "Miercuri";
    break;
  case "4":
    days = "Joi";
    break;
  case "5":
    days = "Vineri";
    break;
  case "6":
    days = "Sambata";
    break;
  case "7":
    days = "Duminica";
    break;
}

console.log("Astazi este " + days);


// EXERCITII EXTRA


// 1. Define the expected oven time in minutes
// Define the EXPECTED_MINUTES_IN_OVEN constant that represents how many minutes the lasagna should be in the oven. It must be exported. According to the cooking book, the expected oven time in minutes is 40.

const EXPECTED_MINUTES_IN_OVEN = 40;


// 2. Calculate the remaining oven time in minutes
// Implement the remainingMinutesInOven function that takes the actual minutes the lasagna has been in the oven as a parameter and returns how many minutes the lasagna still has to remain in the oven, based on the expected oven time in minutes from the previous task.

function remainingMinutesInOven(actualMinutes) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutes;
};


// 3. Calculate the preparation time in minutes
// Implement the preparationTimeInMinutes function that takes the number of layers you added to the lasagna as a parameter and returns how many minutes you spent preparing the lasagna, assuming each layer takes you 2 minutes to prepare.

function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
};


// 4. Calculate the total working time in minutes
// Implement the totalTimeInMinutes function that takes two parameters: the numberOfLayers parameter is the number of layers you added to the lasagna, and the actualMinutesInOven parameter is the number of minutes the lasagna has been in the oven. The function should return how many minutes in total you've worked on cooking the lasagna, which is the sum of the preparation time in minutes, and the time in minutes the lasagna has spent in the oven at the moment.

function totalTimeInMinutes(numberOfLayers, actualMinutes) {
  const preparationTime = preparationTimeInMinutes(numberOfLayers);
  return preparationTime + actualMinutes;
};

console.log(remainingMinutesInOven(30));
console.log(preparationTimeInMinutes(2));
console.log(totalTimeInMinutes(2, 30));

// --------------------- //


// 1. Check if the 'Fast Attack' action is possible
// Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false:

const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIsPresent = true;

let canexecutFastAttack = (sleeping) => {
  if (sleeping === false) {
    return true;
  }
  else {
    return false;
  }
}

console.log("Can execut fast attack: - " + canexecutFastAttack(knightIsAwake));

// 2. Check if the 'Spy' action is possible
// Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false:

let canSpy = (knightState, archerState, prisonerState) => {
  if (knightState && archerState && prisonerState === true) {
    return true;
  }
  else {
    return false;
  }
}

console.log("Can Spy: - " + canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake));


// 3. Check if the 'Signal Prisoner' action is possible
// Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false:

let canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => {
  if (archerIsAwake || prisonerIsAwake === true) {
    return true;
  }
  else {
    return false;
  }
}

console.log("Can signal the prisoner: - " + canSignalPrisoner(archerIsAwake, prisonerIsAwake));


// 4. Check if the 'Free Prisoner' action is possible
// Implement a function named canFreePrisoner that takes four boolean values. The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake. The last parameter indicates if Annalyn's pet dog is present. The function returns true if the 'Free Prisoner' action is available based on the state of the characters and Annalyn's pet dog presence. Otherwise, it returns false:

let canFreePrisoner = (knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent) => {
  if (knightIsAwake || archerIsAwake || prisonerIsAwake === true) {
    return false;
  }
  else if (petDogIsPresent === true) {
    return true;
  }
}

console.log("Can free the prisoner: - " + canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIsPresent));