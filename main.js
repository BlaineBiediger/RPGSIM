let i = 0;
let txt = "*You encountered a Ravenous Slimey Swingbat!";
let speed = 50;

///typeWriter adds the i-th letter of txt every speed milliseconds until the full phrase is typed out.
///speed is stacked if A is pressed in succession but later in development-
///-A will not be what sets off the function.
function typeWriter() {
	if (i < txt.length) {
		document.getElementById("textbox").innerHTML +=  txt.charAt (i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

///When A is pressed (temporary), delete what's currently in "textbox"-
///-and start the loop that types out txt, then set i back to zero.
document.addEventListener("keydown", function(event) {
	if (event.code == "KeyA") {
		document.getElementById("textbox").innerHTML = "";
		setTimeout(typeWriter, speed);
		i = 0;
		
	}
});