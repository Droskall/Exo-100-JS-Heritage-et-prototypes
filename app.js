const Vehicule = function (couleur, roues, marque) {
    this.couleur = couleur;
    this.roues = roues;
    this.marque = marque;

    this.demarrer = () => {
        console.log("Demarer");
    }
    this.arreter = () => {
        console.log("Arreter")
    }
}

const Velo = function (couleur, roues, marque, rayonRoues, typePeinture) {
    Vehicule.call(this, couleur, roues, marque);
    this.rayonRoues = rayonRoues;
    this.typePeinture = typePeinture;

    this.monter = () => {
        console.log("Je monte sur le vélo");
    }
}

Velo.prototype = Object.create(Vehicule.prototype);
Velo.prototype.constructor = Velo;

const Voiture = function (couleur, roues, marque, assurance, proprietaire) {
    Vehicule.call(this, couleur, roues, marque);
    this.assurance = assurance;
    this.proprietaire = proprietaire;

    this.passerAuCarWash = () => {
        console.log("Laver");
    }
}

Voiture.prototype = Object.create(Vehicule.prototype);
Voiture.prototype.constructor = Voiture;
