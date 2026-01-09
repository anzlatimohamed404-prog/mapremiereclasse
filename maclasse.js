/**
 * J'apprend a créer des classe javascript
 */

/**
 * Comment déclarer une classe?
 * pour déclarer,
 * 1. je commence par le mot-clé class.
 * 2. je donne un nom a la classe. Le nom de la classe 
 * doit ommencer par une lettre majidcule.
 * 3. je definis les propriétés et les methodes de la classe.
 */


// Ma classe personne

class personne {
    /**
     * 
     * @param {*} nomPersonne 
     * @param {*} villagePersonne 
     * @param {*} anneeNaissance 
     * nom
     * village
     * année de naissance
     */
    // je définis le constructeur de la classe personne
    constructor(nomPersonne, villagePersonne, anneeNaissance) {
        this.nom = nomPersonne;
        this.village = villagePersonne;
        this.annee = anneeNaissance;
    }

     // Méthode
     bienvenue() {
        alert("Bienvenue " + this.nom )
        
    }

    calculAge() {
        let anneeCourante = new Date().getFullYear();
        return anneeCourante - this.annee;
}


};



// j'utilise la classe personne pour créer une insistance
// (exemplaire) de personne. Notre personne s'appelle Ali.
// Il habite a combani. Il est née en 1999.

let personne1 = new personne("Ali","combani", 1999);

// Je fait la méthode bienvenue() présente dans la classe 

personne1.bienvenue();

console.log("personne1 :" , personne1);



let personne2 = new personne("Fatima", "Chiconi", 2014);

console.log("personne2 :", personne2);
console.log("personne2 :", personne2.calculAge());


