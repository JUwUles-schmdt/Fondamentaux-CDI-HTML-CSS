function combat() 
{ 
    let lion = 
    { 
        name: "Lion", 
        health: 100, 
        attack: 25, 
        precision: 0.5, 
    }; 
    let guerrier = 
    { 
        name: "Guerrier", 
        health: 120, 
        attack: 20, 
        precision: 0.7, 
    }; 
    
    while (lion.health > 0 && guerrier.health > 0) 
        { 
            if (Math.random() < guerrier.precision) 
                { 
                    lion.health -= guerrier.attack; 
                    console.log(guerrier.name + " attaque " + lion.name + " et inflige " + guerrier.attack + " dégâts."); 
                    consoleElement.innerText += guerrier.name + " attaque " + lion.name + " et inflige " + guerrier.attack + " dégâts.\n";
                } 
            else 
                { 
                    console.log(guerrier.name + " rate son attaque."); 
                    consoleElement.innerText += guerrier.name + " rate son attaque.\n";
                } 
            if (lion.health <= 0) 
                { 
                    console.log(lion.name + " est vaincu !"); 
                    consoleElement.innerText += lion.name + " est vaincu !\n";
                    break; 
                } 
            if (Math.random() < lion.precision) 
                { 
                    guerrier.health -= lion.attack; 
                    console.log(lion.name + " attaque " + guerrier.name + " et inflige " + lion.attack + " dégâts."); 
                    consoleElement.innerText += lion.name + " attaque " + guerrier.name + " et inflige " + lion.attack + " dégâts.\n";
                } 
            else 
                { 
                    console.log(lion.name + " rate son attaque."); 
                    consoleElement.innerText += lion.name + " rate son attaque.\n";
                } 
            if (guerrier.health <= 0) 
                { 
                    console.log(guerrier.name + " est vaincu !"); 
                    consoleElement.innerText += guerrier.name + " est vaincu !\n";
                    break; 
                } 
        } 
        console.log("======================");
        consoleElement.innerText += "======================\n";
}