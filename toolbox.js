"use strict";

/*test
Author: Rosanna Morey
Date: July 3, 2018
*/
document.getElementById("button").addEventListener("click", processInput);

 var i = 1;
 var listItem = "";

function processInput() {
  	//for (var i = 1; i <= 5; i++) {
  						  									
	if (i <= 5) {
		document.getElementById("item" + i).innerHTML = document.getElementById("toolBox").value;

		//this should clear the box after each entry submitted
		document.getElementById("toolBox").innerHTML = "";

			/*by setting this equal to 5, the commnet should show up on the 5th entry
			in addition to populating the 5th item box*/
			if (i = 5) {
				document.getElementById("resultsFin").innerHTML = "Thank you for your suggestions."
			}

		//instructions said this is part of the first if statement
		i++;
		}
	}
//}


   //notes - straight if statement without the for loop yielded the same results
   //for loop created to see if diff approach - same result
   //the if statement contains all the loop items incl the i value, the condition
   //and the increment - commented out











