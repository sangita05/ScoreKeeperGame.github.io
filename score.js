var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var D1 = document.querySelector("#display1");
var D2 = document.querySelector("#display2");
var winningScoreDisplay = document.querySelector("h3 span");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");


var gameover = false;
var p1score = 0;
var p2score = 0;
var winnerscore = 5;

p1Button.addEventListener("click", function(){
	if (!gameover) {
		p1score++;
		D1.textContent = p1score;	

			if(p1score === winnerscore){
				D1.style.color = "green";
				// D1.classList.add("winner");
			gameover = true;
			}
		// D1.textContent = p1score;	
	}
	// console.log(p1score);
});
p2Button.addEventListener("click", function(){
	if (!gameover) {
		p2score++;
			if(p2score === winnerscore){
			// D2.classList.add("winner");
			D2.style.color = "green";
			gameover = true;
			}
		D2.textContent = p2score;	
	}
	// console.log(p1score);
});

resetButton.addEventListener("click", function(){
	reset();
});
function reset(){
	 p1score = 0;
	 p2score = 0;
	 D1.textContent = 0;
	 D2.textContent = 0;
	 D1.style.color = "black";
	 D2.style.color = "black";
	// D1.classList.remove("winner");
	// D2.classList.remove("winner");
	gameover = false;
}

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winnerscore = Number(this.value);
	reset();
});