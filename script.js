let fillDay = prompt("Fill day or day number(0-6)");
let dayNumber;
let dayName;

if (fillDay.length == 1) {
	dayNumber = parseInt(fillDay);
} else {
	dayName = fillDay.toLowerCase();
	console.log(dayName);
}
if ((dayNumber >= 0 && dayNumber <= 6) || dayName.endsWith("day")) {
	if (
		dayNumber == 0 ||
		dayNumber == 6 ||
		dayName == "sunday" ||
		dayName == "saturday"
	) {
		alert("It is the weekend!");
		console.log("It is the weekend!");
	} else {
		alert("It is the weekday!");
		console.log("It is the weekday!");
	}
} else {
	alert("Error! Invalid day or day number");
	console.log("Error! Invalid day or day number");
}
