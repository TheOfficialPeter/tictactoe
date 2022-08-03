var grid = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const patterns = ["147", "258", "369", "123", "456", "789", "159", "357"];
var x = 0;
var y = 0;
var padding = 50;
var clicks = 0;
var codeRed = "";
var codeBlue = "";

window.onload = function() {
	for (var i = 0; i < grid.length; i++) (function(i) {
		x += 1

		if (x == 4) {
			x = 1;
			y += 1;

			var gridElement = document.createElement("div");
			gridElement.id = (i + 1).toString();
			gridElement.style = "width: 50px; height: 50px; border: 3px solid black; position: absolute";
			gridElement.style.left = (padding * x).toString() + "px";
			gridElement.style.top = (padding * y).toString() + "px";

			document.body.appendChild(gridElement);
		}
		else {
			var gridElement = document.createElement("div");
			gridElement.id = (i + 1).toString();
			gridElement.style = "font-family: Arial; width: 50px; height: 50px; border: 3px solid black; position: absolute";
			gridElement.style.left = (padding * x).toString() + "px";
			gridElement.style.top = (padding * y).toString() + "px";

			document.body.appendChild(gridElement);
		}

		gridElement.onclick = function() {
			clicks += 1

			if (clicks == 2) {
				clicks = 0;
				gridElement.style.textAlign = "center";
				gridElement.innerText = "O";
				gridElement.style.color = "Blue";
				codeBlue += gridElement.id;
			}
			else {
				gridElement.style.textAlign = "center";
				gridElement.innerText = "X";
				gridElement.style.color = "Red";
				codeRed += gridElement.id;
			}
			//console.log(codeRed + " " + codeBlue)

			if (patterns.includes(codeRed)) {
				console.log("Red wins");
			}
			else if (patterns.includes(codeBlue)) {
				console.log("Blue wins");
			}
		}
	})(i);
}