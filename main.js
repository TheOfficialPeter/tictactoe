var grid = [1,2,3,4,5,6,7,8,9]
var patterns = ["147", "258", "369", "123", "456", "789", "159", "357"];
var x = 0;
var y = 0;
var padding = 100;

window.onload = function() {
	for (var i = 0; i < grid.length; i++) {
		x += 1

		if (x == 4) {
			x = 1;
			y += 1;

			var gridElement = document.createElement("div");
			gridElement.style = "width: 50px; height: 50px; outline: 3px solid black; position: absolute";
			gridElement.style.left = (padding * x).toString() + "px";
			gridElement.style.top = (padding * y).toString() + "px";

			document.body.appendChild(gridElement);
		}
		else {
			var gridElement = document.createElement("div");
			gridElement.style = "width: 50px; height: 50px; outline: 3px solid black; position: absolute";
			gridElement.style.left = (padding * x).toString() + "px";
			gridElement.style.top = (padding * y).toString() + "px";

			document.body.appendChild(gridElement);
		}
	}
}