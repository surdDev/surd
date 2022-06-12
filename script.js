 function main() {
	const expires = 'Sun Jan 1 2700 0:0:0 GMT+0100'
	let username = getCookie('username')
	if (!username) {
		username = prompt("Enter Username");
		document.cookie = `username=${username}; expires=${expires}`
	}

	const number = prompt("Enter Number");

	let point = +getCookie('gamePoints')
	let level = +getCookie('gameLevel')

	const genNumber = generateNumber(1, (level === 0 ? 1 : level) + 1)
	console.log('correct number is', genNumber)

	if (+number === genNumber) {
		point++
		level++

		document.cookie = `gamePoints=${point + ""}; expires=${expires}`
		document.cookie = `gameLevel=${level + ""}; expires=${expires}`
		alert(`Congratulations. You are now in level ${level}`)
	} else {
		alert("Try again")
	}
}

function generateNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function getCookie(cname) {
	const name = cname + "=";
	const decodedCookie = decodeURIComponent(document.cookie);
	const ca = decodedCookie.split(';');

	for (let i = 0; i < ca.length; i++) {
		let c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}

	return "";
}

main()