const adviceText = document.querySelector(".advice");
const adviceNumber = document.querySelector(".advice_number");
const generate = document.querySelector(".generate");

const getAdvice = async () => {
	try {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();
		advice = data.slip.advice;
		adviceNum = data.slip.id;

		adviceNumber.textContent = `advice #${adviceNum}`;
		adviceText.textContent = `"${advice}"`;
	} catch (e) {
		console.log("Error", e);
	}
};

getAdvice();

generate.onclick = () => {
	getAdvice();
};

// For some reason Firefox browser wont generate new advice onclick
