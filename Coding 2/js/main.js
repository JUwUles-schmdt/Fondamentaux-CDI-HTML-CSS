let leprenom = "jules";
let lage = 19;
let premiernombre = 5;
let deuxiemenombre = 3;
let boolean1 = true;
let code = 1234;


let couleurs = ["rouge", "bleu", "vert", "jaune", "noir"];
let personne1 = {
    nom: "pedro",
    age: 25,
    sentMsg: false,
};
let personne2 = {
    nom: "antonio",
    age: 30,
    sentMsg: false,
};
let personne3 = {
    nom: "orthodoxe",
    age: 11,
    sentMsg: false,
};
let personne4 = {
    nom: "jean",
    age: 40,
    sentMsg: false,
};
let personnes = [personne1, personne2, personne3, personne4];



const consoleElement = document.querySelector(".console");



let choisir = prompt("choisir exercice, 1 : prenom, 2 : presentation, 3 : addition, 4 : boolean, 5 : prompt prenom, 6 : code");
switch (choisir) {
    case "1":
        // Ex 1

        console.log(leprenom);
        consoleElement.innerText += leprenom + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
        break;
    case "2":
        // Ex 2

        console.log("je s'appelle " + leprenom + " et j'ai " + lage + " ans.");
        consoleElement.innerText += "je s'appelle " + leprenom + " et j'ai " + lage + " ans.\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
        break;
    case "3":
        // Ex 3

        let resultat = premiernombre + deuxiemenombre;
        console.log(premiernombre + " + " + deuxiemenombre + " est égal à " + resultat);
        consoleElement.innerText += premiernombre + " + " + deuxiemenombre + " est égal à " + resultat + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
        break;
    case "4":
        // Ex 4

        if (boolean1) {
            console.log("c'est vrai");
            consoleElement.innerText += "c'est vrai\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
        } else {
            console.log("c'est faux");
            consoleElement.innerText += "c'est faux\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
        }
        break;
    case "5":
        // Ex 5

        let prenomdelexercice5 = prompt("prenom svp");
        console.log("Bonjour " + prenomdelexercice5);
        consoleElement.innerText += "Bonjour " + prenomdelexercice5 + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";

        break;
    case "6":
        // Ex 6

        let usercode = parseInt(prompt("entrez le code"));
        if (usercode === code) {
            console.log("Code correct");
            consoleElement.innerText += "Code correct\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
        } else {
            console.log("Code incorrect");
            consoleElement.innerText += "Code incorrect\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
        }
        break;
}



// ex fonctions

function ex1() {
    console.log("Bonjour " + leprenom)
    consoleElement.innerText += "Bonjour " + leprenom + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
}

function ex3(a, b, type) {
    if (type === "addition") {
        let resultat = a + b;
        console.log(a + " + " + b + " est égal à " + resultat);
        consoleElement.innerText += a + " + " + b + " est égal à " + resultat + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
    }
    else if (type === "soustraction") {
        let resultat = a - b;
        console.log(a + " - " + b + " est égal à " + resultat);
        consoleElement.innerText += a + " - " + b + " est égal à " + resultat + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
    }
}


function ex5() {
    for (let i = 1; i < 6; i++) {
        console.log(i);
        consoleElement.innerText += i + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
    }
}

function ex6() {
    let mot = prompt("entrez le mot");
    for (let i = 0; i < 5; i++) {
        console.log(mot);
        consoleElement.innerText += mot + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
    }
}



// ex tableaux


function exTableau1() {
    for (let i = 0; i < couleurs.length; i++) {
        console.log(couleurs[i]);
        consoleElement.innerText += couleurs[i] + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
    }
}

function exTableau2() {
    console.log(couleurs);
    consoleElement.innerText += couleurs.join(", ") + "\n";
    couleurs.splice(2, 1);
    console.log(couleurs);
    consoleElement.innerText += couleurs.join(", ") + "\n";
    couleurs.push("blanc");
    console.log(couleurs);
    consoleElement.innerText += couleurs.join(", ") + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
}

