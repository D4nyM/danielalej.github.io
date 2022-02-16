<?php 

	$gallons = htmlspecialchars($_POST['fuel_quote_gallons']);
	$date = htmlspecialchars($_POST['fuel_quote_date']);
	echo $gallons, ' ', $date;
?>