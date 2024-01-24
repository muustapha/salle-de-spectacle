export class Salle {
    constructor(
      id,
      nom,
      adresseSalle,
      styles,
      listeAvis,
      capacite,
      smac,
      contactSalle
    ) {
      this.id = id;
      this.nom = nom;
      this.adresseSalle = adresseSalle;
      this.styles = styles;
      this.listeAvis = listeAvis;
      this.capacite = capacite;
      this.smac = smac;
      this.contactSalle = contactSalle;
    }
  }

  export class SalleIn {
    constructor(
      id,
      nom,
      adresseSalle,
      styles,
      capacite,
      smac,
      contactSalle
    ) {
      this.id = id;
      this.nom = nom;
      this.adresseSalle = adresseSalle;
      this.styles = styles;
      this.capacite = capacite;
      this.smac = smac;
      this.contactSalle = contactSalle;
    }
  }