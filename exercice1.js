const nom = "Awa";
const n_prod = "Ordinateur";
const p_unitaire = 250000;
const quant = 2;
const frais_livraison = 5000;
const TVA = 0.18;
const mont_tva =  p_unitaire * quant * TVA ;
const mont_total_ttc = (p_unitaire * quant) + mont_tva;
const mont_produit = p_unitaire * quant;
const montant_final = mont_total_ttc + frais_livraison;
const prix_moyen = mont_total_ttc / quant;
console.log("Client:",nom);
console.log("Produit:",n_prod);
console.log("Prix unitaire:",p_unitaire,"FCFA");
console.log("Quantité:",quant);
console.log(" ")
console.log("Montant des produits:",mont_produit,"FCFA");
console.log("TVA:",TVA,"FCFA");
console.log("Montant TTC:",mont_total_ttc,"FCFA");
console.log("Livraison:",frais_livraison,"FCFA");
console.log("TOTAL A PAYER:",montant_final,"FCFA");
console.log(" ")
console.log("Prix moyen TTC par produit:",prix_moyen,"FCFA");

