function submitData() {
	let name = document.getElementById('name').value;
	let age = parseInt(document.getElementById('age').value);
	let country = document.getElementById('country').value;
	let horsepower = parseInt(document.getElementById('horsepower').value);
	console.log(horsepower);
	let insur = '';

	switch (country) {
		case 'Austria':
			insur = Math.round(horsepower * 100 / age + 50);
			document.getElementById('result').style.display = 'block';
			document.getElementById('result').innerHTML =
				'<h2>' + name + ', your insurance costs ' + insur + ' &euro; </h2>';
			break;
		case 'Hungary':
			insur = Math.round(horsepower * 120 / age + 100);
			document.getElementById('result').style.display = 'block';
			document.getElementById('result').innerHTML =
				'<h2>' + name + ', your insurance costs ' + insur + ' &euro; </h2>';
			break;
		case 'Greece':
			insur = Math.round(horsepower * 150 / (age + 3) + 50);
			document.getElementById('result').style.display = 'block';
			document.getElementById('result').innerHTML =
				'<h2>' + name + ', your insurance costs ' + insur + ' &euro; </h2>';
			break;
		default:
			insur = 'Not Country choosen';
			document.getElementById('result').innerHTML = 'Please choose the country!';
	}
}

document.getElementById('calculate').addEventListener('click', submitData);
