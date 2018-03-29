var CreationTableauLangages = function () {
  var langages = ["Html","CSS","Java","PHP"];
  return langages;
}

var CreationTableauNombres = function () {
  var numbers = [0,1,2,3,4,5];
    return numbers;
}

var RemplacementElement = function (langages) {
  langages[2] = 'Javascript';//On sélectionne le troisieme element pour le remplacer par Javascript
  return langages;
}

var AjoutElementLangages = function (langages) {
  langages.push('Ruby','Python');//On rajoute Ruby et Python à la fin du tableau avec .push
  return langages;
}

var AjoutElementNombres = function (nombres) {
  nombres.unshift(-2,-1);// On rajoute -2 et -1 en debut de tableau avec .unshift
  return nombres;
}

var SuppressionPremierElement = function (langages) {
  langages.shift()//On supprime le premiere element d'un tableau grace à .shift
  return langages;
}

var SuppressionDernierElement = function (langages) {
langages.pop()//On supprime le derniere element avec .pop
  return langages;
}

var ConversionChaineTableau = function (reseaux_sociaux_chaine) {
  var reseaux = reseaux_sociaux_chaine.split(',');//On mets la chaine en tableau avec .split et on les sépares avec ','
  return reseaux;
}

var ConversionTableauChaine = function (langages) {
  var langages_chaine = langages.join(',');//On mets un tbleau en chaine avec .join et on les sépares avec ','
  return langages_chaine;
}

var TriTableau = function (reseaux_sociaux) {
  var reseaux = reseaux_sociaux.sort();//Les données sont trié par ordre alphabetique
  return reseaux;
}

var InversionTableau = function (reseaux_sociaux){
  var reseaux = reseaux_sociaux.reverse();//On inverse les donnée du tableau (gauche-->droite et devenu droite-->gauche)
  return reseaux;
}
