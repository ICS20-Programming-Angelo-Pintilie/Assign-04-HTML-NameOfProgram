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
  const SMALL = 4.50
  const REG = 7.00
  const LARGE = 8.50
  const BROWN_SUGAR = 1.15
  const RAINBOW = 0.90
  const CRYSTAL = 1.00
  const REG_PEARL = 0.85
  const PLAIN = 0.00
// initialize variables
  let tax = 0
  let finalOrder = "Your final order: "
  let price = 0
  let priceTaxed = ''
	// get the size of bubble tea the user wants 
	let sizeBoba = document.getElementById('sizeBoba');
	let bobaSize = sizeBoba.options[sizeBoba.selectedIndex].value;

	if (bobaSize == "SMALL") {
		price = price + SMALL;
    finalOrder = finalOrder + "<br><b>Small Bubble Tea price" + SMALL.toFixed(2) + "</b>"
	}
else if (bobaSize == "REG") {
		price = price + REG;
    finalOrder = finalOrder + "<br><b>Regular/Medium Bubble Tea price" + REG.toFixed(2) + "</b>"
	}
  else if(bobaSize == "LARGE"){		
		price = price + LARGE
    finalOrder = finalOrder + "<br><b>Large Bubble Tea price" + LARGE.toFixed(2) + "</b>"
	}
    	if (bobaSize == "BROWN_SUGAR") {
		price = price + SMALL;
    finalOrder = finalOrder + "<br><b>Small Bubble Tea price" + SMALL.toFixed(2) + "</b>"
	}
else if (bobaSize == "REG") {
		price = price + REG;
    finalOrder = finalOrder + "<br><b>Regular/Medium Bubble Tea price" + REG.toFixed(2) + "</b>"
	}
  else if(bobaSize == "LARGE"){		
		price = price + LARGE
    finalOrder = finalOrder + "<br><b>Large Bubble Tea price" + LARGE.toFixed(2) + "</b>"
	}
	else if ((age > 0) || (day != "")) {		
		cost = "You must pay regular admission."
	}
	
  	// display the greeting
  	document.getElementById('display-results').innerHTML = priceTaxed
}