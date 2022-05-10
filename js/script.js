// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays the discount depending on age and day of the week.
 */
function displayCost() {
  	// initialize constants
	const HST = 0.13
  const small = 4.50
  const reg = 7.00
  const large = 8.50
  const BROWN_SUGAR = 1.15
  const RAINBOW = 0.90
  const CRYSTAL = 1.00
  const REG_PEARL = 0.85
  const PLAIN = 0.00
// initialize variables
  let tax = 0
  let price = 0
  let priceTaxed = ''
	let age = parseInt(document.getElementById('size').value)	
	let select = document.getElementById('topping');
	let day = select.options[select.selectedIndex].value;

  	
	if (age < 5 || age > 95) {
		cost = "The cost of admission for you is FREE."
	}
	else if ((day == "Tuesday") || (day == "Thursday)") 
			 || (age >=12) && (age <=21)) {
		cost = "Student discount is applied to your admission."
	}
	else if ((age > 0) || (day != "")) {		
		cost = "You must pay regular admission."
	}
	
  	// display the greeting
  	document.getElementById('display-results').innerHTML = priceTaxed
}