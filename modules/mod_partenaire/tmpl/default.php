<?php

// No direct access
defined('_JEXEC') or die;

$document = JFactory::getDocument();
$document->addStyleSheet('./modules/mod_partenaire/css/partenaire.css');

// TODO Afficher un partenaire
echo $nom;
echo '<img src="' . $photo . '" />';
