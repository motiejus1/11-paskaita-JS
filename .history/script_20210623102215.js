"use strict";

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
console.log(zmogus[].auto1);