document.getElementById('calculate').addEventListener("click", submitData);


function submitData() {
		name = document.getElementById('name').value;
		age = parseInt(document.getElementById('age').value);
		country = document.getElementById('select').value;
		select = document.getElementById('select').value;
		horsepower = parseInt(document.getElementById('horsepower').value);
		insur = "";

		result = document.getElementById('result');
		
		console.log(typeof(name), typeof(age), typeof(country), typeof(horsepower), typeof(insur)); 
		console.log(typeof(result));
		

		document.getElementById("result").style.display = "block";
		document.getElementById("result").innerHTML = "<h2>" + name + ", your insurance costs " + insur + " &euro; </h2>";
	}


document.write(submitData());


function calculateInsurance(){
	
		age = parseInt(document.getElementById('age').value);
		horsepower = parseInt(document.getElementById('horsepower').value);

		var insur = " ";

		switch (country) {
		   case 'Austria':
		       insur = Math.round((horsepower x 100) / age + 50);
		       break;
		   case 'Hungary':
		       insur = Math.round((horsepower x 120) / age + 100);
		       break;
		   case 'Greece':
		       insur = Math.round((horsepower x 150) / (age+3) + 50);
		       break;
		   default:
		       insur = "Not Country choosed";
		}

		return insur;	
		console.log(insur);
	}
