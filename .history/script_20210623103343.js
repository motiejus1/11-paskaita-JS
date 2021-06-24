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

console.log(zmogus.automobiliai.auto1);
console.log(zmogus['automobiliai']['auto1']);
console.log(zmogus.automobiliai.arVaziuoja());


//Daug objektu objekte
// /////////////////////////////////////////////////

let masyvas = ['elementas1', 'e2', 'e3'];

const zmogus1 = {
    vardas: "Vardas",
    pavarde: "Pavarde",
    asmensKodas: "123456789",

    automobiliai: [
        { pavadinimas: "BMW", modelis:  },
        {},
        {}
    ]
    // {
    //     auto1: "BMW",
    //     auto2: "Ford",
    //     auto3: "Lada",

    //     arVaziuoja: function() {
    //         return "Vaziuoja tik" + this.auto1;
    //     } 
    // }
    ,

    dirbti: function() {
        return "Dirbu";
    },

    tingeti: function() {
        return "Tingeti";
    }
}

console.log(zmogus1.automobiliai.auto1);
console.log(zmogus1['automobiliai']['auto1']);
console.log(zmogus1.automobiliai.arVaziuoja());