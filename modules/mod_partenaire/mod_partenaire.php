<?php
/**
 * Ce module sert à afficher les membres d'un bureau.
 */

// No direct access
defined('_JEXEC') or die;
// Include the syndicate functions only once
require_once dirname(__FILE__) . '/helper.php';

//$hello = modBureauHelper::getHello($params);

$nom = $params->get("nom");
$photo = $params->get("photo");
$description = $params->get("description");
$lien = $params->get("lien");
$url = $params->get("url");
require JModuleHelper::getLayoutPath('mod_partenaire');