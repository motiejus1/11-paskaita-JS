"use strict";


// Objektas objekte
const zmogus = {
    vardas: "Vardas",
    pavarde: "Pavarde",
    asmensKodas: "123456789",

    automobiliai: {
        auto1: "BMW",
        auto2: "Ford",
        auto3: "Lada",

        arVaziuoja: function() {
            return "Vaziuoja tik" + this.auto1;
        } 
    },

    dirbti: function() {
        return "Dirbu";
    },

    tingeti: function() {
        return "Tingeti";
    }
}

// console.log(zmogus.automobiliai.auto1);
// console.log(zmogus['automobiliai']['auto1']);
// console.log(zmogus.automobiliai.arVaziuoja());


//Daug objektu objekte
// /////////////////////////////////////////////////

let masyvas = ['elementas1', 'e2', 'e3'];

const zmogus1 = {
    vardas: "Vardas",
    pavarde: "Pavarde",
    asmensKodas: "123456789",

    automobiliai: [
        //0
        { 
            pavadinimas: "BMW", 
            modelius: ["e46", "e90"],
            arVaziuoja: function() {
                return "Vaziuoja";
            }   
        },
        //1
        {
            pavadinimas: "Ford", 
            modelius: ["Mondeo", "Sierra"],
            arVaziuoja: function() {
                return "Vaziuoja";
            }      
        },
        //2
        {
            pavadinimas: "Lada", 
            modelius: ["9", "8"],
            arVaziuoja: function() {
                return "Nevaziuoja";
            }      
        }

    ],

    dirbti: function() {
        return "Dirbu";
    },

    tingeti: function() {
        return "Tingeti";
    }
}

// obj kintamasis yra masyvas 

// console.log(zmogus1.automobiliai[2]);
// console.log(zmogus1.automobiliai[2].pavadinimas);
// console.log(zmogus1.automobiliai[2].modelius[1]);
// console.log(zmogus1.automobiliai[2].arVaziuoja());

//Visu objektu isvedimas(automobiliai)

let masyvoIlgis= zmogus1.automobiliai.length;

// console.log(masyvoIlgis);

for (let i=0; i< masyvoIlgis; i++) {
    // console.log(zmogus1.automobiliai[i]);
}

for (let i in zmogus1.automobiliai) {
    // console.log(zmogus1.automobiliai[i].pavadinimas);

    for(let x in zmogus1.automobiliai[i].modelius) {
        // console.log(zmogus1.automobiliai[i].modelius[x]);
    }
}


let skaiciai = [
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
    [1,2,3,4,5,6,7,8,9,10],
];

console.log(skaiciai);

for (let i in skaiciai) {
    console.log(skaiciai[i]);
}


// console.log(zmogus1.automobiliai.auto1);
// console.log(zmogus1['automobiliai']['auto1']);
// console.log(zmogus1.automobiliai.arVaziuoja());