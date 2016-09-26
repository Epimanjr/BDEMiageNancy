<?php
// Check to ensure this file is included in Joomla!
defined('_JEXEC') or die('Restricted access');
 
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
        $path = $this->getPathToElements() . '/bureau/';
        JHTML::_('script', 'bureau.js', $path);
        
		echo "bonjour le bureau";
	}
}