function exTableau3() {
    let pommes = ["Pomme Rouge", "Pomme Rouge", "Pomme Rouge", "Pomme Rouge", "Pomme Rouge", "Pomme Verte", "Pomme Verte", "Pomme Verte", "Pomme Jaune", "Pomme Jaune"];
    compteurRouge = 0;
    compteurVerte = 0;
    compteurJaune = 0;
    pommes.forEach(element => {
        if (element.includes("Rouge")) {
            compteurRouge++;
        }
        else if (element.includes("Verte")) {
            compteurVerte++;
        }
        else if (element.includes("Jaune")) {
            compteurJaune++;
        }
    });
    console.log("Rouge: " + compteurRouge + ", Verte: " + compteurVerte + ", Jaune: " + compteurJaune);
    consoleElement.innerText += "Rouge: " + compteurRouge + ", Verte: " + compteurVerte + ", Jaune: " + compteurJaune + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
}

function exTableau4() {
    let personnesAccepées = [];
    let personnesRefusées = [];
    personnes.forEach(personne => {
        if (personne.age >= 18 && !personne.sentMsg) {
            personnesAccepées.push(personne.nom);
            personne.sentMsg = true;
        }
        else if (personne.age < 18) {
            personnesRefusées.push(personne.nom);
        }
    });
    console.log("Personnes acceptées: " + personnesAccepées.join(", "));
    consoleElement.innerText += "Personnes acceptées: " + personnesAccepées.join(", ") + "\n";
    console.log("Personnes refusées: " + personnesRefusées.join(", "));
    consoleElement.innerText += "Personnes refusées: " + personnesRefusées.join(", ") + "\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
}


// inner HTML

const myImage = document.querySelector(".testimg");
const myElement = document.querySelector(".test");
const hoverText = document.querySelector(".hovertext");
let modified = false;

function exInnerHTML() {
    myElement.innerHTML = "Modifié";
    myImage.src = "../img/vergilErm.jpg";
    modified = true;
}

myImage.addEventListener("mouseover", function () {
    myImage.src = "../img/Vergil.webp";
});
myImage.addEventListener("mouseout", function () {
    if (modified) {
    myImage.src = "../img/vergilErm.jpg";
    }
    else 
    {
    myImage.src = "../img/verghil.png" ;
    }
});

myImage.addEventListener("click", function () {
    myImage.width*=2;
});

hoverText.addEventListener("mouseover", function () {
    hoverText.innerHTML = "L'image aussi est hoverable";
});
hoverText.addEventListener("mouseout", function () {
    hoverText.innerHTML = "Hoverable";
});

function dormir(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let isActive = false;
const myButton=document.querySelector("#myButton");
const myButton2=document.querySelector("#myButton2");
const myButton3=document.querySelector("#myButton3");
const myButton4=document.querySelector("#myButton4");

async function colorChange() 
{
    isActive = !isActive;
    
while (isActive)
    {
        myButton.style.backgroundColor="red";
        myButton2.style.backgroundColor="blue";
        myButton3.style.backgroundColor="green";
        myButton4.style.backgroundColor="yellow";
        await dormir(50);
        myButton.style.backgroundColor="yellow";
        myButton2.style.backgroundColor="red";
        myButton3.style.backgroundColor="blue";
        myButton4.style.backgroundColor="green";
        await dormir(50);
        myButton.style.backgroundColor="green";
        myButton2.style.backgroundColor="yellow";
        myButton3.style.backgroundColor="red";
        myButton4.style.backgroundColor="blue";
        await dormir(50);
        myButton.style.backgroundColor="blue";
        myButton2.style.backgroundColor="green";
        myButton3.style.backgroundColor="yellow";
        myButton4.style.backgroundColor="red";
        await dormir(50);
    }if (!isActive)
    {
        myButton.style.backgroundColor="white";
        myButton2.style.backgroundColor="white";
        myButton3.style.backgroundColor="white";
        myButton4.style.backgroundColor="white";
    }

}
const body = document.body;

function darkMode() {
    body.style.backgroundColor = body.style.backgroundColor === "black" ? "white" : "black";
    body.style.color = body.style.color === "white" ? "black" : "white";
}


function imagetoggle() {
    if (myImage.style.display === "none") {
        myImage.style.display = "block";
    } else {
        myImage.style.display = "none";
    }
}