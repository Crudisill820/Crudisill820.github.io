setInterval(changeImage, 10000);

function changeImage(){
	let pic1 = document.getElementById("one");
	let pic2 = document.getElementById("two");
	let pic3 = document.getElementById("three");
	let pic4 = document.getElementById("four");
	if(pic1.classList == "hidden" && pic2.classList =="hidden"
	&& pic3.classList == "hidden"){
		pic4.classList.add("hidden");
		pic1.classList.remove("hidden");
	}
	else if(pic1.classList == "hidden" && pic3.classList == "hidden"
	&& pic4.classList == "hidden"){
		pic2.classList.add("hidden");
		pic3.classList.remove("hidden");
	}	
	else if(pic1.classList == "hidden" && pic2.classList =="hidden"
	&& pic4.classList == "hidden"){
		pic3.classList.add("hidden");
		pic4.classList.remove("hidden");
	}
	else{
		pic1.classList.add("hidden");
		pic2.classList.remove("hidden");
	}
}

function showMore(){
	let textP = document.getElementById("part2");
	let myL = document.getElementById("extralink");
	
	if(myL.innerHTML=="Show More"){
	textP.classList.remove("hidden");
	myL.innerHTML="Show Less";
	}
	else{
	myL.innerHTML="Show More";
	textP.classList.add("hidden");
}
}
function showMore2(){
	let textP = document.getElementById("2part");
	let myL = document.getElementById("extralink2");
	
	if(myL.innerHTML=="Show More"){
	textP.classList.remove("hidden");
	myL.innerHTML="Show Less";
	}
	else{
	myL.innerHTML="Show More";
	textP.classList.add("hidden");
}
}

function showResults(){
	let one = document.getElementById("q1").value;
	let two = document.getElementById("q2").value;
	let three = document.getElementById("q3").value;
	let four = document.getElementById("q4").value;
	let five = document.getElementById("q5").value;
	let cone = document.getElementById("c1");
	let ctwo = document.getElementById("c2");
	let cthree = document.getElementById("c3");
	let cfour = document.getElementById("c4");
	let cfive = document.getElementById("c5");
	let score = document.getElementById("total");
	let grade = 0;
	
	if(one == "<p>"){

		cone.innerHTML= "Question 1 - Correct";
		grade ++;
		
	}
	else{
		cone.innerHTML="Question 1 - Incorrect";
	}

	if(two == "classes are reusable"){
		ctwo.innerHTML= "Question 2 - Correct";
		grade ++;
	}
	else{
		ctwo.innerHTML="Question 2 - Incorrect";
	}
	if(three == "display:flex"){
		cthree.innerHTML= "Question 3 - Correct";
		grade ++;
	}
	else{
		cthree.innerHTML="Question 3 - Incorrect";
	}
	if(four == "ul and ol"){
		cfour.innerHTML= "Question 4 - Correct";
		grade ++;
	}
	else{
		cfour.innerHTML="Question 4 - Incorrect";
	}
	if(five == "href"){
		cfive.innerHTML= "Question 5 - Correct";
		grade ++;
	}
	else{
		cfive.innerHTML="Question 5 - Incorrect";
	} 
	score.innerHTML = grade + "/5";
}
	
	
	
	
	
	