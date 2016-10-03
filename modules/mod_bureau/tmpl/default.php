<?php 
// No direct access
defined('_JEXEC') or die; 

$json = json_decode($jsonBureau)->{"staff"};

// Parcours des membres pour affichage
for($i=0;$i<sizeof($json);$i++) {
    $member = $json[$i];

    // Récupération des caractéristiques du membre
    $nom = $member->{"nom"};
    $prenom = $member->{"prenom"};
    $fonction = $member->{"fonction"};
    $email = $member->{"email"};
}
