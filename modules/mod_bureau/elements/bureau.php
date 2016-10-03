<?php
// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die('Restricted access');
defined('JPATH_PLATFORM') or die;
 
jimport('joomla.html.html');
jimport('joomla.form.formfield');
 
// The class name must always be the same as the filename (in camel case)
class JFormFieldBureau extends JFormField {
 
	//The field class must know its own type through the variable $type.
	protected $type = 'bureau';
 
	public function getLabel() {
		// code that returns HTML that will be shown as the label
	}
 
	public function getInput() {
        // Load the script
        $document = JFactory::getDocument();
		$document->addScript('../modules/mod_bureau/elements/bureau/bureau.js');
		$document->addStylesheet('../modules/mod_bureau/elements/bureau/bureau.css');

		echo '<button type="button" class="btn btn-success" onclick="add()">Ajouter un membre</button>';
		echo '<button type="button" class="btn btn-warning" onclick="save(\'sauvegarde\')">Sauvegarder</button>';
		echo '<button type="button" class="btn btn-default" onclick="recharger(\'sauvegarde\', false)">Recharger</button>';
		echo '<div id="staff"></div>';
	}
}