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
    console.log(zmogus1.automobiliai[i].pavadinimas);

    for(let x in zmogus1.automobiliai[i].modelius) {
        console.log(zmogus1.automobiliai[i].modelius[x]);
    }
}


// let skaiciai = [
//     [1,2,3,4,5,6,7,8,9,10],
//     [1,2,3,4,5,6,7,8,9,10],
//     [1,2,3,4,5,6,7,8,9,10],
//     [1,2,3,4,5,6,7,8,9,10],
//     [1,2,3,4,5,6,7,8,9,10],
//     [1,2,3,4,5,6,7,8,9,10],
//     [1,2,3,4,5,6,7,8,9,10],
//     [1,2,3,4,5,6,7,8,9,10],
//     [1,2,3,4,5,6,7,8,9,10],
//     [1,2,3,4,5,6,7,8,9,10],
// ];

// console.log(skaiciai);


// console.log(skaiciai[6]);
// console.log("Skaicius ar 9?:" + skaiciai[6][8]);

//skaiciai[6] - kintamojo tipas? kitas masyvas


//i - eilutes
//j - stulpelius

// let eilutesIlgis = skaiciai.length; 

// console.log(eilutesIlgis);

// for(let i=0; i<eilutesIlgis; i++) {
//     let stulpelioIlgis = skaiciai[i].length;
//     for(let j=0; j<stulpelioIlgis; j++) {
//         console.log(skaiciai[i][j]);
//     }
// }

// for (let i in skaiciai) {
//     for (let j in skaiciai[i]) {
//         // console.log(skaiciai[i][j]);
//     }
// }


// console.log(zmogus1.automobiliai.auto1);
// console.log(zmogus1['automobiliai']['auto1']);
// console.log(zmogus1.automobiliai.arVaziuoja());




// ? 1 objektas
const skaiciuotuvas =  {
    sk1: 1,
    sk2: 2,

    paleidimas: function(sk1, sk2) {
        this.sk1 = sk1;
        this.sk2 = sk2;
    }
}


//Kiek cia objektu? 1 objektas
skaiciuotuvas.paleidimas(4,6);
skaiciuotuvas.paleidimas(40,60);
skaiciuotuvas.paleidimas(400,600);
skaiciuotuvas.paleidimas(40,60);

// ? objekto sablonas(vienoda struktura, vienodus metodus, tuos pacius properties), 100

//4 zmogaus objektus


//Konstruktoriaus funkcija prasideda is didziosios raides
// vardas: "Vardas",
// pavarde: "Pavarde",
// asmensKodas: "123456789",
function Zmogus(vardas, pavarde, asmensKodas) {

    

}



const z1 = {
    vardas: "Vardas"
}

const z2 = {
    vardas: "Vardas1"
}

const z3 = {
    vardas: "Vardas2"
}

const z4 = {
    vardas: "Vardas3"
}