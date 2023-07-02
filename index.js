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

console.log("Vei fi un " + LocMunca + "," + " casatorit cu " + NumePartener + " si vei avea " + NumarCopii + " copii !!")


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