<?php
header('Content-Type: text/xml');
echo '<?xml version="1.0" encoding ="UTF-8" standalone="yes" ?>';

echo '<response>';
	$food = $_GET['food'];
	$foodArray = array('tuna', 'bacon', 'beef', 'loaf', 'ham');
	if(in_array($food, $foodArray))
		echo 'We do have '.$food.'!'; //Not a very secure way though in practice
	elseif($food=='')
		echo 'Enter a food item idiot';
	else
		echo 'Sorry punk we do not sell no '.$food.'!';
echo '</response>';
?>