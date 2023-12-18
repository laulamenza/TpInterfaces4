"use stricts";

/********************************************************************
 * FUNCION QUE ARRANCA EL RELOJ
 * ***********
 */

function ArrancarReloj() {
	let deg = 6;
	let hr = document.getElementById("hr");
	let min = document.getElementById("min");
	let sec = document.getElementById("sec");

	setInterval(() => {
		let date = new Date();
		let hour = date.getHours() * 30;
		let minutes = date.getMinutes() * deg;
		let seconds = date.getSeconds() * deg;

		hr.style.transform = `rotateZ(${hour + minutes / 12}deg)`;
		min.style.transform = `rotateZ(${minutes}deg)`;
		sec.style.transform = `rotateZ(${seconds}deg)`;
	}, 500);
}

/**************************************************************
 * 	CARD
 *  ****
 */
let card = document.getElementById("card");
let bounds = card.getBoundingClientRect();
let centroX = bounds.width / 2;
let centroY = bounds.height / 2;

card.addEventListener("mousemove", (e) => {
	let mouseX = e.clientX;
	let mouseY = e.clientY;
	let leftX = mouseX - bounds.x;
	let topY = mouseY - bounds.y;

	let center = {
		x: leftX - centroX,
		y: topY - centroY,
	};

	let distance = Math.sqrt(center.x ** 2 + center.y ** 2);

	card.style.transform = `rotate3d(${center.y / 10}, ${
		center.x / 10
	}, 0, ${Math.sqrt(distance * 2)}deg)`;
});

function main() {
	ArrancarReloj();
}
