<?php 
// No direct access
defined('_JEXEC') or die; 

$document = JFactory::getDocument();
$document->addStyleSheet('./modules/mod_bureau/css/bureau.css');
$json = json_decode($jsonBureau)->{"staff"};

// TODO Afficher le titre et la description du bureau
echo '<div class="red">' . $description . '</div><br/>';

// Parcours des membres pour affichage
for($i=0;$i<sizeof($json);$i++) {
    $member = $json[$i];

    // Récupération des caractéristiques du membre
    $nom = $member->{"nom"};
    $prenom = $member->{"prenom"};
    $fonction = $member->{"fonction"};
    $email = $member->{"email"};

    // TODO Afficher un membre
    echo $nom . ' ' . $prenom . '<br/>';
    echo $fonction . '<br/>';
    echo $email . '<br/>'   ;
    
    echo "<hr/>";
}
