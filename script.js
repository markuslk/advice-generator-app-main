const adviceText = document.querySelector(".advice");
const adviceNumber = document.querySelector(".advice_number");
const generate = document.querySelector(".generate");

async function getAdvice() {
	const response = await fetch("https://api.adviceslip.com/advice");
	const data = await response.json();

	advice = data.slip.advice;
	adviceNum = data.slip.id;

	adviceNumber.textContent = `advice #${adviceNum}`;
	adviceText.textContent = `"${advice}"`;
}

getAdvice();

generate.onclick = () => {
	getAdvice();
};
