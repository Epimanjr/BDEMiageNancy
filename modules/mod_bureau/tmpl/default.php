<?php 
// No direct access
defined('_JEXEC') or die; 

echo "Bonjour : $jsonBureau";

// Titre + description du bureau


// Récupération des membres du bureau
$jsonDecode = json_decode($jsonBureau)->{'staff'};
for($i = 0;$i<sizeof($jsonDecode);$i++) {
    $nom = $jsonDecode[0]->{"nom"};
    $prenom = $jsonDecode[0]->{"prenom"};
    $fonction = $jsonDecode[0]->{"fonction"};
    $email = $jsonDecode[0]->{"email"};

    // HTML Pour afficher le membre

}