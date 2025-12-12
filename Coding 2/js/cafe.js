let eau = 10000;
let cafemoulu = 4000;
let numero=0;
let argent=0.0;


function cafe(){
    let clients = Math.floor(Math.random() * 51) + 50; // entre 50 et 100 clients
    while (eau >=60 && cafemoulu >= 8&&clients>0){
        numero++;
        eau -= 60;
        cafemoulu -= 8;
        clients--;
        argent+=1.45;
    }
    console.log("Nombre de cafés servis : " + numero);
    console.log("Clients non servis : " + clients);
    console.log("Eau restante : " + eau + " ml");
    console.log("Café restant : " + cafemoulu + " g");
    console.log("Argent gagné : " + argent.toFixed(2) + " €");
    consoleElement.innerText += "Nombre de cafés servis : " + numero + "\n";
    consoleElement.innerText += "Clients non servis : " + clients + "\n";
    consoleElement.innerText += "Eau restante : " + eau + " ml\n";
    consoleElement.innerText += "Café restant : " + cafemoulu + " g\n";
    consoleElement.innerText += "Argent gagné : " + argent.toFixed(2) + " €\n";
        console.log("======================");
        consoleElement.innerText += "======================\n";
}