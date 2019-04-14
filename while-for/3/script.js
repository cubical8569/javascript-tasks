"use strict";

while (1) {
	let num = prompt("Enter a number greather than 100");
	if (num === null || num === '' || Number(num) > 100) {
		break;
	}
}
